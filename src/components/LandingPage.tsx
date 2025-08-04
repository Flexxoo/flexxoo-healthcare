import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  CreditCard, 
  ChatCircle, 
  ChartBar, 
  FileText, 
  VideoCamera,
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  User,
  UsersThree
} from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import { submitDemoRequest, DemoRequest, sanitizeInput, isValidEmail, isValidPhone } from '@/lib/api'
import ProductDemo from './ProductDemo'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinicName: '',
    specialty: '',
    currentSystem: '',
    timeSlot: '',
    additionalNotes: ''
  })

  const [demoRequests, setDemoRequests] = useState<any[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate inputs
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error('Please fill in all required fields')
      return
    }
    
    if (!isValidEmail(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }
    
    if (formData.phone && !isValidPhone(formData.phone)) {
      toast.error('Please enter a valid phone number')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const sanitizedData: DemoRequest = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email).toLowerCase(),
        phone: sanitizeInput(formData.phone),
        clinicName: sanitizeInput(formData.clinicName),
        specialty: sanitizeInput(formData.specialty || ''),
        currentSystem: sanitizeInput(formData.currentSystem || ''),
        timeSlot: sanitizeInput(formData.timeSlot || ''),
        additionalNotes: sanitizeInput(formData.additionalNotes || '')
      }
      
      const result = await submitDemoRequest(sanitizedData)
      
      if (result.success) {
        toast.success('Demo request submitted! We\'ll contact you within 24 hours.')
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          clinicName: '',
          specialty: '',
          currentSystem: '',
          timeSlot: '',
          additionalNotes: ''
        })
        
        // Track conversion event (will be replaced with actual analytics)
        console.log('Conversion tracked:', result.id)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToDemo = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const features = [
    {
      icon: Heart,
      title: 'ABDM-Ready Digital Records',
      description: 'Fully compliant electronic health records with ABDM integration for seamless data sharing.'
    },
    {
      icon: CreditCard,
      title: 'Billing + Payments',
      description: 'Automated billing, insurance claims processing, and integrated payment gateway solutions.'
    },
    {
      icon: ChatCircle,
      title: 'Patient Reminders via WhatsApp',
      description: 'Automated appointment reminders and follow-ups through WhatsApp Business API.'
    },
    {
      icon: ChartBar,
      title: 'Clinic Dashboard',
      description: 'Real-time insights into appointments, revenue, patient flow, and staff performance.'
    },
    {
      icon: FileText,
      title: 'Analytics & Reports',
      description: 'Comprehensive reporting on practice performance, patient outcomes, and financial metrics.'
    },
    {
      icon: VideoCamera,
      title: 'Teleconsult Integration',
      description: 'Built-in video consultation platform with prescription and record management.'
    }
  ]

  const audiences = [
    {
      icon: User,
      title: 'Independent Doctors',
      description: 'Streamline your solo practice with automated workflows and patient management.',
      benefits: ['Quick setup', 'Affordable pricing', 'Mobile-first design']
    },
    {
      icon: Building,
      title: 'Small Clinics',
      description: 'Manage multiple doctors, staff scheduling, and patient flow efficiently.',
      benefits: ['Multi-user access', 'Appointment coordination', 'Revenue optimization']
    },
    {
      icon: UsersThree,
      title: 'Multi-Specialty Hospitals',
      description: 'Enterprise-grade solution for complex healthcare operations.',
      benefits: ['Department management', 'Advanced analytics', 'Custom integrations']
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Cardiologist, Heart Care Clinic Mumbai',
      content: 'Flexxoo completely revolutionized how we operate. Patient wait times dropped by 40%, our revenue jumped 25% in just 3 months, and most importantly - our patients are happier. The ABDM integration saved us countless hours of paperwork.',
      rating: 5,
      metric: '40% faster operations',
      patients: '2,500+ patients managed',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Orthopedic Surgeon, Apollo Hospitals',
      content: 'The WhatsApp automation alone saves my staff 2+ hours daily. The intelligent billing system caught revenue leaks we didn\'t even know existed. ROI was evident within the first month.',
      rating: 5,
      metric: '₹2.5L+ additional revenue/month',
      patients: '4,200+ active patients',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Dr. Anita Verma',
      role: 'Pediatrician & Clinic Owner, Bangalore',
      content: 'Finally, a platform built for Indian healthcare realities. From insurance claims to teleconsults, everything integrates seamlessly. My practice growth has been remarkable since switching to Flexxoo.',
      rating: 5,
      metric: '300% growth in teleconsults',
      patients: '1,800+ families served',
      image: 'https://theindianpractitioner.com/wp-content/uploads/2022/03/Gagandeep-Kang-286x300.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-lg z-50 border-b border-border">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold text-primary">Flexxoo</div>
          <Button onClick={scrollToDemo} size="sm" className="bg-accent hover:bg-accent/90 text-sm px-3 sm:px-4">
            Request Demo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:pt-24 sm:pb-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp} className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Transform Your{' '}
                  <span className="text-primary">Healthcare Practice</span>{' '}
                  with Flexxoo
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  The complete SaaS platform for doctors, clinics, and hospitals. 
                  Automate workflows, boost revenue, and deliver exceptional patient care.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button onClick={scrollToDemo} size="lg" className="bg-accent hover:bg-accent/90 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-auto">
                  Request Demo
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-auto" onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                }}>
                  View Features
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-accent flex-shrink-0" size={16} />
                  Free for first 50 clinics
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-accent flex-shrink-0" size={16} />
                  ABDM Compliant
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-accent flex-shrink-0" size={16} />
                  24/7 Support
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-12 px-4 bg-secondary sm:py-16">
        <div className="container mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Stop Losing Revenue to Manual Processes
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Healthcare practices lose thousands monthly due to inefficient workflows, 
              missed appointments, and billing errors. Flexxoo automates everything.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start md:items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-destructive">Common Problems:</h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'Manual appointment scheduling leads to double bookings',
                  'Paper records cause data loss and compliance issues',
                  'Delayed billing results in 30% revenue leakage',
                  'No patient engagement leads to missed appointments',
                  'Lack of insights prevents practice optimization'
                ].map((problem, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-sm sm:text-base">{problem}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6 mt-8 md:mt-0"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-accent">Flexxoo Solutions:</h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'Smart scheduling with conflict detection and optimization',
                  'ABDM-compliant digital records with cloud backup',
                  'Automated billing with 99% accuracy and faster payments',
                  'WhatsApp reminders reduce no-shows by 60%',
                  'Real-time analytics for data-driven decisions'
                ].map((solution, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-sm sm:text-base">{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-12 px-4 sm:py-16">
        <div className="container mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Everything You Need in One Platform
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive healthcare management tools designed specifically for Indian medical practices.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl w-fit">
                        <feature.icon size={24} className="text-primary" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold leading-tight">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-12 px-4 bg-secondary sm:py-16">
        <div className="container mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Built for Every Healthcare Provider
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're a solo practitioner or managing a multi-specialty hospital, 
              Flexxoo scales with your needs.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {audiences.map((audience, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="mb-6">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <audience.icon size={28} className="text-primary sm:w-8 sm:h-8" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-3">{audience.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {audience.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3">
                      {audience.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center justify-center gap-2">
                          <CheckCircle className="text-accent flex-shrink-0" size={16} />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Demo */}
      <ProductDemo />

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-br from-secondary/30 via-background to-accent/5 sm:py-20">
        <div className="container mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent font-medium px-4 py-2 rounded-full text-sm mb-4 sm:mb-6">
              <Star size={16} className="fill-current" />
              5-Star Rated Platform
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Join 3,000+ doctors who have transformed their practices with Flexxoo.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-card/80 backdrop-blur-sm overflow-hidden group">
                  <CardContent className="p-0">
                    {/* Rating and Quote */}
                    <div className="p-6 sm:p-8 pb-4 sm:pb-6">
                      <div className="flex gap-1 mb-4 sm:mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.1 * i, duration: 0.3 }}
                          >
                            <Star size={18} className="text-yellow-500 fill-current drop-shadow-sm sm:w-5 sm:h-5" />
                          </motion.div>
                        ))}
                      </div>
                      
                      <blockquote className="text-foreground mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg font-medium">
                        "{testimonial.content}"
                      </blockquote>
                      
                      {/* Metrics */}
                      <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <div className="flex items-center gap-2 bg-accent/10 px-3 py-2 rounded-lg">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-xs sm:text-sm font-medium text-accent">{testimonial.metric}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-xs sm:text-sm font-medium text-primary">{testimonial.patients}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Doctor Info */}
                    <div className="flex items-center gap-3 sm:gap-4 p-6 sm:p-8 pt-0 border-t border-border/50">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-primary/20 shadow-lg"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-accent rounded-full border-2 border-background flex items-center justify-center">
                          <CheckCircle size={10} className="text-white sm:w-3 sm:h-3" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-base sm:text-lg text-foreground truncate">{testimonial.name}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground leading-snug">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div 
            {...fadeInUp}
            className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
          >
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-primary">3,000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Active Doctors</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-accent">50,000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Patients Served</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-accent">₹10Cr+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Revenue Processed</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="demo-form" className="py-12 px-4 bg-gradient-to-br from-primary/5 to-accent/5 sm:py-16">
        <div className="container mx-auto max-w-2xl">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Get a personalized demo and see how Flexxoo can boost your revenue by 25%.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm sm:text-base">Full Name</Label>
                      <Input 
                        id="name"
                        placeholder="Dr. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm sm:text-base">Email Address</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="doctor@clinic.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number</Label>
                      <Input 
                        id="phone"
                        placeholder="+91 6362665904"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clinic-name" className="text-sm sm:text-base">Clinic/Hospital Name</Label>
                      <Input 
                        id="clinic-name"
                        placeholder="Your Practice Name"
                        value={formData.clinicName}
                        onChange={(e) => setFormData(prev => ({ ...prev, clinicName: e.target.value }))}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-base sm:text-lg h-12 sm:h-auto">
                    Request Free Demo
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                  
                  <p className="text-xs sm:text-sm text-center text-muted-foreground">
                    No spam, unsubscribe at any time. Free demo includes personalized setup.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Flexxoo</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Revolutionizing healthcare through innovative technology solutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      window.history.pushState(null, '', '/contact')
                      window.dispatchEvent(new PopStateEvent('popstate'))
                    }}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">About</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Careers</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      window.history.pushState(null, '', '/privacy')
                      window.dispatchEvent(new PopStateEvent('popstate'))
                    }}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      window.history.pushState(null, '', '/terms')
                      window.dispatchEvent(new PopStateEvent('popstate'))
                    }}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Security</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Help Center</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Documentation</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Community</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-gray-400 text-sm">
              © 2025 Flexxoo Healthcare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-accent text-accent-foreground p-3 sm:p-4 shadow-lg z-40 border-t">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <div className="text-xs sm:text-sm font-medium text-center sm:text-left">
            🎉 Limited Time: Free for First 50 Clinics
          </div>
          <Button 
            onClick={scrollToDemo} 
            variant="secondary" 
            size="sm" 
            className="bg-white text-accent hover:bg-white/90 text-xs sm:text-sm px-4 py-2 whitespace-nowrap"
          >
            Get Started Now
          </Button>
        </div>
      </div>

      {/* Spacer for sticky footer */}
      <div className="h-16 sm:h-20"></div>
    </div>
  )
}
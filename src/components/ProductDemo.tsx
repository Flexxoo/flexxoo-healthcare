import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  Pause, 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  CreditCard, 
  ChatCircle, 
  ChartBar,
  User,
  CheckCircle,
  Clock,
  Phone,
  Bell
} from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const demoSteps = [
  {
    id: 'dashboard',
    title: 'Smart Dashboard Overview',
    description: 'Real-time insights into your practice performance',
    icon: ChartBar,
    duration: 4000,
    content: (
      <div className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border"
          >
            <div className="text-xl sm:text-2xl font-bold text-blue-600">₹1,24,500</div>
            <div className="text-xs sm:text-sm text-gray-600">Today's Revenue</div>
            <div className="text-xs text-green-600 mt-1">+15% vs yesterday</div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border"
          >
            <div className="text-xl sm:text-2xl font-bold text-green-600">28</div>
            <div className="text-xs sm:text-sm text-gray-600">Appointments</div>
            <div className="text-xs text-blue-600 mt-1">3 pending</div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border"
          >
            <div className="text-xl sm:text-2xl font-bold text-purple-600">92%</div>
            <div className="text-xs sm:text-sm text-gray-600">Patient Satisfaction</div>
            <div className="text-xs text-green-600 mt-1">+2% this week</div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white p-3 sm:p-4 rounded-lg border"
        >
          <h4 className="font-semibold mb-3 text-sm sm:text-base">Recent Activity</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span>Dr. Sharma completed consultation</span>
              <span className="text-gray-500">2 min ago</span>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span>Payment received from Rajesh K.</span>
              <span className="text-gray-500">5 min ago</span>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span>New appointment booked</span>
              <span className="text-gray-500">8 min ago</span>
            </div>
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'appointments',
    title: 'Smart Appointment Scheduling',
    description: 'Conflict-free scheduling with automated reminders',
    icon: Calendar,
    duration: 4500,
    content: (
      <div className="space-y-3 sm:space-y-4">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-3 sm:p-4 rounded-lg border"
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-sm sm:text-base">Today's Schedule</h4>
            <Badge variant="outline" className="text-xs">28 appointments</Badge>
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-blue-50 rounded-lg"
            >
              <Clock size={14} className="text-blue-600 sm:w-4 sm:h-4" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm sm:text-base truncate">Priya Sharma</div>
                <div className="text-xs sm:text-sm text-gray-600">General Checkup</div>
              </div>
              <div className="text-right">
                <div className="text-xs sm:text-sm font-medium">10:30 AM</div>
                <Badge className="bg-green-100 text-green-700 text-xs">Confirmed</Badge>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-yellow-50 rounded-lg"
            >
              <Bell size={14} className="text-yellow-600 sm:w-4 sm:h-4" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm sm:text-base truncate">Rajesh Kumar</div>
                <div className="text-xs sm:text-sm text-gray-600">Follow-up Visit</div>
              </div>
              <div className="text-right">
                <div className="text-xs sm:text-sm font-medium">11:15 AM</div>
                <Badge className="bg-yellow-100 text-yellow-700 text-xs">Reminder Sent</Badge>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg"
            >
              <User size={14} className="text-gray-600 sm:w-4 sm:h-4" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm sm:text-base truncate">Anita Verma</div>
                <div className="text-xs sm:text-sm text-gray-600">Consultation</div>
              </div>
              <div className="text-right">
                <div className="text-xs sm:text-sm font-medium">2:00 PM</div>
                <Badge className="bg-gray-100 text-gray-700 text-xs">Scheduled</Badge>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="bg-green-50 p-3 rounded-lg border border-green-200"
        >
          <div className="flex items-center gap-2 text-green-700">
            <CheckCircle size={16} />
            <span className="text-xs sm:text-sm font-medium">Auto-reminder sent to 5 patients via WhatsApp</span>
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'billing',
    title: 'Automated Billing & Payments',
    description: 'Generate bills instantly with integrated payment processing',
    icon: CreditCard,
    duration: 4000,
    content: (
      <div className="space-y-3 sm:space-y-4">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-3 sm:p-4 rounded-lg border"
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-sm sm:text-base">Invoice #INV-2024-001</h4>
            <Badge className="bg-blue-100 text-blue-700 text-xs">Paid</Badge>
          </div>
          
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="flex justify-between">
              <span>Patient: Priya Sharma</span>
              <span>Date: Today</span>
            </div>
            <div className="flex justify-between">
              <span>Consultation Fee</span>
              <span>₹800</span>
            </div>
            <div className="flex justify-between">
              <span>Diagnostic Tests</span>
              <span>₹1,200</span>
            </div>
            <div className="flex justify-between">
              <span>Medicines</span>
              <span>₹350</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold">
              <span>Total Amount</span>
              <span>₹2,350</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 gap-2 sm:gap-3"
        >
          <div className="bg-green-50 p-2 sm:p-3 rounded-lg text-center">
            <div className="text-base sm:text-lg font-bold text-green-600">₹45,680</div>
            <div className="text-xs sm:text-sm text-green-700">Today's Collections</div>
          </div>
          <div className="bg-blue-50 p-2 sm:p-3 rounded-lg text-center">
            <div className="text-base sm:text-lg font-bold text-blue-600">₹8,920</div>
            <div className="text-xs sm:text-sm text-blue-700">Pending Payments</div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-blue-50 p-3 rounded-lg border border-blue-200"
        >
          <div className="flex items-center gap-2 text-blue-700">
            <CheckCircle size={16} />
            <span className="text-xs sm:text-sm font-medium">Payment link sent via SMS & WhatsApp</span>
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Patient Engagement',
    description: 'Automated reminders and follow-ups via WhatsApp',
    icon: ChatCircle,
    duration: 4500,
    content: (
      <div className="space-y-3 sm:space-y-4">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-3 sm:p-4 rounded-lg border"
        >
          <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
            <Phone size={14} className="sm:w-4 sm:h-4" />
            Message Templates
          </h4>
          
          <div className="space-y-2 sm:space-y-3">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-green-50 p-2 sm:p-3 rounded-lg"
            >
              <div className="text-xs sm:text-sm font-medium text-green-700 mb-1">Appointment Reminder</div>
              <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                "Hi Priya, this is a reminder for your appointment tomorrow at 10:30 AM with Dr. Sharma. Please reply CONFIRM or call us."
              </div>
              <div className="text-xs text-green-600 mt-2">✓ Sent to 15 patients today</div>
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-blue-50 p-2 sm:p-3 rounded-lg"
            >
              <div className="text-xs sm:text-sm font-medium text-blue-700 mb-1">Payment Reminder</div>
              <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                "Dear Rajesh, your payment of ₹2,350 is pending. Pay easily via this link: [payment-link]"
              </div>
              <div className="text-xs text-blue-600 mt-2">⏰ Scheduled for tomorrow</div>
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-purple-50 p-2 sm:p-3 rounded-lg"
            >
              <div className="text-xs sm:text-sm font-medium text-purple-700 mb-1">Follow-up Care</div>
              <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                "Hello! How are you feeling after yesterday's treatment? Please share any concerns."
              </div>
              <div className="text-xs text-purple-600 mt-2">📋 Auto-sent after consultation</div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="bg-green-50 p-3 rounded-lg border border-green-200"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle size={16} />
              <span className="text-xs sm:text-sm font-medium">60% reduction in no-shows</span>
            </div>
            <Badge className="bg-green-100 text-green-700 text-xs w-fit">Active</Badge>
          </div>
        </motion.div>
      </div>
    )
  }
]

export default function ProductDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 100
        if (newProgress >= demoSteps[currentStep].duration) {
          // Move to next step
          setCurrentStep(prevStep => {
            const nextStep = prevStep + 1
            if (nextStep >= demoSteps.length) {
              setIsPlaying(false)
              return 0 // Reset to first step
            }
            return nextStep
          })
          return 0
        }
        return newProgress
      })
    }, 100)

    return () => clearInterval(interval)
  }, [isPlaying, currentStep])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying && progress === 0) {
      setProgress(0)
    }
  }

  const handleStepChange = (step: number) => {
    setCurrentStep(step)
    setProgress(0)
    setIsPlaying(false)
  }

  const handlePrevious = () => {
    setCurrentStep(prev => prev > 0 ? prev - 1 : demoSteps.length - 1)
    setProgress(0)
    setIsPlaying(false)
  }

  const handleNext = () => {
    setCurrentStep(prev => prev < demoSteps.length - 1 ? prev + 1 : 0)
    setProgress(0)
    setIsPlaying(false)
  }

  const progressPercentage = (progress / demoSteps[currentStep].duration) * 100

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-primary/5 to-accent/10 sm:py-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            See Flexxoo in Action
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Take an interactive tour of our platform and discover how Flexxoo transforms 
            healthcare practice management.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Demo Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3 sm:space-y-4 lg:order-first order-last"
          >
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Button
                onClick={handlePlayPause}
                size="sm"
                className="bg-accent hover:bg-accent/90 w-full sm:w-auto"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                <span className="ml-2">{isPlaying ? 'Pause' : 'Play'} Demo</span>
              </Button>
              
              <div className="flex gap-2 w-full sm:w-auto">
                <Button onClick={handlePrevious} variant="outline" size="sm" className="flex-1 sm:flex-none">
                  <ArrowLeft size={16} />
                  <span className="ml-1 sm:hidden">Previous</span>
                </Button>
                <Button onClick={handleNext} variant="outline" size="sm" className="flex-1 sm:flex-none">
                  <ArrowRight size={16} />
                  <span className="ml-1 sm:hidden">Next</span>
                </Button>
              </div>
            </div>

            {demoSteps.map((step, index) => {
              const StepIcon = step.icon
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all duration-300 ${
                      currentStep === index 
                        ? 'border-primary shadow-lg bg-primary/5' 
                        : 'hover:shadow-md border-border'
                    }`}
                    onClick={() => handleStepChange(index)}
                  >
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className={`p-2 rounded-lg ${
                          currentStep === index 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          <StepIcon size={18} className="sm:w-5 sm:h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold mb-1 text-sm sm:text-base leading-tight">{step.title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                          {currentStep === index && (
                            <div className="mt-2 sm:mt-3">
                              <div className="w-full bg-muted rounded-full h-1">
                                <div 
                                  className="bg-primary h-1 rounded-full transition-all duration-100"
                                  style={{ width: `${progressPercentage}%` }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Demo Screen */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-accent p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-white">
                  <h3 className="text-lg sm:text-xl font-semibold">{demoSteps[currentStep].title}</h3>
                  <p className="text-white/80 text-sm">{demoSteps[currentStep].description}</p>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6 bg-gray-50 min-h-[300px] sm:min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {demoSteps[currentStep].content}
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Demo Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-4 text-sm text-muted-foreground">
              <span>Step {currentStep + 1} of {demoSteps.length}</span>
              <span>
                {isPlaying ? 'Playing...' : 'Paused'} • 
                {Math.ceil((demoSteps[currentStep].duration - progress) / 1000)}s remaining
              </span>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-12"
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Ready to Experience Flexxoo Live?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
                This demo shows just a glimpse of what Flexxoo can do. 
                Get a personalized demonstration with your own clinic data.
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 w-full sm:w-auto"
                onClick={() => {
                  document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Book Your Personal Demo
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-lg z-50 border-b border-border">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold text-primary">Flexxoo</div>
          <Button 
            onClick={() => {
              window.history.pushState(null, '', '/')
              window.dispatchEvent(new PopStateEvent('popstate'))
            }}
            variant="ghost"
            size="sm" 
            className="text-sm px-3 sm:px-4"
          >
            Back to Home
          </Button>
        </div>
      </nav>

      <motion.div 
        {...fadeInUp}
        className="pt-20 pb-12 px-4 sm:pt-24 sm:pb-16"
      >
        <div className="container mx-auto max-w-4xl">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Privacy Policy</h1>
              <p className="text-sm text-muted-foreground mb-6 sm:mb-8">
                Last updated: {new Date().toLocaleDateString('en-IN')}
              </p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
                  <p className="text-muted-foreground">
                    Flexxoo Healthcare Solutions ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                    you visit our website and use our healthcare practice management platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
                  <div className="space-y-3">
                    <h3 className="font-medium">Personal Information</h3>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Name and contact information (email, phone number)</li>
                      <li>Professional information (clinic/hospital name, medical specialty)</li>
                      <li>Demo request details and preferences</li>
                    </ul>
                    
                    <h3 className="font-medium">Automatically Collected Information</h3>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>IP address and browser information</li>
                      <li>Website usage data and analytics</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>To provide and improve our healthcare management services</li>
                    <li>To respond to demo requests and customer inquiries</li>
                    <li>To send relevant product updates and healthcare industry insights</li>
                    <li>To ensure ABDM compliance and regulatory requirements</li>
                    <li>To analyze website usage and improve user experience</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">4. Healthcare Data Protection</h2>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Important:</strong> Flexxoo is designed to be ABDM (Ayushman Bharat Digital Mission) 
                      compliant. We implement industry-standard encryption, access controls, and audit trails 
                      to protect sensitive healthcare information in accordance with Indian healthcare data protection regulations.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">5. Information Sharing and Disclosure</h2>
                  <p className="text-muted-foreground mb-3">
                    We do not sell, trade, or rent your personal information. We may share information in these circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations or court orders</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With trusted service providers under strict confidentiality agreements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">6. Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational security measures including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>End-to-end encryption for data transmission</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Access controls and user authentication</li>
                    <li>Secure cloud infrastructure with backup and disaster recovery</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">7. Your Rights</h2>
                  <p className="text-muted-foreground mb-3">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Access and review your personal information</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Data portability (export your data)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">8. Cookies and Tracking</h2>
                  <p className="text-muted-foreground">
                    We use cookies and similar technologies to enhance your experience, analyze website traffic, 
                    and improve our services. You can control cookie preferences through your browser settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">9. Third-Party Services</h2>
                  <p className="text-muted-foreground">
                    Our website may contain links to third-party services. We are not responsible for the 
                    privacy practices of these external sites. We encourage you to review their privacy policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">10. Updates to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy to reflect changes in our practices or legal requirements. 
                    We will notify you of significant changes via email or website notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">11. Contact Information</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium mb-2">Flexxoo Healthcare Solutions</p>
                    <p className="text-sm text-muted-foreground">
                      Email: admin@flexxoo.com<br />
                      Phone: +91 6362665904<br />
                      Address: 27-620, Ramnagar Colony, Chittoor - 517001<br />
                      Data Protection Officer: dpo@flexxoo.com
                    </p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}

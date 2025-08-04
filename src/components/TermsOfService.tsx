import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function TermsOfService() {
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
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Terms of Service</h1>
              <p className="text-sm text-muted-foreground mb-6 sm:mb-8">
                Last updated: {new Date().toLocaleDateString('en-IN')}
              </p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using Flexxoo healthcare practice management platform ("Service"), 
                    you accept and agree to be bound by the terms and provision of this agreement. 
                    If you do not agree to abide by these Terms of Service, do not use this Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">2. Service Description</h2>
                  <p className="text-muted-foreground">
                    Flexxoo provides a comprehensive healthcare practice management platform including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>ABDM-compliant digital health records management</li>
                    <li>Automated billing and payment processing</li>
                    <li>Patient engagement through WhatsApp integration</li>
                    <li>Teleconsultation capabilities</li>
                    <li>Analytics and reporting tools</li>
                    <li>Practice management workflows</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">3. Medical Disclaimers</h2>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h3 className="font-medium text-yellow-800 mb-2">Important Medical Disclaimers:</h3>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-yellow-700">
                      <li><strong>Not Medical Advice:</strong> Flexxoo is a practice management tool and does not provide medical advice, diagnosis, or treatment recommendations.</li>
                      <li><strong>Professional Responsibility:</strong> Healthcare providers remain solely responsible for all medical decisions and patient care.</li>
                      <li><strong>Compliance Responsibility:</strong> Users must ensure their use of Flexxoo complies with local medical regulations and standards.</li>
                      <li><strong>Results May Vary:</strong> Performance improvements (revenue increase, efficiency gains) are estimates based on case studies and may vary by practice.</li>
                      <li><strong>No Emergency Service:</strong> Flexxoo is not designed for emergency medical situations. Always use appropriate emergency services for urgent medical care.</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">4. User Responsibilities</h2>
                  <p className="text-muted-foreground mb-3">As a user of Flexxoo, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Provide accurate and complete information during registration</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use the Service in compliance with applicable laws and regulations</li>
                    <li>Respect patient privacy and confidentiality requirements</li>
                    <li>Not use the Service for any unlawful or prohibited purposes</li>
                    <li>Maintain appropriate medical licenses and certifications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">5. ABDM Compliance and Data Protection</h2>
                  <p className="text-muted-foreground">
                    Flexxoo is designed to support ABDM (Ayushman Bharat Digital Mission) compliance. 
                    However, users are responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Ensuring proper patient consent for digital health records</li>
                    <li>Maintaining data accuracy and completeness</li>
                    <li>Following ABDM guidelines for health data sharing</li>
                    <li>Implementing appropriate access controls in their practice</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">6. Payment Terms</h2>
                  <div className="space-y-3">
                    <h3 className="font-medium">Free Trial</h3>
                    <p className="text-muted-foreground text-sm">
                      We offer free access for the first 50 clinics as part of our launch promotion. 
                      This offer is subject to terms and may be modified or discontinued.
                    </p>
                    
                    <h3 className="font-medium">Paid Plans</h3>
                    <p className="text-muted-foreground text-sm">
                      Subscription fees are billed in advance and are non-refundable except as required by law. 
                      We reserve the right to modify pricing with 30 days' notice.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">7. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    The Service and its original content, features, and functionality are owned by 
                    Flexxoo Healthcare Solutions and are protected by international copyright, 
                    trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <p className="text-sm text-red-700">
                      <strong>Important:</strong> In no event shall Flexxoo Healthcare Solutions be liable for any 
                      indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                      loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">9. Service Availability</h2>
                  <p className="text-muted-foreground">
                    We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service. 
                    We may perform maintenance that temporarily affects availability, with advance notice when possible.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">10. Termination</h2>
                  <p className="text-muted-foreground">
                    We may terminate or suspend your account and access to the Service at our sole discretion, 
                    without prior notice, for conduct that violates these Terms or is harmful to other users, 
                    us, or third parties.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">11. Governing Law</h2>
                  <p className="text-muted-foreground">
                    These Terms shall be interpreted and governed by the laws of India. 
                    Any disputes shall be subject to the exclusive jurisdiction of courts in [Your City], India.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">12. Contact Information</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium mb-2">Flexxoo Healthcare Solutions</p>
                    <p className="text-sm text-muted-foreground">
                      Email: legal@flexxoo.com<br />
                      Support: support@flexxoo.com<br />
                      Phone: +91-XXX-XXX-XXXX<br />
                      Address: [Your Business Address]
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">13. Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these terms at any time. We will notify users of 
                    significant changes via email or through the Service. Continued use after changes 
                    constitutes acceptance of the new terms.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}

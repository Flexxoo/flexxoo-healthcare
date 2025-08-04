// API utilities for form submissions and external integrations
import emailjs from '@emailjs/browser';

// EmailJS Configuration - using environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_flexxoo';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_flexxoo';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_HERE';

export interface DemoRequest {
  name: string
  email: string
  phone: string
  clinicName: string
  specialty: string
  currentSystem: string
  timeSlot: string
  additionalNotes?: string
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

// Initialize EmailJS
if (typeof window !== 'undefined') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

// Submit demo request via EmailJS
export async function submitDemoRequest(data: DemoRequest) {
  try {
    const templateParams = {
      to_email: 'admin@flexxoo.com',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      clinic_name: data.clinicName,
      specialty: data.specialty || 'Not specified',
      current_system: data.currentSystem || 'Not specified',
      time_slot: data.timeSlot || 'Not specified',
      additional_notes: data.additionalNotes || 'None',
      form_type: 'Demo Request',
      subject: `New Demo Request from ${data.name} - ${data.clinicName}`,
      message: `
New Demo Request Submitted

Contact Information:
• Name: ${data.name}
• Email: ${data.email}
• Phone: ${data.phone}
• Clinic/Hospital: ${data.clinicName}

Details:
• Specialty: ${data.specialty || 'Not specified'}
• Current System: ${data.currentSystem || 'Not specified'}
• Preferred Time Slot: ${data.timeSlot || 'Not specified'}

Additional Notes:
${data.additionalNotes || 'None provided'}

Please contact them within 24 hours as promised on the website.
      `.trim()
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (result.status === 200) {
      // Also store locally as backup
      const timestamp = new Date().toISOString()
      const requestWithTimestamp = { ...data, timestamp, id: Date.now() }
      
      if (typeof window !== 'undefined') {
        const existingRequests = JSON.parse(localStorage.getItem('demoRequests') || '[]')
        existingRequests.push(requestWithTimestamp)
        localStorage.setItem('demoRequests', JSON.stringify(existingRequests))
      }

      return { success: true, id: requestWithTimestamp.id }
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    // Fallback to local storage if EmailJS fails
    const timestamp = new Date().toISOString()
    const requestWithTimestamp = { ...data, timestamp, id: Date.now() }
    
    if (typeof window !== 'undefined') {
      const existingRequests = JSON.parse(localStorage.getItem('demoRequests') || '[]')
      existingRequests.push(requestWithTimestamp)
      localStorage.setItem('demoRequests', JSON.stringify(existingRequests))
    }
    
    throw new Error('Failed to submit demo request. Please try again or contact us directly.');
  }
}

// Submit contact form via EmailJS
export async function submitContactForm(data: ContactForm) {
  try {
    const templateParams = {
      to_email: 'admin@flexxoo.com',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Not provided',
      subject: data.subject,
      form_type: 'Contact Form',
      message: data.message
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (result.status === 200) {
      // Also store locally as backup
      const timestamp = new Date().toISOString()
      const messageWithTimestamp = { ...data, timestamp, id: Date.now() }
      
      if (typeof window !== 'undefined') {
        const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]')
        existingMessages.push(messageWithTimestamp)
        localStorage.setItem('contactMessages', JSON.stringify(existingMessages))
      }

      return { success: true, id: messageWithTimestamp.id }
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    // Fallback to local storage if EmailJS fails
    const timestamp = new Date().toISOString()
    const messageWithTimestamp = { ...data, timestamp, id: Date.now() }
    
    if (typeof window !== 'undefined') {
      const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]')
      existingMessages.push(messageWithTimestamp)
      localStorage.setItem('contactMessages', JSON.stringify(existingMessages))
    }
    
    throw new Error('Failed to send message. Please try again or contact us directly.');
  }
}

// Email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Phone validation (Indian format)
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[+]?[0-9]{10,13}$/
  return phoneRegex.test(phone.replace(/[\s-()]/g, ''))
}

// Sanitize input to prevent XSS
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim()
    .slice(0, 1000) // Limit length
}

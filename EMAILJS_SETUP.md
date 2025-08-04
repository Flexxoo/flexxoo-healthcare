# EmailJS Setup Guide for Flexxoo Healthcare

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up with admin@flexxoo.com
3. Verify your email

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or your preferred email provider
4. Connect admin@flexxoo.com
5. Copy the **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" 
2. Click "Create New Template"
3. Use this template:

```
Subject: New Demo Request - {{clinic_name}}

Hello Flexxoo Team,

You have received a new demo request:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Clinic/Hospital: {{clinic_name}}
Specialty: {{specialty}}
Current System: {{current_system}}
Preferred Time: {{time_slot}}
Additional Notes: {{additional_notes}}

Please contact them within 24 hours.

Best regards,
Flexxoo Healthcare Platform
```

4. Save and copy the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Environment Variables
Add these to your deployment platform:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Test
1. Deploy the site
2. Fill out the demo form
3. Check admin@flexxoo.com for emails

---

**Free Tier Limits:**
- 200 emails/month
- EmailJS branding
- 2 email services

For higher volume, upgrade to paid plan.

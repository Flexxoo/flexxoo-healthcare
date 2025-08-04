# Netlify Deployment Guide for Flexxoo Healthcare

## Quick Deploy Steps

### Option 1: Connect GitHub Repository (Recommended)
1. Go to https://app.netlify.com/
2. Click "New site from Git"
3. Connect your GitHub account
4. Select repository: **Flexxoo/flexxoo-healthcare**
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`
6. Click "Deploy site"

### Option 2: Manual Deploy
1. Upload the `dist` folder to Netlify
2. Drag and drop to https://app.netlify.com/drop

## Environment Variables Setup
In Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add these variables:
```
VITE_EMAILJS_SERVICE_ID = your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID = your_emailjs_template_id  
VITE_EMAILJS_PUBLIC_KEY = your_emailjs_public_key
```

## Custom Domain Setup (www.flexxoo.com)
1. In Netlify dashboard: Domain settings → Custom domains
2. Add domain: `flexxoo.com` and `www.flexxoo.com`
3. Configure DNS at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5 (Netlify's load balancer)
   ```
4. Enable HTTPS (automatic with Netlify)

## Form Handling
Forms are automatically handled by Netlify Forms.
Check submissions in: Site dashboard → Forms

## Build Status
✅ Repository: https://github.com/Flexxoo/flexxoo-healthcare
✅ Production build ready
✅ Netlify configuration complete
⏳ EmailJS setup required
⏳ Domain connection required

## Post-Deploy Checklist
- [ ] Test contact forms
- [ ] Verify mobile responsiveness  
- [ ] Check page load speed
- [ ] Test all navigation links
- [ ] Verify EmailJS integration
- [ ] Set up Google Analytics (optional)

## Support
For deployment issues, contact: admin@flexxoo.com

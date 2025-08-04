# Analytics and Tracking Implementation

## Google Analytics 4 Setup

### 1. Add GA4 Tracking Code
Add to `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Enhanced Ecommerce Events
Track conversion funnel:
- Page views
- Demo form views
- Demo form submissions
- Contact form submissions
- CTA clicks

### 3. Custom Events Implementation
```javascript
// Track demo requests
gtag('event', 'generate_lead', {
  currency: 'INR',
  value: 50000, // Estimated lead value
  event_category: 'Healthcare',
  event_label: 'Demo Request'
});

// Track contact form
gtag('event', 'contact', {
  event_category: 'Support',
  event_label: 'Contact Form'
});
```

## Facebook Pixel

### Setup Code
```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### Custom Events
```javascript
// Track demo requests
fbq('track', 'Lead', {
  value: 50000,
  currency: 'INR',
  content_category: 'Healthcare Software'
});

// Track contact
fbq('track', 'Contact');
```

## LinkedIn Insight Tag

### Setup
```html
<script type="text/javascript">
_linkedin_partner_id = "PARTNER_ID";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script>
```

## Hotjar Heatmaps

### Installation
```html
<script>
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:HOTJAR_ID,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

## Microsoft Clarity

### Setup Code
```html
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "CLARITY_ID");
</script>
```

## UTM Parameter Tracking

### URL Structure
```
https://flexxoo.healthcare/?utm_source=google&utm_medium=cpc&utm_campaign=healthcare_demo&utm_content=header_cta
```

### Implementation
```javascript
// Extract UTM parameters
function getUTMParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    source: urlParams.get('utm_source'),
    medium: urlParams.get('utm_medium'),
    campaign: urlParams.get('utm_campaign'),
    content: urlParams.get('utm_content'),
    term: urlParams.get('utm_term')
  };
}

// Include in form submissions
const utmData = getUTMParams();
```

## Privacy Compliance

### Cookie Consent Banner
```javascript
// Simple cookie consent
if (!localStorage.getItem('cookieConsent')) {
  // Show consent banner
  showCookieConsent();
}

function acceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted');
  // Initialize tracking scripts
  initializeTracking();
}
```

### GDPR Compliance
- Cookie consent mechanism
- Data retention policies
- User data deletion rights
- Privacy policy updates

## Key Metrics to Track

### Conversion Funnel
1. Landing page views
2. Form interactions
3. Form submissions
4. Demo completions
5. Customer acquisitions

### Engagement Metrics
- Time on page
- Scroll depth
- Click-through rates
- Form abandonment rates

### Technical Metrics
- Page load times
- Mobile vs desktop usage
- Browser compatibility
- Error rates

## Implementation Priority

### Phase 1 (Immediate)
1. Google Analytics 4
2. Facebook Pixel
3. Basic conversion tracking

### Phase 2 (Week 1)
1. Hotjar heatmaps
2. UTM parameter tracking
3. Enhanced ecommerce events

### Phase 3 (Week 2)
1. LinkedIn Insight Tag
2. Microsoft Clarity
3. Advanced segmentation

### Phase 4 (Month 1)
1. Custom dashboards
2. A/B testing setup
3. Advanced attribution modeling

## Estimated Costs (Monthly)

- Google Analytics 4: Free
- Facebook Pixel: Free
- Hotjar: $39/month (Growth plan)
- Microsoft Clarity: Free
- LinkedIn Insight Tag: Free

**Total: ~$39/month**

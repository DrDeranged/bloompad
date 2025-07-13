# Bloompad Deployment Checklist for Vercel

## ✅ Pre-Deployment Setup

### 1. Project Configuration
- [x] Updated `vercel.json` with correct build settings
- [x] Configured rewrites for React routing (SPA)
- [x] Added security headers
- [x] Set proper output directory: `dist/public`
- [x] Updated meta tags for bloompad.xyz domain

### 2. Build & Environment Setup
- [x] Build command: `npm run build`
- [x] Install command: `npm install`
- [x] Output directory: `dist/public`
- [x] Node.js version: Latest LTS (auto-detected)

### 3. Environment Variables Required
Add these in Vercel dashboard under Settings > Environment Variables:

```
OPENAI_API_KEY=your_openai_api_key_here
NODE_ENV=production
```

### 4. SEO & Social Media Assets
- [x] Updated all meta tags for bloompad.xyz
- [x] Created favicon.svg for modern browsers
- [x] Created og-image.svg for social media previews
- [x] Added proper structured data and keywords

## 🚀 Deployment Steps

### Step 1: Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Import project with these settings:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

### Step 2: Configure Environment Variables
1. Go to Vercel Dashboard > Your Project > Settings > Environment Variables
2. Add: `OPENAI_API_KEY` with your OpenAI API key
3. Add: `NODE_ENV` with value `production`

### Step 3: Custom Domain Setup (bloompad.xyz)
1. **In Vercel Dashboard**:
   - Go to Settings > Domains
   - Add domain: `bloompad.xyz`
   - Add domain: `www.bloompad.xyz`
   - Set `bloompad.xyz` as Primary Domain

2. **DNS Configuration**:
   Add these records in your domain registrar:
   
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **SSL Certificate**:
   - Vercel will automatically provision SSL certificates
   - Wait for DNS propagation (up to 24 hours)

## 🔧 Post-Deployment Verification

### Test Navigation & Routing
- [ ] Homepage loads at https://bloompad.xyz
- [ ] All internal links work correctly
- [ ] Browser refresh works on all pages (no 404s)
- [ ] Back/forward navigation works properly

### Test Demo Flow
- [ ] "Start Demo" button works
- [ ] All 6 demo steps navigate smoothly
- [ ] Smooth scrolling to target sections
- [ ] Progress indicators update correctly
- [ ] "Complete Demo" functionality works

### Test Core Features
- [ ] Token marketplace displays correctly
- [ ] Token images load properly
- [ ] BloomBot chat widget functions
- [ ] Token creation form works
- [ ] Wallet connection simulation works
- [ ] Token-gated content access works

### Test Performance & SEO
- [ ] Page load speed is acceptable (< 3 seconds)
- [ ] Social media previews work (Facebook, Twitter)
- [ ] Favicon displays correctly
- [ ] Meta tags are properly set
- [ ] Mobile responsiveness works

## 📱 Mobile & Cross-Browser Testing

### Browsers to Test
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Key Mobile Features
- [ ] Touch interactions work properly
- [ ] Responsive design scales correctly
- [ ] Demo navigation works on mobile
- [ ] Forms are mobile-friendly
- [ ] Chat widget works on mobile

## 🔄 Continuous Deployment

### Auto-Deploy Setup
- [x] Connected to main branch
- [x] Auto-deploy on push to main
- [x] Preview deployments for PRs

### Monitoring & Analytics
Consider adding:
- [ ] Vercel Analytics
- [ ] Google Analytics
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring

## 🛠️ Troubleshooting Common Issues

### Build Fails
- Check Node.js version compatibility
- Verify all dependencies are installed
- Check for TypeScript errors
- Ensure environment variables are set

### Routing Issues
- Verify `vercel.json` rewrites configuration
- Check for case-sensitive path issues
- Ensure all routes are properly defined

### Performance Issues
- Optimize images and assets
- Check for large bundle sizes
- Verify lazy loading is working
- Monitor API response times

### Domain Issues
- Wait for DNS propagation (up to 24 hours)
- Verify DNS records are correct
- Check SSL certificate status
- Ensure domain is properly configured

## 📊 Launch Checklist

### Pre-Launch
- [ ] All tests pass
- [ ] Performance is acceptable
- [ ] SEO meta tags are correct
- [ ] Social media previews look good
- [ ] Error handling works properly

### Launch
- [ ] Deploy to production
- [ ] Verify custom domain works
- [ ] Test all critical user flows
- [ ] Monitor for errors
- [ ] Verify analytics tracking

### Post-Launch
- [ ] Monitor performance metrics
- [ ] Check error logs
- [ ] Verify user feedback
- [ ] Plan for updates and improvements

## 🔗 Important URLs

- **Production**: https://bloompad.xyz
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Repository**: [Your GitHub repo URL]
- **Documentation**: This file and WEB3_INTEGRATION.md

## 💡 Next Steps for Production

1. **Real Web3 Integration**: Follow WEB3_INTEGRATION.md guide
2. **Database**: Set up PostgreSQL database (Neon, Supabase)
3. **Authentication**: Implement proper wallet authentication
4. **Smart Contracts**: Deploy actual token contracts on Base
5. **Monitoring**: Set up comprehensive monitoring and alerts
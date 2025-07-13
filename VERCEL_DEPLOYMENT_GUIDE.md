# Vercel Deployment Guide for Bloompad

## 🚀 Quick Deploy Steps

### 1. Repository Setup
Make sure your code is pushed to a GitHub repository.

### 2. Vercel Import
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure with these settings:
   - **Framework Preset**: Other (or leave as detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

### 3. Environment Variables
Add these environment variables:
```
OPENAI_API_KEY=your_actual_openai_api_key
NODE_ENV=production
```

### 4. Deploy
Click "Deploy" and wait for the build to complete.

## 🌐 Custom Domain Setup (bloompad.xyz)

### Step 1: Add Domain in Vercel
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add domain: `bloompad.xyz`
4. Add domain: `www.bloompad.xyz`
5. Set `bloompad.xyz` as primary domain

### Step 2: Configure DNS
In your domain registrar (where you bought bloompad.xyz), add:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 300 (or Auto)
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 300 (or Auto)
```

### Step 3: Wait for Propagation
- DNS changes can take up to 24 hours
- SSL certificates are issued automatically
- You can check status in Vercel dashboard

## ✅ Verification Checklist

After deployment, test these URLs:
- [ ] https://bloompad.xyz
- [ ] https://www.bloompad.xyz
- [ ] https://bloompad.xyz/token-gated (should not 404)

Test these features:
- [ ] Demo guide works smoothly
- [ ] Token marketplace loads
- [ ] BloomBot chat functions
- [ ] Wallet connection simulation
- [ ] Token creation form
- [ ] All navigation works
- [ ] Mobile responsiveness

## 🔧 Build Configuration

The project is configured with:
- **vercel.json** for routing and headers
- **package.json** with proper build scripts
- **Vite** for frontend bundling
- **ESBuild** for server bundling

## 📱 Social Media Preview

Your site will show this when shared:
- **Title**: Bloompad - Plant Your Idea. Bloom Your Brand.
- **Description**: The first creator token launchpad designed for real communities...
- **Image**: Custom OG image with Bloompad branding
- **URL**: https://bloompad.xyz

## 🛠️ Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Verify all dependencies are installed
- Check for TypeScript errors
- Ensure environment variables are set

### Domain Not Working
- Wait 24 hours for DNS propagation
- Check DNS records are correct
- Verify domain is added in Vercel
- Check SSL certificate status

### App Not Loading
- Check build output directory is `dist/public`
- Verify rewrites are configured for React routing
- Check browser console for errors
- Verify environment variables are set

## 📊 Performance Tips

- Images are optimized with Unsplash URLs
- Fonts are preloaded from Google Fonts
- CSS is bundled and minified
- JavaScript is code-split automatically

## 🔄 Continuous Deployment

Once set up:
- Every push to main branch auto-deploys
- Pull requests get preview deployments
- Vercel provides build logs and metrics
- Rollback to previous versions if needed

## 📈 Next Steps

1. **Monitor Performance**: Use Vercel Analytics
2. **Add Real Database**: PostgreSQL with Neon or Supabase
3. **Implement Web3**: Follow WEB3_INTEGRATION.md
4. **Add Analytics**: Google Analytics or Mixpanel
5. **Error Tracking**: Sentry for production monitoring
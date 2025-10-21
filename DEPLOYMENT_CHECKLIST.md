# Deployment Checklist for cPanel

## Pre-Deployment Checklist

### 1. Environment Setup
- [ ] Supabase project is set up and configured
- [ ] All database migrations have been applied
- [ ] Super admin user has been created in Supabase
- [ ] `.env` file has correct production Supabase credentials
  ```
  VITE_SUPABASE_URL=https://your-project.supabase.co
  VITE_SUPABASE_ANON_KEY=your-anon-key
  ```

### 2. Build Verification
- [ ] Run `npm run build` successfully
- [ ] Check that `dist` folder is created
- [ ] Verify `dist` folder contains:
  - [ ] `index.html`
  - [ ] `.htaccess`
  - [ ] `logo.svg`
  - [ ] `NERD (1).jpg`
  - [ ] `assets/` folder with CSS and JS files

### 3. cPanel Preparation
- [ ] cPanel login credentials ready
- [ ] Domain/subdomain configured
- [ ] Document root path identified (e.g., `/public_html`)
- [ ] FTP credentials available (if using FTP)

## Deployment Steps

### Step 1: Backup Existing Files
- [ ] Backup any existing files in document root
- [ ] Note down any custom configurations

### Step 2: Clean Document Root
- [ ] Delete all existing files in document root
- [ ] Keep only necessary files (if any)

### Step 3: Upload Files
- [ ] Upload ALL files from `dist` folder to document root:
  - [ ] `index.html`
  - [ ] `.htaccess`
  - [ ] `logo.svg`
  - [ ] `NERD (1).jpg`
  - [ ] Entire `assets/` folder

### Step 4: Verify File Structure
Your document root should look like this:
```
/public_html/
├── index.html
├── .htaccess
├── logo.svg
├── NERD (1).jpg
└── assets/
    ├── index-[hash].css
    ├── index-[hash].js
    ├── react-vendor-[hash].js
    ├── supabase-vendor-[hash].js
    └── form-vendor-[hash].js
```

### Step 5: Configure .htaccess
- [ ] Verify `.htaccess` file is present
- [ ] Check that file is not hidden (show hidden files in File Manager)
- [ ] Confirm mod_rewrite rules are correct

### Step 6: Set File Permissions
- [ ] Set files to 644: `chmod 644 index.html .htaccess logo.svg`
- [ ] Set folders to 755: `chmod 755 assets/`

### Step 7: SSL Configuration
- [ ] Install SSL certificate (Let's Encrypt or AutoSSL)
- [ ] Force HTTPS in `.htaccess`
- [ ] Test SSL with https://www.ssllabs.com/ssltest/

## Post-Deployment Testing

### Basic Functionality
- [ ] Website loads at `https://yourdomain.com`
- [ ] Homepage displays correctly
- [ ] All navigation links work
- [ ] Images and logo appear
- [ ] CSS styles are applied
- [ ] No console errors in browser

### Page Testing
- [ ] Home page (`/`)
- [ ] About page (`/about`)
- [ ] Services page (`/services`)
- [ ] Coverage page (`/coverage`)
- [ ] Contact page (`/contact`)
- [ ] Testimonials page (`/testimonials`)
- [ ] Blog page (`/blog`)
- [ ] Tracking page (`/tracking`)
- [ ] Quote page (`/quote`)
- [ ] Booking page (`/booking`)
- [ ] Fleet page (`/fleet`)

### Admin Testing
- [ ] Admin login page loads (`/admin/login`)
- [ ] Can log in with super admin credentials
- [ ] Dashboard displays with correct stats
- [ ] Shipments management works
- [ ] Users management works (super admin only)
- [ ] Blog management works
- [ ] Testimonials management works
- [ ] Contact inquiries viewer works
- [ ] Quote requests viewer works

### Form Testing
- [ ] Contact form submits correctly
- [ ] Quote form submits correctly
- [ ] Submissions appear in admin dashboard
- [ ] Email notifications work (if configured)

### Performance Testing
- [ ] Page load time is acceptable (< 3 seconds)
- [ ] Assets are loading from correct paths
- [ ] Gzip compression is working
- [ ] Browser caching is enabled

### Mobile Testing
- [ ] Test on mobile device or browser dev tools
- [ ] Navigation menu works on mobile
- [ ] All forms work on mobile
- [ ] Layout is responsive

### Browser Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari (if available)
- [ ] Test on Edge

## Security Checklist

### SSL/HTTPS
- [ ] SSL certificate is valid
- [ ] HTTPS is forced
- [ ] Mixed content warnings resolved
- [ ] Security headers configured in `.htaccess`

### Supabase Security
- [ ] RLS (Row Level Security) is enabled on all tables
- [ ] Policies are restrictive and correct
- [ ] Anon key is used (not service role key)
- [ ] Database credentials are not exposed

### Access Control
- [ ] Admin dashboard requires authentication
- [ ] Only super admins can manage users
- [ ] Protected routes work correctly
- [ ] Session management is secure

### Server Security
- [ ] Directory browsing is disabled
- [ ] Sensitive files are protected
- [ ] Error messages don't expose system info
- [ ] Regular backups are configured

## Monitoring

### Set Up Monitoring
- [ ] Set up uptime monitoring (e.g., UptimeRobot)
- [ ] Configure error logging
- [ ] Set up analytics (if desired)
- [ ] Monitor Supabase usage and quotas

### Regular Maintenance
- [ ] Schedule regular backups (weekly recommended)
- [ ] Check error logs weekly
- [ ] Monitor disk space usage
- [ ] Keep Supabase project active

## Troubleshooting Guide

### Issue: 404 Errors on Page Refresh
**Solution**:
- Ensure `.htaccess` is present in document root
- Verify mod_rewrite is enabled
- Check `.htaccess` syntax

### Issue: Blank White Screen
**Solution**:
- Check browser console for errors
- Verify Supabase credentials in build
- Ensure all files uploaded correctly
- Clear browser cache

### Issue: CSS/JS Not Loading
**Solution**:
- Check file permissions (644 for files)
- Verify `assets/` folder uploaded completely
- Clear browser cache
- Check for blocked resources in console

### Issue: Admin Login Not Working
**Solution**:
- Verify Supabase credentials are correct
- Check that `admin_users` table exists
- Ensure super admin user is created
- Check browser console for auth errors

### Issue: Forms Not Submitting
**Solution**:
- Check Supabase RLS policies
- Verify anon key is correct
- Check browser console for errors
- Test Supabase connection

## Rollback Plan

If deployment fails:

1. **Immediate Rollback**:
   - Restore backup files from cPanel backup
   - Or re-upload previous working version

2. **Debug Issues**:
   - Check cPanel error logs
   - Check browser console errors
   - Verify Supabase connection
   - Test locally first

3. **Re-Deploy**:
   - Fix issues locally
   - Test thoroughly
   - Rebuild: `npm run build`
   - Upload new files

## Contact Information

### Support Resources
- **cPanel Support**: Contact your hosting provider
- **Supabase Support**: https://supabase.com/support
- **Application Issues**: Check GitHub/documentation

### Important URLs
- Website: `https://yourdomain.com`
- Admin Panel: `https://yourdomain.com/admin/login`
- Supabase Dashboard: `https://supabase.com/dashboard`
- cPanel: `https://yourdomain.com:2083` or provided URL

## Success Criteria

Your deployment is successful when:
- ✅ Website loads correctly on all pages
- ✅ Admin dashboard is accessible and functional
- ✅ All forms submit successfully
- ✅ SSL is active and HTTPS is enforced
- ✅ No console errors
- ✅ Mobile responsive
- ✅ Performance is acceptable
- ✅ Super admin can create users
- ✅ All management features work

---

**Congratulations on your deployment!** 🎉

Keep this checklist for future updates and reference.

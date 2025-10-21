# Quick Start - Deploy to cPanel in 10 Minutes

## What You Have

Your Nerd Logistics website is fully built and ready for deployment. The `dist` folder contains all production files optimized for cPanel hosting.

## Quick Deploy Steps

### 1. Get Your Files Ready (Already Done! ✓)

Your `dist` folder contains:
- `index.html` - Main HTML file
- `.htaccess` - Apache configuration for routing
- `logo.svg` - Company logo
- `NERD (1).jpg` - Image file
- `assets/` - All CSS and JavaScript files (optimized and code-split)

### 2. Upload to cPanel (5 minutes)

**Option A: File Manager**
1. Log into cPanel
2. Open **File Manager**
3. Go to `/public_html` (or your domain folder)
4. Delete existing files
5. Click **Upload**
6. Upload ALL files from the `dist` folder
7. Done!

**Option B: FTP**
1. Connect via FTP
2. Navigate to document root
3. Upload all files from `dist` folder
4. Done!

### 3. Set Up SSL (2 minutes)

1. In cPanel, go to **SSL/TLS Status**
2. Enable AutoSSL or Let's Encrypt
3. Wait for certificate to activate
4. Done!

### 4. Create Your Admin Account (3 minutes)

1. Go to Supabase Dashboard
2. **Authentication** → **Users** → Add User
3. Create user with email/password
4. Copy the User ID
5. Go to **SQL Editor** and run:

```sql
INSERT INTO admin_users (id, email, full_name, role, is_active)
VALUES (
  'paste-user-id-here',
  'your-email@example.com',
  'Super Admin',
  'super_admin',
  true
);
```

### 5. Test Your Site

1. Visit `https://yourdomain.com`
2. Browse the website
3. Go to `https://yourdomain.com/admin/login`
4. Log in with your credentials
5. Explore the admin dashboard!

## That's It!

Your website is now live and ready to use.

## Important Files

- **CPANEL_DEPLOYMENT.md** - Detailed deployment guide
- **DEPLOYMENT_CHECKLIST.md** - Complete checklist for deployment
- **CREATE_SUPER_ADMIN.md** - Super admin creation guide
- **README.md** - Development documentation

## Need Help?

### Common Issues

**Site shows 404 errors when refreshing pages**
→ Make sure `.htaccess` file is uploaded

**CSS/JS not loading**
→ Verify `assets/` folder uploaded completely

**Admin login not working**
→ Check that super admin user is created in Supabase

**Blank white screen**
→ Check browser console for errors, verify Supabase credentials

### Support

- Check cPanel error logs: **Metrics** → **Errors**
- Check browser console (F12) for JavaScript errors
- Verify Supabase connection status
- Refer to detailed documentation files

## What You Can Do Now

### As Super Admin:
✅ Create shipments and track orders
✅ Manage users (create admins, managers)
✅ Publish blog posts
✅ Approve and feature testimonials
✅ View contact inquiries
✅ Respond to quote requests
✅ Monitor all activity

### Your Customers Can:
✅ Track shipments
✅ Request quotes
✅ Submit contact forms
✅ Read blog posts
✅ View services and coverage
✅ See testimonials

## File Structure in cPanel

```
/public_html/
├── index.html              ← Main HTML file
├── .htaccess              ← Apache routing configuration
├── logo.svg               ← Company logo
├── NERD (1).jpg          ← Image file
└── assets/                ← All optimized CSS/JS
    ├── index-[hash].css
    ├── index-[hash].js
    ├── react-vendor-[hash].js
    ├── supabase-vendor-[hash].js
    └── form-vendor-[hash].js
```

## Features Included

### Public Website
- Modern, responsive design
- Service pages
- Coverage information
- Real-time shipment tracking
- Quote request system
- Contact forms
- Blog
- Testimonials

### Admin Dashboard
- Real-time statistics
- Shipment management (CRUD)
- User management (super admin only)
- Blog post management
- Testimonials approval
- Contact inquiries viewer
- Quote requests handler
- Activity logging

### Security
- Supabase authentication
- Row Level Security (RLS)
- Role-based access control
- SSL/HTTPS support
- Protected admin routes
- Secure password handling

## Next Steps

1. **Customize Content**: Update blog posts, testimonials
2. **Add Shipments**: Start tracking shipments
3. **Invite Team**: Create admin and manager accounts
4. **Configure Email**: Set up email notifications (optional)
5. **Monitor Usage**: Track website and admin dashboard usage

---

**You're all set!** Welcome to your new logistics management system. 🚚

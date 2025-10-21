# Deployment Files for cPanel

This folder contains all the production-ready files needed to deploy your Nerd Logistics website to cPanel hosting.

## What's Inside

```
deployment-files/
├── index.html              ← Main HTML file
├── .htaccess              ← Apache configuration (routing, security, caching)
├── logo.svg               ← Company logo
├── NERD (1).jpg          ← Image file
└── assets/                ← Optimized CSS and JavaScript files
    ├── index-[hash].css          (41 KB) - All styles
    ├── index-[hash].js           (279 KB) - Main application
    ├── react-vendor-[hash].js    (164 KB) - React libraries
    ├── supabase-vendor-[hash].js (168 KB) - Supabase client
    └── form-vendor-[hash].js     (22 KB) - Form handling
```

## How to Deploy

### Quick Steps:

1. **Log into cPanel** and open File Manager

2. **Navigate to your document root**
   - Usually `/public_html` for main domain
   - Or `/public_html/subdomain` for subdomains

3. **Delete existing files** in the document root (backup first if needed)

4. **Upload ALL files** from this `deployment-files` folder:
   - Select all files and folders
   - Click Upload in File Manager
   - Or use FTP to upload everything

5. **Verify** the files are uploaded:
   - Make sure `.htaccess` is visible (show hidden files)
   - Verify `assets/` folder with all JS/CSS files
   - Ensure `index.html` is in the root

6. **Set up SSL** (recommended):
   - Go to SSL/TLS Status in cPanel
   - Enable AutoSSL or Let's Encrypt

7. **Create your admin account** in Supabase:
   - See `CREATE_SUPER_ADMIN.md` in project root

8. **Test your site**:
   - Visit `https://yourdomain.com`
   - Login at `https://yourdomain.com/admin/login`

## Important Notes

### The .htaccess File
This file is **critical** for your site to work properly. It:
- Enables client-side routing for React
- Configures caching for better performance
- Adds security headers
- Enables Gzip compression

**Make sure it's uploaded!**

### File Permissions
If your site doesn't work after upload, check permissions:
- Files should be: `644`
- Folders should be: `755`

You can set these in cPanel File Manager by right-clicking files/folders.

### SSL Certificate
Always use HTTPS for security. Most cPanel hosts provide free SSL certificates through:
- AutoSSL
- Let's Encrypt

Enable this in cPanel → SSL/TLS section.

## Troubleshooting

### Site shows blank page
- Check browser console (F12) for errors
- Verify all files uploaded correctly
- Clear browser cache

### 404 errors when refreshing pages
- Ensure `.htaccess` file is present
- Verify mod_rewrite is enabled (ask your host)

### CSS/JavaScript not loading
- Check that `assets/` folder uploaded completely
- Verify file permissions (644)
- Clear browser cache

### Admin login not working
- Verify Supabase credentials are correct
- Check that super admin user is created
- See `CREATE_SUPER_ADMIN.md` for setup

## Need More Help?

See these detailed guides in the project root:
- **QUICK_START.md** - 10-minute deployment guide
- **CPANEL_DEPLOYMENT.md** - Complete deployment instructions
- **DEPLOYMENT_CHECKLIST.md** - Full deployment checklist
- **CREATE_SUPER_ADMIN.md** - Admin user setup

## File Size

Total size: ~665 KB (optimized and minified)

This is small and will load quickly for your users!

## What This Contains

Your complete Nerd Logistics website including:
- Public website with all pages
- Admin dashboard
- Shipment tracking
- Blog system
- Contact forms
- Quote requests
- User management
- And more!

---

**Ready to deploy?** Just upload these files to your cPanel and you're good to go! 🚀

# cPanel Deployment Guide

This guide will help you deploy your Nerd Logistics website to a cPanel hosting environment.

## Prerequisites

1. cPanel hosting account with:
   - PHP 7.4 or higher
   - Apache web server
   - File Manager or FTP access
   - SSL certificate (recommended)

2. Supabase project with:
   - Database migrations applied
   - Super admin user created
   - Environment variables noted

## Step 1: Build the Production Files

The project has already been built and the files are ready in the `dist` folder. If you need to rebuild:

```bash
npm run build
```

This creates optimized production files in the `dist` folder.

## Step 2: Prepare Your Domain/Subdomain

1. Log into your cPanel account
2. Go to **Domains** or **Subdomains**
3. Either:
   - Use your main domain (e.g., `nerdlogistics.net`)
   - Create a subdomain (e.g., `app.nerdlogistics.net`)
4. Note the document root path (usually `/public_html` or `/public_html/subdomain`)

## Step 3: Upload Files to cPanel

### Method A: Using File Manager (Recommended)

1. In cPanel, open **File Manager**
2. Navigate to your document root (e.g., `/public_html`)
3. **Delete** any existing files in the directory (like default index.html)
4. Click **Upload** button
5. Upload ALL files from the `dist` folder:
   - `index.html`
   - `.htaccess` (important for routing)
   - `assets/` folder (contains CSS and JS)
   - `logo.svg` and any other files in the root
6. Make sure the `.htaccess` file is visible (you may need to show hidden files)

### Method B: Using FTP

1. Use an FTP client (FileZilla, WinSCP, etc.)
2. Connect to your server using FTP credentials from cPanel
3. Navigate to your document root
4. Upload all files from the `dist` folder
5. Ensure `.htaccess` is uploaded

## Step 4: Configure Environment Variables

Since this is a static site, environment variables are compiled into the build. You have two options:

### Option A: Rebuild with Production Variables (Recommended)

1. Update your `.env` file with production Supabase credentials:
   ```
   VITE_SUPABASE_URL=your-production-supabase-url
   VITE_SUPABASE_ANON_KEY=your-production-anon-key
   ```

2. Rebuild the project:
   ```bash
   npm run build
   ```

3. Re-upload the new `dist` files to cPanel

### Option B: Use Existing Build

If your `.env` already has the correct Supabase credentials, the current build will work.

## Step 5: Verify .htaccess Configuration

Ensure your `.htaccess` file is in the document root with this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d

  # Rewrite everything else to index.html
  RewriteRule ^ index.html [L]
</IfModule>
```

This enables client-side routing for React Router.

## Step 6: Set Up SSL (Highly Recommended)

1. In cPanel, go to **SSL/TLS Status**
2. Enable AutoSSL or install Let's Encrypt certificate
3. Force HTTPS by adding to `.htaccess`:

```apache
# Force HTTPS (add at the top of .htaccess)
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

## Step 7: Test Your Deployment

1. Visit your domain: `https://yourdomain.com`
2. Test the following:
   - Home page loads correctly
   - Navigation works (all menu items)
   - Images and logo appear
   - Styles are applied correctly
   - Admin login: `https://yourdomain.com/admin/login`
   - Test with super admin credentials

## Step 8: Create Super Admin User

If you haven't already, create your first super admin:

1. Go to Supabase Dashboard → Authentication → Users
2. Create a new user
3. Go to SQL Editor and run:

```sql
INSERT INTO admin_users (id, email, full_name, role, is_active)
VALUES (
  'paste-user-id-here',
  'admin@nerdlogistics.net',
  'Super Admin',
  'super_admin',
  true
);
```

## Common Issues and Solutions

### Issue 1: 404 Errors on Page Refresh
**Solution**: Ensure `.htaccess` file is present and mod_rewrite is enabled in Apache.

### Issue 2: CSS/JS Not Loading
**Solution**:
- Check that `assets/` folder uploaded correctly
- Verify file permissions (644 for files, 755 for folders)
- Clear browser cache

### Issue 3: White Screen
**Solution**:
- Check browser console for errors
- Verify Supabase credentials are correct
- Ensure all files from `dist` are uploaded

### Issue 4: Admin Login Not Working
**Solution**:
- Verify Supabase URL and anon key in build
- Check that admin_users table exists
- Ensure super admin user is created

### Issue 5: Mixed Content Warnings (HTTP/HTTPS)
**Solution**:
- Ensure SSL is enabled
- Force HTTPS in .htaccess
- Update Supabase project settings if needed

## File Structure in cPanel

Your document root should look like this:

```
/public_html/
├── index.html
├── .htaccess
├── logo.svg
├── NERD (1).jpg
└── assets/
    ├── index-[hash].css
    └── index-[hash].js
```

## Performance Optimization

1. **Enable Gzip Compression** (already in .htaccess)
2. **Enable Browser Caching** (already in .htaccess)
3. **Use CDN** (optional, for images/assets)
4. **Enable OPcache** in PHP settings

## Security Checklist

- [ ] SSL certificate installed and working
- [ ] Force HTTPS enabled
- [ ] Directory browsing disabled (already in .htaccess)
- [ ] Supabase RLS policies enabled
- [ ] Super admin account secured with strong password
- [ ] Regular backups configured in cPanel

## Updating Your Site

To update your site after making changes:

1. Make changes locally
2. Test thoroughly
3. Run `npm run build`
4. Upload new files from `dist` folder to cPanel
5. Clear browser cache to see changes

## Support

If you encounter issues:

1. Check cPanel error logs: **Metrics** → **Errors**
2. Check browser console for JavaScript errors
3. Verify Supabase connection in Network tab
4. Contact your hosting provider for server-related issues

## Backup

Always keep backups:

1. Use cPanel **Backup** tool to create full backups
2. Download backups regularly
3. Keep a copy of your source code
4. Export Supabase database periodically

---

**Congratulations!** Your Nerd Logistics website should now be live on cPanel.

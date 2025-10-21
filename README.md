# Nerd Logistics & Freight Limited - Website & Admin Dashboard

A complete logistics management website with admin dashboard built with React, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Quick Deploy to cPanel

**Ready-to-deploy files are in the `deployment-files/` folder!**

All production files are optimized and ready to upload to your cPanel hosting:

```bash
deployment-files/    ← Upload this entire folder to cPanel
├── index.html
├── .htaccess
├── logo.svg
├── NERD (1).jpg
├── assets/
└── README.md       ← Deployment instructions
```

**See `QUICK_START.md` for 10-minute deployment guide**

## 📚 Documentation

- **QUICK_START.md** - Deploy in 10 minutes
- **CPANEL_DEPLOYMENT.md** - Detailed deployment guide
- **DEPLOYMENT_CHECKLIST.md** - Complete deployment checklist
- **CREATE_SUPER_ADMIN.md** - Create your first admin user

## ✨ Features

### Public Website
- 🏠 Modern, responsive design
- 📦 Real-time shipment tracking
- 📝 Quote request system
- 📞 Contact forms
- 📰 Blog system
- ⭐ Customer testimonials
- 🚚 Service information
- 🗺️ Coverage maps

### Admin Dashboard
- 📊 Real-time statistics and analytics
- 📦 Complete shipment management (CRUD)
- 👥 User management (super admin only)
- 📝 Blog post management
- ⭐ Testimonial approval system
- 📧 Contact inquiries viewer
- 💰 Quote requests handler
- 📜 Activity audit logging

### Security & Access Control
- 🔐 Supabase authentication
- 🛡️ Row Level Security (RLS)
- 👤 Role-based access control (Super Admin, Admin, Manager)
- 🔒 Protected admin routes
- 🔑 Secure password handling

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Build Tool**: Vite

## 📂 Project Structure

```
nerd-logistics/
├── deployment-files/      ← Ready for cPanel deployment!
├── src/
│   ├── components/
│   │   ├── admin/        ← Admin dashboard components
│   │   ├── common/       ← Shared components
│   │   ├── home/         ← Homepage sections
│   │   └── layout/       ← Layout components
│   ├── contexts/         ← React contexts (Auth)
│   ├── lib/              ← Supabase client
│   ├── pages/            ← Page components
│   │   ├── admin/        ← Admin pages
│   │   └── ...           ← Public pages
│   └── App.tsx           ← Main app component
├── supabase/
│   └── migrations/       ← Database migrations
├── public/               ← Static assets
└── Documentation files
```

## 🚀 Development Setup

### Prerequisites
- Node.js 18+ and npm
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nerd-logistics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root:
   ```env
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

This creates optimized files in both `dist/` and `deployment-files/` folders.

## 🗄️ Database Setup

The project uses Supabase with the following main tables:

- **admin_users** - Admin user accounts with roles
- **shipments** - Shipment tracking and management
- **shipment_tracking_history** - Status history for shipments
- **blog_posts** - Blog content management
- **testimonials** - Customer testimonials
- **contact_inquiries** - Contact form submissions
- **quote_requests** - Quote request submissions
- **user_invitations** - Pending user invitations
- **admin_activity_log** - Audit trail

### Migrations

Database migrations are in `supabase/migrations/`:
1. `create_admin_system_tables.sql` - Initial schema
2. `add_super_admin_and_user_management_v2.sql` - User management

Apply migrations through Supabase Dashboard or CLI.

## 👤 User Roles

### Super Admin
- Full system access
- Create, edit, delete users
- Manage all content
- View all data

### Admin
- Manage shipments, blog, testimonials
- View inquiries and quotes
- Cannot manage users

### Manager
- View-only access to dashboard
- Cannot modify data

## 🔐 Creating Super Admin

See `CREATE_SUPER_ADMIN.md` for detailed instructions.

Quick steps:
1. Create user in Supabase Authentication
2. Add to `admin_users` table with role `super_admin`
3. Login at `/admin/login`

## 📱 Pages

### Public Pages
- `/` - Home
- `/about` - About Us
- `/services` - Services
- `/coverage` - Coverage Area
- `/contact` - Contact
- `/testimonials` - Customer Reviews
- `/blog` - Blog Posts
- `/tracking` - Shipment Tracking
- `/quote` - Request Quote
- `/booking` - Book Shipment
- `/fleet` - Fleet Information

### Admin Pages
- `/admin/login` - Admin Login
- `/admin/dashboard` - Admin Dashboard

## 🎨 Customization

### Styling
The project uses Tailwind CSS. Main color scheme is defined in `tailwind.config.js`:
- Primary: Custom dark blue
- Accent: Orange highlights

### Logo & Branding
- Logo: `public/logo.svg`
- Company image: `public/NERD (1).jpg`

## 📦 Deployment

### cPanel (Recommended)
1. Upload contents of `deployment-files/` folder
2. Configure `.htaccess` for routing
3. Set up SSL certificate
4. Create super admin user

See `CPANEL_DEPLOYMENT.md` for detailed instructions.

### Other Hosting
The site is a static SPA that can be deployed to:
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting with proper routing

## 🧪 Testing

Test admin features:
1. Login as super admin
2. Create test shipment
3. Add blog post
4. Approve testimonial
5. View contact inquiries
6. Process quote request
7. Create additional users

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

See `DEPLOYMENT_CHECKLIST.md` for common issues and solutions.

## 📄 License

Copyright © 2025 Nerd Logistics & Freight Limited

## 🤝 Support

For issues or questions:
- Check documentation files
- Review deployment guides
- Contact your development team

---

**Built with ❤️ for efficient logistics management**

# Authentication Setup Guide

This guide walks you through setting up the authentication system with Supabase for the Chronicles Exhibition website.

## 🚀 Quick Setup

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new account
2. Create a new project
3. Wait for the project to be ready (1-2 minutes)

### 2. Get Your Supabase Credentials

1. In your Supabase project dashboard, go to **Settings** > **API**
2. Copy the following values:
   - **Project URL** (e.g., `https://your-project.supabase.co`)
   - **Anon/Public Key** (starts with `eyJhbGciOiJ...`)

### 3. Configure Environment Variables

1. Copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

### 4. Enable Email Authentication

1. In your Supabase dashboard, go to **Authentication** > **Settings**
2. Make sure **Enable email confirmations** is enabled
3. Configure your email settings (you can use the default for testing)

### 5. Create Your First Admin User

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000/auth`
3. Switch to "Sign Up" tab
4. Create your admin account with email and password
5. Check your email for the confirmation link
6. Click the confirmation link to verify your account

### 6. Access Admin Dashboard

1. After confirming your account, visit `http://localhost:3000/auth`
2. Sign in with your credentials
3. You'll be redirected to the admin dashboard at `/admin`

## 📱 Features

### Authentication Pages
- **`/auth`** - Login/Register page with sleek design
- **`/auth/logout`** - Automatic logout handler

### Admin Dashboard
- **`/admin`** - Main dashboard with stats and quick actions
- **`/admin/home`** - Home page content management interface
- **Sidebar Navigation** - Easy navigation between admin sections

### Security Features
- **Route Protection** - Admin routes require authentication
- **Auto-redirect** - Logged-in users redirected to admin, logged-out users to auth
- **Secure Session Management** - Uses Supabase's built-in security

## 🎨 UI Features

### Authentication Page
- Toggle between Login/Register modes
- Password visibility toggle
- Clean, professional design
- Error handling and validation
- Loading states

### Admin Dashboard
- Modern sidebar navigation
- Quick stats overview
- Recent activity feed
- Quick action buttons
- Responsive design

### Home Page Management
- Section-by-section editing
- Live preview of changes
- Save/Cancel functionality
- Form validation
- Visual content organization

## 🔧 Customization

### Adding New Admin Pages
1. Create a new page in `src/app/admin/[your-page]/page.tsx`
2. Add the route to `src/data/admin-navigation.ts`
3. The sidebar will automatically include the new page

### Styling
- Uses the existing Tailwind CSS configuration
- Consistent with the main website's design system
- Primary color: `#A5CD39` (brand green)

## 📋 Directory Structure

```
src/
├── app/
│   ├── admin/                  # Admin dashboard pages
│   │   ├── layout.tsx         # Admin-specific layout (no header/footer)
│   │   ├── page.tsx           # Main dashboard
│   │   └── home/
│   │       └── page.tsx       # Home page management
│   └── auth/                   # Authentication pages
│       ├── page.tsx           # Login/Register
│       └── logout/
│           └── page.tsx       # Logout handler
├── components/
│   └── AdminSidebar.tsx       # Reusable admin sidebar
├── data/
│   └── admin-navigation.ts    # Admin navigation structure
├── lib/
│   └── supabase.ts           # Supabase client configuration
└── middleware.ts              # Route protection
```

## 🚨 Important Notes

1. **Environment Variables**: Never commit your `.env.local` file to version control
2. **First User**: The first registered user will be your admin - secure your registration process
3. **Email Verification**: Users must verify their email before accessing the admin panel
4. **Development**: The system works in development mode; for production, ensure proper Supabase configuration

## 🛠 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📝 Next Steps

1. Set up your Supabase project and environment variables
2. Create your admin account
3. Customize the admin interface for your needs
4. Add more admin pages as needed
5. Configure email templates in Supabase (optional)

The authentication system is now ready to use! Visit `/auth` to get started.
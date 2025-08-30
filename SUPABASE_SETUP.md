# Supabase Integration Guide

This project is now integrated with Supabase for backend services including authentication, database, and real-time features.

## Setup Instructions

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new account or sign in
3. Create a new project
4. Note down your project URL and API keys

### 2. Configure Environment Variables

Update the `.env.local` file in your project root with your Supabase credentials:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Optional: If you plan to use Supabase Auth
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

**Where to find these values:**
- `NEXT_PUBLIC_SUPABASE_URL`: Project Settings > API > Project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Project Settings > API > Project API keys > anon public
- `SUPABASE_SERVICE_ROLE_KEY`: Project Settings > API > Project API keys > service_role (keep this secret!)

### 3. Authentication Setup (Optional)

If you want to use authentication:

1. Go to Authentication > Providers in your Supabase dashboard
2. Configure your preferred providers (Google, GitHub, etc.)
3. Add your site URL to the redirect URLs:
   - For development: `http://localhost:3000/auth/callback`
   - For production: `https://yourdomain.com/auth/callback`

## Usage Examples

### Server Components

```tsx
import { createServerComponentClient } from '@/lib/supabase-server'

export default async function ServerComponent() {
  const supabase = await createServerComponentClient()
  
  // Fetch data
  const { data, error } = await supabase
    .from('your_table')
    .select('*')
  
  // Check authentication
  const { data: { user } } = await supabase.auth.getUser()
  
  return <div>{/* Your component */}</div>
}
```

### Client Components

```tsx
'use client'
import { createClientComponentClient } from '@/lib/supabase'
import { useEffect, useState } from 'react'

export default function ClientComponent() {
  const [data, setData] = useState(null)
  const supabase = createClientComponentClient()
  
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from('your_table')
        .select('*')
      setData(data)
    }
    
    fetchData()
  }, [supabase])
  
  return <div>{/* Your component */}</div>
}
```

### API Routes

```tsx
import { createRouteHandlerClient } from '@/lib/supabase-server'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createRouteHandlerClient()
  
  const { data, error } = await supabase
    .from('your_table')
    .select('*')
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  return NextResponse.json({ data })
}
```

## Database Schema Examples

Here are some common table schemas you might want to create in Supabase:

### Contact Forms Table

```sql
CREATE TABLE contact_forms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;

-- Create policy (adjust based on your needs)
CREATE POLICY "Enable read access for authenticated users" ON contact_forms
FOR SELECT USING (auth.role() = 'authenticated');
```

### Quote Requests Table

```sql
CREATE TABLE quote_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  event_name TEXT,
  event_date DATE,
  stand_size TEXT,
  budget_range TEXT,
  requirements TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
```

### User Profiles Table (if using auth)

```sql
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  updated_at TIMESTAMP WITH TIME ZONE,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  
  CONSTRAINT username_length CHECK (char_length(username) >= 3)
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile." ON profiles
FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile." ON profiles
FOR UPDATE USING (auth.uid() = id);
```

## Form Integration

To integrate your existing forms with Supabase, you can modify your form submission handlers:

```tsx
const handleSubmit = async (formData: FormData) => {
  const supabase = createClientComponentClient()
  
  const { data, error } = await supabase
    .from('contact_forms')
    .insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      }
    ])
  
  if (error) {
    console.error('Error submitting form:', error)
    return
  }
  
  // Redirect to thank you page or show success message
  router.push('/thank-you')
}
```

## Security Best Practices

1. **Environment Variables**: Never commit `.env.local` to version control
2. **Row Level Security**: Always enable RLS on your tables
3. **API Keys**: Use the anon key for client-side and service role key only for server-side operations
4. **Policies**: Create appropriate policies for data access

## Real-time Features

Enable real-time subscriptions for live updates:

```tsx
useEffect(() => {
  const channel = supabase
    .channel('table-changes')
    .on('postgres_changes', 
      { event: '*', schema: 'public', table: 'your_table' },
      (payload) => {
        console.log('Change received!', payload)
        // Update your component state
      }
    )
    .subscribe()

  return () => {
    supabase.removeChannel(channel)
  }
}, [supabase])
```

## File Storage

To use Supabase Storage for file uploads:

```tsx
const uploadFile = async (file: File) => {
  const supabase = createClientComponentClient()
  
  const { data, error } = await supabase.storage
    .from('your-bucket')
    .upload(`uploads/${file.name}`, file)
  
  if (error) {
    console.error('Error uploading file:', error)
    return
  }
  
  // Get public URL
  const { data: { publicUrl } } = supabase.storage
    .from('your-bucket')
    .getPublicUrl(data.path)
  
  return publicUrl
}
```

## Troubleshooting

### Common Issues

1. **Environment variables not found**: Make sure `.env.local` is in the project root and restart your dev server
2. **CORS errors**: Check your Supabase project's allowed origins in Authentication > Settings
3. **RLS errors**: Ensure you have appropriate policies set up for your tables

### Debugging

Enable debug mode by adding to your environment:

```env
NEXT_PUBLIC_SUPABASE_DEBUG=true
```

## Next Steps

1. Set up your database schema in Supabase
2. Configure authentication providers if needed
3. Update your existing forms to use Supabase
4. Set up proper Row Level Security policies
5. Test the integration thoroughly

For more detailed documentation, visit the [Supabase documentation](https://supabase.com/docs).
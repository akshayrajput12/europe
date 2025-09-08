// Load environment variables
require('dotenv').config({ path: '.env.local' });

const { createClient } = require('@supabase/supabase-js');

// Environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
  console.log('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl);
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'SET' : 'NOT SET');
  process.exit(1);
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test connection to blog_page table
async function testBlogTables() {
  try {
    console.log('Testing connection to blog_page table...');
    const { data, error } = await supabase.from('blog_page').select('*').limit(1);
    
    if (error) {
      console.log('Error connecting to blog_page table:', error.message);
      console.log('This might be because the table does not exist yet.');
    } else {
      console.log('Successfully connected to blog_page table');
      console.log('Data:', JSON.stringify(data, null, 2));
    }
    
    console.log('\nTesting connection to blog_posts table...');
    const { data: postsData, error: postsError } = await supabase.from('blog_posts').select('*');
    
    if (postsError) {
      console.log('Error connecting to blog_posts table:', postsError.message);
      console.log('This might be because the table does not exist yet.');
    } else {
      console.log('Successfully connected to blog_posts table');
      console.log('Number of posts found:', postsData ? postsData.length : 0);
      if (postsData && postsData.length > 0) {
        console.log('First post:', JSON.stringify(postsData[0], null, 2));
      }
    }
  } catch (err) {
    console.error('Unexpected error:', err.message);
  }
}

testBlogTables();
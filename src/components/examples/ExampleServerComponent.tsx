// Example of using Supabase in a Server Component
import { createServerComponentClient } from '@/lib/supabase-server'

export default async function ExampleServerComponent() {
  const supabase = await createServerComponentClient()
  
  // Example: Fetch data from Supabase
  // const { data, error } = await supabase
  //   .from('your_table')
  //   .select('*')
  
  // Check authentication status
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div>
      <h2>Server Component Example</h2>
      {user ? (
        <p>Authenticated user: {user.email}</p>
      ) : (
        <p>No authenticated user</p>
      )}
    </div>
  )
}
import { supabase } from './supabase'

// Generic function to fetch data from any table
export async function fetchData<T>(table: string, select = '*'): Promise<T[] | null> {
  try {
    const { data, error } = await supabase
      .from(table)
      .select(select)
    
    if (error) {
      console.error(`Error fetching data from ${table}:`, error)
      return null
    }
    
    return data as T[]
  } catch (error) {
    console.error(`Unexpected error fetching data from ${table}:`, error)
    return null
  }
}

// Generic function to insert data into any table
export async function insertData<T>(table: string, data: Partial<T>): Promise<T | null> {
  try {
    const { data: result, error } = await supabase
      .from(table)
      .insert([data])
      .select()
      .single()
    
    if (error) {
      console.error(`Error inserting data into ${table}:`, error)
      return null
    }
    
    return result as T
  } catch (error) {
    console.error(`Unexpected error inserting data into ${table}:`, error)
    return null
  }
}

// Generic function to update data in any table
export async function updateData<T>(
  table: string, 
  id: string | number, 
  updates: Partial<T>
): Promise<T | null> {
  try {
    const { data, error } = await supabase
      .from(table)
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) {
      console.error(`Error updating data in ${table}:`, error)
      return null
    }
    
    return data as T
  } catch (error) {
    console.error(`Unexpected error updating data in ${table}:`, error)
    return null
  }
}

// Generic function to delete data from any table
export async function deleteData(table: string, id: string | number): Promise<boolean> {
  try {
    const { error } = await supabase
      .from(table)
      .delete()
      .eq('id', id)
    
    if (error) {
      console.error(`Error deleting data from ${table}:`, error)
      return false
    }
    
    return true
  } catch (error) {
    console.error(`Unexpected error deleting data from ${table}:`, error)
    return false
  }
}

// Example: Contact form specific functions
export interface ContactForm {
  id?: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  created_at?: string
}

export async function submitContactForm(formData: Omit<ContactForm, 'id' | 'created_at'>) {
  return insertData<ContactForm>('contact_forms', formData)
}

export async function getContactForms() {
  return fetchData<ContactForm>('contact_forms')
}

// Example: Quote request specific functions
export interface QuoteRequest {
  id?: string
  name: string
  email: string
  phone?: string
  company?: string
  event_name?: string
  event_date?: string
  stand_size?: string
  budget_range?: string
  requirements?: string
  created_at?: string
}

export async function submitQuoteRequest(formData: Omit<QuoteRequest, 'id' | 'created_at'>) {
  return insertData<QuoteRequest>('quote_requests', formData)
}

export async function getQuoteRequests() {
  return fetchData<QuoteRequest>('quote_requests')
}
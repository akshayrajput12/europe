import { supabase } from './supabase'
import { createServerClient } from './supabase-server'

// Define the form submission interface
export interface FormSubmission {
  id?: string
  form_type: string
  submission_data: Record<string, unknown>
  documents?: Array<{
    field_name: string
    file_name: string
    file_size: number
    file_type: string
    url?: string
    path?: string
  }>
  created_at?: string
  updated_at?: string
}

// Generic function to insert form submission data
export async function submitFormData(
  formType: string,
  formData: Record<string, unknown>,
  files?: Record<string, File[]>
): Promise<FormSubmission | null> {
  try {
    console.log('Starting form submission for:', formType)
    
    // Process files if provided
    let documents: FormSubmission['documents'] = []
    if (files) {
      documents = await processFiles(files, formType)
    }

    // Prepare submission data
    const submissionData: FormSubmission = {
      form_type: formType,
      submission_data: formData,
      documents: documents && documents.length > 0 ? documents : undefined
    }

    // Insert the form submission using the regular supabase client to support anonymous users
    const { data, error } = await supabase
      .from('form_submissions')
      .insert([submissionData])
      .select()
      .single()
    
    if (error) {
      console.error(`Error submitting ${formType} form:`, error)
      return null
    }
    
    return data
  } catch (error) {
    console.error(`Unexpected error submitting ${formType} form:`, error)
    return null
  }
}

// Function to process file uploads
async function processFiles(files: Record<string, File[]>, formType: string): Promise<FormSubmission['documents']> {
  const documents: FormSubmission['documents'] = []
  
  // Process each file field
  for (const [fieldName, fileList] of Object.entries(files)) {
    for (const file of fileList) {
      try {
        // Generate a unique file name to prevent conflicts
        const fileExtension = file.name.split('.').pop()
        const uniqueFileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExtension}`
        
        // Upload file to Supabase storage
        const { data, error } = await supabase.storage
          .from('form-uploads')
          .upload(`${formType}/${uniqueFileName}`, file, {
            cacheControl: '3600',
            upsert: false
          })
        
        if (error) {
          console.error(`Error uploading file ${file.name}:`, error)
          continue
        }
        
        // Get public URL for the uploaded file
        const { data: { publicUrl } } = supabase.storage
          .from('form-uploads')
          .getPublicUrl(data.path)
        
        // Store file metadata
        documents.push({
          field_name: fieldName,
          file_name: file.name,
          file_size: file.size,
          file_type: file.type,
          url: publicUrl,
          path: data.path
        })
      } catch (error) {
        console.error(`Error processing file ${file.name}:`, error)
      }
    }
  }
  
  return documents
}

// Function to get all form submissions (for authenticated users)
export async function getAllFormSubmissions(): Promise<FormSubmission[] | null> {
  try {
    // Use server client for authenticated operations
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('form_submissions')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching form submissions:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Unexpected error fetching form submissions:', error)
    return null
  }
}

// Function to get form submissions by type (for authenticated users)
export async function getFormSubmissionsByType(formType: string): Promise<FormSubmission[] | null> {
  try {
    // Use server client for authenticated operations
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('form_submissions')
      .select('*')
      .eq('form_type', formType)
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error(`Error fetching ${formType} submissions:`, error)
      return null
    }
    
    return data
  } catch (error) {
    console.error(`Unexpected error fetching ${formType} submissions:`, error)
    return null
  }
}

// Function to update a form submission (for authenticated users)
export async function updateFormSubmission(
  id: string,
  updates: Partial<FormSubmission>
): Promise<FormSubmission | null> {
  try {
    // Use server client for authenticated operations
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('form_submissions')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) {
      console.error(`Error updating form submission ${id}:`, error)
      return null
    }
    
    return data
  } catch (error) {
    console.error(`Unexpected error updating form submission ${id}:`, error)
    return null
  }
}

// Function to delete a form submission (for authenticated users)
export async function deleteFormSubmission(id: string): Promise<boolean> {
  try {
    // Use server client for authenticated operations
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { error } = await client
      .from('form_submissions')
      .delete()
      .eq('id', id)
    
    if (error) {
      console.error(`Error deleting form submission ${id}:`, error)
      return false
    }
    
    return true
  } catch (error) {
    console.error(`Unexpected error deleting form submission ${id}:`, error)
    return false
  }
}
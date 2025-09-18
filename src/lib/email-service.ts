import * as nodemailer from 'nodemailer'
import { FormSubmission } from './form-submission'

// Check if we're running on the server side
const isServer = typeof window === 'undefined'

// Create a transporter object using SMTP transport
export function createTransporter() {
  // Only create transporter on server side
  if (!isServer) {
    throw new Error('Email transporter can only be created on the server side')
  }
  
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  return transporter
}

// Format form data for email content with better styling to match website
function formatFormData(formData: Record<string, unknown>): string {
  let formatted = '<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-family: Arial, sans-serif;">'
  formatted += '<thead><tr style="background-color: #A5CD39; color: black; text-align: center; padding: 12px; font-weight: bold;">'
  formatted += '<th colspan="2" style="text-align: center; padding: 12px; font-weight: bold; font-size: 24px;">Quote Request Details</th>'
  formatted += '</tr></thead><tbody>'
  
  // Add submitted from information
  if (formData.submitted_from) {
    formatted += `<tr style="background-color: white; border-bottom: 1px solid #e2e8f0; text-align: center;">`
    formatted += `<td colspan="2" style="padding: 8px; font-size: 12px; color: #666;">Submitted from: ${formData.submitted_from}</td>`
    formatted += `</tr>`
  }
  
  // Add form fields
  for (const [key, value] of Object.entries(formData)) {
    // Skip the submitted_from field as it's already handled above
    if (key === 'submitted_from') continue;
    
    formatted += `<tr style="border-bottom: 1px solid #A5CD39;">`
    formatted += `<td style="padding: 12px; font-weight: bold; text-transform: capitalize; width: 200px; background-color: white;">${key.replace(/([A-Z])/g, ' $1')}</td>`
    formatted += `<td style="padding: 12px; background-color: white;">${value}</td>`
    formatted += `</tr>`
  }
  
  formatted += '</tbody></table>'
  return formatted
}

// Format documents for email content
function formatDocuments(documents: FormSubmission['documents']): string {
  if (!documents || documents.length === 0) return ''
  
  let formatted = '<h3 style="color: #1E293B; margin: 20px 0 10px; font-family: Arial, sans-serif;">Uploaded Documents</h3>'
  formatted += '<ul style="list-style-type: none; padding: 0; font-family: Arial, sans-serif;">'
  
  for (const doc of documents) {
    formatted += '<li style="margin: 10px 0; padding: 10px; background-color: #f1f5f9; border-radius: 4px; border-left: 4px solid #A5CD39;">'
    formatted += `<strong>${doc.file_name}</strong> (${doc.file_type})<br>`
    if (doc.url) {
      formatted += `<a href="${doc.url}" style="color: #0ea5e9; text-decoration: none;">Download File</a>`
    }
    formatted += '</li>'
  }
  
  formatted += '</ul>'
  return formatted
}

// Send email notification for form submission
export async function sendFormSubmissionEmail(formSubmission: FormSubmission): Promise<boolean> {
  // Only send emails on server side
  if (!isServer) {
    console.warn('Email notifications can only be sent from the server side')
    return true
  }
  
  try {
    // Check if email notifications are enabled
    if (process.env.ENABLE_EMAIL_NOTIFICATIONS !== 'true') {
      console.log('Email notifications are disabled')
      return true
    }

    // Validate required environment variables
    if (!process.env.SMTP_USER || !process.env.ADMIN_EMAIL) {
      console.error('Missing required email configuration environment variables')
      return false
    }

    const transporter = createTransporter()

    // Format the email content
    const formDataHtml = formatFormData(formSubmission.submission_data)
    const documentsHtml = formatDocuments(formSubmission.documents)
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Form Submission</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #334155; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #A5CD39 0%, #A5CD39 100%); padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h1 style="color: black; margin-top: 0; font-size: 28px; text-align: center;">Quote Request Details</h1>
          <div style="background-color: white; padding: 20px; border-radius: 6px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong style="color: #1E293B;">Form Type:</strong> <span style="color: #475569;">${formSubmission.form_type}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #1E293B;">Submission Time:</strong> <span style="color: #475569;">${formSubmission.created_at || new Date().toISOString()}</span></p>
          </div>
        </div>
        
        <div style="margin: 30px 0; background-color: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
          
          ${formDataHtml}
        </div>
        
        ${documentsHtml ? `<div style="margin: 30px 0; background-color: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">${documentsHtml}</div>` : ''}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px; text-align: center; background-color: #A5CD39; padding: 15px; border-radius: 8px;">
          <p style="margin: 0; color: black;">Copyright © ${new Date().getFullYear()}, Chronicle Exhibits LLC.</p>
        </div>
      </body>
      </html>
    `

    // Send email
    const info = await transporter.sendMail({
      from: `"Chronicles Europe Forms" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Form Submission - ${formSubmission.form_type}`,
      html: htmlContent,
    })

    console.log('Email notification sent: %s', info.messageId)
    return true
  } catch (error) {
    console.error('Error sending email notification:', error)
    return false
  }
}
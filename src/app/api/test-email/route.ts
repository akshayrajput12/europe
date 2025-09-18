import { NextResponse } from 'next/server';
import { sendFormSubmissionEmail } from '@/lib/email-service';
import { FormSubmission } from '@/lib/form-submission';

export async function GET() {
  // Check if we're running on the server side
  const isServer = typeof window === 'undefined';
  
  if (!isServer) {
    return NextResponse.json({ success: false, message: 'Email testing can only be done on the server side' });
  }
  
  try {
    console.log('Testing email notification...');
    
    // Create a mock form submission
    const mockSubmission: FormSubmission = {
      form_type: 'test-form',
      submission_data: {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message',
        company: 'Test Company'
      },
      documents: [
        {
          field_name: 'document',
          file_name: 'test-document.pdf',
          file_size: 1024,
          file_type: 'application/pdf',
          url: 'https://example.com/test-document.pdf'
        }
      ],
      created_at: new Date().toISOString()
    };
    
    // Send email notification
    const result = await sendFormSubmissionEmail(mockSubmission);
    
    if (result) {
      return NextResponse.json({ success: true, message: 'Email sent successfully!' });
    } else {
      return NextResponse.json({ success: false, message: 'Failed to send email.' });
    }
  } catch (error: any) {
    console.error('Error testing email:', error);
    return NextResponse.json({ success: false, message: 'Error testing email', error: error.message });
  }
}
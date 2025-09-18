import { NextResponse } from 'next/server';
import { submitFormData } from '@/lib/form-submission';
import { sendFormSubmissionEmail } from '@/lib/email-service';

export async function POST(request: Request) {
  try {
    const { formType, formData, files } = await request.json();
    
    // Submit form data to Supabase
    const result = await submitFormData(formType, formData, files);
    
    if (!result) {
      return NextResponse.json({ success: false, error: 'Failed to submit form data' }, { status: 500 });
    }
    
    // Send email notification
    console.log('Form submitted successfully, sending email notification...');
    const emailSent = await sendFormSubmissionEmail(result);
    if (emailSent) {
      console.log('Email notification sent successfully');
    } else {
      console.error('Failed to send email notification');
    }
    
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
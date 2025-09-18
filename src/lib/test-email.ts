import { sendFormSubmissionEmail } from './email-service';
import { FormSubmission } from './form-submission';

async function testEmail() {
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
    console.log('Email sent successfully!');
  } else {
    console.log('Failed to send email.');
  }
}

// Run the test if this file is executed directly
if (require.main === module) {
  testEmail().catch(console.error);
}
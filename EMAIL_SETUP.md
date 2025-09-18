# Email Notification Setup for Form Submissions

This document explains how to set up email notifications for form submissions in the Chronicles Europe project.

## Overview

The email notification system automatically sends an email to administrators whenever a user submits any form on the website. The system uses Google SMTP with App Passwords for authentication.

## Setup Instructions

### 1. Environment Variables

Add the following environment variables to your `.env.local` file (create this file if it doesn't exist):

```env
# Email configuration
ENABLE_EMAIL_NOTIFICATIONS=true
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
ADMIN_EMAIL=admin@chronicleexhibits.com
```

### 2. Gmail App Password Setup

To use Gmail SMTP, you need to set up an App Password:

1. Go to your Google Account settings
2. Navigate to Security > 2-Step Verification > App passwords
3. Generate a new app password for "Mail"
4. Use this password as the `SMTP_PASS` value

### 3. Testing the Email Functionality

You can test the email functionality in two ways:

#### Option 1: API Route Test
Visit the following URL in your browser to send a test email:
```
http://localhost:3000/api/test-email
```

#### Option 2: Form Submission Test
Submit any form on the website (Contact Us, Request Quotation, etc.) and check if an email is sent to the admin email address.

## How It Works

1. When a user submits a form, the form data is sent to the API route `/api/form-submit`
2. The API route saves the form data to Supabase and then sends an email notification
3. The email service formats the form data and sends an HTML email to the administrator

## Customization

### Email Template
You can customize the email template by modifying the `formatFormData` and `formatDocuments` functions in `src/lib/email-service.ts`.

### Email Content
The email includes:
- Form type
- Submission timestamp
- All form data fields
- Links to any uploaded documents

## Troubleshooting

### No Email Received
1. Check that `ENABLE_EMAIL_NOTIFICATIONS` is set to `true`
2. Verify SMTP credentials are correct
3. Check spam/junk folder
4. Review server logs for error messages

### Gmail Authentication Issues
1. Ensure you're using an App Password, not your regular Gmail password
2. Verify 2-Factor Authentication is enabled on your Google account
3. Check that the Gmail account allows less secure apps or use App Passwords

### Environment Variables Not Loading
1. Ensure you're using `.env.local` (not `.env`) for sensitive data
2. Restart the development server after adding new environment variables
3. Check that variable names match exactly
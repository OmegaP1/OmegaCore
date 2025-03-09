# Form Handling Options for OmegaCore AI

This guide outlines several free options for handling form submissions from the OmegaCore AI website contact form.

## Option 1: Vercel Serverless Functions

### Overview
Use Next.js API routes (serverless functions) to handle form submissions and store them in a free database or send them via email.

### Implementation Steps

1. **Create an API Route**
   
   Create a file at `src/app/api/contact/route.ts`:

   ```typescript
   import { NextResponse } from 'next/server';
   
   export async function POST(request: Request) {
     try {
       // Parse the JSON body from the request
       const formData = await request.json();
       
       // Log form submission (for development/testing)
       console.log('Form submission received:', formData);
       
       // Here you would typically:
       // 1. Validate the data
       // 2. Store it in a database OR
       // 3. Send it via email
       
       // For now, we'll just return a success response
       return NextResponse.json(
         { message: 'Form submitted successfully' },
         { status: 200 }
       );
     } catch (error) {
       console.error('Error handling form submission:', error);
       return NextResponse.json(
         { message: 'Error submitting form' },
         { status: 500 }
       );
     }
   }
   ```

2. **Update Contact Form to Use the API**

   Modify the form submission handler in your ContactForm.tsx component:

   ```typescript
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
     setError(null);
     
     try {
       const response = await fetch('/api/contact', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
       });
       
       const data = await response.json();
       
       if (!response.ok) {
         throw new Error(data.message || 'Something went wrong');
       }
       
       // Show success state
       setIsSubmitted(true);
       
       // Reset form after 3 seconds and close modal
       setTimeout(() => {
         setFormData({
           name: '',
           email: '',
           company: '',
           message: '',
           service: 'default',
         });
         onClose();
       }, 3000);
       
     } catch (err) {
       setError('There was a problem submitting your form. Please try again.');
       console.error('Form submission error:', err);
     } finally {
       setIsSubmitting(false);
     }
   };
   ```

## Option 2: Free Database Storage with Supabase

### Overview
Use Supabase (PostgreSQL database with a generous free tier) to store form submissions.

### Implementation Steps

1. **Set Up Supabase**
   - Create a free account at [supabase.com](https://supabase.com)
   - Create a new project
   - Create a table named `contact_submissions` with columns matching your form fields

2. **Install Supabase Client**
   ```bash
   npm install @supabase/supabase-js
   ```

3. **Create Environment Variables**
   Create a `.env.local` file with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Create a Supabase Client File**
   Create `src/utils/supabase.ts`:
   ```typescript
   import { createClient } from '@supabase/supabase-js';

   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
   const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

   export const supabase = createClient(supabaseUrl, supabaseAnonKey);
   ```

5. **Update the API Route to Use Supabase**
   ```typescript
   import { NextResponse } from 'next/server';
   import { supabase } from '@/utils/supabase';

   export async function POST(request: Request) {
     try {
       const formData = await request.json();
       
       // Insert data into Supabase
       const { data, error } = await supabase
         .from('contact_submissions')
         .insert([
           { 
             name: formData.name,
             email: formData.email,
             company: formData.company,
             message: formData.message,
             service: formData.service,
             created_at: new Date().toISOString()
           }
         ]);
       
       if (error) throw error;
       
       return NextResponse.json(
         { message: 'Form submitted successfully', data },
         { status: 200 }
       );
     } catch (error) {
       console.error('Error storing form submission:', error);
       return NextResponse.json(
         { message: 'Error submitting form' },
         { status: 500 }
       );
     }
   }
   ```

## Option 3: Email Notifications with SendGrid (Free Tier)

### Overview
Use SendGrid's free tier (100 emails/day) to send yourself an email when someone submits the contact form.

### Implementation Steps

1. **Create a SendGrid Account**
   - Sign up at [sendgrid.com](https://sendgrid.com) (free tier allows 100 emails/day)
   - Create an API key

2. **Install the SendGrid Package**
   ```bash
   npm install @sendgrid/mail
   ```

3. **Add Environment Variable**
   ```
   SENDGRID_API_KEY=your-sendgrid-api-key
   YOUR_EMAIL=your-email@example.com
   ```

4. **Update API Route to Send Email**
   ```typescript
   import { NextResponse } from 'next/server';
   import sgMail from '@sendgrid/mail';

   sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

   export async function POST(request: Request) {
     try {
       const formData = await request.json();
       
       // Construct email
       const msg = {
         to: process.env.YOUR_EMAIL,
         from: 'noreply@OmegaCore AI.com', // Verified sender required
         subject: `New Contact Form: ${formData.name} - ${formData.service}`,
         text: `
           Name: ${formData.name}
           Email: ${formData.email}
           Company: ${formData.company || 'Not provided'}
           Service: ${formData.service}
           Message: ${formData.message}
         `,
         html: `
           <h2>New Contact Form Submission</h2>
           <p><strong>Name:</strong> ${formData.name}</p>
           <p><strong>Email:</strong> ${formData.email}</p>
           <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
           <p><strong>Service:</strong> ${formData.service}</p>
           <p><strong>Message:</strong> ${formData.message}</p>
         `,
       };
       
       await sgMail.send(msg);
       
       return NextResponse.json(
         { message: 'Form submitted successfully' },
         { status: 200 }
       );
     } catch (error) {
       console.error('Error sending email:', error);
       return NextResponse.json(
         { message: 'Error submitting form' },
         { status: 500 }
       );
     }
   }
   ```

## Option 4: Google Sheets Integration (No Additional Dependencies)

### Overview
Store form submissions in a Google Sheet using Google Apps Script.

### Implementation Steps

1. **Create a Google Sheet**
   - Create a new Google Sheet
   - Add column headers matching your form fields
   - Click Extensions > Apps Script

2. **Set Up Google Apps Script**
   - In the Apps Script editor, paste this code:
   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var data = JSON.parse(e.postData.contents);
     
     // Add timestamp
     var timestamp = new Date();
     
     // Append data to sheet
     sheet.appendRow([
       timestamp,
       data.name,
       data.email,
       data.company,
       data.service,
       data.message
     ]);
     
     return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. **Deploy the Web App**
   - Click Deploy > New deployment
   - Select type: Web app
   - Set "Who has access" to "Anyone"
   - Deploy and copy the web app URL

4. **Update Your API Route**
   ```typescript
   import { NextResponse } from 'next/server';

   const GOOGLE_SCRIPT_URL = 'your-google-script-url';

   export async function POST(request: Request) {
     try {
       const formData = await request.json();
       
       // Send data to Google Sheets
       const response = await fetch(GOOGLE_SCRIPT_URL, {
         method: 'POST',
         body: JSON.stringify(formData),
       });
       
       if (!response.ok) {
         throw new Error('Failed to submit to Google Sheets');
       }
       
       return NextResponse.json(
         { message: 'Form submitted successfully' },
         { status: 200 }
       );
     } catch (error) {
       console.error('Error storing form submission:', error);
       return NextResponse.json(
         { message: 'Error submitting form' },
         { status: 500 }
       );
     }
   }
   ```

## Recommendation

For simplicity and reliability, we recommend **Option 2 (Supabase)** for the following reasons:

1. **Free Tier Benefits**: Supabase offers a generous free tier with 500MB database storage
2. **Real-time Database**: You can view form submissions in real-time
3. **Simple Integration**: Works well with Next.js and Vercel
4. **Future-proof**: If your needs grow, you can easily expand with Supabase's functionality
5. **Security**: Provides good security options out of the box

## Implementation Instructions

Follow the detailed steps in Option 2 to set up Supabase integration. After setup, you'll be able to:

1. View all form submissions in your Supabase dashboard
2. Query submissions programmatically if needed
3. Set up notifications in Supabase for new submissions

For advanced needs, you can combine multiple options (e.g., store in Supabase AND send an email notification).
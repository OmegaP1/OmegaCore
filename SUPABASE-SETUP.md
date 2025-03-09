# Setting Up Supabase for OmegaCore AI Contact Form

This guide walks you through setting up a Supabase database to store form submissions from the OmegaCore AI website.

## Step 1: Create a Supabase Account and Project

1. Go to [https://supabase.com/](https://supabase.com/) and sign up for a free account
2. Once logged in, click "New Project"
3. Enter project details:
   - **Name**: OmegaCore AI
   - **Database Password**: Create a strong password
   - **Region**: Choose a region closest to your target audience
   - **Pricing Plan**: Free tier
4. Click "Create New Project" and wait for the project to be created (can take a few minutes)

## Step 2: Create a Table for Form Submissions

1. In your Supabase dashboard, go to the "Table Editor" in the left sidebar
2. Click "Create a new table"
3. Configure the table:
   - **Name**: contact_submissions
   - **Enable Row Level Security (RLS)**: Toggle on for security
   - **Columns**:
     - id (uuid, primary key, default: uuid_generate_v4()) - Auto-created
     - created_at (timestamp with time zone, default: now()) - Auto-created
     - name (text, not null)
     - email (text, not null)
     - company (text)
     - service (text, not null)
     - message (text, not null)
4. Click "Save" to create the table

## Step 3: Configure Row Level Security (RLS)

1. In the "Authentication" section of the sidebar, go to "Policies"
2. Find your "contact_submissions" table
3. Add a new policy:
   - **Policy Name**: Insert only
   - **Operation**: INSERT
   - **Target Roles**: authenticated, anon (for unauthenticated submissions)
   - **Policy Definition**: Using the policy expression editor:
     ```sql
     true
     ```
   - This allows anyone to insert records but not read them
4. Click "Save Policy"
5. Optionally, add a SELECT policy if you want to create an admin interface later

## Step 4: Get API Credentials

1. Go to "Project Settings" (gear icon) in the sidebar
2. Go to "API" tab
3. Copy these values:
   - **URL**: Project URL ("anon" "public")
   - **anon public**: API key ("anon" "public")

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in your project root (copy from .env.local.example)
2. Add your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

## Step 6: Install Supabase Client

Run the following command in your project directory:
```bash
npm install @supabase/supabase-js
```

## Step 7: Update API Route

In the `src/app/api/contact/route.ts` file, uncomment the Supabase code section to enable database storage:

```typescript
// Uncomment this section
const { data, error } = await supabase
  .from('contact_submissions')
  .insert([
    { 
      name: formData.name,
      email: formData.email,
      company: formData.company || '',
      message: formData.message,
      service: formData.service,
      created_at: new Date().toISOString()
    }
  ]);

if (error) {
  console.error('Supabase error:', error);
  throw error;
}
```

## Step 8: Viewing Submissions

To view the form submissions:
1. Go to your Supabase dashboard
2. Navigate to "Table Editor"
3. Select the "contact_submissions" table
4. All submissions will be listed here with timestamps

## Optional: Setting Up Email Notifications

To receive an email notification when someone submits a form:
1. In Supabase, go to "Database" → "Functions"
2. Create a new function called "notify_new_contact"
3. Use a PostgreSQL function to send an HTTP request to a notification service

Alternatively, you can implement the SendGrid option from the FORM-HANDLING-GUIDE.md alongside Supabase storage for a dual approach (store in database and send email).

## Deployment Notes

When deploying to Vercel:
1. Add your Supabase environment variables in the Vercel project settings
2. Vercel will automatically use these environment variables during build and runtime

This setup provides a secure, scalable way to store form submissions without any cost (on the free tier) and minimal maintenance.
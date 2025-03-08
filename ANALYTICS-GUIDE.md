# Vercel Analytics Setup for OmegaCore

Vercel Analytics has been integrated into the OmegaCore website to track page views and other user engagement metrics. This document explains the implementation and how to use it.

## Implementation Details

### 1. Package Installation

The `@vercel/analytics` package has been added to the project dependencies:

```bash
npm i @vercel/analytics
```

This package is now listed in the `package.json` file.

### 2. Analytics Component Integration

The Analytics component has been added to the application's root layout file (`src/app/layout.tsx`):

```typescript
import { Analytics } from '@vercel/analytics/react';

// Inside the layout component return:
return (
  <html lang="en" className="scroll-smooth">
    <head>
      <StructuredData />
    </head>
    <body className={inter.className}>
      {children}
      <Analytics />
    </body>
  </html>
);
```

The `<Analytics />` component is placed at the end of the `<body>` tag to ensure it doesn't interfere with the loading of the main content.

## What Gets Tracked

By default, Vercel Analytics tracks:

- Page views
- Navigation between pages
- Geographic location data (country level)
- Browser and device information
- Referral sources

## Viewing Analytics Data

After deploying your site to Vercel:

1. Log in to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your OmegaCore project
3. Navigate to the "Analytics" tab
4. You'll see data after your site receives some visits

Note: It may take up to 30 seconds for initial data to appear after the first page view.

## Custom Event Tracking (Optional)

If you want to track specific user interactions beyond page views, you can use the `track` function:

```typescript
import { track } from '@vercel/analytics';

// Example: Track form submission
const handleFormSubmit = () => {
  track('form_submitted', { formType: 'contact' });
};
```

To implement this, add the import and call the function in the relevant component.

## Privacy Considerations

Vercel Analytics is privacy-friendly:

- It doesn't use cookies
- It's GDPR compliant
- It doesn't track personally identifiable information
- It respects the user's "Do Not Track" preference

## Troubleshooting

If analytics data isn't appearing:

1. Make sure your site is deployed on Vercel
2. Check for content blockers or ad blockers that might be preventing the analytics from loading
3. Navigate between pages on your site to generate more data points
4. Wait a few minutes for data to process and appear in the dashboard

## Further Customization

For more advanced options like disabling analytics in development or for certain users, refer to the [official Vercel Analytics documentation](https://vercel.com/docs/analytics).
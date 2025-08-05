# Email Setup Instructions

To enable email functionality in your portfolio, follow these steps:

## 1. Create Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security" → "2-Step Verification" (enable if not already enabled)
3. Go to "App passwords" (under 2-Step Verification)
4. Select "Mail" and "Other (Custom name)"
5. Enter a name like "Portfolio Contact Form"
6. Click "Generate"
7. Copy the 16-character app password

## 2. Create Environment File

Create a file named `.env.local` in your project root with the following content:

```
GMAIL_APP_PASSWORD=your-16-character-app-password-here
```

Replace `your-16-character-app-password-here` with the app password you generated in step 1.

## 3. Restart Your Development Server

After creating the `.env.local` file, restart your development server:

```bash
npm run dev
```

## 4. Test the Contact Form

1. Go to your contact page
2. Fill out the contact form
3. Submit the form
4. Check your email (kabuteymanasseh5@gmail.com) for the message

## Important Notes

- Never commit your `.env.local` file to version control
- The app password is different from your regular Gmail password
- If you change your Gmail password, you'll need to generate a new app password
- The contact form will send emails to kabuteymanasseh5@gmail.com

## Troubleshooting

If emails are not being sent:

1. Check that your Gmail app password is correct
2. Ensure 2-Step Verification is enabled on your Google account
3. Check the browser console for any error messages
4. Verify that the `.env.local` file is in the project root directory

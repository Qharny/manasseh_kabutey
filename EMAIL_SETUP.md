# Email Setup Guide

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
GMAIL_USER=kabuteymanasseh5@gmail.com
GMAIL_APP_PASSWORD=your_app_password_here
```

## Gmail App Password Setup

1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Use this password in your `GMAIL_APP_PASSWORD` environment variable

## Security Notes

- Never commit your `.env.local` file to version control
- For production deployment, set these environment variables in your hosting platform
- The current setup uses your existing app password, but you should generate a new one for security

## Testing

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your email (kabuteymanasseh5@gmail.com) for the message

## Troubleshooting

### Authentication Error (535-5.7.8)

If you see this error: `535-5.7.8 Username and Password not accepted`, follow these steps:

#### Option 1: Use App Password (Recommended)
1. Go to https://myaccount.google.com/
2. Enable 2-Step Verification if not already enabled
3. Go to Security → 2-Step Verification → App passwords
4. Select "Mail" and "Other (Custom name)"
5. Enter "Portfolio Contact Form" as the name
6. Click "Generate" and copy the 16-character password
7. Update your `.env.local` file with the new app password

#### Option 2: Enable Less Secure Apps (Temporary)
1. Go to https://myaccount.google.com/lesssecureapps
2. Turn on "Allow less secure apps"
3. Try the contact form again

#### Option 3: Check Your Current Setup
- Verify your `.env.local` file exists in the project root
- Make sure the `GMAIL_APP_PASSWORD` is correct (no extra spaces)
- Restart your development server after changing environment variables

### Other Issues
- If emails aren't sending, check your Gmail app password
- Make sure your Gmail account allows "less secure app access" or use app passwords
- Check the console for any error messages

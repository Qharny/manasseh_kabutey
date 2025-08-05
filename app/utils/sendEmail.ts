import nodemailer from 'nodemailer';

export const sendEmail = async ({ name, email, message }: { name: string; email: string; message: string }) => {
    // Create a transporter object using Gmail SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kabuteymanasseh5@gmail.com',
            pass: process.env.GMAIL_APP_PASSWORD || 'zmnt dnad zuyq vsys', // Use environment variable for security
        },
    });

    // Set up email data
    const mailOptions = {
        from: '"Contact Form" <kabuteymanasseh5@gmail.com>', // Sender address
        to: 'kabuteymanasseh5@gmail.com', // List of recipients
        subject: 'New Contact Form Submission', // Subject line
        text: `You have a new message from ${name} (${email}): ${message}`, // Plain text body
    };

    // Send the email
    await transporter.sendMail(mailOptions);
}; 
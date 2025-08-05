import nodemailer from 'nodemailer';

export const sendEmail = async ({ name, email, message }: { name: string; email: string; message: string }) => {
    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com', // Replace with your SMTP server
        port: 587, // Replace with your SMTP port
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'kabuteymanasseh5@gmail.com', // Replace with your email
            pass: 'Manasseh12#', // Replace with your email password
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
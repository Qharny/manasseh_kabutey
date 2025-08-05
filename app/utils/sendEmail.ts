import nodemailer from 'nodemailer';

export const sendEmail = async ({ name, email, message }: { name: string; email: string; message: string }) => {
    // Create a transporter object using Gmail SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER || 'kabuteymanasseh5@gmail.com',
            pass: process.env.GMAIL_APP_PASSWORD, // This should be set in your environment variables
        },
    });

    // Set up email data with better formatting
    const mailOptions = {
        from: `"Portfolio Contact Form" <${process.env.GMAIL_USER || 'kabuteymanasseh5@gmail.com'}>`,
        to: 'kabuteymanasseh5@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                    New Contact Form Submission
                </h2>
                
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #007bff; margin-top: 0;">Contact Details:</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
                    <p><strong>Message:</strong></p>
                    <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
                        ${message.replace(/\n/g, '<br>')}
                    </div>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
                    <p>This message was sent from your portfolio contact form.</p>
                    <p>Time: ${new Date().toLocaleString()}</p>
                </div>
            </div>
        `,
        text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message: ${message}

Time: ${new Date().toLocaleString()}
        `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
}; 
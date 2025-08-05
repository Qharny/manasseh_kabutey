import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

declare module 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      )
    }

    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kabuteymanasseh5@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || 'zmnt dnad zuyq vsys',
      },
    })

    // Set up email data
    const mailOptions = {
      from: email, // Sender address
      to: 'kabuteymanasseh5@gmail.com', // List of recipients
      subject: 'Contact Form Submission', // Subject line
      text: message, // Plain text body
      html: `<p>${message}</p>`, // HTML body
    }

    // Send email
    await transporter.sendMail(mailOptions) // Send the email

    return NextResponse.json(
      { message: 'Message sent successfully' }, 
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' }, 
      { status: 500 }
    )
  }
}
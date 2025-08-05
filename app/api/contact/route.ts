import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/app/utils/sendEmail';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email
    await sendEmail({ name, email, message });

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);
    
    // Check if it's an authentication error
    if (error.code === 'EAUTH') {
      return NextResponse.json(
        { error: 'Email service authentication failed. Please check your Gmail settings.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
} 
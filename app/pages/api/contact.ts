import { sendEmail } from '@/app/utils/sendEmail';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    console.log({ name, email, message });

    
    await sendEmail({ name, email, message }); // Ensure to implement this function

    return res.status(200).json({ message: 'Form submitted successfully!', data: { name, email, message } });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 
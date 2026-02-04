import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // In a real application, you would send this data to your preferred service
    // For example, save to database, send email, etc.
    console.log('Received contact form submission:', { name, email, message });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'There was an error processing your message. Please try again.' 
    }, { status: 500 });
  }
}
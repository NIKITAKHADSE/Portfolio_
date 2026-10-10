import { NextResponse } from 'next/server';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message, companyWebsite, startedAt } = body ?? {};

    if (companyWebsite) return NextResponse.json({ ok: true }); // honeypot
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.length > 80) return NextResponse.json({ error: 'Please enter a valid name.' }, { status: 400 });
    if (!email || typeof email !== 'string' || !emailPattern.test(email) || email.length > 120) return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
    if (!projectType || typeof projectType !== 'string' || projectType.length > 80) return NextResponse.json({ error: 'Please select a project type.' }, { status: 400 });
    if (!message || typeof message !== 'string' || message.trim().length < 10 || message.length > 2500) return NextResponse.json({ error: 'Please add a little more detail to your message.' }, { status: 400 });
    if (typeof startedAt !== 'number' || Date.now() - startedAt < 1800) return NextResponse.json({ error: 'Please try again in a moment.' }, { status: 429 });

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !to || !from) return NextResponse.json({ error: 'Contact email is not configured yet.' }, { status: 503 });

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio enquiry — ${projectType}`,
        text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`,
      }),
    });

    if (!resendResponse.ok) return NextResponse.json({ error: 'Email delivery failed. Please try again.' }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}

import { NextResponse } from 'next/server'

const SECRET_KEY = process.env.google_v2_invisible || ""

export async function POST(request: Request) {
  const token = await request.text()

    const formData = new FormData();
    formData.append('secret', SECRET_KEY);
    formData.append('response', token!);
    // formData.append('remoteip', ip!);

    const url = 'https://www.google.com/recaptcha/api/siteverify';
    const result = await fetch(url, {
      body: formData,
      method: 'POST',
    });

    const outcome = await result.json();

    return NextResponse.json(outcome)
  }

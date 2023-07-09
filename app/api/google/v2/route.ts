import { NextResponse } from 'next/server'

const SECRET_KEY = process.env.google_v2 || ""

export async function POST(request: Request) {
  const body = await request.formData();
  const token = body.get('g-recaptcha-response');
  // const ip = request.headers.get('CF-Connecting-IP');

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

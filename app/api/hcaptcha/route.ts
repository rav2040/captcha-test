import { NextResponse } from 'next/server'

const SECRET_KEY = process.env.hcaptcha || ""

export async function POST(request: Request) {
    const body = await request.formData();
    const token = body.get('h-captcha-response');

    const formData = new FormData();
    formData.append('secret', SECRET_KEY);
    formData.append('response', token!);
    // formData.append('remoteip', ip!);

    const url = 'https://hcaptcha.com/siteverify';
    const result = await fetch(url, {
      body: formData,
      method: 'POST',
    });

    const outcome = await result.json();

    return NextResponse.json(outcome)
  }

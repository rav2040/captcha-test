'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Link href="/google/v3">Google reCAPTCHA v3</Link>
        <Link href="/google/v2">Google reCAPTCHA v2</Link>
        <Link href="/google/v2-invisible">Google reCAPTCHA v2 (Invisible)</Link>
        <Link href="/hcaptcha">hCaptcha</Link>
        <Link href="/cloudflare/managed">Cloudflare (Managed)</Link>
        <Link href="/cloudflare/non-interactive">Cloudflare (Non-interactive)</Link>
        <Link href="/cloudflare/invisible">Cloudflare (Invisible)</Link>
      </div>
    </main>
  )
}

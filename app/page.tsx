'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between">
        <ul >
          <li><Link className="text-indigo-600 hover:text-blue-800" href="/google/v3">Google reCAPTCHA v3</Link></li>
          <li><Link className="text-indigo-600 hover:text-blue-800" href="/google/v2">Google reCAPTCHA v2</Link></li>
          <li><Link className="text-indigo-600 hover:text-blue-800" href="/hcaptcha">hCaptcha</Link></li>
          <li><Link className="text-indigo-600 hover:text-blue-800" href="/cloudflare/managed">Cloudflare (Managed)</Link></li>
          <li><Link className="text-indigo-600 hover:text-blue-800" href="/cloudflare/non-interactive">Cloudflare (Non-interactive)</Link></li>
          <li><Link className="text-indigo-600 hover:text-blue-800" href="/cloudflare/invisible">Cloudflare (Invisible)</Link></li>
        </ul>
      </div>
    </main>
  )
}

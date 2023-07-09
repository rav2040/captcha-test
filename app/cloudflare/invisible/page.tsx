'use client'

import Script from 'next/script'
import { useRef, useState } from 'react'
import { PulseLoader } from 'react-spinners'

export default function Home() {
  const formRef = useRef(null)
  const [response, setResponse] = useState<string>()
  const [loading, setLoading] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
        <div>
          <h2>Cloudflare Turnstile (Invisible)</h2>
          <div className="py-6">
            <form ref={formRef} onSubmit={async (e) => {
              e.preventDefault()
              setResponse(undefined)
              setLoading(true);
              const body = new FormData(formRef.current!)
              const response = await fetch('/api/cloudflare/invisible', { method: 'POST', body })
              const json = await response.json()
              setLoading(false)
              setResponse(JSON.stringify(json, null, 2))
            }}>
              <div className="checkbox mb-3">
                <div className="cf-turnstile" data-sitekey="0x4AAAAAAAHHDbajvqrWA-c3" data-theme="light" />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
              <PulseLoader className='p-6' loading={loading} />
              <code className="px-6"><pre>{response ?? ""}</pre></code>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

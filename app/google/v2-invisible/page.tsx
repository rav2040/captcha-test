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
        <Script src="https://www.google.com/recaptcha/api.js?render=6LeqwAknAAAAAKiO-42knshgNCEP_vf-4bIxY327" async defer />
        <div>
          <h2>Google reCAPTCHA v2 (Invisible)</h2>
          <div className="py-6">
            <form ref={formRef} onSubmit={async (e) => {
              e.preventDefault()
              setResponse(undefined)
              setLoading(true);

              //@ts-ignore
              window.grecaptcha.ready(function () {
                //@ts-ignore
                window.grecaptcha.execute().then(async function () {
                  //@ts-ignore
                  const token = window.grecaptcha.getResponse()

                  if (!token) {
                    setLoading(false)
                    setResponse("Challenge not completed.")
                    return;
                  }

                  const response = await fetch('/api/google/v2-invisible', { method: 'POST', body: token })
                  const json = await response.json()
                  setLoading(false)
                  setResponse(JSON.stringify(json, null, 2))
                });
              });
            }}>
              <div className="g-recaptcha" data-sitekey="6LeqwAknAAAAAKiO-42knshgNCEP_vf-4bIxY327" data-size="invisible" />
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

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
        <Script src="https://www.google.com/recaptcha/api.js?render=6LcnIQYnAAAAAEghOtP6V8_GqmE_7PFMQDZjrX2M" />
        <div>
          <h2>Google reCAPTCHA v3</h2>
          <div className="py-6">
            <form ref={formRef} onSubmit={async (e) => {

              e.preventDefault()
              setResponse(undefined)
              setLoading(true);

              //@ts-ignore
              window.hcaptcha.ready(function () {
                //@ts-ignore
                window.hcaptcha.execute().then(async function () {
                  //@ts-ignore
                  const token = window.hcaptcha.getResponse()

                  if (!token) {
                    setLoading(false)
                    setResponse("Challenge not completed.")
                    return;
                  }

                  const response = await fetch('/api/hcaptcha/invisible', { method: 'POST', body: token })
                  const json = await response.json()
                  setLoading(false)
                  setResponse(JSON.stringify(json, null, 2))
                });
              });

              // e.preventDefault()
              // setResponse(undefined)
              // setLoading(true);
              // window.grecaptcha.ready(function () {
              //   window.grecaptcha.execute('6LcnIQYnAAAAAEghOtP6V8_GqmE_7PFMQDZjrX2M', { action: 'submit' }).then(async function (token: string) {
              //     const response = await fetch('/api/google/v3', { method: 'POST', body: token })
              //     const json = await response.json()
              //     setLoading(false)
              //     setResponse(JSON.stringify(json, null, 2))
              //   });
              // });
            }}>
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

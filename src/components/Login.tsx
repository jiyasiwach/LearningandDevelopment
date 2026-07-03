'use client'

import { useState } from 'react'
import { Leaf } from 'lucide-react'
import { useAuth } from '@/lib/auth'

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  )
}

export default function Login() {
  const { signInWithGoogle, signInWithDemo, domainError } = useAuth()
  const [loading, setLoading] = useState(false)
  const isDev = process.env.NODE_ENV !== 'production'

  async function handleSignIn() {
    setLoading(true)
    await signInWithGoogle()
    // On success the browser redirects to Google; loading stays on until then.
  }

  return (
    <div
      className="min-h-[100dvh] flex items-center justify-center bg-parchment p-6"
      style={{
        backgroundImage: "url('/paper-grain-texture.png')",
        backgroundSize: '240px',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="w-full max-w-md rounded-2xl border border-[rgba(0,59,70,0.1)] bg-parchment/90 p-10 text-center shadow-elevated backdrop-blur">
        <div className="flex items-center justify-center gap-2">
          <Leaf className="text-surface-sage" size={32} />
          <span className="font-serif text-4xl font-normal text-ink-primary">
            Magppie
          </span>
        </div>
        <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-ink-tertiary">
          Learning &amp; Development
        </p>

        <h1 className="mt-9 font-serif text-2xl text-ink-primary">
          Sign in to continue
        </h1>
        <p className="mt-2 text-sm text-ink-secondary">
          Access is restricted to Magppie company accounts.
        </p>

        {domainError && (
          <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-left text-sm text-red-700">
            That Google account isn&apos;t a Magppie email. Please use your{' '}
            <span className="font-medium">@mymagppie.com</span> or{' '}
            <span className="font-medium">@magppie.com</span> account.
          </div>
        )}

        <button
          onClick={handleSignIn}
          disabled={loading}
          className="mt-7 flex w-full items-center justify-center gap-3 rounded-full border border-[rgba(0,59,70,0.15)] bg-white px-5 py-3 text-sm font-medium text-ink-primary shadow-sm transition hover:shadow-card disabled:opacity-60"
        >
          <GoogleIcon />
          {loading ? 'Redirecting…' : 'Continue with Google'}
        </button>

        {isDev && (
          <>
            <div className="mt-7 flex items-center gap-3">
              <span className="h-px flex-1 bg-[rgba(0,59,70,0.1)]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-ink-tertiary">
                or
              </span>
              <span className="h-px flex-1 bg-[rgba(0,59,70,0.1)]" />
            </div>
            <button
              onClick={signInWithDemo}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-ink-primary px-5 py-3 text-sm font-medium text-parchment shadow-sm transition hover:opacity-90"
            >
              <Leaf size={16} />
              Explore the portal (demo)
            </button>
            <p className="mt-2 text-[11px] text-ink-tertiary">
              No account needed · dev preview only
            </p>
          </>
        )}

        <p className="mt-6 text-xs text-ink-tertiary">
          mymagppie.com · magppie.com
        </p>
      </div>
    </div>
  )
}

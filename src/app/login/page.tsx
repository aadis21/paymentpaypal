"use client";
import Image from "next/image";
import Script from "next/script";
import React, { useCallback, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    tidioChatApi?: { open: () => void };
  }
}

const MAX_ATTEMPTS = 3;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Alert state
  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertBody, setAlertBody] = useState<React.ReactNode>(null);
  const [severity, setSeverity] = useState<"error" | "info">("error");

  // Tidio
  const [shouldLoadChat, setShouldLoadChat] = useState(false);
  const [chatLoaded, setChatLoaded] = useState(false);
  const didOpenRef = useRef(false);

  const openTidioChat = useCallback(() => {
    if (didOpenRef.current) return;
    const open = () => {
      try {
        window.tidioChatApi?.open?.();
        didOpenRef.current = true;
      } catch {}
    };
    if (window.tidioChatApi) {
      open();
    } else {
      document.addEventListener("tidioChat-ready", open, { once: true });
    }
  }, []);

  useEffect(() => {
    if (shouldLoadChat) openTidioChat();
  }, [shouldLoadChat, openTidioChat]);

  // Replace this with your real API call
  async function loginRequest(email: string, password: string): Promise<boolean> {
    // const res = await fetch(`${BASE_URL}/login`, { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ email, password })});
    // if (!res.ok) return false;
    // const data = await res.json();
    // // store token, redirect, etc.
    // return true;

    // For testing UX, always fail:
    return false;
  }

  const buildAlert = (nextAttempts: number) => {
    const triesLeft = MAX_ATTEMPTS - nextAttempts;
    if (nextAttempts >= MAX_ATTEMPTS) {
      setSeverity("info");
      setAlertTitle("Having trouble signing in?");
      setAlertBody(
        <>
          Any issue with your credentials? Please contact our chat support.
          We’ve opened the chat window for you.
          <span className="block mt-2">
            If it didn’t appear,&nbsp;
            <button
              type="button"
              onClick={openTidioChat}
              className="underline underline-offset-2 hover:no-underline"
            >
              open chat
            </button>
            .
          </span>
        </>
      );
    } else {
      setSeverity("error");
      setAlertTitle("Some of your information isn’t correct.");
      setAlertBody(
        <>
          Check your email/mobile and password and try again.
          <span className="block mt-1 text-xs text-slate-600">
            {triesLeft} attempt{triesLeft === 1 ? "" : "s"} left.
          </span>
        </>
      );
    }
    setShowAlert(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowAlert(false);

    const ok = await loginRequest(email, password);

    if (ok) {
      // success: navigate to dashboard
      // router.push("/dashboard");
      setIsSubmitting(false);
      return;
    }

    const next = attempts + 1;
    setAttempts(next);
    buildAlert(next);

    if (next >= MAX_ATTEMPTS) {
      setShouldLoadChat(true);
    }
    setIsSubmitting(false);
  };

  const alertStyles =
    severity === "error"
      ? "border-red-200 bg-red-50 text-red-800"
      : "border-sky-200 bg-sky-50 text-sky-900";

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 px-4 py-10">
      {/* Tidio loads only after 3rd failure */}
      {shouldLoadChat && (
        <Script
          id="tidio-chat"
          src="//code.tidio.co/ozzj418farqwvrgfmddvrd19ip1jleow.js"
          strategy="afterInteractive"
          onLoad={() => {
            setChatLoaded(true);
            openTidioChat();
          }}
        />
      )}

      <div className="w-full max-w-[420px] rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-8 sm:p-10">
        {/* Brand header */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/logo.png"
            alt="Brand logo"
            width={112}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </div>

        {/* Professional alert */}
        {showAlert && (
          <div
            role="alert"
            aria-live="polite"
            className={`${alertStyles} mb-5 rounded-xl border px-4 py-3 shadow-[0_1px_0_rgba(0,0,0,0.02)]`}
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full ring-1 ring-inset ring-current/20">
                {/* subtle warning/info icon (no external library) */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-3.5 w-3.5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {severity === "error" ? (
                    <>
                      <path d="M12 9v4" />
                      <path d="M12 17h.01" />
                      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                    </>
                  ) : (
                    <>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </>
                  )}
                </svg>
              </span>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[15px] font-semibold leading-5">{alertTitle}</p>

                  {/* Attempts pill (hide at >= MAX) */}
                  {attempts < MAX_ATTEMPTS && attempts > 0 && (
                    <span className="inline-flex items-center rounded-full bg-white/80 px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset ring-slate-200">
                      Attempt {attempts} of {MAX_ATTEMPTS}
                    </span>
                  )}
                </div>
                <div className="mt-1.5 text-sm leading-6">{alertBody}</div>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAlert(false)}
                    className="text-[13px] font-medium underline underline-offset-2 hover:no-underline"
                  >
                    Dismiss
                  </button>

                  <a
                    href="#"
                    className="text-[13px] font-medium underline underline-offset-2 hover:no-underline"
                    onClick={(e) => {
                      e.preventDefault();
                      // open reset password flow
                    }}
                  >
                    Reset password
                  </a>

                  {attempts >= MAX_ATTEMPTS && (
                    <button
                      type="button"
                      onClick={openTidioChat}
                      className="text-[13px] font-medium underline underline-offset-2 hover:no-underline"
                    >
                      Contact chat
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Email or mobile number
            </label>
            <input
              id="email"
              type="text"
              inputMode="email"
              autoComplete="username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or mobile number"
              className="w-full h-12 px-4 rounded-md border border-slate-300 bg-white text-[15px]
                         placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0070BA] focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full h-12 px-4 rounded-md border border-slate-300 bg-white text-[15px]
                         placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0070BA] focus:border-transparent"
            />
          </div>

          <div className="text-left">
            <a href="#" className="text-sm font-medium text-[#0070BA] hover:underline">
              Forgotten password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 rounded-full bg-[#0070BA] text-white text-[15px] font-semibold
                       hover:bg-[#005EA6] active:bg-[#004B86] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}

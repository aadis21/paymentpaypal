"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle login
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 px-4 py-10">
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
            <a
              href="#"
              className="text-sm font-medium text-[#0070BA] hover:underline"
            >
              Forgotten password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-full bg-[#0070BA] text-white text-[15px] font-semibold
                       hover:bg-[#005EA6] active:bg-[#004B86] transition-colors"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

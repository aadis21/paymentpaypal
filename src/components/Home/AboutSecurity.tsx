"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSecurity: React.FC = () => {
  return (
    <section
      id="about-security"
      aria-labelledby="about-security-title"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-14">
        {/* LEFT: Heading + copy + buttons */}
        <div>
          <h2
            id="about-security-title"
            className="text-[#0A2A66] font-extrabold leading-tight
                       text-[26px] sm:text-[32px] md:text-[36px]"
          >
            We support businesses
            <br className="hidden sm:block" />
            just like yours
          </h2>

          <p className="mt-3 max-w-xl text-[14px] sm:text-[15px] leading-relaxed text-slate-700">
            Every business needs the right tools to grow. From secure payment
            processing to helpful business insights, we’ve got you covered.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/signup"
              prefetch={false}
              className="inline-flex items-center justify-center rounded-full
                         bg-[#0A2A66] text-white px-5 py-2.5 text-sm font-semibold
                         hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#0A2A66]/40"
              aria-label="Sign Up"
            >
              Sign Up
            </Link>

            <Link
              href="/contact-sales"
              prefetch={false}
              className="inline-flex items-center justify-center rounded-full
                         border border-[#0A2A66] text-[#0A2A66] px-5 py-2.5 text-sm font-semibold
                         hover:bg-[#0A2A66]/5 focus:outline-none focus:ring-2 focus:ring-[#0A2A66]/20"
              aria-label="Contact Sales"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        {/* RIGHT: Single image inside light panel (matches look & spacing) */}
        <div
          className="relative w-full rounded-3xl bg-[#F4F6F9] p-4 sm:p-6 lg:p-8"
          aria-hidden="true"
        >
          <div className="mx-auto w-full flex items-center justify-center">
            <Image
              src="/hero/support-right.webp" // <- put your single composite image here (public/hero/)
              alt="Business payments and analytics preview"
              width={960}
              height={640}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
              className="w-full max-w-xl h-auto object-contain rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,0.10)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSecurity;

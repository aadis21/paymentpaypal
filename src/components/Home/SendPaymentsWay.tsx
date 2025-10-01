"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const PaymentOptionsHero: React.FC = () => {
  return (
    <section
      id="payment-options"
      aria-labelledby="payment-options-title"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12">
        {/* LEFT: Headline + buttons */}
        <div>
          <h2
            id="payment-options-title"
            className="text-[#0A2A66] font-extrabold leading-tight
                       text-[26px] sm:text-[32px] md:text-[36px]"
          >
            Drive conversion with
            <br className="hidden sm:block" />
            the payment options
            <br className="hidden sm:block" />
            your customers prefer
          </h2>

          <div className="mt-6 space-y-3">
            <Link
              href="/payments/smb"
              prefetch={false}
              aria-label="Payments for Small Businesses"
              className="inline-flex items-center justify-center rounded-full
                         border border-[#0A2A66] text-[#0A2A66]
                         px-5 py-2.5 text-sm font-semibold hover:bg-[#0A2A66]/5
                         transition"
            >
              Payments for Small Businesses
            </Link>

            <div>
              <Link
                href="/payments/enterprise"
                prefetch={false}
                aria-label="Payments for Enterprises"
                className="inline-flex items-center justify-center rounded-full
                           border border-[#0A2A66] text-[#0A2A66]
                           px-5 py-2.5 text-sm font-semibold hover:bg-[#0A2A66]/5
                           transition"
              >
                Payments for Enterprises
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT: Single image */}
        <div className="relative flex justify-center lg:justify-end">
          <Image
            src="/hero/code-card.png" // <- apni image public/hero/ folder me rakhe
            alt="Payment options preview"
            width={520}
            height={360}
            className="w-full max-w-md h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentOptionsHero;

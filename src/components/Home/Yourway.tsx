"use client";

import React from "react";
import Link from "next/link";

/**
 * Yourway Section
 * - Keeps the same design as the reference (heading + 2 cards + pill buttons)
 * - Mobile-first, accessible, and SEO-optimized copy
 * - JSON-LD (PaymentService) for better search appearance
 */
const Yourway: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PaymentService",
    "name": "Business Payments Platform",
    "description":
      "Accept UPI, cards, and wallets with a secure payments platform for small businesses and enterprises. Fast setup, fraud protection, and powerful APIs.",
    "serviceType": "Online payment processing",
    "areaServed": "IN",
    "offers": [
      { "@type": "Offer", "name": "Small Business Solutions" },
      { "@type": "Offer", "name": "Enterprise Solutions" }
    ],
  };

  return (
    <section
      id="business-payments"
      className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20"
      aria-labelledby="payments-heading"
    >
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Heading — same style & hierarchy as reference */}
      <div className="text-center mb-10 md:mb-14">
        <h2
          id="payments-heading"
          className="text-[26px] sm:text-[32px] md:text-[40px] leading-tight font-extrabold text-[#0A2A66]"
        >
          A complete payments platform for businesses of all sizes
        </h2>
      </div>

      {/* Two cards — same layout, color contrast, rounded corners, spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Small businesses card */}
        <article
          className="rounded-2xl bg-[#F4F6F9] p-6 md:p-8 shadow-sm"
          aria-labelledby="smb-title"
        >
          <h3
            id="smb-title"
            className="text-[20px] sm:text-[22px] font-semibold text-[#0A2A66]"
          >
            Small businesses
          </h3>

          <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-slate-700">
            Start accepting payments in minutes—UPI, cards, and popular wallets.
            Share payment links, generate GST-ready invoices, offer subscriptions,
            and track payouts in one place. Built-in fraud checks keep every
            transaction safer.
          </p>

          <ul className="mt-4 space-y-2 text-[14px] text-slate-700 list-disc pl-5">
            <li>Quick setup with no heavy development</li>
            <li>Payment links, QR, invoices & subscriptions</li>
            <li>Dashboard analytics, refunds & settlement reports</li>
          </ul>

          <div className="mt-6">
            <Link
              href="/solutions/smb"
              prefetch={false}
              aria-label="Explore small business payment solutions"
              className="inline-flex items-center rounded-full bg-[#062E6F] px-5 py-2.5 text-white text-sm font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#062E6F]/40"
            >
              Small Business Solutions
            </Link>
          </div>
        </article>

        {/* Enterprise solutions card */}
        <article
          className="rounded-2xl bg-[#F4F6F9] p-6 md:p-8 shadow-sm"
          aria-labelledby="enterprise-title"
        >
          <h3
            id="enterprise-title"
            className="text-[20px] sm:text-[22px] font-semibold text-[#0A2A66]"
          >
            Enterprise solutions
          </h3>

          <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-slate-700">
            Expand globally with end-to-end processing: vaulting & tokenization,
            3-D Secure 2, risk & chargeback tools, smart routing, and detailed
            reconciliation. Plug into your stack with clean APIs and webhooks.
          </p>

          <ul className="mt-4 space-y-2 text-[14px] text-slate-700 list-disc pl-5">
            <li>Global methods, multi-currency & settlement controls</li>
            <li>Advanced risk, 3DS2, and dispute management</li>
            <li>Reporting, webhooks & orchestration-ready APIs</li>
          </ul>

          <div className="mt-6">
            <Link
              href="/solutions/enterprise"
              prefetch={false}
              aria-label="Explore enterprise payment solutions"
              className="inline-flex items-center rounded-full bg-[#062E6F] px-5 py-2.5 text-white text-sm font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#062E6F]/40"
            >
              Enterprise Solutions
            </Link>
          </div>
        </article>
      </div>

      {/* Lightweight trust signals for CTR/Quality Score without changing design */}
      {/* <div className="mt-10 md:mt-12">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500">
          <li>PCI DSS compliant</li>
          <li className="hidden sm:inline">•</li>
          <li>High conversion checkout</li>
          <li className="hidden sm:inline">•</li>
          <li>UPI • Cards • Wallets</li>
          <li className="hidden sm:inline">•</li>
          <li>Developer-friendly APIs</li>
        </ul>
      </div> */}
    </section>
  );
};

export default Yourway;

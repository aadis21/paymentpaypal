"use client";

import React from "react";
import Image from "next/image";

/**
 * Put images in /public/features/...
 * Card sizes and shapes match your screenshot (rounded blue band + white inner card).
 * No "Learn more" CTA.
 */
const features = [
  {
    title: "Grow with our data-rich network",
    desc:
      "Access conversion tools powered by data from our global network of 430+ million active accounts and the 5 billion cards stored in our payments vault.",
    img: "/features/analytics.webp",
    alt: "Transactions chart showing approved, rejected and chargeback trends",
    bandColor: "#0A6CF1", // bright blue
  },
  {
    title: "Optimise and manage risk",
    desc:
      "Stay in control of your business with tools to manage fraud, minimize declines, and more. Seller Protection helps protect eligible transactions against chargebacks and reversals due to fraud. Terms apply.",
    img: "/features/risk.jpg",
    alt: "Risk score dashboard showing recommended filter setting",
    bandColor: "#0A2A66", // deep navy
  },
  {
    title: "Simplify your payments setup",
    desc:
      "Reduce complexity as you grow with a provider that can connect to global payment systems and offer solutions that go beyond payments.",
    img: "/features/checkout.jpg",
    alt: "Logos of major cards and wallets supported at checkout",
    bandColor: "#0A55CC",
  },
  {
    title: "Connect to partner solutions",
    desc:
      "Integrate with commerce, CRM and accounting tools using prebuilt extensions or flexible APIs—no heavy lifting.",
    img: "/features/partners.jpg",
    alt: "Partner integrations for payments platforms",
    bandColor: "#0B5FE0",
  },
  {
    title: "Build with secure innovation",
    desc:
      "Launch faster with SDKs, tokenisation, webhooks and a robust sandbox. Scale with enterprise-grade security and compliance.",
    img: "/features/innovation.jpg",
    alt: "Developer tooling and API code snippets",
    bandColor: "#1349B9",
  },
  {
    title: "Accept cross-border payments",
    desc:
      "Reach global buyers with multi-currency pricing, local methods and transparent settlement so you can expand confidently.",
    img: "/features/crossborder.jpg",
    alt: "World map showing cross-border payment routes",
    bandColor: "#1659D6",
  },
];

const Simplified: React.FC = () => {
  return (
    <section
      id="capabilities"
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20"
      aria-labelledby="capabilities-title"
    >
      {/* Heading */}
      <div className="text-center">
        <h2
          id="capabilities-title"
          className="text-[26px] sm:text-[32px] md:text-[36px] leading-tight font-extrabold text-[#0A2A66]"
        >
          All-in-one payments capabilities built for growth
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[14px] sm:text-[15px] text-slate-600">
          Accept cards, UPI and wallets, manage fraud, and scale globally with a
          platform optimised for conversions and reliability.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, idx) => (
          <article
            key={idx}
            className="overflow-hidden rounded-[22px] bg-transparent shadow-sm transition hover:shadow-md focus-within:shadow-md"
            aria-labelledby={`feature-${idx}`}
          >
            {/* TOP: Blue band */}
            <div
              className="relative rounded-t-[22px]"
              style={{ backgroundColor: f.bandColor }}
            >
              <div className="relative flex items-center justify-center px-6 py-7 sm:py-8 md:py-9">
                <div
                  className="bg-white rounded-[16px] shadow-[0_10px_24px_rgba(0,0,0,0.18)]
                             w-[86%] sm:w-[78%] md:w-[74%]
                             h-28 sm:h-32 md:h-36
                             flex items-center justify-center"
                >
                  <Image
                    src={f.img}
                    alt={f.alt}
                    width={520}
                    height={320}
                    className="h-[82%] w-[90%] object-contain"
                    sizes="(max-width:640px) 88vw, (max-width:1024px) 44vw, 32vw"
                    {...(idx < 2 ? { priority: true } : { loading: "lazy" })}
                  />
                </div>
              </div>
            </div>

            {/* BOTTOM: Text body */}
            <div className="rounded-b-[22px] bg-[#F1F4F8] p-6">
              <h3
                id={`feature-${idx}`}
                className="text-[20px] sm:text-[21px] font-extrabold text-[#0A2A66] leading-snug"
              >
                {f.title}
              </h3>
              <p className="mt-3 text-[14px] sm:text-[15px] text-slate-700 leading-relaxed">
                {f.desc}
              </p>
              {/* "Learn more" removed as requested */}
            </div>
          </article>
        ))}
      </div>

      {/* Optional structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Payments Platform Capabilities",
            itemListElement: features.map((f, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: f.title,
              description: f.desc,
            })),
          }),
        }}
      />
    </section>
  );
};

export default Simplified;

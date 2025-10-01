"use client";

import React from "react";
import Image from "next/image";

const Simplified: React.FC = () => {
  // Example image names, keep these files inside /public folder
  const features = [
    {
      title: "Grow with our data-rich insights",
      desc: "Access dashboards powered by real payment signals. Track funnels, repeat buyers, refunds, and trends to optimize conversion and lifetime value.",
      img: "/features/analytics.webp",
    },
    {
      title: "Optimise and manage risk",
      desc: "Stay ahead with device intelligence, velocity rules, and dispute workflows—reducing chargebacks while protecting genuine customers.",
      img: "/features/risk.jpg",
    },
    {
      title: "Simplify your checkout",
      desc: "Offer UPI, cards, and wallets with a friction-light flow. Reduce drop-offs and guide buyers to confirmation faster.",
      img: "/features/checkout.jpg",
    },
    {
      title: "Integrated with partner solutions",
      desc: "Connect easily with commerce, accounting, and CRM tools. Use extensions or APIs to integrate payments into your workflow.",
      img: "/features/partners.jpg",
    },
    {
      title: "Access smart innovation",
      desc: "Build faster with SDKs, webhooks, sandbox testing, and tokenization. Launch new journeys quickly with security in mind.",
      img: "/features/innovation.jpg",
    },
    {
      title: "Get cross-border payments",
      desc: "Sell worldwide with multi-currency support, local methods, and transparent settlement—so you can grow into new markets confidently.",
      img: "/features/crossborder.jpg",
    },
  ];

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
          All-in-one capabilities built
          <br className="hidden sm:block" /> with your business in mind
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-[14px] sm:text-[15px] text-slate-600">
          From card processing to fraud management and marketing, we provide the
          tools your business needs to grow—securely and at scale.
        </p>
      </div>

      {/* Grid of 6 cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, idx) => (
          <article
            key={idx}
            className="rounded-2xl bg-[#F4F6F9] p-5 shadow-sm"
            aria-labelledby={`feature-${idx}`}
          >
            {/* Image block */}
            <div className="mb-4 h-28 w-full flex items-center justify-center">
              <Image
                src={f.img}
                alt={f.title}
                width={120}
                height={80}
                className="object-contain h-20"
              />
            </div>

            <h3
              id={`feature-${idx}`}
              className="text-[16px] sm:text-[17px] font-semibold text-[#0A2A66]"
            >
              {f.title}
            </h3>
            <p className="mt-2 text-[13.5px] text-slate-700 leading-relaxed">
              {f.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Simplified;

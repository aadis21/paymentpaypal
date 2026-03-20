"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

/* ---------- Content ---------- */
const solutions = [
  {
    label: "Small Businesses",
    href: "/solutions/smb",
    sr: "Payment links, checkout, and invoices for small and local businesses.",
  },
  {
    label: "Enterprise Solutions",
    href: "/solutions/enterprise",
    sr: "Advanced payment processing, risk management, and global methods for enterprises.",
  },
  {
    label: "Third-Party Integrations",
    href: "/solutions/integrations",
    sr: "Connect with ecommerce platforms, accounting tools, and CRMs using plugins and APIs.",
  },
  {
    label: "Developers",
    href: "/developers",
    sr: "SDKs, webhooks, and sandbox tools to build custom, secure payment experiences.",
  },
];

/* ---------- Icons ---------- */
const ArrowChip = () => (
  <span
    aria-hidden="true"
    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E6F0FF]"
  >
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-[#0A67FF]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h12" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  </span>
);

/* ---------- Animations ---------- */
const container: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const listStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.44, ease: [0.22, 1, 0.36, 1] },
  },
};

const GetPaid: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.section
      id="get-paid"
      aria-labelledby="get-paid-heading"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16"
      /* Down-to-up reveal when scrolled into view */
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={prefersReduced ? undefined : container}
    >
      {/* Heading */}
      <motion.div
        className="max-w-3xl"
        variants={prefersReduced ? undefined : container}
      >
        <h2
          id="get-paid-heading"
          className="text-[#0A2A66] font-extrabold leading-tight
                     text-[26px] sm:text-[32px] md:text-[36px]"
        >
          Find a payment solution
          <br className="hidden sm:block" />
          that fits your business needs
        </h2>
      </motion.div>

      {/* 2×2 Grid with staggered card reveal */}
      <motion.div
        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={prefersReduced ? undefined : listStagger}
      >
        {solutions.map((itemData) => (
          <motion.div key={itemData.label} variants={prefersReduced ? undefined : item}>
            <Link
              href={itemData.href}
              prefetch={false}
              className="group flex items-center justify-between rounded-2xl
                         bg-[#F4F6F9] px-6 py-5 md:py-6
                         shadow-sm hover:shadow-md transition-shadow
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2A66]/40"
              aria-label={itemData.label}
            >
              <div>
                <span className="block text-[15px] sm:text-[16px] font-semibold text-[#0A2A66]">
                  {itemData.label}
                </span>
                <span className="sr-only">{itemData.sr}</span>
              </div>

              <div className="transition-transform group-hover:translate-x-0.5">
                <ArrowChip />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default GetPaid;

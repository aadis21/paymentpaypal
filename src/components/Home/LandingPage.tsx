"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const fadeDown: Variants = {
  hidden: { opacity: 0, y: -18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const LandingPage: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative isolate flex items-center justify-center text-center"
      aria-labelledby="hero-title"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#071B34]" />{/* deep navy */}
      
      {/* Content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-36"
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeDown}
          className="text-[13px] sm:text-[14px] font-semibold tracking-wide text-white/80"
        >
          PayPal business solutions
        </motion.p>

        {/* Headline */}
        <motion.h1
          id="hero-title"
          variants={fadeDown}
          className="mt-3 font-extrabold text-white leading-[1.05]
                     text-[34px] sm:text-[44px] md:text-[60px] lg:text-[72px]"
        >
          Smart, trusted payment
          <br className="hidden sm:block" />
          solutions built for growth.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          variants={fadeDown}
          className="mx-auto mt-4 max-w-2xl text-white/85
                     text-[14px] sm:text-[15px] md:text-[16px]"
        >
          Drive conversion with an all-in-one payments platform fueled by{" "}
          <strong className="font-semibold">430+ million</strong> active accounts.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeDown}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/signup"
            prefetch={false}
            aria-label="Sign up for a PayPal business account"
            className="inline-flex items-center justify-center rounded-full
                       bg-white text-[#071B34] px-5 py-2.5 text-sm font-semibold
                       hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Sign Up
          </Link>

          <Link
            href="/contact-sales"
            prefetch={false}
            aria-label="Contact PayPal sales"
            className="inline-flex items-center justify-center rounded-full
                       border border-white/80 text-white px-5 py-2.5 text-sm font-semibold
                       hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Contact Sales
          </Link>
        </motion.div>

        {/* Helper line with phone */}
        <motion.p
          variants={fadeDown}
          className="mt-5 text-white/75 text-[12.5px] sm:text-[13px]"
        >
          Talk to an account specialist to get started,&nbsp;
          <Link
            href="tel:+912261451405"
            className="underline underline-offset-2 hover:text-white"
          >
            91-22-61451405
          </Link>
          .
        </motion.p>
      </motion.div>
    </section>
  );
};

export default LandingPage;

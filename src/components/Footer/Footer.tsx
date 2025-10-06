import React from "react";
import Image from "next/image";

const topLinks = [
  { label: "Help", href: "#" },
  { label: "Contact us", href: "#" },
  { label: "Fees", href: "#" },
  { label: "Security", href: "#" },
  { label: "Shop", href: "#" },
];

const siteLinks = [
  { label: "About", href: "#" },
  { label: "Newsroom", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Developers", href: "#" },
  { label: "Partners", href: "#" },
  { label: "Accessibility", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "CSR", href: "#" },
  { label: "Annual Returns", href: "#" },
  { label: "Legal", href: "#" },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-[#0a2540] to-[#001435] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Row 1: Logo + top links */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            {/* If you have a logo file, replace with your Image src */}
            {/* <Image src="/logo.svg" alt="Logo" width={110} height={28} /> */}
            <span className="inline-flex items-center gap-2 text-xl font-semibold tracking-wide">
              <svg width="28" height="28" viewBox="0 0 24 24" className="opacity-90">
                <path
                  d="M7 3h8a6 6 0 0 1 0 12h-3l-.7 4.2a1 1 0 0 1-1 .8H6.2a.8.8 0 0 1-.8-.9L6 10h6a3 3 0 0 0 0-6H7z"
                  fill="currentColor"
                />
              </svg>
              PayPal
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {topLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/80 hover:text-white underline-offset-4 hover:underline transition"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-white/10" />

        {/* Row 2: site links + country */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {siteLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/80 hover:text-white underline-offset-4 hover:underline transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Country pill (India) */}
          {/* <button
            type="button"
            className="self-start md:self-auto inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 transition"
          >
            <span className="text-base leading-none">🇮🇳</span>
            India
          </button> */}
        </div>

        {/* Legal text */}
        <div className="mt-6 space-y-4 text-[13px] leading-relaxed text-white/75">
          <p>
            PayPal Services in India are provided by PayPal Payments Private Limited (CIN U74990MH2009PTC194653).
            Users are advised to read the terms and conditions carefully.
          </p>
          <p>
            When you visit or interact with our sites, services, applications, tools or messaging, we or our authorised service
            providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with
            a better, faster and safer experience and for advertising purposes.{" "}
            <a href="#" className="text-white hover:underline">
              Learn more here
            </a>
            .
          </p>
          <p className="text-white/60">
            © {year} PayPal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    title: "Personal",
    links: ["Overview", "Send Money", "Request Money", "Offers"],
  },
  {
    title: "Small Business",
    links: ["Solutions", "Invoicing", "Payments", "Integrations"],
  },
  {
    title: "Enterprise",
    links: ["Overview", "API Docs", "Integrations"],
  },
  {
    title: "Partners",
    links: ["Find a Partner", "Become a Partner"],
  },
  {
    title: "Useful Info",
    links: ["Help Center", "Contact", "FAQ"],
  },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const router = useRouter();

  return (
    <header className="w-full bg-white text-blue-900 py-4 shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="w-24 h-12 cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="object-cover"
          />
        </div>
        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          {menuItems.map((menu) => (
            <div
              key={menu.title}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu.title)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="hover:text-blue-700 font-medium">
                {menu.title} ▾
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {openMenu === menu.title && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2"
                  >
                    {menu.links.map((link, idx) => (
                      <li key={idx}>
                        <Link
                          href="/"
                          className="block px-4 py-2 hover:bg-blue-50 rounded"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Right Side Buttons */}
          <div className="flex space-x-3">
            <Link
              href="/login"
              className="px-5 py-2 border border-blue-900 rounded-full font-semibold hover:bg-blue-50"
            >
              Log In
            </Link>
            {/* <Link
              href="/signup"
              className="px-5 py-2 bg-blue-900 text-white rounded-full font-semibold hover:bg-blue-800"
            >
              Sign Up
            </Link> */}
          </div>
        </nav>
      </div>
    </header>
  );
}

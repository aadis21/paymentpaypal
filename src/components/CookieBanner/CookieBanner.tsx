"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setShowBanner(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-gray-100 text-gray-900 p-4 sm:p-5 rounded-xl shadow-md flex flex-col sm:flex-row items-center gap-4 max-w-7xl w-full z-50">
      <p className="text-sm sm:text-base flex-1">
        If you accept cookies, we&#39;ll use them to improve and customise your
        experience and enable our partners to show you personalised ads when you
        visit other sites.{" "}
        <a href="#" className="text-blue-600 underline hover:text-blue-800">
          Manage cookies and learn more
        </a>
      </p>
      <div className="flex gap-2 sm:gap-3 items-center">
        <button
          onClick={handleAccept}
          className="border border-gray-400 text-gray-900 hover:bg-blue-700 cursor-pointer px-4 py-1.5 rounded-full text-sm font-medium transition"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="border border-gray-400 hover:bg-gray-300 cursor-pointer text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium transition"
        > 
          Decline
        </button>
        <button
          onClick={() => setShowBanner(false)}
          className="text-gray-500 hover:text-gray-700 transition cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

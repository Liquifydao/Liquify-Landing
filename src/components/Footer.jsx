import React from "react";
import { Twitter, Send, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto border-t border-white/10 p-6 bg-black text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Liquify Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="font-semibold text-2xl tracking-tight">
              Liquify
            </span>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 text-gray-200">

            <span className=" text-sm">
              © Liquify Dao 2025
            </span>

            <a
              href="https://x.com/LiquifyDAO"
              className="text-gray-500 text-gray-200 hover:text-white transition"
            >
              <Twitter size={20} />
            </a>

            <a
              href="https://t.me/Liquifycommunity"
              className="text-gray-500 text-gray-200 hover:text-white transition"
            >
              <Send size={20} />
            </a>

          </div>
        </div>
    </footer>
  );
};

export default Footer;

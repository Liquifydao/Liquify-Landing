import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-6 bg-black/50 backdrop-blur-md border-b border-white/10 text-white md:py-8 py-4">

        <div className="flex items-center justify-between">

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


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="https://app.liquifydao.com" className="hover:text-white transition">Staking</a>
            <a href="https://app.liquifydao.com" className="hover:text-white transition">Yield</a>
            <a href="https://app.liquifydao.com" className="hover:text-white transition">Liquidity</a>
            <a href="https://docs.liquifydao.com" className="hover:text-white transition">Docs</a>
            <a
              href="https://pools.liquifydao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition inline-block"
            >
              Launch App
            </a>

          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 mt-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-6 text-gray-300 text-sm pb-6">
          <a href="https://app.liquifydao.com" className="hover:text-white transition">Staking</a>
          <a href="https://app.liquifydao.com" className="hover:text-white transition">Yield</a>
          <a href="https://app.liquifydao.com" className="hover:text-white transition">Liquidity</a>
          <a href="https://docs.liquifydao.com" className="hover:text-white transition">Docs</a>

          <a
            href="https://pools.liquifydao.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-4 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition inline-block text-center"
          >
            Launch App
          </a>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

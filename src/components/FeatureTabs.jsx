import React, { useState, useEffect, useRef } from "react";
import { Twitter, Send, Github } from "lucide-react";

const tabs = [
  { tabsId: 1, label: "Liquid Staking" },
  { tabsId: 2, label: "High Stable Yield" },
  { tabsId: 3, label: "Liquidity Pools" },
];

const tabContents = [
  {
    tabsId: 1,
    title: "liBNB",
    description1:
      "A zero-cost solution to stake BNB with no liquidation risk",
    description2:
      "The liBNB token can be held in your wallet, amplifying the price movements of BNB write that and remove current  leverage option",
    leverage: "Current APY: 8%",
    buttonText: "Stake Now →",
    link: "https://stake.liquifydao.com/",
  },
  {
    tabsId: 2,
    title: "Stake BNB, USDT & LIQ",
    description1:
      "A yield bearing pools that accrues amplified returns from the staked tokens",
    description2:
      "The staked tokens helps secure the protocol while automatically earning compounded yields.",
    leverage: "keep curent apy 10-15%",
    buttonText: "Start Earning →",
    link: "https://pools.liquifydao.com/",
  },
  {
    tabsId: 3,
    title: "Liquidity Pools",
    description1:
      "A secure way to hold positions without relying on centralized custodians.",
    description2:
      "liquidity pools provides a high level of decentralization, making it ideal for storing value on-chain.",
    leverage: "",
    buttonText: "Add Liquidity →",
    link: "",
  },
];

const FeaturesTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeMobileId, setActiveMobileId] = useState(1);

  const sectionsRef = useRef([]);

  /* ================= MOBILE OBSERVER ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"));
            setActiveMobileId(id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const activeMobileContent = tabContents.find(
    (c) => c.tabsId === activeMobileId
  );

  const activeContent = tabContents.find(
    (c) => c.tabsId === activeTab
  );

  return (
    <section className="max-w-7xl mx-auto bg-black text-white">
      <div className="relative border border-white/10 rounded-xl bg-[#0b0b0b] overflow-hidden px-2 md:px-10 py-12 md:py-6">

        {/* Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-purple-900/40 to-transparent pointer-events-none" />

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:grid relative z-10 md:grid-cols-2 gap-10 items-center">

          {activeContent && (
            <>
              <div>
                <h2 className="text-4xl font-bold">
                  {activeContent.title}
                </h2>

                <p className="mt-4 text-lg text-gray-400 max-w-xl">
                  {activeContent.description1}
                </p>

                <div className="mt-8 inline-flex bg-white/5 p-1 rounded-xl">
                  {tabs.map((tab) => (
                    <button
                      key={tab.tabsId}
                      onClick={() => setActiveTab(tab.tabsId)}
                      className={`px-5 py-2 rounded-lg text-sm transition-all duration-200
                        ${
                          activeTab === tab.tabsId
                            ? "bg-white/15 text-white"
                            : "text-gray-400 hover:text-white"
                        }
                      `}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start gap-6">
                <p className="text-gray-300 text-lg max-w-md">
                  {activeContent.description2}
                </p>

                <div className="bg-green-900/40 text-green-400 px-4 py-2 rounded-lg text-sm">
                  {activeContent.leverage}
                </div>

                <a
                  href={activeContent.link}
                  className={`mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-2 rounded-xl font-semibold inline-block transition
                  ${!activeContent.link ? "opacity-50 pointer-events-none" : "hover:opacity-90"}
                  `}
                >
                  {activeContent.buttonText}
                </a>
              </div>
            </>
          )}
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden relative z-10 space-y-24 pb-32">

          {tabContents.map((content, index) => (
            <div
              key={content.tabsId}
              data-id={content.tabsId}
              ref={(el) => (sectionsRef.current[index] = el)}
              className="min-h-[70vh] space-y-6"
            >
              <h2 className="text-3xl font-bold">
                {content.title}
              </h2>

              <p className="text-gray-400">
                {content.description1}
              </p>

              <p className="text-gray-300">
                {content.description2}
              </p>

              <div className="bg-green-900/40 text-green-400 px-3 py-1.5 rounded-md text-xs inline-block">
                {content.leverage}
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10 px-4 py-3 z-50">

          <div className="flex items-center justify-between gap-4">

            {/* Social Media Left */}
            <div className="flex items-center gap-6 text-white">
              <a href="https://x.com/LiquifyDAO" className="hover:text-white  transition">
                <Twitter size={20} />
              </a>
              <a href="https://t.me/Liquifycommunity" className="hover:text-white transition">
                <Send size={20} />
              </a>
            </div>

            <a
              href={activeMobileContent.link}
              className={`bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap inline-block transition
              ${!activeMobileContent.link ? "opacity-50 pointer-events-none" : "hover:opacity-90"}
              `}
            >
              {activeMobileContent.buttonText}
            </a>

          </div>
        </div>


      </div>
    </section>
  );
};

export default FeaturesTabs;

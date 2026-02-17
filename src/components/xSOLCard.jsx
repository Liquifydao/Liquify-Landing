import React from 'react';

const xSOLCard = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* xSOL Card - Clean and Professional */}
          <div className="bg-[#0A0A0A] rounded-3xl p-12 border border-white/10">
            {/* Title */}
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                XSOL
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 text-center max-w-lg mx-auto">
              A zero-cost solution to leverage SOL with no liquidation risk
            </p>

            {/* Spacer */}
            <div className="h-8"></div>

            {/* Token Description */}
            <p className="text-gray-400 text-center text-sm max-w-md mx-auto">
              The xSOL token can be held in your wallet, amplifying the price movements of SOL
            </p>

            {/* Spacer */}
            <div className="h-8"></div>

            {/* Leverage Section */}
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Current leverage</div>
              <div className="text-7xl font-bold text-white mb-8">
                3.4x
              </div>
            </div>

            {/* Mint Button */}
            <div className="text-center">
              <button className="px-12 py-4 bg-white text-black rounded-xl font-semibold text-lg hover:bg-gray-200 transition min-w-[200px]">
                Mint xSOL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default xSOLCard;

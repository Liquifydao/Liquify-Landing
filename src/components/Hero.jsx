import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-black text-white">

        <div className="relative border border-white/10 rounded-xl bg-[#0b0b0b] overflow-hidden">

          <div className="grid md:grid-cols-2 items-center md:px-12 px-4 pt-24 pb-6">

            {/* ===== LEFT SIDE ===== */}
            <div>
              <h1 className="text-5xl leading-[0.9] font-bold tracking-tight">
                <div>The</div>
                <div>Multi-Chain</div>
                <div className="font-mono">Liquidity-Native</div>
                <div>Protocol</div>
              </h1>

              <p className="mt-4 text-xl text-gray-400">
                Your Capital, Optimized and Governed
              </p>
            </div>

            {/* ===== RIGHT SIDE ===== */}
            <div className="relative flex justify-center md:justify-end">

              {/* Abstract Line Background */}
              <div className="absolute inset-0 pointer-events-none opacity-30">

                {/* diagonal lines */}
                <div className="absolute inset-0
                  bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_60px)]"
                />

                {/* radial glow */}
                <div className="absolute inset-0
                  bg-[radial-gradient(circle_at_70%_40%,rgba(139,92,246,0.25),transparent_60%)]"
                />

              </div>

              {/* Image */}
              <div className="relative z-10 mt-10 md:mt-0 w-[520px] md:-mx-0 -mx-16 sm:w-[115%] md:w-[520px] max-w-none md:max-w-[560px]">

              <DotLottieReact
                src="https://lottie.host/7c61ef3c-5cb4-4674-a002-24fdb28b8443/sIuaYCkRII.lottie"
                loop
                autoplay
                className="w-full h-auto"
              />
              </div>


            </div>

          </div>

      </div>
    </section>
  );
};

export default Hero;

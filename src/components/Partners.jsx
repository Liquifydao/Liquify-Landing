import React from "react";

const partners = [
  {
    name: "WeLabs",
    logo: "/partner/welabs.png",
    link: "https://t.me/Liquifyann/994",
  },
  {
    name: "iFlux",
    logo: "/partner/iflux.png",
    link: "https://t.me/Liquifyann/947",
  },
  {
    name: "cache",
    logo: "/partner/cache.png",
    link: "https://t.me/Liquifyann/952",
  },
  {
    name: "blazpay",
    logo: "/partner/blazpay.png",
    link: "https://t.me/Liquifyann/954",
  },
  {
    name: "Custodiy",
    logo: "/partner/custodiy.png",
    link: "https://t.me/Liquifyann/973",
  },
  {
    name: "CoinStore",
    logo: "/partner/coinstore.png",
    link: "https://welabs.fund/",
  },
  {
    name: "GhostCoin",
    logo: "/partner/ghostcoin.png",
    link: "https://t.me/Liquifyann/974",
  },
  {
    name: "Bithealt",
    logo: "/partner/bithealt.png",
    link: "https://t.me/Liquifyann/948",
  },
  {
    name: "Lol",
    logo: "/partner/lol.jpg",
    link: "https://t.me/Liquifyann/942",
  },
  {
    name: "20+",
    logo: "/partner/more.png",
    link: "https://t.me/Liquifyann",
  },
];

const Partners = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
      {partners.map((partner, index) => (
        <a
          key={index}
          href={partner.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 border gap-2 border-white/10 rounded-xl p-2 flex items-center justify-center hover:bg-white/10 transition"
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="h-8 object-contain rounded-xl opacity-80 hover:opacity-100 transition"
          />
          <p> {partner.name} </p>
        </a>
      ))}
    </div>
  );
};

export default Partners;

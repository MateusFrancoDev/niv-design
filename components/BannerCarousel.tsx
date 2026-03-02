"use client";

import Image from "next/image";

// Row 1 - Objetos
const topRow = [
  { src: "/assets/banner-1.jpg", pos: "object-center" },
  { src: "/assets/banner-2.jpg", pos: "object-center" },
  { src: "/assets/banner-3.jpg", pos: "object-center" },
  { src: "/assets/banner-4.jpg", pos: "object-center" },
  { src: "/assets/banner-5.jpg", pos: "object-center" },
  { src: "/assets/banner-6.jpeg", pos: "object-[center_25%]" }, // Ajustado
];

// Row 2 - AGORA COMO OBJETOS TAMBÉM (Para não dar erro)
const bottomRow = [
  { src: "/assets/banner-4.jpg", pos: "object-center" },
  { src: "/assets/banner-6.jpeg", pos: "object-[center_25%]" }, // Ajuste igual aqui
  { src: "/assets/banner-2.jpg", pos: "object-center" },
  { src: "/assets/banner-5.jpg", pos: "object-center" },
  { src: "/assets/banner-1.jpg", pos: "object-center" },
  { src: "/assets/banner-3.jpg", pos: "object-center" },
];

const BannerCarousel = () => {
  return (
    <section className="py-10 md:py-14 overflow-hidden space-y-6 bg-background">
      {/* Row 1 — Esquerda */}
      <div className="flex overflow-hidden select-none">
        <div className="flex animate-scroll-left w-max gap-4 pr-4">
          {[...topRow, ...topRow].map((item, i) => (
            <div
              key={`top-${i}`}
              className="w-[320px] md:w-[480px] shrink-0 rounded-xl overflow-hidden border border-border group"
            >
              <Image
                src={item.src}
                alt="Banner"
                width={480}
                height={270}
                className={`w-full h-[180px] md:h-[270px] object-cover transition-transform duration-700 group-hover:scale-105 ${item.pos}`}
                priority={i < 4}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — Direita */}
      <div className="flex overflow-hidden select-none">
        <div className="flex animate-scroll-right w-max gap-4 pr-4">
          {[...bottomRow, ...bottomRow].map((item, i) => (
            <div
              key={`bot-${i}`}
              className="w-[320px] md:w-[480px] shrink-0 rounded-xl overflow-hidden border border-border group"
            >
              <Image
                src={item.src}
                alt="Banner"
                width={480}
                height={270}
                // Agora usamos item.pos aqui também!
                className={`w-full h-[180px] md:h-[270px] object-cover transition-transform duration-700 group-hover:scale-105 ${item.pos}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;

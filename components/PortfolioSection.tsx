"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

const portfolioData = {
  videos: [
    {
      id: 1,
      title: "Final Metropolitano NACADÊNCIA F.C.",
      url: "/assets/video-1.mp4",
      insta: "https://www.instagram.com/reels/DDU8OVoyJ34/",
    },
    {
      id: 2,
      title: "Paredão Vila Izabel",
      url: "/assets/video-2.mp4",
      insta: "https://www.instagram.com/reels/DTyZ4iCkp0s/",
    },
    {
      id: 3,
      title: "Workshop Garcia Corts",
      url: "/assets/video-3.mp4",
      insta: "https://www.instagram.com/reels/DLi0Yc6Jg4p/",
    },
    {
      id: 4,
      title: "Aftermovie - Mc Kauan",
      url: "/assets/video-4.mp4",
      insta: "https://www.instagram.com/reels/C-_QFnWSDLu/",
    },
  ],
  photos: [
    {
      id: 101,
      title: "Snot Company",
      url: "/assets/foto-4.jpeg",
      insta: "https://www.instagram.com/p/CzUS6VRJPVV/",
    },
    {
      id: 102,
      title: "Vila Izabel x Sonar Music",
      url: "/assets/foto-5.jpg",
      insta: "https://www.instagram.com/p/DQ73Y77DWTh/?img_index=4",
    },
    {
      id: 103,
      title: "Pedro Gui x Philips",
      url: "/assets/banner-6.jpeg",
      insta: "https://www.instagram.com/p/DRnV3W2DnuL/?img_index=2",
    },
    {
      id: 104,
      title: "Victor Hugo Mc",
      url: "/assets/foto-6.jpeg",
      insta: "https://www.instagram.com/p/DLkcXoPgN7V/?img_index=1",
    },
  ],
};

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"videos" | "photos">("videos");
  const [currentIndex, setCurrentIndex] = useState(0);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [loadedItems, setLoadedItems] = useState<Set<string>>(new Set());

  const currentList = portfolioData[activeTab];

  // Pré-carrega próximos 2 itens para melhorar performance
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % currentList.length;
    const nexNextIndex = (currentIndex + 2) % currentList.length;

    // Pré-carrega próximos itens
    const preloadItem = (item: (typeof currentList)[0]) => {
      if (activeTab === "videos") {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "video";
        link.href = item.url;
        document.head.appendChild(link);
      } else {
        const img = new window.Image();
        img.src = item.url;
      }
    };

    preloadItem(currentList[nextIndex]);
    preloadItem(currentList[nexNextIndex]);
  }, [currentIndex, activeTab, currentList]);

  // Marca item como carregado
  const handleMediaLoad = (id: number) => {
    setLoadedItems((prev) => new Set(prev).add(`${activeTab}-${id}`));
  };

  // Funções de navegação reaproveitáveis
  const handleNext = () => {
    if (currentIndex < currentList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Navegação via Scroll do Mouse (Desktop)
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0) handleNext();
    else if (e.deltaY < 0) handlePrev();
  };

  // Bloqueia scroll da página ao tocar no celular
  const handleTouchStart = (e: React.TouchEvent) => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  };

  const handleTouchEnd = () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  };

  return (
    <section
      id="portfolio"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black py-10 overflow-hidden"
    >
      {/* Menu Superior */}
      <div className="z-20 text-center mb-8 px-4">
        <h2 className="text-white text-3xl md:text-5xl font-bebas mb-6 ">
          {t.portfolio.title}{" "}
          <span className="text-yellow-500 font-bebas">
            {t.portfolio.titleHighlight}
          </span>
        </h2>
        <div className="flex gap-2 bg-neutral-900 p-1 rounded-full border border-white/10 w-fit mx-auto">
          {["videos", "photos"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab as "videos" | "photos");
                setCurrentIndex(0);
              }}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {t.portfolio.tabs[tab as "videos" | "photos"]}
            </button>
          ))}
        </div>
      </div>

      {/* iPhone Mockup - Agora com suporte a Touch do Framer Motion */}
      <motion.div
        ref={phoneRef}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        // Captura o deslize no mobile
        onPanEnd={(e, info) => {
          const swipeThreshold = 50; // Sensibilidade: 50px de movimento
          if (info.offset.y < -swipeThreshold) handleNext(); // Swipe pra cima
          if (info.offset.y > swipeThreshold) handlePrev(); // Swipe pra baixo
        }}
        // touch-none impede que o navegador tente fazer scroll na página enquanto você desliza no mockup
        className="relative w-[280px] md:w-[320px] aspect-[9/16] z-10 group touch-none cursor-grab active:cursor-grabbing"
      >
        {/* Glow de fundo */}
        <div className="absolute inset-0 bg-yellow-500/10 blur-[100px] rounded-full" />

        <div className="absolute inset-0 rounded-[45px] bg-neutral-900 border-[8px] border-neutral-800 shadow-2xl overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-50" />

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${currentIndex}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-full"
            >
              {activeTab === "videos" ? (
                <>
                  <video
                    src={currentList[currentIndex].url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedData={() =>
                      handleMediaLoad(currentList[currentIndex].id)
                    }
                    className="w-full h-full object-cover"
                  />
                  {!loadedItems.has(
                    `${activeTab}-${currentList[currentIndex].id}`,
                  ) && (
                    <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
                  )}
                </>
              ) : (
                <>
                  <Image
                    src={currentList[currentIndex].url}
                    alt={currentList[currentIndex].title}
                    fill
                    sizes="320px"
                    className="object-cover shadow-inner"
                    onLoadingComplete={() =>
                      handleMediaLoad(currentList[currentIndex].id)
                    }
                    priority={true}
                    quality={90}
                  />
                  {!loadedItems.has(
                    `${activeTab}-${currentList[currentIndex].id}`,
                  ) && (
                    <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
                  )}
                </>
              )}

              {/* Overlay de Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <h3 className="text-white font-bebas text-lg leading-tight">
                    {currentList[currentIndex].title}
                  </h3>
                  <p className="text-white/60 text-[11px] leading-relaxed line-clamp-2 font-body">
                    {t.portfolio[activeTab][currentIndex]}
                  </p>
                  <a
                    href={currentList[currentIndex].insta}
                    target="_blank"
                    rel="noreferrer"
                    className="flex font-sans items-center justify-center w-full py-2.5 bg-yellow-500 text-black text-[10px] font-black uppercase tracking-tighter rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
                  >
                    {t.portfolio.openInstagram}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores Minimalistas laterais */}
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {currentList.map((_, i) => (
            <div
              key={i}
              className={`w-1 transition-all duration-500 rounded-full ${
                i === currentIndex ? "h-8 bg-yellow-500" : "h-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Dica visual para mobile */}
      <p className="text-white/20 text-[10px] mt-6 uppercase tracking-widest md:hidden animate-pulse font-body">
        {t.portfolio.swipeHint}
      </p>
    </section>
  );
};

export default PortfolioSection;

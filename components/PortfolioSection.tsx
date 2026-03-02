"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image"; // Importação do componente de Imagem do Next.js

// No Next.js, coloque seus vídeos e fotos dentro da pasta "public/assets"
// Dessa forma, você só precisa passar o caminho da string, sem precisar importar nada!
const portfolioData = {
  videos: [
    {
      id: 1,
      title: "Final Metropolitano NACADÊNCIA F.C.",
      url: "/assets/video-1.mp4",
      description: "Edição dinâmica para o campeonato de 2024.",
      insta: "https://www.instagram.com/reels/DDU8OVoyJ34/",
    },
    {
      id: 2,
      title: "Paredão Vila Izabel",
      url: "/assets/video-2.mp4",
      description: "Projeto NIV x VILA IZABEL.",
      insta: "https://www.instagram.com/reels/DTyZ4iCkp0s/",
    },
    {
      id: 3,
      title: "Workshop Garcia Corts",
      url: "/assets/video-3.mp4",
      description: "Registo emocional de evento transformador.",
      insta: "https://www.instagram.com/reels/DLi0Yc6Jg4p/",
    },
    {
      id: 4,
      title: "O terror tem nome",
      url: "/assets/video-4.mp4",
      description: "Curta-metragem focado em suspense e atmosfera.",
      insta: "https://instagram.com/seuuser",
    },
  ],
  photos: [
    {
      id: 101,
      title: "Ensaio Urbano",
      url: "/assets/foto-1.jpg",
      description: "Fotografia de rua com foco em alto contraste.",
      insta: "https://instagram.com/seuuser",
    },
    {
      id: 102,
      title: "Evento Corporativo",
      url: "/assets/foto-2.jpg",
      description: "Cobertura completa de eventos de grande porte.",
      insta: "https://instagram.com/seuuser",
    },
    {
      id: 103,
      title: "Retrato Profissional",
      url: "/assets/foto-3.jpg",
      description: "Iluminação de estúdio para marca pessoal.",
      insta: "https://instagram.com/seuuser",
    },
    {
      id: 104,
      title: "Arquitetura e Design",
      url: "/assets/foto-4.jpg",
      description: "Captura de interiores para portfólio de design.",
      insta: "https://instagram.com/seuuser",
    },
  ],
};

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState<"videos" | "photos">("videos");
  const [currentIndex, setCurrentIndex] = useState(0);
  const phoneRef = useRef<HTMLDivElement>(null);

  const currentList = portfolioData[activeTab];

  // --- LÓGICA DE TRAVAR O SCROLL DA PÁGINA ---
  useEffect(() => {
    const phoneEl = phoneRef.current;
    if (!phoneEl) return;

    // previne o scroll da página enquanto o cursor/dedo estiver sobre o mockup
    const block = (e: WheelEvent | TouchEvent) => {
      if (e.cancelable) e.preventDefault();
    };

    phoneEl.addEventListener("wheel", block, { passive: false });
    phoneEl.addEventListener("touchmove", block, { passive: false });

    return () => {
      phoneEl.removeEventListener("wheel", block);
      phoneEl.removeEventListener("touchmove", block);
    };
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.cancelable) e.preventDefault();

    if (e.deltaY > 0 && currentIndex < currentList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black py-10 overflow-hidden">
      {/* Menu Superior */}
      <div className="z-20 text-center mb-8 px-4">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 font-display">
          Meu <span className="text-yellow-500">Portfólio</span>
        </h2>
        <div className="flex gap-2 bg-neutral-900 p-1 rounded-full border border-white/10 w-fit mx-auto">
          {["videos", "photos"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab as "videos" | "photos");
                setCurrentIndex(0);
              }}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {tab === "videos" ? "Vídeos" : "Fotos"}
            </button>
          ))}
        </div>
      </div>

      {/* iPhone Mockup */}
      <div
        ref={phoneRef}
        onWheel={handleWheel}
        className="relative w-[280px] md:w-[320px] aspect-[9/16] z-10 group"
      >
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
              {/* Renderização da Mídia (Vídeo ou Imagem Otimizada) */}
              {activeTab === "videos" ? (
                <video
                  src={currentList[currentIndex].url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={currentList[currentIndex].url}
                  alt={currentList[currentIndex].title}
                  fill // Substitui o width/height quando o elemento pai tem tamanho definido
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover shadow-inner"
                  priority // Carrega a imagem com prioridade
                />
              )}

              {/* Overlay de Info unificada para ambos */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {currentList[currentIndex].title}
                  </h3>
                  <p className="text-white/60 text-[11px] leading-relaxed line-clamp-2">
                    {currentList[currentIndex].description}
                  </p>
                  <a
                    href={currentList[currentIndex].insta}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-full py-2.5 bg-yellow-500 text-black text-[10px] font-black uppercase tracking-tighter rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
                  >
                    Abrir no Instagram
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
      </div>
    </section>
  );
};

export default PortfolioSection;

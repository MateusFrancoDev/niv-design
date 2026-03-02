"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Sobre", "Serviços", "Portfólio", "Depoimentos", "Contato"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionIds: Record<string, string> = {
    Sobre: "about",
    Serviços: "services",
    Portfólio: "portfolio",
    Depoimentos: "testimonials",
    Contato: "cta",
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-surface py-4" : "py-6"
        }`}
      >
        <div className="container flex items-center justify-between md:pl-10">
          <motion.a
            href="#"
            className="font-omegle text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            NIV<span className="text-gradient-gold">.</span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10 ">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(sectionIds[item])}
                className="relative cursor-pointer  text-sm font-body tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <motion.button
            onClick={() => scrollTo("cta")}
            className="hidden cursor-pointer md:flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/30 text-sm font-body text-primary hover:bg-primary hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Iniciar Projeto
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="rotate-[-45deg]"
            >
              <path
                d="M1 7h12m0 0L8 2m5 5L8 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="block w-6 h-px bg-foreground"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-6 h-px bg-foreground"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="block w-6 h-px bg-foreground"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollTo(sectionIds[item])}
                className="font-display text-3xl text-foreground hover:text-primary transition-colors"
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

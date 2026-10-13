"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { languages } from "@/lib/translations";
import { Flag } from "@/components/Flags";

const LanguageSwitcher = ({ className = "" }: { className?: string }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`flex items-center gap-2.5 px-2 py-1.5 rounded-full border border-border ${className}`}
    >
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          aria-label={lang.name}
          title={lang.name}
          aria-pressed={language === lang.code}
          className={`cursor-pointer w-7 h-7 rounded-full overflow-hidden transition-all duration-300 ${
            language === lang.code
              ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
              : "opacity-40 grayscale hover:opacity-100 hover:grayscale-0"
          }`}
        >
          <Flag code={lang.code} />
        </button>
      ))}
    </div>
  );
};

const Header = () => {
  const { t } = useLanguage();
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
            {t.header.nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative cursor-pointer  text-sm font-body tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />

            {/* CTA */}
            <motion.button
              onClick={() => scrollTo("cta")}
              className="cursor-pointer flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/30 text-sm font-body text-primary hover:bg-primary hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.header.cta}
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
          </div>

          {/* Mobile: idioma + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-2"
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
            {t.header.nav.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollTo(item.id)}
                className="font-display text-3xl text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

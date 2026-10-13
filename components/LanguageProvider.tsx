"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, type Dictionary, type Language } from "@/lib/translations";

const STORAGE_KEY = "niv-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const isLanguage = (value: unknown): value is Language =>
  value === "pt" || value === "en" || value === "es";

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("pt");

  // Idioma salvo ou detectado pelo navegador na primeira visita.
  // Lido após a montagem para não gerar diferença de hidratação com o HTML do servidor.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {}

    if (isLanguage(saved)) {
      setLanguageState(saved);
      return;
    }

    const browser = navigator.language.slice(0, 2).toLowerCase();
    if (isLanguage(browser)) setLanguageState(browser);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-br" : language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de LanguageProvider");
  }
  return context;
};

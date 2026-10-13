"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const WHATSAPP_URL = "https://wa.me/5511959577652?text=";

const CTASection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="cta"
      className="relative py-32 md:py-48 overflow-hidden"
      ref={ref}
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-sm font-body tracking-[0.3em] uppercase text-primary">
              {t.cta.label}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.95]"
          >
            {t.cta.titleStart}{" "}
            <span className="text-gradient-gold">{t.cta.titleHighlight}</span>{" "}
            {t.cta.titleEnd}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground font-body max-w-lg mx-auto mb-12 leading-relaxed"
          >
            {t.cta.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href={WHATSAPP_URL + encodeURIComponent(t.cta.quoteMessage)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 50px hsl(36 80% 52% / 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-display font-semibold text-base rounded-full"
            >
              {t.cta.quote}
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 12L12 4M12 4H6M12 4V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>

            <motion.a
              href={WHATSAPP_URL + encodeURIComponent(t.cta.meetingMessage)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-10 py-5 rounded-full border border-border text-foreground font-display font-semibold text-base hover:border-primary/40 transition-colors"
            >
              {t.cta.meeting}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

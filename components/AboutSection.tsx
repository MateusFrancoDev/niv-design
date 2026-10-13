"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const valueNumbers = ["01", "02", "03"];

const statValues = ["120+", "98%", "3+", "1M+"];

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-12 md:py-20" ref={ref}>
      <div className="container">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-px bg-primary " />
          <span className="text-sm font-body tracking-[0.3em] uppercase text-primary">
            {t.about.label}
          </span>
        </motion.div>

        {/* Main statement */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl mb-12"
        >
          {t.about.title}{" "}
          <span className="text-gradient-gold ">{t.about.titleHighlight}</span>
        </motion.h2>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {t.about.values.map((val, i) => (
            <motion.div
              key={valueNumbers[i]}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
              className="group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-sm text-primary font-semibold">
                  {valueNumbers[i]}
                </span>
                <div className="h-px flex-1 bg-border group-hover:bg-primary/50 transition-colors duration-500" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {val.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="section-divider mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.about.stats.map((label, i) => (
            <motion.div
              key={statValues[i]}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-1">
                {statValues[i]}
              </div>
              <div className="text-xs font-body tracking-wide text-muted-foreground uppercase">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

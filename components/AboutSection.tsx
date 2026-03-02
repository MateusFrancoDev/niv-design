"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    number: "01",
    title: "Visão Estratégica",
    description:
      "Cada pixel tem propósito. Combinamos estética com dados e comportamento do usuário para criar interfaces que convertem.",
  },
  {
    number: "02",
    title: "Craft Obsessivo",
    description:
      "Atenção aos detalhes que separa o bom do extraordinário. Desde micro-interações até sistemas de design completos.",
  },
  {
    number: "03",
    title: "Inovação Contínua",
    description:
      "Exploramos novas tecnologias e tendências para entregar soluções que colocam sua marca à frente do mercado.",
  },
];

const stats = [
  { value: "120+", label: "Projetos Entregues" },
  { value: "98%", label: "Clientes Satisfeitos" },
  { value: "3+", label: "Anos de Experiência" },
  { value: "1M+", label: "Vizualizações" },
];

const AboutSection = () => {
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
            Sobre Nós
          </span>
        </motion.div>

        {/* Main statement */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl mb-12"
        >
          Design não é apenas como parece.{" "}
          <span className="text-gradient-gold ">É como funciona.</span>
        </motion.h2>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {values.map((val, i) => (
            <motion.div
              key={val.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
              className="group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-sm text-primary font-semibold">
                  {val.number}
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
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-body tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

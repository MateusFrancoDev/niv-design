'use client";';

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "A NIV transformou completamente nossa presença digital. O nível de atenção aos detalhes e a criatividade superaram todas as expectativas.",
    author: "Marina Costa",
    role: "CEO, TechFlow",
    avatar: "MC",
  },
  {
    id: 2,
    text: "Trabalhar com a NIV Design foi uma experiência incrível. Eles não apenas entregaram um design bonito, mas uma solução estratégica que triplicou nossas conversões.",
    author: "Rafael Mendes",
    role: "Founder, Nexo Digital",
    avatar: "RM",
  },
  {
    id: 3,
    text: "A equipe trouxe uma visão que nem sabíamos que precisávamos. O resultado final é um produto que nossos usuários amam e que nos diferencia no mercado.",
    author: "Juliana Alves",
    role: "CPO, Vortex Labs",
    avatar: "JA",
  },
];

const TestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="relative py-24 md:py-32" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-px bg-primary" />
          <span className="text-sm font-body tracking-[0.3em] uppercase text-primary">
            Depoimentos
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            O que dizem <span className="text-gradient-gold">sobre nós</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-sm text-muted-foreground font-body flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M2 8h12m0 0L10 4m4 4l-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Arraste para ver mais
          </motion.p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        className="flex gap-6 overflow-x-auto pb-6 px-8 md:px-16 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
            onMouseEnter={() => setActive(i)}
            className={`group relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer shrink-0 w-[340px] md:w-[400px] ${
              active === i
                ? "border-primary/30 bg-card glow-gold"
                : "border-border bg-transparent hover:border-border/60"
            }`}
          >
            <div className="font-display text-6xl text-primary/20 leading-none mb-4">
              "
            </div>

            <p className="font-body text-sm leading-relaxed text-muted-foreground mb-8">
              {t.text}
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-display font-bold text-primary">
                {t.avatar}
              </div>
              <div>
                <div className="font-display text-sm font-semibold">
                  {t.author}
                </div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

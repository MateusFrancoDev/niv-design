"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "A Niv elevou o marketing do Vila Izabel. Hoje temos uma comunicação mais profissional, estratégica e conectada com nossa torcida. Uma parceria que faz parte do nosso crescimento.",
    author: "Diretoria",
    role: "A.A Vila Izabel Osasco",
    avatar: "VI",
  },
  {
    id: 2,
    text: "Trabalhar com a NIV Design foi uma experiência incrível. Eles não apenas entregaram um design bonito, mas uma solução estratégica que triplicou nossas conversões.",
    author: "Katia",
    role: "Founder, Aroma de mãe",
    avatar: "K",
  },
  {
    id: 4,
    text: "A NIV transformou completamente nossa presença digital. O nível de atenção aos detalhes e a criatividade superaram todas as expectativas.",
    author: "Jonatas Lima",
    role: "CEO, Cold Sports",
    avatar: "JL",
  },
  {
    id: 5,
    text: "A Niv foi responsável por toda a estratégia de marketing e estrutura do Conhecimento Barber.",
    author: "Conhecimento Barber",
    role: "Barbeiros",
    avatar: "B",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="container px-6 md:px-16">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl font-bold mb-12"
        >
          O que dizem <span className="text-gradient-gold">sobre nós</span>
        </motion.h2>
      </div>

      {/* Scroll horizontal */}
      <div className="flex gap-6 overflow-x-auto pb-6 px-6 md:px-16">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onMouseEnter={() => setActive(i)}
            className={`shrink-0 w-[340px] md:w-[400px] p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
              active === i
                ? "border-primary/30 bg-card"
                : "border-border bg-transparent"
            }`}
          >
            <div className="text-6xl text-primary/20 mb-4">"</div>

            <p className="text-sm text-muted-foreground mb-8">{t.text}</p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                {t.avatar}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.author}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const testimonials = [
  {
    id: 1,
    avatar: "VI",
  },
  {
    id: 2,
    avatar: "K",
  },
  {
    id: 4,
    avatar: "JL",
  },
  {
    id: 5,
    avatar: "B",
  },
];

const TestimonialsSection = () => {
  const { t: dict } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [active, setActive] = useState(0);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // velocidade
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32" ref={ref}>
      <div className="container mb-12">
        <h2 className="font-display text-4xl md:text-6xl font-bold">
          {dict.testimonials.title}{" "}
          <span className="text-gradient-gold">
            {dict.testimonials.titleHighlight}
          </span>
        </h2>
      </div>

      {/* Scroll com drag */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex gap-6 overflow-x-scroll px-8 md:px-16 pb-6 cursor-grab active:cursor-grabbing select-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
            onMouseEnter={() => setActive(i)}
            className={`group relative p-8 rounded-2xl border transition-all duration-500 shrink-0 w-[340px] md:w-[400px] ${
              active === i
                ? "border-primary/30 bg-card glow-gold"
                : "border-border bg-transparent"
            }`}
          >
            <div className="font-display text-6xl text-primary/20 leading-none mb-4">
              "
            </div>

            <p className="font-body text-sm leading-relaxed text-muted-foreground mb-8">
              {dict.testimonials.items[i].text}
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-display font-bold text-primary">
                {t.avatar}
              </div>
              <div>
                <div className="font-display text-sm font-semibold">
                  {dict.testimonials.items[i].author}
                </div>
                <div className="text-xs text-muted-foreground">{dict.testimonials.items[i].role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

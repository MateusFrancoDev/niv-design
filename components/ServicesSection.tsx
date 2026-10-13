"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const services = [
  {
    id: "01",
    tags: [
      "Content Strategy",
      "Paid Ads",
      "Growth Marketing",
      "Analytics",
      "Brand Positioning",
    ],
  },
  {
    id: "02",
    tags: [
      "Logo Design",
      "Brand Strategy",
      "Visual Identity",
      "Typography",
      "Brand Guidelines",
    ],
  },
  {
    id: "03",
    tags: [
      "Web Applications",
      "UX Optimization",
      "Scalable Systems",
      "API Integration",
      "SEO",
    ],
  },
  {
    id: "04",
    tags: [
      "Brand Strategy",
      "Market Analysis",
      "Positioning",
      "Growth Planning",
      "Performance Metrics",
    ],
  },
];

const ServicesSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-32 md:py-48" ref={ref}>
      <div className="container">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-px bg-primary" />
          <span className="text-sm font-body tracking-[0.3em] uppercase text-primary">
            {t.services.label}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-3xl mb-20"
        >
          {t.services.title}{" "}
          <span className="text-gradient-gold">{t.services.titleHighlight}</span>
        </motion.h2>

        {/* Services list */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative border-t border-border py-10 md:py-14 cursor-pointer"
            >
              {/* Hover bg */}
              <motion.div
                className="absolute inset-0 bg-secondary/50"
                initial={{ scaleY: 0 }}
                animate={{
                  scaleY: hoveredService === service.id ? 1 : 0,
                }}
                style={{ originY: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />

              <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12 px-4">
                <span className="font-display text-sm text-primary font-semibold w-12 shrink-0">
                  {service.id}
                </span>

                <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight flex-1 group-hover:text-primary transition-colors duration-300">
                  {t.services.items[i].title}
                </h3>

                <p className="text-sm text-muted-foreground max-w-xs leading-relaxed hidden md:block">
                  {t.services.items[i].description}
                </p>

                {/* Arrow */}
                <motion.div
                  animate={{
                    x: hoveredService === service.id ? 0 : -10,
                    opacity: hoveredService === service.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0"
                ></motion.div>
              </div>

              {/* Tags (mobile description + tags) */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: hoveredService === service.id ? "auto" : 0,
                  opacity: hoveredService === service.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden relative"
              >
                <p className="text-sm text-muted-foreground max-w-sm leading-relaxed md:hidden px-4 pt-4">
                  {t.services.items[i].description}
                </p>
                <div className="flex flex-wrap gap-2 px-4 pt-4 md:pl-[calc(3rem+3rem)]">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

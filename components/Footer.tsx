"use client";

import { useLanguage } from "@/components/LanguageProvider";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="font-omegle text-lg font-bold tracking-tight text-foreground">
          NIV<span className="text-gradient-gold">.</span>
        </div>

        {/* Social */}
        <div className="flex items-center gap-8">
          <a
            href="https://www.instagram.com/niv.design7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-body tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Instagram
          </a>
        </div>

        {/* Copyright + Dev */}
        <div className="text-center md:text-right">
          <p className="text-xs text-muted-foreground font-body">
            © 2026 NIV Design. {t.footer.rights}
          </p>

          <p className="text-xs text-muted-foreground font-body mt-2">
            {t.footer.developedBy}{" "}
            <span className="text-foreground font-medium">Mateus Franco</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client";';

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-omegle text-lg font-bold tracking-tight text-foreground">
          NIV<span className="text-gradient-gold">.</span>
        </div>

        <div className="flex items-center gap-8">
          {["Instagram"].map((s) => (
            <a
              key={s}
              href="https://www.instagram.com/niv.design7/"
              className="text-xs font-body tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {s}
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground font-body">
          © 2026 NIV Design. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

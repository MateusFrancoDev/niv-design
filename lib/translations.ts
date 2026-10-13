export type Language = "pt" | "en" | "es";

export const languages: { code: Language; name: string }[] = [
  { code: "pt", name: "Português" },
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
];

const pt = {
  header: {
    nav: [
      { label: "Sobre", id: "about" },
      { label: "Serviços", id: "services" },
      { label: "Portfólio", id: "portfolio" },
      { label: "Depoimentos", id: "testimonials" },
      { label: "Contato", id: "cta" },
    ],
    cta: "Iniciar Projeto",
  },
  hero: {
    tagline: "Agência",
    taglineHighlight: "Digital",
    description:
      "Criamos experiências digitais que transformam marcas em referências. Design, código e estratégia em perfeita harmonia.",
    scroll: "Scroll",
  },
  about: {
    label: "Sobre Nós",
    title: "Design não é apenas como parece.",
    titleHighlight: "É como funciona.",
    values: [
      {
        title: "Visão Estratégica",
        description:
          "Cada pixel tem propósito. Combinamos estética com dados e comportamento do usuário para criar interfaces que convertem.",
      },
      {
        title: "Craft Obsessivo",
        description:
          "Atenção aos detalhes que separa o bom do extraordinário. Desde micro-interações até sistemas de design completos.",
      },
      {
        title: "Inovação Contínua",
        description:
          "Exploramos novas tecnologias e tendências para entregar soluções que colocam sua marca à frente do mercado.",
      },
    ],
    stats: [
      "Projetos Entregues",
      "Clientes Satisfeitos",
      "Anos de Experiência",
      "Visualizações",
    ],
  },
  services: {
    label: "Serviços",
    title: "O que fazemos",
    titleHighlight: "de melhor",
    items: [
      {
        title: "Social Media & Marketing Digital",
        description:
          "Desenvolvo estratégias de conteúdo, gestão de redes sociais e campanhas digitais para fortalecer marcas e aumentar conversões.",
      },
      {
        title: "Identidade Visual & Branding",
        description:
          "Identidades visuais memoráveis que comunicam a essência da sua marca e criam conexões emocionais duradouras.",
      },
      {
        title: "Desenvolvimento",
        description:
          "Código limpo, performático e acessível. React, Next.js e tecnologias modernas para experiências impecáveis.",
      },
      {
        title: "Planejamento Estratégico",
        description:
          "Desenvolvo estratégias personalizadas para posicionamento de marca, crescimento sustentável e geração de resultados no ambiente digital.",
      },
    ],
  },
  portfolio: {
    title: "Meu",
    titleHighlight: "Portfólio",
    tabs: { videos: "Vídeos", photos: "Fotos" },
    openInstagram: "Abrir no Instagram",
    swipeHint: "Deslize para cima ou para baixo",
    videos: [
      "Edição dinâmica para o campeonato de 2024.",
      "Projeto NIV x VILA IZABEL.",
      "Registro emocional de evento transformador.",
      "Energia pura em cada frame.",
    ],
    photos: [
      "Campanha feita para a marca Snot Company.",
      "Jogo beneficente realizado pela Sonar e Vila Izabel.",
      "Campanha feita para a marca Philips.",
      "Gravação de videoclipe.",
    ],
  },
  testimonials: {
    title: "O que dizem",
    titleHighlight: "sobre nós",
    items: [
      {
        text: "A Niv elevou o marketing do Vila Izabel. Hoje temos uma comunicação mais profissional, estratégica e conectada com nossa torcida. Uma parceria que faz parte do nosso crescimento.",
        author: "Diretoria",
        role: "A.A Vila Izabel Osasco",
      },
      {
        text: "Trabalhar com a NIV Design foi uma experiência incrível. Eles não apenas entregaram um design bonito, mas uma solução estratégica que triplicou nossas conversões.",
        author: "Katia",
        role: "Founder, Aroma de mãe",
      },
      {
        text: "A NIV transformou completamente nossa presença digital. O nível de atenção aos detalhes e a criatividade superaram todas as expectativas.",
        author: "Jonatas Lima",
        role: "CEO, Cold Sports",
      },
      {
        text: "A Niv foi responsável por toda a estratégia de marketing e estrutura do Conhecimento Barber. Desde o posicionamento até a divulgação, cada detalhe foi pensado para que o evento acontecesse de forma organizada, profissional e com grande impacto.",
        author: "Conhecimento Barber",
        role: "Barbeiros",
      },
    ],
  },
  cta: {
    label: "Vamos criar juntos?",
    titleStart: "Transforme sua",
    titleHighlight: "visão",
    titleEnd: "em realidade",
    description:
      "Pronto para elevar sua marca ao próximo nível? Entre em contato e vamos conversar sobre o seu projeto.",
    quote: "Solicitar Orçamento",
    quoteMessage: "Olá, gostaria de fazer um orçamento!",
    meeting: "Agendar Conversa",
    meetingMessage: "Olá, gostaria de agendar uma conversa!",
  },
  footer: {
    rights: "Todos os direitos reservados.",
    developedBy: "Desenvolvido por",
  },
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  header: {
    nav: [
      { label: "About", id: "about" },
      { label: "Services", id: "services" },
      { label: "Portfolio", id: "portfolio" },
      { label: "Testimonials", id: "testimonials" },
      { label: "Contact", id: "cta" },
    ],
    cta: "Start a Project",
  },
  hero: {
    tagline: "Digital",
    taglineHighlight: "Agency",
    description:
      "We create digital experiences that turn brands into benchmarks. Design, code and strategy in perfect harmony.",
    scroll: "Scroll",
  },
  about: {
    label: "About Us",
    title: "Design is not just how it looks.",
    titleHighlight: "It's how it works.",
    values: [
      {
        title: "Strategic Vision",
        description:
          "Every pixel has a purpose. We combine aesthetics with data and user behavior to create interfaces that convert.",
      },
      {
        title: "Obsessive Craft",
        description:
          "The attention to detail that separates good from extraordinary. From micro-interactions to complete design systems.",
      },
      {
        title: "Continuous Innovation",
        description:
          "We explore new technologies and trends to deliver solutions that put your brand ahead of the market.",
      },
    ],
    stats: ["Projects Delivered", "Satisfied Clients", "Years of Experience", "Views"],
  },
  services: {
    label: "Services",
    title: "What we do",
    titleHighlight: "best",
    items: [
      {
        title: "Social Media & Digital Marketing",
        description:
          "Content strategies, social media management and digital campaigns that strengthen brands and increase conversions.",
      },
      {
        title: "Visual Identity & Branding",
        description:
          "Memorable visual identities that communicate the essence of your brand and build lasting emotional connections.",
      },
      {
        title: "Development",
        description:
          "Clean, fast and accessible code. React, Next.js and modern technologies for flawless experiences.",
      },
      {
        title: "Strategic Planning",
        description:
          "Tailored strategies for brand positioning, sustainable growth and real results in the digital space.",
      },
    ],
  },
  portfolio: {
    title: "My",
    titleHighlight: "Portfolio",
    tabs: { videos: "Videos", photos: "Photos" },
    openInstagram: "Open on Instagram",
    swipeHint: "Swipe up or down",
    videos: [
      "Dynamic edit for the 2024 championship.",
      "NIV x VILA IZABEL project.",
      "Emotional coverage of a transformative event.",
      "Pure energy in every frame.",
    ],
    photos: [
      "Campaign created for the Snot Company brand.",
      "Charity match hosted by Sonar and Vila Izabel.",
      "Campaign created for the Philips brand.",
      "Music video shoot.",
    ],
  },
  testimonials: {
    title: "What they say",
    titleHighlight: "about us",
    items: [
      {
        text: "Niv took Vila Izabel's marketing to another level. Today our communication is more professional, strategic and connected with our fans. A partnership that is part of our growth.",
        author: "Board of Directors",
        role: "A.A Vila Izabel Osasco",
      },
      {
        text: "Working with NIV Design was an amazing experience. They didn't just deliver a beautiful design, but a strategic solution that tripled our conversions.",
        author: "Katia",
        role: "Founder, Aroma de mãe",
      },
      {
        text: "NIV completely transformed our digital presence. The attention to detail and creativity exceeded all expectations.",
        author: "Jonatas Lima",
        role: "CEO, Cold Sports",
      },
      {
        text: "Niv was responsible for the entire marketing strategy and structure of Conhecimento Barber. From positioning to promotion, every detail was designed so the event would run in an organized, professional way with great impact.",
        author: "Conhecimento Barber",
        role: "Barbers",
      },
    ],
  },
  cta: {
    label: "Let's create together",
    titleStart: "Turn your",
    titleHighlight: "vision",
    titleEnd: "into reality",
    description:
      "Ready to take your brand to the next level? Get in touch and let's talk about your project.",
    quote: "Request a Quote",
    quoteMessage: "Hi! I'd like to request a quote.",
    meeting: "Schedule a Call",
    meetingMessage: "Hi! I'd like to schedule a call.",
  },
  footer: {
    rights: "All rights reserved.",
    developedBy: "Developed by",
  },
};

const es: Dictionary = {
  header: {
    nav: [
      { label: "Nosotros", id: "about" },
      { label: "Servicios", id: "services" },
      { label: "Portafolio", id: "portfolio" },
      { label: "Testimonios", id: "testimonials" },
      { label: "Contacto", id: "cta" },
    ],
    cta: "Iniciar Proyecto",
  },
  hero: {
    tagline: "Agencia",
    taglineHighlight: "Digital",
    description:
      "Creamos experiencias digitales que convierten marcas en referentes. Diseño, código y estrategia en perfecta armonía.",
    scroll: "Scroll",
  },
  about: {
    label: "Sobre Nosotros",
    title: "El diseño no es solo cómo se ve.",
    titleHighlight: "Es cómo funciona.",
    values: [
      {
        title: "Visión Estratégica",
        description:
          "Cada píxel tiene un propósito. Combinamos estética con datos y comportamiento del usuario para crear interfaces que convierten.",
      },
      {
        title: "Obsesión por el Detalle",
        description:
          "La atención al detalle que separa lo bueno de lo extraordinario. Desde microinteracciones hasta sistemas de diseño completos.",
      },
      {
        title: "Innovación Continua",
        description:
          "Exploramos nuevas tecnologías y tendencias para entregar soluciones que ponen tu marca por delante del mercado.",
      },
    ],
    stats: [
      "Proyectos Entregados",
      "Clientes Satisfechos",
      "Años de Experiencia",
      "Visualizaciones",
    ],
  },
  services: {
    label: "Servicios",
    title: "Lo que hacemos",
    titleHighlight: "mejor",
    items: [
      {
        title: "Redes Sociales & Marketing Digital",
        description:
          "Estrategias de contenido, gestión de redes sociales y campañas digitales para fortalecer marcas y aumentar conversiones.",
      },
      {
        title: "Identidad Visual & Branding",
        description:
          "Identidades visuales memorables que comunican la esencia de tu marca y crean conexiones emocionales duraderas.",
      },
      {
        title: "Desarrollo",
        description:
          "Código limpio, rápido y accesible. React, Next.js y tecnologías modernas para experiencias impecables.",
      },
      {
        title: "Planificación Estratégica",
        description:
          "Estrategias personalizadas para el posicionamiento de marca, el crecimiento sostenible y la generación de resultados en el entorno digital.",
      },
    ],
  },
  portfolio: {
    title: "Mi",
    titleHighlight: "Portafolio",
    tabs: { videos: "Videos", photos: "Fotos" },
    openInstagram: "Abrir en Instagram",
    swipeHint: "Desliza hacia arriba o hacia abajo",
    videos: [
      "Edición dinámica para el campeonato de 2024.",
      "Proyecto NIV x VILA IZABEL.",
      "Registro emocional de un evento transformador.",
      "Energía pura en cada fotograma.",
    ],
    photos: [
      "Campaña realizada para la marca Snot Company.",
      "Partido benéfico organizado por Sonar y Vila Izabel.",
      "Campaña realizada para la marca Philips.",
      "Grabación de videoclip.",
    ],
  },
  testimonials: {
    title: "Lo que dicen",
    titleHighlight: "de nosotros",
    items: [
      {
        text: "Niv elevó el marketing del Vila Izabel. Hoy tenemos una comunicación más profesional, estratégica y conectada con nuestra hinchada. Una alianza que forma parte de nuestro crecimiento.",
        author: "Directiva",
        role: "A.A Vila Izabel Osasco",
      },
      {
        text: "Trabajar con NIV Design fue una experiencia increíble. No solo entregaron un diseño bonito, sino una solución estratégica que triplicó nuestras conversiones.",
        author: "Katia",
        role: "Founder, Aroma de mãe",
      },
      {
        text: "NIV transformó por completo nuestra presencia digital. El nivel de atención al detalle y la creatividad superaron todas las expectativas.",
        author: "Jonatas Lima",
        role: "CEO, Cold Sports",
      },
      {
        text: "Niv fue responsable de toda la estrategia de marketing y la estructura de Conhecimento Barber. Desde el posicionamiento hasta la difusión, cada detalle fue pensado para que el evento se realizara de forma organizada, profesional y con gran impacto.",
        author: "Conhecimento Barber",
        role: "Barberos",
      },
    ],
  },
  cta: {
    label: "¿Creamos algo juntos?",
    titleStart: "Transforma tu",
    titleHighlight: "visión",
    titleEnd: "en realidad",
    description:
      "¿Listo para llevar tu marca al siguiente nivel? Contáctanos y hablemos sobre tu proyecto.",
    quote: "Solicitar Presupuesto",
    quoteMessage: "¡Hola! Me gustaría solicitar un presupuesto.",
    meeting: "Agendar Reunión",
    meetingMessage: "¡Hola! Me gustaría agendar una reunión.",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    developedBy: "Desarrollado por",
  },
};

export const translations: Record<Language, Dictionary> = { pt, en, es };

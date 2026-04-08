import heroImg from "@/assets/hero-landscape.jpg";

interface HeroProps {
  lang: "en" | "zh";
}

const content = {
  en: {
    name: "Yan Laoshi 严老师",
    subtitle: "Chinese Language Teacher",
    tagline: "Learn Mandarin through real conversation — speak with confidence from day one.",
    cta: "Book a Free 30-Minute Chat",
  },
  zh: {
    name: "严老师 Yan Laoshi",
    subtitle: "中文老师",
    tagline: "通过真实对话学习中文 — 从第一天起就自信地开口说。",
    cta: "预约免费30分钟试听课",
  },
};

const HeroSection = ({ lang }: HeroProps) => {
  const t = content[lang];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Chinese mountain landscape" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground animate-fade-in-up leading-tight">
          {t.name}
        </h1>
        <p className="mt-3 text-lg md:text-xl text-primary-foreground/90 font-sans font-medium animate-fade-in-up-delay">
          {t.subtitle}
        </p>
        <p className="mt-4 text-base md:text-lg text-primary-foreground/80 font-sans animate-fade-in-up-delay">
          {t.tagline}
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 px-8 py-3 rounded-lg bg-primary-foreground text-primary font-semibold text-base hover:bg-primary-foreground/90 transition-all shadow-lg animate-fade-in-up-delay-2"
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

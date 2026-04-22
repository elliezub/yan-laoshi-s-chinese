import heroImg from "@/assets/hero-landscape.jpg";

interface HeroProps {
  lang: "en" | "zh";
}

const content = {
  en: {
    name: "Learn Chinese with Yan",
    subtitle: "Learn Mandarin through real conversation. Speak with confidence from day one.",
    subline: "Lessons focus on speaking first, not memorization.",
    cta1: "Book Your Trial",
    cta2: "Schedule a Session",
  },
  zh: {
    name: "跟闫老师学中文",
    subtitle: "通过真实对话学习中文。从第一天起就自信地开口说。",
    subline: "课程以口语为先，而非死记硬背。",
    cta1: "预约试听课",
    cta2: "安排课程",
  },
};

const HeroSection = ({ lang }: HeroProps) => {
  const t = content[lang];

  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 pb-12 md:pt-0 md:pb-0">
      <img src={heroImg} alt="Chinese mountain landscape" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground animate-fade-in-up leading-tight">
          {t.name}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 font-sans font-medium animate-fade-in-up-delay leading-relaxed">
          {t.subtitle}
        </p>
        <p className="mt-2 text-base md:text-lg text-primary-foreground/70 font-sans italic animate-fade-in-up-delay">
          {t.subline}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-2">
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg bg-primary-foreground text-primary font-semibold text-base hover:bg-primary-foreground/90 transition-all shadow-lg"
          >
            {t.cta1}
          </a>
          <a
            href="#pricing"
            className="inline-block px-8 py-3 rounded-lg border-2 border-primary-foreground text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-all"
          >
            {t.cta2}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

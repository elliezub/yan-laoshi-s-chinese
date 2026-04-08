interface CtaProps {
  lang: "en" | "zh";
}

const content = {
  en: {
    headline: "Start speaking Mandarin with confidence.",
    cta: "Book Your Free Trial",
  },
  zh: {
    headline: "自信地开始说中文。",
    cta: "预约免费试听课",
  },
};

const CtaSection = ({ lang }: CtaProps) => {
  const t = content[lang];

  return (
    <section className="py-20 bg-primary">
      <div className="container max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8">{t.headline}</h2>
        <a
          href="#contact"
          className="inline-block px-10 py-4 rounded-lg bg-primary-foreground text-primary font-semibold text-lg hover:bg-primary-foreground/90 transition-all shadow-lg"
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
};

export default CtaSection;

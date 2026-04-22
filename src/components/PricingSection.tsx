import { Check } from "lucide-react";

interface PricingProps {
  lang: "en" | "zh";
}

const content = {
  en: {
    title: "Simple Pricing",
    trial: { label: "Free Trial", price: "$0", duration: "30 minutes", desc: "A relaxed conversation to understand your goals and create your learning plan.", features: ["No commitment", "Personalized assessment", "Custom learning plan"] },
    regular: { label: "One-on-One Lessons", price: "$20", duration: "per hour", desc: "Private, conversation-focused lessons tailored to your level and interests.", features: ["Flexible scheduling", "Personalized curriculum", "Homework & resources"] },
    bundle: { label: "10-Class Bundle", price: "$180", duration: "$18 per hour · save $20", desc: "Commit to your progress with a discounted package of ten one-on-one lessons.", features: ["10 private lessons", "Best value per hour", "Priority scheduling"], badge: "Best Value" },
    cta: "Book Now",
  },
  zh: {
    title: "简单透明的价格",
    trial: { label: "免费试听", price: "$0", duration: "30分钟", desc: "轻松对话，了解您的目标并制定学习计划。", features: ["无需承诺", "个性化评估", "定制学习计划"] },
    regular: { label: "一对一课程", price: "$20", duration: "每小时", desc: "针对您的水平和兴趣量身定制的对话式私人课程。", features: ["灵活安排时间", "个性化课程", "作业和资源"] },
    bundle: { label: "10节课套餐", price: "$180", duration: "每小时 $18 · 节省 $20", desc: "通过十节一对一课程的优惠套餐，坚定您的学习进度。", features: ["10节私人课程", "最优惠的小时价格", "优先安排时间"], badge: "超值优选" },
    cta: "立即预约",
  },
};

const PricingSection = ({ lang }: PricingProps) => {
  const t = content[lang];

  return (
    <section id="pricing" className="py-20 bg-section-a">
      <div className="container max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">{t.title}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Trial */}
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm flex flex-col">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">{t.trial.label}</p>
            <p className="mt-4 text-4xl font-bold text-foreground">{t.trial.price}</p>
            <p className="text-muted-foreground text-sm">{t.trial.duration}</p>
            <p className="mt-4 text-muted-foreground text-sm">{t.trial.desc}</p>
            <ul className="mt-6 space-y-2 text-left flex-1">
              {t.trial.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-6 inline-flex items-center justify-center w-full py-2.5 rounded-lg border-2 border-primary bg-background text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
              {t.cta}
            </a>
          </div>

          {/* Regular */}
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm flex flex-col">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">{t.regular.label}</p>
            <p className="mt-4 text-4xl font-bold text-foreground">{t.regular.price}</p>
            <p className="text-muted-foreground text-sm">{t.regular.duration}</p>
            <p className="mt-4 text-muted-foreground text-sm">{t.regular.desc}</p>
            <ul className="mt-6 space-y-2 text-left flex-1">
              {t.regular.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-6 inline-flex items-center justify-center w-full py-2.5 rounded-lg border-2 border-primary bg-background text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
              {t.cta}
            </a>
          </div>

          {/* Bundle */}
          <div className="relative bg-primary rounded-xl p-8 border border-primary shadow-lg text-primary-foreground flex flex-col">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background text-primary text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full border border-primary shadow-sm">
              {t.bundle.badge}
            </span>
            <p className="text-sm font-semibold uppercase tracking-wide opacity-90">{t.bundle.label}</p>
            <p className="mt-4 text-4xl font-bold">{t.bundle.price}</p>
            <p className="text-sm opacity-80">{t.bundle.duration}</p>
            <p className="mt-4 text-sm opacity-80">{t.bundle.desc}</p>
            <ul className="mt-6 space-y-2 text-left flex-1">
              {t.bundle.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-6 inline-flex items-center justify-center w-full py-2.5 rounded-lg bg-primary-foreground text-primary font-semibold text-sm hover:bg-primary-foreground/90 transition-colors">
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

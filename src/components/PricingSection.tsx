import { Check } from "lucide-react";

interface PricingProps {
  lang: "en" | "zh";
}

const content = {
  en: {
    title: "Simple Pricing",
    trial: { label: "Free Trial", price: "$0", duration: "30 minutes", desc: "A relaxed conversation to understand your goals and create your learning plan.", features: ["No commitment", "Personalized assessment", "Custom learning plan"] },
    regular: { label: "One-on-One Lessons", price: "$15", duration: "per hour", desc: "Private, conversation-focused lessons tailored to your level and interests.", features: ["Flexible scheduling", "Personalized curriculum", "Homework & resources", "Progress tracking"] },
    cta: "Book Now",
  },
  zh: {
    title: "简单透明的价格",
    trial: { label: "免费试听", price: "$0", duration: "30分钟", desc: "轻松对话，了解您的目标并制定学习计划。", features: ["无需承诺", "个性化评估", "定制学习计划"] },
    regular: { label: "一对一课程", price: "$15", duration: "每小时", desc: "针对您的水平和兴趣量身定制的对话式私人课程。", features: ["灵活安排时间", "个性化课程", "作业和资源", "进度跟踪"] },
    cta: "立即预约",
  },
};

const PricingSection = ({ lang }: PricingProps) => {
  const t = content[lang];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">{t.title}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Trial */}
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm flex flex-col">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">{t.trial.label}</p>
            <p className="mt-4 text-4xl font-bold text-foreground">{t.trial.price}</p>
            <p className="text-muted-foreground text-sm">{t.trial.duration}</p>
            <p className="mt-4 text-muted-foreground text-sm">{t.trial.desc}</p>
            <ul className="mt-6 space-y-2 text-left">
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
          <div className="bg-primary rounded-xl p-8 border border-primary shadow-lg text-primary-foreground flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-wide opacity-90">{t.regular.label}</p>
            <p className="mt-4 text-4xl font-bold">{t.regular.price}</p>
            <p className="text-sm opacity-80">{t.regular.duration}</p>
            <p className="mt-4 text-sm opacity-80">{t.regular.desc}</p>
            <ul className="mt-6 space-y-2 text-left">
              {t.regular.features.map((f, i) => (
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

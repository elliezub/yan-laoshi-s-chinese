import { ExternalLink, Clock, MessageCircle, Sparkles } from "lucide-react";

interface ContactProps {
  lang: "en" | "zh";
}

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeZUfeuvilv2ve9phGqFB6xdwq7v86sj3vcGAJUEskNrflIsg/viewform?pli=1";

const content = {
  en: {
    title: "Book Your Free Trial",
    subtitle:
      "A 30-minute one-on-one chat to meet, set goals, and start speaking Mandarin together.",
    perks: [
      { icon: Clock, text: "30 minutes, completely free" },
      { icon: MessageCircle, text: "Conversation-first, no pressure" },
      { icon: Sparkles, text: "Personalized plan after our chat" },
    ],
    cta: "Open Booking Form",
    note: "Opens a short Google Form in a new tab.",
  },
  zh: {
    title: "预约免费试听课",
    subtitle: "30分钟一对一交流，认识彼此、设定目标，开始一起说中文。",
    perks: [
      { icon: Clock, text: "30分钟，完全免费" },
      { icon: MessageCircle, text: "以对话为主，轻松无压力" },
      { icon: Sparkles, text: "课后为您定制学习计划" },
    ],
    cta: "打开预约表单",
    note: "将在新标签页打开 Google 表单。",
  },
};

const ContactSection = ({ lang }: ContactProps) => {
  const t = content[lang];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container max-w-2xl">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
          <div className="p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t.title}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              {t.subtitle}
            </p>

            <ul className="flex flex-col gap-3 mb-8 text-left w-fit mx-auto">
              {t.perks.map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors shadow-sm"
            >
              {t.cta}
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-xs text-muted-foreground mt-4">{t.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { MessageCircle, Target, Sparkles } from "lucide-react";

interface ClassesProps {
  lang: "en" | "zh";
}

const content = {
  en: {
    title: "Classes",
    subtitle: "Every lesson is built around you — focused on real speaking and practical outcomes.",
    cards: [
      { icon: Target, title: "Beginner", desc: "Start speaking simple Mandarin quickly. Master tones, pronunciation, and key everyday phrases through guided conversation." },
      { icon: MessageCircle, title: "Intermediate", desc: "Hold longer, more natural conversations. Discuss daily life, travel, and culture with growing confidence and fluency." },
      { icon: Sparkles, title: "Advanced", desc: "Discuss complex topics like news, culture, and history naturally. Refine your expression and speak with ease." },
    ],
  },
  zh: {
    title: "课程介绍",
    subtitle: "每节课都围绕您设计 — 专注于真实口语和实际成果。",
    cards: [
      { icon: Target, title: "初级", desc: "快速开口说简单中文。通过引导对话掌握声调、发音和关键日常用语。" },
      { icon: MessageCircle, title: "中级", desc: "进行更长、更自然的对话。自信流利地讨论日常生活、旅行和文化话题。" },
      { icon: Sparkles, title: "高级", desc: "自然地讨论新闻、文化和历史等复杂话题。精炼表达，轻松自如地交流。" },
    ],
  },
};

const ClassesSection = ({ lang }: ClassesProps) => {
  const t = content[lang];

  return (
    <section id="classes" className="py-20 bg-secondary/30">
      <div className="container max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t.title}</h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">{t.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-6">
          {t.cards.map((card, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow text-left">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;

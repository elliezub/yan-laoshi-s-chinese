import { MessageCircle, Target, Sparkles } from "lucide-react";

interface ClassesProps {
  lang: "en" | "zh";
}

const content = {
  en: {
    title: "Classes",
    subtitle: "Lessons designed around you — focused on speaking and real-life communication.",
    cards: [
      { icon: Target, title: "Beginner", desc: "Start from zero. Learn pronunciation, basic grammar, and everyday phrases through guided conversation." },
      { icon: MessageCircle, title: "Intermediate", desc: "Expand your vocabulary and fluency. Practice discussions on daily life, travel, and culture." },
      { icon: Sparkles, title: "Advanced", desc: "Refine your expression. Discuss news, literature, and complex topics with natural flow." },
    ],
  },
  zh: {
    title: "课程介绍",
    subtitle: "围绕您设计的课程 — 专注于口语和真实交流。",
    cards: [
      { icon: Target, title: "初级", desc: "从零开始。通过引导对话学习发音、基础语法和日常用语。" },
      { icon: MessageCircle, title: "中级", desc: "扩展词汇和流利度。练习日常生活、旅行和文化话题的讨论。" },
      { icon: Sparkles, title: "高级", desc: "精炼表达能力。用自然的方式讨论新闻、文学和复杂话题。" },
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

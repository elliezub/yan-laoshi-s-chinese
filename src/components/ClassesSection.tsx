import { MessageCircle, GraduationCap, Globe2 } from "lucide-react";

interface ClassesProps {
  lang: "en" | "zh";
}

const content = {
  en: {
    title: "Classes",
    subtitle: "Stop studying Mandarin. Start speaking it.",
    cards: [
      { icon: MessageCircle, title: "Conversation Classes", desc: "Speak naturally from day one. Every lesson is built around real dialogue, practical topics, and building the confidence to actually use Mandarin in the real world." },
      { icon: GraduationCap, title: "HSK Exam Prep", desc: "Structured lessons designed around the HSK framework. Work through vocabulary, grammar, and listening skills systematically to hit your target score." },
      { icon: Globe2, title: "Culture & Travel", desc: "Go beyond the phrasebook. Explore Chinese history, traditions, food, and travel vocabulary through conversation, so you're ready for the real thing." },
    ],
  },
  zh: {
    title: "课程介绍",
    subtitle: "别再死记硬背，开口说中文。",
    cards: [
      { icon: MessageCircle, title: "口语对话课", desc: "从第一天起就自然开口。每节课围绕真实对话、实用话题展开，建立在现实生活中使用中文的信心。" },
      { icon: GraduationCap, title: "HSK 考试备考", desc: "围绕 HSK 框架设计的系统课程。系统性提升词汇、语法和听力，助您达成目标分数。" },
      { icon: Globe2, title: "文化与旅行", desc: "超越短语手册。通过对话探索中国历史、传统、美食和旅行词汇，为真实的中国之旅做好准备。" },
    ],
  },
};

const ClassesSection = ({ lang }: ClassesProps) => {
  const t = content[lang];

  return (
    <section id="classes" className="py-20 bg-section-c">
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

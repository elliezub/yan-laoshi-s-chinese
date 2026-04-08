import bambooImg from "@/assets/bamboo-accent.jpg";
import { BookOpen, Globe, History, Users } from "lucide-react";

interface AboutProps {
  lang: "en" | "zh";
}

const content = {
  en: {
    title: "About Yan Mandarin Studio",
    description: "With 4 years of dedicated teaching experience — in both classroom settings and private one-on-one sessions — I help students from all backgrounds and levels build real confidence in speaking Mandarin Chinese.",
    features: [
      { icon: BookOpen, label: "4 Years Teaching", desc: "Helping students speak with confidence" },
      { icon: Users, label: "All Levels Welcome", desc: "Beginner, intermediate, and advanced" },
      { icon: History, label: "Culture & History", desc: "Deep knowledge of Chinese heritage" },
      { icon: Globe, label: "Online Lessons", desc: "Learn from anywhere in the world" },
    ],
  },
  zh: {
    title: "关于严老师中文工作室",
    description: "我拥有4年教学经验——包括课堂教学和一对一私人辅导——帮助来自不同背景和水平的学生建立起说中文的真正信心。",
    features: [
      { icon: BookOpen, label: "4年教学经验", desc: "帮助学生自信地说中文" },
      { icon: Users, label: "欢迎各级别", desc: "初级、中级和高级" },
      { icon: History, label: "文化与历史", desc: "深厚的中国文化知识" },
      { icon: Globe, label: "在线课程", desc: "随时随地学习" },
    ],
  },
};

const AboutSection = ({ lang }: AboutProps) => {
  const t = content[lang];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{t.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {t.features.map((f, i) => (
                <div key={i} className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <f.icon className="w-6 h-6 text-primary mb-2" />
                  <p className="font-semibold text-sm text-foreground">{f.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <img src={bambooImg} alt="Chinese bamboo painting" loading="lazy" width={600} height={800} className="rounded-2xl shadow-xl max-h-[500px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

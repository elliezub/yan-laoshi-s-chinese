import yanPortrait from "@/assets/yan-portrait.jpg";
import { BookOpen, Globe, GraduationCap, Users } from "lucide-react";

interface AboutProps {
  lang: "en" | "zh";
}

const content = {
  en: {
    title: "Meet Yan Laoshi",
    description:
      "My name is Yan ZhengYu, but most students just call me Yan. I hold a Master's degree in Education and have taught more than 100 students of different ages in Canada. With over five years of experience teaching Chinese, I currently focus on conversational Chinese for adults, and I also offer HSK preparation and pronunciation training.",
    features: [
      { icon: BookOpen, label: "5+ Years Teaching", desc: "Helping students speak with confidence" },
      { icon: Users, label: "100+ Students Taught", desc: "All ages and backgrounds in Canada" },
      { icon: GraduationCap, label: "Master's in Education", desc: "Mount Saint Vincent University" },
      { icon: Globe, label: "Online Lessons", desc: "Conversational, HSK, & pronunciation" },
    ],
  },
  zh: {
    title: "认识闫老师",
    description:
      "我叫闫政宇，学生们都叫我闫老师。我拥有教育学硕士学位，曾在加拿大教过100多名不同年龄段的学生。我有五年以上的中文教学经验，目前主要专注于成人对话式中文教学，同时也提供HSK考试备考和发音训练。",
    features: [
      { icon: BookOpen, label: "5年以上教学经验", desc: "帮助学生自信地说中文" },
      { icon: Users, label: "100+学生", desc: "加拿大各年龄段学生" },
      { icon: GraduationCap, label: "教育学硕士", desc: "圣文森山大学" },
      { icon: Globe, label: "在线课程", desc: "对话、HSK与发音训练" },
    ],
  },
};

const AboutSection = ({ lang }: AboutProps) => {
  const t = content[lang];

  return (
    <section id="about" className="py-20 bg-section-a">
      <div className="container max-w-6xl">
        <h2 className="md:hidden text-3xl font-bold text-foreground mb-6">{t.title}</h2>
        <img
          src={yanPortrait}
          alt="Yan Laoshi, Mandarin teacher"
          loading="lazy"
          width={600}
          height={600}
          className="md:hidden rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover mb-8"
        />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="hidden md:block text-4xl font-bold text-foreground mb-6">{t.title}</h2>
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
          <div className="hidden md:flex justify-center">
            <img
              src={yanPortrait}
              alt="Yan Laoshi, Mandarin teacher"
              loading="lazy"
              width={600}
              height={600}
              className="rounded-2xl shadow-xl max-h-[500px] w-full max-w-md object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

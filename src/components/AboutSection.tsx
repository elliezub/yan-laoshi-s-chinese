import yanPortrait from "@/assets/yan-portrait.jpg";
import { BookOpen, Globe, GraduationCap, Users } from "lucide-react";

interface AboutProps {
  lang: "en" | "zh";
}

const content = {
  en: {
    title: "Meet Yan Zhengyu (闫政宇)",
    description:
      "Hi, I'm Yan Zhengyu — most students just call me Yan. I hold a Master's degree in Education and have taught more than 100 students of different ages in Canada. With over five years of experience teaching Chinese, I currently focus on conversational Chinese for adults, and I also offer HSK preparation and pronunciation training.",
    features: [
      { icon: BookOpen, label: "5+ Years Teaching", desc: "Helping students speak with confidence" },
      { icon: Users, label: "100+ Students Taught", desc: "All ages and backgrounds in Canada" },
      { icon: GraduationCap, label: "Master's in Education", desc: "Mount Saint Vincent University" },
      { icon: Globe, label: "Online Lessons", desc: "Conversational, HSK, & pronunciation" },
    ],
    eduTitle: "Education",
    education: [
      {
        years: "2019 — 2021",
        school: "Mount Saint Vincent University",
        degree: "Master's degree in Education",
      },
      {
        years: "2014 — 2018",
        school: "Communication University of Shanxi",
        degree: "Bachelor's degree in Digital Media Technology",
      },
    ],
  },
  zh: {
    title: "认识闫政宇老师",
    description:
      "您好，我是闫政宇——学生们都叫我闫老师。我拥有教育学硕士学位，曾在加拿大教过100多名不同年龄段的学生。我有五年以上的中文教学经验，目前主要专注于成人对话式中文教学，同时也提供HSK考试备考和发音训练。",
    features: [
      { icon: BookOpen, label: "5年以上教学经验", desc: "帮助学生自信地说中文" },
      { icon: Users, label: "100+学生", desc: "加拿大各年龄段学生" },
      { icon: GraduationCap, label: "教育学硕士", desc: "圣文森山大学" },
      { icon: Globe, label: "在线课程", desc: "对话、HSK与发音训练" },
    ],
    eduTitle: "教育背景",
    education: [
      {
        years: "2019 — 2021",
        school: "圣文森山大学",
        degree: "教育学硕士",
      },
      {
        years: "2014 — 2018",
        school: "山西传媒学院",
        degree: "数字媒体技术学士",
      },
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

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">{t.eduTitle}</h3>
          <div className="space-y-4">
            {t.education.map((e, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-5 rounded-lg bg-secondary/40 border border-border"
              >
                <div className="flex items-center gap-3 sm:w-44 flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold text-sm text-foreground">{e.years}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{e.school}</p>
                  <p className="text-sm text-muted-foreground">{e.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { useState } from "react";
import { Send } from "lucide-react";

interface ContactProps {
  lang: "en" | "zh";
}

const content = {
  en: {
    title: "Book Your Free Trial",
    subtitle: "Fill out the form below and I'll get back to you within 24 hours.",
    name: "Your Name",
    email: "Email Address",
    level: "Your Chinese Level",
    levels: ["Complete Beginner", "Beginner", "Intermediate", "Advanced"],
    message: "Tell me about your goals",
    submit: "Send Message",
    success: "Thank you! I'll be in touch soon.",
  },
  zh: {
    title: "预约免费试听课",
    subtitle: "填写下面的表格，我会在24小时内回复您。",
    name: "您的姓名",
    email: "电子邮箱",
    level: "您的中文水平",
    levels: ["零基础", "初级", "中级", "高级"],
    message: "告诉我您的学习目标",
    submit: "发送消息",
    success: "谢谢！我会尽快联系您。",
  },
};

const ContactSection = ({ lang }: ContactProps) => {
  const t = content[lang];
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container max-w-xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t.title}</h2>
        <p className="text-muted-foreground mb-10">{t.subtitle}</p>

        {submitted ? (
          <div className="bg-card rounded-xl p-10 border border-border shadow-sm">
            <p className="text-lg font-semibold text-primary">{t.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border shadow-sm text-left space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">{t.name}</label>
              <input required type="text" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">{t.email}</label>
              <input required type="email" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">{t.level}</label>
              <select required className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="" disabled selected>{lang === "en" ? "Select..." : "请选择..."}</option>
                {t.levels.map((l, i) => <option key={i} value={l}>{l}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">{t.message}</label>
              <textarea rows={3} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors">
              <Send className="w-4 h-4" /> {t.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;

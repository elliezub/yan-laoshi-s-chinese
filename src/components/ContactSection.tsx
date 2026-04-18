import { useState } from "react";
import { Send } from "lucide-react";

interface ContactProps {
  lang: "en" | "zh";
}

const RECIPIENT = "yzy960826@gmail.com";

const TIMEZONES = [
  "(UTC-12:00) Baker Island",
  "(UTC-10:00) Hawaii",
  "(UTC-08:00) Pacific Time (US & Canada)",
  "(UTC-07:00) Mountain Time (US & Canada)",
  "(UTC-06:00) Central Time (US & Canada)",
  "(UTC-05:00) Eastern Time (US & Canada)",
  "(UTC-04:00) Atlantic Time",
  "(UTC-03:00) Buenos Aires",
  "(UTC+00:00) London, Dublin",
  "(UTC+01:00) Paris, Berlin, Madrid",
  "(UTC+02:00) Athens, Cairo",
  "(UTC+03:00) Moscow, Istanbul",
  "(UTC+04:00) Dubai",
  "(UTC+05:00) Karachi",
  "(UTC+05:30) India",
  "(UTC+07:00) Bangkok, Jakarta",
  "(UTC+08:00) Beijing, Singapore, Hong Kong",
  "(UTC+09:00) Tokyo, Seoul",
  "(UTC+10:00) Sydney",
  "(UTC+12:00) Auckland",
];

const content = {
  en: {
    title: "Book Your Free Trial",
    subtitle: "Fill out the form below and I'll get back to you within 24 hours.",
    name: "Your Name",
    email: "Email Address",
    level: "Your Chinese Level",
    levels: ["Complete Beginner", "Beginner", "Intermediate", "Advanced"],
    timezone: "Your Time Zone",
    message: "Tell me about your goals",
    submit: "Send Message",
    success: "Thank you! Your email app should have opened — just hit send and I'll be in touch soon.",
    selectPlaceholder: "Select...",
    subjectPrefix: "New trial request from",
  },
  zh: {
    title: "预约免费试听课",
    subtitle: "填写下面的表格，我会在24小时内回复您。",
    name: "您的姓名",
    email: "电子邮箱",
    level: "您的中文水平",
    levels: ["零基础", "初级", "中级", "高级"],
    timezone: "您的时区",
    message: "告诉我您的学习目标",
    submit: "发送消息",
    success: "谢谢！您的邮件应用应已打开——点击发送即可，我会尽快联系您。",
    selectPlaceholder: "请选择...",
    subjectPrefix: "新的试听课申请，来自",
  },
};

const ContactSection = ({ lang }: ContactProps) => {
  const t = content[lang];
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", level: "", timezone: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `${t.subjectPrefix} ${form.name}`;
    const body = `${t.name}: ${form.name}\n${t.email}: ${form.email}\n${t.level}: ${form.level}\n${t.timezone}: ${form.timezone}\n\n${t.message}:\n${form.message}`;
    window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
              <input required maxLength={100} value={form.name} onChange={update("name")} type="text" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">{t.email}</label>
              <input required maxLength={255} value={form.email} onChange={update("email")} type="email" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">{t.level}</label>
              <select required value={form.level} onChange={update("level")} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="" disabled>{t.selectPlaceholder}</option>
                {t.levels.map((l, i) => <option key={i} value={l}>{l}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">{t.timezone}</label>
              <select required value={form.timezone} onChange={update("timezone")} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="" disabled>{t.selectPlaceholder}</option>
                {TIMEZONES.map((tz) => <option key={tz} value={tz}>{tz}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">{t.message}</label>
              <textarea rows={3} maxLength={1000} value={form.message} onChange={update("message")} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
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

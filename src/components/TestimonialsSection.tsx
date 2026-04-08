import { Quote } from "lucide-react";

interface TestimonialsProps {
  lang: "en" | "zh";
}

const content = {
  en: {
    title: "What Students Say",
    reviews: [
      { name: "Sarah", quote: "I started as a complete beginner and now I can hold basic conversations. The lessons feel very natural.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face" },
      { name: "James", quote: "Great focus on speaking. I improved my confidence a lot in just a few months.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face" },
      { name: "Maria", quote: "I especially liked learning about Chinese history during lessons. It makes the language come alive.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face" },
      { name: "David", quote: "The one-on-one format is perfect. Every lesson is tailored to exactly what I need.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face" },
      { name: "Aiko", quote: "Yan Laoshi makes even difficult tones feel approachable. I look forward to every session.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face" },
    ],
  },
  zh: {
    title: "学生评价",
    reviews: [
      { name: "Sarah", quote: "我从零基础开始，现在可以进行基本对话了。课程感觉非常自然。", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face" },
      { name: "James", quote: "非常注重口语练习。短短几个月我的自信心就提升了很多。", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face" },
      { name: "Maria", quote: "我特别喜欢在课程中学习中国历史。这让语言变得生动起来。", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face" },
      { name: "David", quote: "一对一的形式非常完美。每节课都针对我的需求量身定制。", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face" },
      { name: "Aiko", quote: "严老师让困难的声调都变得容易接受。我期待每一节课。", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face" },
    ],
  },
};

const TestimonialsSection = ({ lang }: TestimonialsProps) => {
  const t = content[lang];

  return (
    <section id="reviews" className="py-20 bg-secondary/30">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">{t.title}</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {t.reviews.slice(0, 3).map((review, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <Quote className="w-5 h-5 text-primary/40 mb-3" />
              <p className="text-foreground text-sm leading-relaxed mb-4">"{review.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={review.img} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                <p className="text-sm font-semibold text-primary">— {review.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {t.reviews.slice(3).map((review, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <Quote className="w-5 h-5 text-primary/40 mb-3" />
              <p className="text-foreground text-sm leading-relaxed mb-4">"{review.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={review.img} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                <p className="text-sm font-semibold text-primary">— {review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

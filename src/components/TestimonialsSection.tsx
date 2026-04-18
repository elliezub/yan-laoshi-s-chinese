import { Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface TestimonialsProps {
  lang: "en" | "zh";
}

const content = {
  en: {
    title: "What Students Say",
    reviews: [
      { name: "Sarah", quote: "I started as a complete beginner and now I can hold basic conversations. The lessons feel very natural." },
      { name: "James", quote: "Great focus on speaking. I improved my confidence a lot in just a few months." },
      { name: "Maria", quote: "I especially liked learning about Chinese history during lessons. It makes the language come alive." },
      { name: "David", quote: "The one-on-one format is perfect. Every lesson is tailored to exactly what I need." },
      { name: "Aiko", quote: "Yan Laoshi makes even difficult tones feel approachable. I look forward to every session." },
    ],
  },
  zh: {
    title: "学生评价",
    reviews: [
      { name: "Sarah", quote: "我从零基础开始，现在可以进行基本对话了。课程感觉非常自然。" },
      { name: "James", quote: "非常注重口语练习。短短几个月我的自信心就提升了很多。" },
      { name: "Maria", quote: "我特别喜欢在课程中学习中国历史。这让语言变得生动起来。" },
      { name: "David", quote: "一对一的形式非常完美。每节课都针对我的需求量身定制。" },
      { name: "Aiko", quote: "严老师让困难的声调都变得容易接受。我期待每一节课。" },
    ],
  },
};

const ReviewCard = ({ quote, name }: { quote: string; name: string }) => (
  <div className="bg-card rounded-xl p-6 border border-border shadow-sm h-full">
    <Quote className="w-5 h-5 text-primary/40 mb-3" />
    <p className="text-foreground text-sm leading-relaxed mb-4">"{quote}"</p>
    <p className="text-sm font-semibold text-primary">— {name}</p>
  </div>
);

const TestimonialsSection = ({ lang }: TestimonialsProps) => {
  const t = content[lang];

  return (
    <section id="reviews" className="py-20 bg-secondary/30">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">{t.title}</h2>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <Carousel opts={{ loop: true }} className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {t.reviews.map((review, i) => (
                <CarouselItem key={i}>
                  <ReviewCard {...review} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 gap-6">
            {t.reviews.slice(0, 3).map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
            {t.reviews.slice(3).map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

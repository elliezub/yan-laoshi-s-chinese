interface VideoProps {
  lang: "en" | "zh";
}

const content = {
  en: {
    title: "Meet Your Teacher",
    subtitle: "Watch a quick intro from Yan Laoshi.",
  },
  zh: {
    title: "认识您的老师",
    subtitle: "观看严老师的简短介绍。",
  },
};

const VideoSection = ({ lang }: VideoProps) => {
  const t = content[lang];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t.title}</h2>
        <p className="text-muted-foreground mb-8">{t.subtitle}</p>
        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-border" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/h6vZyMZGKRk"
            title="Intro from Yan Laoshi"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

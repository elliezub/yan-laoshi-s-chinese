interface FooterProps {
  lang: "en" | "zh";
}

const Footer = ({ lang }: FooterProps) => (
  <footer className="py-8 bg-foreground text-primary-foreground/70 text-center text-sm">
    <div className="container">
      <p className="font-serif text-lg text-primary-foreground/90 mb-1">
        {lang === "en" ? "Learn Chinese with Yan" : "跟闫老师学中文"}
      </p>
      <p>{lang === "en" ? "© 2025 Learn Chinese with Yan. All rights reserved." : "© 2025 跟闫老师学中文。保留所有权利。"}</p>
    </div>
  </footer>
);

export default Footer;

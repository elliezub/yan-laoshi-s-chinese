interface FooterProps {
  lang: "en" | "zh";
}

const Footer = ({ lang }: FooterProps) => (
  <footer className="py-8 bg-foreground text-primary-foreground/70 text-center text-sm">
    <div className="container">
      <p className="font-serif text-lg text-primary-foreground/90 mb-1">
        {lang === "en" ? "Yan ZhengYu" : "闫政宇"}
      </p>
      <p>{lang === "en" ? "© 2026 Learn Chinese with Yan. All rights reserved." : "© 2026 跟闫老师学中文。保留所有权利。"}</p>
    </div>
  </footer>
);

export default Footer;

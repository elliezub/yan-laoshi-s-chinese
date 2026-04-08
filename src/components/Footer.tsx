interface FooterProps {
  lang: "en" | "zh";
}

const Footer = ({ lang }: FooterProps) => (
  <footer className="py-8 bg-foreground text-primary-foreground/70 text-center text-sm">
    <div className="container">
      <p className="font-serif text-lg text-primary-foreground/90 mb-1">
        {lang === "en" ? "Yan Mandarin Studio" : "严老师中文工作室"}
      </p>
      <p>{lang === "en" ? "© 2025 Yan Mandarin Studio. All rights reserved." : "© 2025 严老师中文工作室。保留所有权利。"}</p>
    </div>
  </footer>
);

export default Footer;

interface FooterProps {
  lang: "en" | "zh";
}

const Footer = ({ lang }: FooterProps) => (
  <footer className="py-8 bg-foreground text-primary-foreground/70 text-center text-sm">
    <div className="container">
      <p className="font-serif text-lg text-primary-foreground/90 mb-1">严老师 Yan Laoshi</p>
      <p>{lang === "en" ? "© 2025 Yan Laoshi. All rights reserved." : "© 2025 严老师。保留所有权利。"}</p>
    </div>
  </footer>
);

export default Footer;

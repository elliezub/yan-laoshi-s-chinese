import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  lang: "en" | "zh";
  onToggleLang: () => void;
}

const links = {
  en: ["About", "Classes", "Pricing", "Reviews", "Contact"],
  zh: ["关于", "课程", "价格", "评价", "联系"],
};

const ids = ["about", "classes", "pricing", "reviews", "contact"];

const Navbar = ({ lang, onToggleLang }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-serif text-xl font-bold text-primary">
          {lang === "en" ? "Yan Mandarin Studio" : "严老师中文工作室"}
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links[lang].map((label, i) => (
            <a key={ids[i]} href={`#${ids[i]}`} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {label}
            </a>
          ))}
          <button onClick={onToggleLang} className="ml-2 px-3 py-1 text-sm rounded-md border border-border hover:bg-accent transition-colors">
            {lang === "en" ? "中文" : "EN"}
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-6 pb-4 space-y-3">
          {links[lang].map((label, i) => (
            <a key={ids[i]} href={`#${ids[i]}`} onClick={() => setOpen(false)} className="block text-sm font-medium text-foreground/80 hover:text-primary">
              {label}
            </a>
          ))}
          <button onClick={onToggleLang} className="px-3 py-1 text-sm rounded-md border border-border hover:bg-accent">
            {lang === "en" ? "中文" : "EN"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Strategy", href: "/strategy" },
  { label: "Content", href: "/content" },
  { label: "Technology", href: "/technology" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const renderLink = (l: typeof navLinks[number], onClick?: () => void) => {
    const cls = "text-sm text-muted-foreground hover:text-foreground transition-colors";
    if (l.href.startsWith("/") && !l.href.startsWith("/#")) {
      return (
        <Link key={l.label} to={l.href} onClick={onClick} className={cls}>
          {l.label}
        </Link>
      );
    }
    return (
      <a key={l.label} href={l.href} onClick={onClick} className={cls}>
        {l.label}
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight text-foreground">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground text-sm font-bold">
            A
          </span>
          AWAIS LLC
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => renderLink(l))}
          <a href="/#contact">
            <Button size="sm" className="rounded-full px-5">Get a Consultation</Button>
          </a>
        </nav>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/30 px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((l) => renderLink(l, () => setOpen(false)))}
          <a href="/#contact" onClick={() => setOpen(false)}>
            <Button className="w-full rounded-full">Get a Consultation</Button>
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

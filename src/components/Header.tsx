import { Gamepad2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-xl text-foreground">Realgameapps</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link key={item.to} to={item.to} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden p-2 text-foreground"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border overflow-hidden bg-card"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-1.5">
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

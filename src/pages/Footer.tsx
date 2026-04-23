import { Link } from "react-router-dom";
import { Gamepad2, MessageCircle, Send, Play, Camera, AtSign } from "lucide-react";

const footerSocials = [
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
  { icon: Send, href: "#", label: "Telegram" },
  { icon: Play, href: "#", label: "YouTube" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: AtSign, href: "#", label: "Twitter" },
];

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", to: "/" },
      { label: "Top Apps", to: "/#top-apps" },
      { label: "Cash Games", to: "/#cash-games" },
      { label: "New Apps", to: "/#new-apps" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", to: "/blog" },
      { label: "How to Play", to: "/blog" },
      { label: "Rummy Rules", to: "/blog" },
      { label: "FAQs", to: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Use", to: "/terms" },
      { label: "Disclaimer", to: "/disclaimer" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 pt-14 pb-8 mt-16">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl text-primary-foreground">RummyHub</span>
          </div>
          <p className="text-xs leading-relaxed max-w-sm mb-5">
            Your trusted guide to the best rummy apps in India. We verify every app so you can play with confidence and win real cash.
          </p>
          <div className="flex items-center gap-2">
            {footerSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                aria-label={s.label}
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <s.icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {footerLinks.map((col) => (
          <div key={col.title}>
            <h4 className="font-heading font-semibold text-primary-foreground text-sm mb-3">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-xs hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px]">© 2025 RummyHub. All rights reserved.</p>
        <div className="flex items-center gap-3 text-[11px]">
          <Link to="/disclaimer" className="hover:text-primary-foreground transition-colors">Disclaimer</Link>
          <span className="text-primary-foreground/20">|</span>
          <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
          <span className="text-primary-foreground/20">|</span>
          <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Use</Link>
        </div>
        <p className="text-[11px] text-center sm:text-right max-w-sm">
          For informational purposes only. Play responsibly. Must be 18+.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

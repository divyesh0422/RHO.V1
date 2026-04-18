import { motion } from "framer-motion";
import { Star, Download, Gift, ArrowRight, Share2, MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";
import type { RummyApp } from "@/data/rummyApps";
import { useState } from "react";

interface AppCardProps {
  app: RummyApp;
  index: number;
}

const socialLinks = (appName: string) => [
  { icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/?text=Check out ${appName} on RummyHub!`, color: "bg-green-500" },
  { icon: Send, label: "Telegram", href: `https://t.me/share/url?text=Check out ${appName}!`, color: "bg-sky-500" },
];

const AppCard = ({ app, index }: AppCardProps) => {
  const [showShare, setShowShare] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group relative bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-border hover:border-primary/20"
    >
      {app.featured && (
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2.5 py-1 rounded-full bg-gradient-gold text-gold-foreground text-[10px] font-bold uppercase tracking-wider">
            Featured
          </span>
        </div>
      )}

      {/* Top Color Bar */}
      <div className={`h-1.5 bg-gradient-to-r ${app.color}`} />

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-3.5 mb-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-primary-foreground font-heading font-bold text-lg shrink-0 shadow-lg`}>
            {app.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <Link to={`/app/${app.slug}`} className="font-heading font-bold text-foreground text-base truncate hover:text-primary transition-colors block">{app.name}</Link>
            <p className="text-muted-foreground text-xs mt-0.5">{app.tagline}</p>
            <div className="flex items-center gap-1.5 mt-1.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < Math.floor(app.rating) ? "fill-secondary text-secondary" : "text-muted"}`}
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-foreground">{app.rating}</span>
              <span className="text-[10px] text-muted-foreground">({app.reviews})</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2.5 mb-4">
          <div className="bg-muted/60 rounded-xl p-2.5 text-center">
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <Gift className="w-3 h-3 text-secondary" />
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">Bonus</span>
            </div>
            <span className="text-sm font-bold text-foreground">{app.bonus}</span>
          </div>
          <div className="bg-muted/60 rounded-xl p-2.5 text-center">
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <ArrowRight className="w-3 h-3 text-accent" />
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">Min. Withdraw</span>
            </div>
            <span className="text-sm font-bold text-foreground">{app.minWithdraw}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button className="flex-1 h-11 rounded-xl bg-gradient-hero text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity group-hover:shadow-hero">
            <Download className="w-4 h-4" />
            Download Now
          </button>
          <div className="relative">
            <button
              onClick={() => setShowShare(!showShare)}
              className="h-11 w-11 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>
            {showShare && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute bottom-full right-0 mb-2 flex gap-1.5 bg-card border border-border rounded-xl p-2 shadow-lg z-20"
              >
                {socialLinks(app.name).map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 rounded-lg ${s.color} flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity`}
                    title={s.label}
                  >
                    <s.icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AppCard;

import { motion } from "framer-motion";
import { Shield, Users, Award, Heart, Target, Eye } from "lucide-react";
////////lazy loading
import { lazy, Suspense } from "react";
const Header = lazy(() => import("@/components/Header"));
const Footer = lazy(() => import("@/components/Footer"));
import SEO, { SITE_URL } from "@/components/SEO";

const aboutJsonLd = [
  {
//     Tells Google who you are (your brand).
// Helps build trust and identity.
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RummyHub",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    description:
      "India's most trusted platform for discovering, comparing, and downloading the best rummy apps.",
  },
//   Tells Google this is your main website.
// Helps with site understanding and search features.
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RummyHub",
    url: SITE_URL,
  },
//   Tells Google this page is about your company.
// Improves SEO relevance for “about” content.
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About RummyHub",
    url: `${SITE_URL}/about`,
    description:
      "Learn about RummyHub's mission, team, and values. Trusted rummy app comparison platform in India.",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${SITE_URL}/about`,
      },
    ],
  },
];
const values = [
  { icon: Shield, title: "Trust & Safety", desc: "Every app we list undergoes rigorous verification for fair play, RNG certification, and secure payments." },
  { icon: Users, title: "Community First", desc: "We serve over 10 million players across India, helping them find the best and safest rummy platforms." },
  { icon: Award, title: "Expert Reviews", desc: "Our team of experienced rummy players tests every app to give you honest, unbiased reviews." },
  { icon: Heart, title: "Responsible Gaming", desc: "We promote responsible gaming and provide resources for players to stay in control." },
];

const team = [
  { name: "Rajesh Kumar", role: "Founder & CEO", color: "from-amber-500 to-orange-500" },
  { name: "Priya Sharma", role: "Head of Reviews", color: "from-rose-500 to-pink-500" },
  { name: "Amit Patel", role: "Lead Developer", color: "from-blue-500 to-indigo-500" },
  { name: "Sneha Gupta", role: "Content Manager", color: "from-emerald-500 to-teal-500" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <SEO
        title="About RummyHub — India's Trusted Rummy App Guide"
        description="Learn about RummyHub's mission, values, and expert team. Discover safe and verified rummy apps in India with real cash rewards."
        path="/about"
        jsonLd={aboutJsonLd}
        ////////added keyword here for better reach
        keywords="rummy apps india, best rummy apps, real cash rummy, safe rummy apps, rummyhub"
        image={`${SITE_URL}/cover.jpg`}
        type="website"
      />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">About RummyHub</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              India's most trusted platform for discovering, comparing, and downloading the best rummy apps.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container py-12" role="main">
        {/* Mission */}
        <motion.section initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-2xl border border-border p-8 shadow-card flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              At RummyHub, our mission is to help Indian gamers find the safest, most rewarding rummy apps. We believe every player deserves transparent information about bonuses, withdrawal policies, and app quality before they start playing.
            </p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-8 shadow-card flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <Eye className="w-5 h-5 text-secondary" />
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Vision</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We envision a future where every rummy player in India can make informed choices, play safely, and enjoy the thrill of the game without worry. RummyHub aims to be the go-to resource for the entire online rummy community.
            </p>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Array.isArray(values) && values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl border border-border p-6 text-center shadow-card">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero mx-auto mb-4 flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1.5">{v.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {Array.isArray(team) && team.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl border border-border p-6 text-center shadow-card">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${t.color} mx-auto mb-3 flex items-center justify-center text-primary-foreground font-heading font-bold text-xl`}>
                  {t?.name?.charAt(0)|| "?"}
                </div>
                <h3 className="font-heading font-bold text-foreground text-sm">{t.name}</h3>
                <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

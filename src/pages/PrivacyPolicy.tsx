import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Privacy Policy | RummyHub"
      description="Read how RummyHub collects, uses and protects your personal information when you browse our rummy app reviews and comparisons."
      path="/privacy"
    />
    <Header />
    <section className="bg-gradient-hero py-14">
      <div className="container text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-extrabold text-primary-foreground">Privacy Policy</motion.h1>
        <p className="text-primary-foreground/70 mt-2">Last updated: April 2025</p>
      </div>
    </section>
    <main className="container py-12 max-w-3xl">
      <div className="bg-card rounded-2xl border border-border p-8 shadow-card space-y-6">
        {[
          { title: "Information We Collect", content: "We collect personal information such as name, email address, and device information when you use our website. We also collect usage data including pages visited, time spent, and interactions with our content." },
          { title: "How We Use Your Information", content: "We use collected information to improve our services, personalize your experience, send relevant updates about new rummy apps, and communicate important changes to our platform." },
          { title: "Cookies & Tracking", content: "We use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings at any time." },
          { title: "Third-Party Links", content: "Our website contains links to third-party rummy apps and platforms. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing personal information." },
          { title: "Data Security", content: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure." },
          { title: "Your Rights", content: "You have the right to access, correct, or delete your personal data at any time. Contact us at support@rummyhub.in to exercise these rights." },
          { title: "Contact Us", content: "If you have questions about this Privacy Policy, please contact us at support@rummyhub.in or through our Contact page." },
        ].map((section, i) => (
          <motion.div key={section.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <h2 className="font-heading font-bold text-foreground text-lg mb-2">{section.title}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;

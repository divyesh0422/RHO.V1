import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Disclaimer = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Disclaimer | RummyHub"
      description="Read the disclaimer for RummyHub. This site is for informational purposes only. We do not promote gambling or guarantee winnings."
      path="/disclaimer"
    />
    <Header />
    <section className="bg-gradient-hero py-14">
      <div className="container text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl font-extrabold text-primary-foreground"
        >
          Disclaimer
        </motion.h1>
        <p className="text-primary-foreground/70 mt-2">Last updated: April 2025</p>
      </div>
    </section>
    <main className="container py-12 max-w-3xl">
      <div className="bg-card rounded-2xl border border-border p-8 shadow-card space-y-6">
        {[
          {
            title: "General Information Only",
            content:
              "The content published on RummyHub is intended for general informational and entertainment purposes only. We do not provide legal, financial, or gambling advice. Users should exercise their own judgment before downloading or using any rummy application listed on this site.",
          },
          {
            title: "No Guarantee of Winnings",
            content:
              "RummyHub does not guarantee any winnings, profits, or outcomes from using the apps reviewed or listed on our platform. Real-money rummy games involve financial risk and skill. Past performance of any app or user is not indicative of future results.",
          },
          {
            title: "Age Restriction",
            content:
              "All real-money rummy games are strictly for users aged 18 years and above. RummyHub strongly discourages participation by minors. By using this website, you confirm that you are at least 18 years old.",
          },
          {
            title: "Geographical Restrictions",
            content:
              "Real-money gaming may be restricted or prohibited in certain states and territories within India (including Andhra Pradesh, Telangana, Assam, Nagaland, Odisha, Sikkim, and others). It is your responsibility to verify whether online rummy is legal in your jurisdiction before participating.",
          },
          {
            title: "Third-Party Apps & Links",
            content:
              "RummyHub reviews and links to third-party applications. We are not affiliated with, endorsed by, or responsible for the practices, content, or services provided by these third-party platforms. All trademarks and brand names belong to their respective owners.",
          },
          {
            title: "Responsible Gaming",
            content:
              "We encourage responsible gaming at all times. If you or someone you know is struggling with gaming addiction, please seek professional help. Play within your means and set personal limits to ensure a healthy gaming experience.",
          },
          {
            title: "Accuracy of Information",
            content:
              "While we strive to keep all information accurate and up to date, RummyHub makes no warranties regarding the completeness, reliability, or accuracy of content on this site. Information may change without notice and users are advised to verify details directly with the respective app providers.",
          },
          {
            title: "Limitation of Liability",
            content:
              "RummyHub, its owners, editors, and contributors shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of information on this website or from the use of any third-party app listed herein.",
          },
        ].map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <h2 className="font-heading font-bold text-foreground text-lg mb-2">
              {section.title}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Disclaimer;

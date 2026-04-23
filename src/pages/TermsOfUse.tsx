import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TermsOfUse = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Terms of Use | RummyHub"
      description="Review the Terms of Use for RummyHub. By accessing our website you agree to these terms governing the use of our content and services."
      path="/terms"
    />
    <Header />
    <section className="bg-gradient-hero py-14">
      <div className="container text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl font-extrabold text-primary-foreground"
        >
          Terms of Use
        </motion.h1>
        <p className="text-primary-foreground/70 mt-2">Last updated: April 2025</p>
      </div>
    </section>
    <main className="container py-12 max-w-3xl">
      <div className="bg-card rounded-2xl border border-border p-8 shadow-card space-y-6">
        {[
          {
            title: "Acceptance of Terms",
            content:
              "By accessing or using the RummyHub website (rummyhub.in), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
          },
          {
            title: "Use of Content",
            content:
              "All content on RummyHub — including text, graphics, logos, images, and software — is the property of RummyHub or its content suppliers and is protected under applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without prior written permission.",
          },
          {
            title: "User Conduct",
            content:
              "You agree not to use this website for any unlawful purpose, to harass or harm other users, to impersonate any person or entity, to upload or transmit malicious code, or to interfere with the proper functioning of the site.",
          },
          {
            title: "Eligibility",
            content:
              "This website is intended for users who are 18 years of age or older. By using RummyHub, you represent and warrant that you meet this age requirement and that you are legally permitted to access real-money gaming content in your jurisdiction.",
          },
          {
            title: "Third-Party Links",
            content:
              "RummyHub may contain links to external websites or applications. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.",
          },
          {
            title: "Affiliate Disclosure",
            content:
              "Some links on RummyHub may be affiliate links. If you click on an affiliate link and sign up for or purchase a product or service, RummyHub may receive a commission. This does not affect the price you pay, and our editorial reviews remain independent and unbiased.",
          },
          {
            title: "Disclaimer of Warranties",
            content:
              "The information on this website is provided on an 'as is' basis without any warranties of any kind, either express or implied. RummyHub does not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components.",
          },
          {
            title: "Limitation of Liability",
            content:
              "To the fullest extent permitted by law, RummyHub shall not be liable for any damages, losses, or expenses arising out of or in connection with your use of this website or any content, products, or services linked from it.",
          },
          {
            title: "Governing Law",
            content:
              "These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in India.",
          },
          {
            title: "Changes to Terms",
            content:
              "RummyHub reserves the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site following any changes constitutes your acceptance of the new terms.",
          },
          {
            title: "Contact Us",
            content:
              "If you have any questions about these Terms of Use, please contact us at support@rummyhub.in or through our Contact page.",
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

export default TermsOfUse;

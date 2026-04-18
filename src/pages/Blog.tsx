import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { SITE_URL } from "@/components/SEO";

const blogPosts = [
  { id: 1, slug: "top-10-rummy-strategies", title: "Top 10 Rummy Strategies to Win Big in 2025", excerpt: "Master these proven strategies used by professional rummy players to increase your win rate and maximize your earnings at the cash tables.", category: "Strategy", date: "Apr 10, 2025", readTime: "8 min", color: "from-amber-500 to-orange-500" },
  { id: 2, slug: "beginners-guide-rummy", title: "Complete Beginner's Guide to Online Rummy", excerpt: "New to rummy? This comprehensive guide covers everything from basic rules to advanced tips that will help you get started and start winning.", category: "Guide", date: "Apr 8, 2025", readTime: "12 min", color: "from-blue-500 to-indigo-500" },
  { id: 3, slug: "rummy-vs-poker", title: "Rummy vs Poker: Which Game is Better for You?", excerpt: "A detailed comparison of India's two most popular card games. Understand the key differences in skill, strategy, and earning potential.", category: "Comparison", date: "Apr 5, 2025", readTime: "6 min", color: "from-emerald-500 to-teal-500" },
  { id: 4, slug: "best-rummy-bonuses-april", title: "Best Rummy App Bonuses This April 2025", excerpt: "We've compiled the latest and most generous welcome bonuses from top rummy apps. Don't miss these limited-time offers!", category: "Offers", date: "Apr 1, 2025", readTime: "5 min", color: "from-rose-500 to-pink-500" },
  { id: 5, slug: "responsible-gaming-tips", title: "5 Responsible Gaming Tips Every Player Should Know", excerpt: "Playing rummy should be fun and safe. Learn how to set limits, manage your bankroll, and enjoy the game responsibly.", category: "Safety", date: "Mar 28, 2025", readTime: "4 min", color: "from-violet-500 to-purple-500" },
  { id: 6, slug: "rummy-legality-india", title: "Is Online Rummy Legal in India? Complete Guide 2025", excerpt: "Understanding the legal landscape of online rummy in India. Which states allow it, court rulings, and what players need to know.", category: "Legal", date: "Mar 25, 2025", readTime: "10 min", color: "from-sky-500 to-cyan-500" },
];

const Blog = () => {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "RummyHub Blog & Tips",
    url: `${SITE_URL}/blog`,
    description: "Expert rummy strategies, app reviews, latest offers, and industry news.",
    blogPost: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.date,
      articleSection: p.category,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Rummy Blog & Tips — Strategies, Reviews & Offers | RummyHub"
        description="Expert rummy strategies, in-depth app reviews, latest welcome bonuses and the legal landscape of online rummy in India."
        path="/blog"
        jsonLd={blogJsonLd}
      />
      <Header />

      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Blog & Tips</h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Expert rummy strategies, app reviews, latest offers, and industry news.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container py-12">
        {/* Featured Post */}
        <motion.article initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-2xl border border-border overflow-hidden shadow-card mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className={`bg-gradient-to-br ${blogPosts[0].color} p-10 flex items-center justify-center min-h-[200px]`}>
              <span className="font-heading text-5xl font-extrabold text-primary-foreground/20">01</span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full w-fit mb-3">{blogPosts[0].category}</span>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">{blogPosts[0].title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{blogPosts[0].date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{blogPosts[0].readTime} read</span>
              </div>
              <Link to={`/blog/${blogPosts[0].slug}`} className="text-primary font-semibold text-sm flex items-center gap-1 hover:underline w-fit">
                Read More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.article>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post, i) => (
            <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all group">
              <div className={`bg-gradient-to-br ${post.color} h-36 flex items-center justify-center`}>
                <span className="font-heading text-4xl font-extrabold text-primary-foreground/20">
                  {String(post.id).padStart(2, "0")}
                </span>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{post.category}</span>
                <h3 className="font-heading font-bold text-foreground mt-2 mb-1.5 text-sm leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="w-2.5 h-2.5" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-2.5 h-2.5" />{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="text-primary text-xs font-semibold flex items-center gap-0.5 hover:underline">
                    Read <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;

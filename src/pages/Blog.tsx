import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
////////lazy loading
import { lazy, Suspense } from "react";
const Header = lazy(() => import("@/components/Header"));
const Footer = lazy(() => import("@/components/Footer"));
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import SEO, { SITE_URL } from "@/components/SEO";
import { blogPosts } from "@/api/blog";

const Blog = () => {
 
      const blogJsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Realgameapps Blog",
        url: `${SITE_URL}/blog`,
        description:
          "Latest articles on Realgameappsstrategies, tips, app reviews, and bonus offers in India.",
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
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
        ],
      },
//       It tells Google that each blog post is an article (BlogPosting).
// It helps show details like title, date, and description in search results.
// It improves your chances of getting rich results for blog posts.
// It helps Google understand your blog content better
      ...blogPosts.map((p) => ({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: p.title,
        description: p.excerpt,
        url: `${SITE_URL}/blog/${p.slug}`,
        datePublished: p.date,
        author: {
          "@type": "Organization",
          name: "Realgameapps",
        },
        publisher: {
          "@type": "Organization",
          name: "Realgameapps",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/favicon.ico`,
          },
        },
        articleSection: p.category,
      })),
      ];

  return (
    <div className="min-h-screen bg-background">
    
      {/* ////////////////added keyword here for better rich */}
      <SEO
        title="RealgameappsBlog & Tips — Strategies, Guides & Offers in India | Realgameapps"
        description="Read expert Realgameappsstrategies, beginner guides, app reviews, latest bonuses, and legal updates about online Realgameappsin India."
        path="/blog"
        jsonLd={blogJsonLd}
        keywords="Realgameappsblog india, Realgameappsstrategies, Realgameappstips, best Realgameappss, online Realgameappsguide, Realgameappsbonuses india, Realgameappstricks, play Realgameappsonline"
        type="website"
/>
      <Header />

      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Blog & Tips</h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Expert Realgameappsstrategies, app reviews, latest offers, and industry news.
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

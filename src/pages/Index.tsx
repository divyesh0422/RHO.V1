import { useState, useMemo } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryTabs from "@/components/CategoryTabs";
import AppCard from "@/components/AppCard";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import WhyChooseUs from "@/components/WhyChooseUs";
import SEO, { SITE_URL } from "@/components/SEO";
import { rummyApps } from "@/data/rummyApps";
import { motion } from "framer-motion";
import { TrendingUp, SearchX } from "lucide-react";
import { useSearch } from "@/context/SearchContext";
import { useDebounce } from "@/hooks/use-debounce";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { query, setQuery } = useSearch();
  const debouncedQuery = useDebounce(query, 250);

  const filteredApps = useMemo(() => {
    const base =
      activeCategory === "all"
        ? rummyApps
        : rummyApps.filter((app) => app.category.includes(activeCategory));

    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return base;

    return base.filter((app) => {
      const haystack = [
        app.name,
        app.tagline,
        app.description,
        ...(app.gameTypes ?? []),
        ...(app.paymentMethods ?? []),
        ...(app.platforms ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [activeCategory, debouncedQuery]);

  const itemListJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: rummyApps.map((app, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `${SITE_URL}/app/${app.slug}`,
        name: app.name,
      })),
    }),
    [],
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="All Rummy Apps in India 2025 — Reviews, Bonuses & Downloads | RummyHub"
        description="Discover, compare and download India's best rummy apps. Verified reviews, exclusive bonuses up to ₹10,000, instant withdrawals. Trusted by 10M+ players."
        path="/"
        jsonLd={itemListJsonLd}
      />
      <Header />
      <HeroSection />
      <FloatingSocial />

      <main className="container py-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-8"
        >
          <TrendingUp className="w-5 h-5 text-secondary" />
          <h2 className="font-heading text-2xl font-bold text-foreground">All Rummy Apps in India</h2>
          <span className="ml-auto px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-semibold">
            {filteredApps.length} Apps
          </span>
        </motion.div>

        <CategoryTabs active={activeCategory} onChange={setActiveCategory} />

        <div id="apps-grid" className="mt-8">
          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredApps.map((app, i) => (
                <AppCard key={app.id} app={app} index={i} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center text-center py-20 px-6 rounded-2xl bg-muted/40 border border-border"
            >
              <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center mb-4 shadow-sm">
                <SearchX className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                No apps match your search
              </h3>
              <p className="text-muted-foreground text-sm max-w-md mb-5">
                {query
                  ? <>We couldn't find any rummy apps matching <span className="font-semibold text-foreground">"{query}"</span>. Try a different keyword or clear your filters.</>
                  : "No apps found for the selected category."}
              </p>
              <div className="flex gap-3">
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="h-10 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Clear search
                  </button>
                )}
                {activeCategory !== "all" && (
                  <button
                    type="button"
                    onClick={() => setActiveCategory("all")}
                    className="h-10 px-4 rounded-lg bg-secondary text-secondary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Show all apps
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;

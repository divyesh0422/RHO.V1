import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 — Page Not Found | Realgameapps";
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted">
      <SEO
        title="404 — Page Not Found | Realgameapps"
        description="The page you're looking for doesn't exist. Head back to Realgameapps to find India's best Realgameappss."
        path={location.pathname}
        noindex
      />
      <div className="text-center">
        <h1 className="mb-4 font-heading text-5xl font-extrabold text-foreground">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Oops! That page doesn't exist.</p>
        <Link to="/" className="inline-flex h-11 items-center rounded-xl bg-gradient-hero px-6 text-sm font-semibold text-primary-foreground shadow-hero hover:opacity-90 transition-opacity">
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

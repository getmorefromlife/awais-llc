import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allCategories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

const BlogIndex = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* ── Hero Banner ────────────────────────────────────── */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          {/* Glow blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/3 w-[600px] h-[500px] bg-primary/15 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
          </div>

          <div className="container relative max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              {/* eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                <BookOpen className="text-primary" size={14} />
                <span className="text-xs font-heading font-bold text-white/70 uppercase tracking-[0.18em]">
                  Insights & Ideas
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.1] mb-5 text-white">
                The AWAIS LLC{" "}
                <span className="text-[#00e5ff]">Journal.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
                Expert perspectives on AI adoption, enterprise strategy, agile leadership, and the future of work — written by certified practitioners.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Category Filters ───────────────────────────────── */}
        <section className="pb-6">
          <div className="container max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-heading font-semibold uppercase tracking-wider border transition-all duration-200 ${activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_12px_-2px_#00e5ff66]"
                      : "border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground bg-white/5"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Posts ──────────────────────────────────────────── */}
        <section className="py-10 pb-24">
          <div className="container max-w-5xl space-y-8">

            {/* Featured post — larger card */}
            {featured && (
              <motion.div
                key={featured.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link
                  to={`/blog/${featured.slug}`}
                  className="group block glass rounded-2xl p-8 sm:p-10 border border-border/50 hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300 glow-cyan-sm"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-xs font-heading font-semibold text-primary uppercase tracking-widest">
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-heading font-semibold text-accent uppercase tracking-widest">
                      Featured
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                    {featured.excerpt}
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-5 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {new Date(featured.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} />
                        {featured.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-200">
                      Read Article <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Remaining posts — compact grid */}
            {rest.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-5">
                {rest.map((post, i) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group flex flex-col h-full glass rounded-xl p-6 sm:p-7 border border-border/50 hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span className="inline-flex self-start items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-heading font-semibold text-primary uppercase tracking-widest mb-4">
                        {post.category}
                      </span>
                      <h2 className="text-lg sm:text-xl font-heading font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-snug flex-1">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={12} />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight
                          size={15}
                          className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <BookOpen size={40} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg font-heading font-semibold">No posts in this category yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;

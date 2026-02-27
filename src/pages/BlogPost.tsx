import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const renderMarkdown = (content: string) => {
  return content
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("### "))
        return `<h3>${trimmed.slice(4)}</h3>`;
      if (trimmed.startsWith("## "))
        return `<h2>${trimmed.slice(3)}</h2>`;
      if (trimmed.startsWith("> "))
        return `<blockquote>${trimmed.slice(2)}</blockquote>`;
      const withBold = trimmed.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      return `<p>${withBold}</p>`;
    })
    .join("");
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-6">📄</p>
          <h1 className="text-2xl font-heading font-bold mb-4 text-foreground">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline text-sm">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* ── Article Hero ───────────────────────────────────── */}
        <section className="relative pt-36 pb-16 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-primary/12 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px]" />
          </div>

          <div className="container relative max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Back link */}
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 group"
              >
                <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
                Back to Blog
              </Link>

              {/* Category pill */}
              <div className="mb-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-xs font-heading font-semibold text-primary uppercase tracking-widest">
                  {post.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight leading-[1.1] text-white mb-6">
                {post.title}
              </h1>

              <p className="text-lg text-white/50 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground border-t border-border/40 pt-6">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Article Body ───────────────────────────────────── */}
        <section className="pb-16">
          <div className="container max-w-3xl">
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass rounded-2xl p-8 sm:p-12 border border-border/40"
            >
              <div
                className="prose-awais"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
              />
            </motion.article>
          </div>
        </section>

        {/* ── Author Bio ─────────────────────────────────────── */}
        <section className="pb-16">
          <div className="container max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-8 border border-primary/20 glow-cyan-sm"
            >
              <p className="text-xs font-heading font-semibold text-primary uppercase tracking-[0.2em] mb-5">
                About the Authors
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">Awais Rizvi</h3>
                  <p className="text-xs text-primary/70 font-semibold uppercase tracking-wide mb-3">
                    Lead Enterprise Architect · SAP SD Certified
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    With 21+ years in enterprise technology and AI strategy, Awais leads high-stakes digital transformations and SAP S/4HANA implementations for Fortune 500 clients.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">Syed Imon Rizvi</h3>
                  <p className="text-xs text-primary/70 font-semibold uppercase tracking-wide mb-3">
                    PMP Certified · Certified Scrum Master & Agile Coach
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Imon drives flawless project delivery and agile transformation across organizations, and is the co-author of <em>Agile Mastery: The Ultimate Playbook for Scrum Success.</em>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── More Articles ──────────────────────────────────── */}
        {related.length > 0 && (
          <section className="pb-24">
            <div className="container max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-heading font-bold text-foreground mb-6">
                  More Articles
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {related.map((p, i) => (
                    <motion.div
                      key={p.slug}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                      <Link
                        to={`/blog/${p.slug}`}
                        className="group flex flex-col h-full glass rounded-xl p-6 border border-border/50 hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <span className="inline-flex self-start items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-heading font-semibold text-primary uppercase tracking-widest mb-3">
                          {p.category}
                        </span>
                        <h3 className="text-base font-heading font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3 flex-1">
                          {p.title}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-auto">
                          Read <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;

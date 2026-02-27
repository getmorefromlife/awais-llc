import { motion } from "framer-motion";
import { PenTool, FileText, Sparkles, ArrowRight, Headphones, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
    {
        icon: PenTool,
        title: "Ghostwriting & Manuscripts",
        desc: "From executive thought-leadership articles to full-length audiobooks and business manuscripts, we craft authoritative content under your name.",
        bullets: [
            "Business books & audiobooks",
            "Executive ghostwriting",
            "Thought leadership series",
            "LinkedIn & editorial content",
        ],
    },
    {
        icon: FileText,
        title: "Technical SOPs & Docs",
        desc: "Enterprise-grade technical documentation, SOPs, and training materials that enable consistent, compliant, and scalable operations.",
        bullets: [
            "Standard operating procedures",
            "IT & system documentation",
            "Compliance & audit guides",
            "Employee training materials",
        ],
    },
    {
        icon: Sparkles,
        title: "AI-Assisted Content Creation",
        desc: "Leverage cutting-edge generative AI tools — guided by human expertise — to produce content pipelines at unprecedented speed and scale.",
        bullets: [
            "AI-augmented long-form content",
            "Automated content workflows",
            "Multi-platform content adaptation",
            "Content strategy & editorial calendar",
        ],
    },
];

const ContentPage = () => (
    <div className="min-h-screen bg-background">
        <Navbar />
        <main>
            {/* Hero */}
            <section className="relative pt-36 pb-24 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[130px]" />
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />
                </div>

                <div className="container relative max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
                            <span className="text-xs font-heading font-bold text-white/70 uppercase tracking-[0.18em]">
                                Content & IP Development
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
                            Transforming Knowledge into<br />
                            <span className="text-[#00e5ff]">High-Value IP.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/55 max-w-3xl mx-auto mb-10 leading-relaxed">
                            From executive ghostwriting to AI-assisted technical documentation, we build content engines that scale — positioning your expertise as the definitive industry voice.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#contact">
                                <Button size="lg" className="bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black font-bold h-14 px-10 rounded-xl shadow-[0_4px_20px_-5px_#00e5ff66]">
                                    Discuss Your Content Needs <ArrowRight size={16} className="ml-1" />
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                            What We Create
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            End-to-end content solutions — from ideation and writing to production and distribution.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {services.map((s, i) => (
                            <motion.div
                                key={s.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="glass rounded-2xl p-7 border border-border/50 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 glow-cyan-sm"
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-5">
                                    <s.icon className="text-primary" size={22} />
                                </div>
                                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{s.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                                <ul className="space-y-2">
                                    {s.bullets.map((b) => (
                                        <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Publishing Highlight Banner */}
            <section className="py-16">
                <div className="container max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass rounded-2xl border border-primary/25 glow-cyan overflow-hidden"
                    >
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Left: Publishing credentialing text */}
                            <div className="p-10">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-xs font-heading font-semibold text-primary uppercase tracking-widest mb-5">
                                    Publishing Expertise
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-foreground">
                                    We Don't Just Write.<br />
                                    <span className="text-[#00e5ff]">We Publish.</span>
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Our team has end-to-end publishing expertise — from manuscript development to platform distribution on Audible, Amazon KDP, and beyond. We've done it ourselves, and we can do it for you.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {["Audible & ACX audiobook production", "Amazon KDP & ebook formatting", "Platform-specific content strategy", "Royalty & monetization planning"].map((b) => (
                                        <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right: Audiobook showcase */}
                            <div className="bg-gradient-to-br from-primary/10 to-accent/5 p-10 flex flex-col justify-center border-l border-border/40">
                                <p className="text-xs font-heading font-semibold text-primary uppercase tracking-[0.2em] mb-3">
                                    Our Published Work
                                </p>
                                <h3 className="font-heading font-bold text-xl mb-1 text-foreground">
                                    Agile Mastery
                                </h3>
                                <p className="text-sm italic text-muted-foreground mb-2">
                                    "The Ultimate Playbook for Scrum Success."
                                </p>
                                <p className="text-xs text-primary/80 font-semibold mb-4">
                                    Authored by Certified PMP & Scrum Master
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                    A comprehensive guide to high-velocity Agile teams, sprint excellence, and delivery mastery. Available exclusively on Audible.
                                </p>
                                <a href="https://www.audible.com" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="gap-2 rounded-full border-primary/40 hover:bg-primary/10 w-full sm:w-auto">
                                        <Headphones size={16} />
                                        Listen on Audible <ExternalLink size={13} />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="py-24">
                <div className="container max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                            Let's Build Your Content Engine.
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                            Whether you need a single manuscript or a full content operation, we're ready to turn your expertise into lasting intellectual property.
                        </p>
                        <a href="mailto:contact@awaisllc.com">
                            <Button size="lg" className="bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black font-bold h-14 px-12 rounded-xl shadow-[0_4px_20px_-5px_#00e5ff66]">
                                Discuss Your Content Needs <ArrowRight size={16} className="ml-2" />
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
);

export default ContentPage;

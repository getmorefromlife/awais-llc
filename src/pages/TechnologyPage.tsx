import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Bot, CloudLightning, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
    {
        icon: Code,
        title: "Custom Software Development",
        desc: "We engineer bespoke software solutions — from internal tools to customer-facing platforms — designed for enterprise-grade scale, security, and performance.",
        bullets: [
            "Full-stack web & API development",
            "Internal tooling & portals",
            "SaaS platform architecture",
            "Third-party API integration",
        ],
    },
    {
        icon: Bot,
        title: "Automated AI Workflows",
        desc: "Replace manual drudgery with intelligent automation. We design and deploy AI-powered workflows that slash operational costs and free your team for high-value work.",
        bullets: [
            "LLM-powered process automation",
            "Document & data pipeline automation",
            "AI-assisted decision support systems",
            "Chatbot & virtual agent development",
        ],
    },
    {
        icon: CloudLightning,
        title: "Cloud & Tech Optimization",
        desc: "Reduce infrastructure waste and maximize cloud ROI through expert cost engineering, architecture reviews, and performance tuning across AWS, Azure, and GCP.",
        bullets: [
            "Cloud spend analysis & optimization",
            "Infrastructure-as-code (IaC) implementation",
            "Multi-cloud strategy",
            "Security & compliance auditing",
        ],
    },
];

const TechnologyPage = () => {
    const [spend, setSpend] = useState([100000]);
    const savings = Math.round(spend[0] * 0.2);
    const perYear = savings * 12;

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                {/* Hero */}
                <section className="relative pt-36 pb-24 overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="absolute top-10 left-1/3 w-[600px] h-[500px] bg-primary/15 rounded-full blur-[140px]" />
                        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
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
                                    Technology & Automation
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
                                Custom Engineering &<br />
                                <span className="text-[#00e5ff]">AI Automation.</span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/55 max-w-3xl mx-auto mb-10 leading-relaxed">
                                We build scalable software, automated internal tools, and AI workflows that slash operational costs — so your team can focus on what humans do best.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#contact">
                                    <Button size="lg" className="bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black font-bold h-14 px-10 rounded-xl shadow-[0_4px_20px_-5px_#00e5ff66]">
                                        Request a Technical Audit <ArrowRight size={16} className="ml-1" />
                                    </Button>
                                </a>
                                <a href="#roi-calculator">
                                    <Button variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold h-14 px-10 rounded-xl backdrop-blur-sm">
                                        Calculate Your Savings
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
                                What We Build
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Precision-engineered solutions that automate, accelerate, and optimize the way your business operates.
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

                {/* ROI Calculator */}
                <section id="roi-calculator" className="py-20">
                    <div className="container max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                                Cloud Savings ROI Calculator
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                See your potential savings instantly. Drag the slider to match your monthly cloud spend — our optimization methodology consistently delivers 20%+ reductions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="glass rounded-2xl p-8 sm:p-12 glow-cyan border border-primary/20"
                        >
                            {/* Slider */}
                            <div className="mb-8">
                                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                                    Estimated Monthly Cloud Spend
                                </h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Adjust to reflect your current monthly infrastructure costs.
                                </p>
                                <Slider
                                    value={spend}
                                    onValueChange={setSpend}
                                    min={1000}
                                    max={500000}
                                    step={1000}
                                    className="mb-4"
                                />
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>$1,000</span>
                                    <span className="font-heading font-bold text-2xl text-foreground">
                                        ${spend[0].toLocaleString()} / mo
                                    </span>
                                    <span>$500,000</span>
                                </div>
                            </div>

                            {/* Results grid */}
                            <div className="grid sm:grid-cols-3 gap-4 mb-8">
                                <div className="text-center py-6 px-4 rounded-xl bg-background/40 border border-border/30">
                                    <p className="text-muted-foreground text-xs mb-2 uppercase tracking-wide font-semibold">
                                        Monthly Savings
                                    </p>
                                    <p className="text-3xl sm:text-4xl font-heading font-bold text-[#00e5ff]">
                                        ${savings.toLocaleString()}
                                    </p>
                                </div>
                                <div className="text-center py-6 px-4 rounded-xl bg-background/40 border border-border/30">
                                    <p className="text-muted-foreground text-xs mb-2 uppercase tracking-wide font-semibold">
                                        Annual Savings
                                    </p>
                                    <p className="text-3xl sm:text-4xl font-heading font-bold text-accent">
                                        ${perYear.toLocaleString()}
                                    </p>
                                </div>
                                <div className="text-center py-6 px-4 rounded-xl bg-background/40 border border-border/30">
                                    <p className="text-muted-foreground text-xs mb-2 uppercase tracking-wide font-semibold">
                                        Avg. Reduction
                                    </p>
                                    <p className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                                        20%+
                                    </p>
                                </div>
                            </div>

                            <div className="text-center">
                                <a href="#contact">
                                    <Button size="lg" className="px-12 rounded-full bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black font-bold">
                                        Claim Your Savings
                                    </Button>
                                </a>
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
                                Ready to Engineer Your Edge?
                            </h2>
                            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                                Let's audit your current tech stack and find the fastest path to automation, efficiency, and competitive advantage.
                            </p>
                            <a href="mailto:contact@awaisllc.com">
                                <Button size="lg" className="bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black font-bold h-14 px-12 rounded-xl shadow-[0_4px_20px_-5px_#00e5ff66]">
                                    Request a Technical Audit <ArrowRight size={16} className="ml-2" />
                                </Button>
                            </a>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default TechnologyPage;

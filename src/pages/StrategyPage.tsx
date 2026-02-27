import { motion } from "framer-motion";
import { Brain, Server, Map, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
    {
        icon: Brain,
        title: "AI Adoption Consulting",
        desc: "We help enterprise leaders identify, prioritize, and execute AI use cases that create measurable ROI. From LLM integration to workflow automation, we guide the journey end-to-end.",
        bullets: [
            "AI readiness assessments",
            "LLM & generative AI strategy",
            "AI change management & governance",
            "ROI modeling for AI initiatives",
        ],
    },
    {
        icon: Server,
        title: "IT & Digital Transformation",
        desc: "Leverage 21+ years of enterprise architecture expertise to modernize your technology stack, optimize ERP systems, and align IT with business strategy.",
        bullets: [
            "SAP S/4HANA implementation & migration",
            "Enterprise architecture design",
            "Legacy system modernization",
            "Technology vendor selection",
        ],
    },
    {
        icon: Map,
        title: "Product & Platform Strategy",
        desc: "From digital product roadmaps to platform publishing strategy, we help you define, prioritize, and execute the vision that drives competitive differentiation.",
        bullets: [
            "Product vision & roadmap development",
            "Platform publishing & monetization",
            "Competitive landscape analysis",
            "Go-to-market strategy",
        ],
    },
];

const whyUs = [
    "SAP SD Certified Enterprise Architect",
    "PMP Certified Project Manager",
    "Certified Scrum Master & Agile Coach",
    "21+ Years of Fortune 500 Transformation Experience",
];

const StrategyPage = () => (
    <div className="min-h-screen bg-background">
        <Navbar />
        <main>
            {/* Hero */}
            <section className="relative pt-36 pb-24 overflow-hidden">
                {/* Glow blobs */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
                </div>

                <div className="container relative max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Credential badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-8">
                            <CheckCircle className="text-primary" size={14} />
                            <span className="text-xs font-heading font-semibold text-primary uppercase tracking-[0.18em]">
                                Led by PMP, CSM & SAP SD Certified Experts
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
                            Strategic Roadmaps for<br />
                            <span className="text-[#00e5ff]">Enterprise Transformation.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/55 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Navigate complex digital transformations, AI adoption, and platform publishing — backed by certified expertise and 21+ years of enterprise execution.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#contact">
                                <Button size="lg" className="bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black font-bold h-14 px-10 rounded-xl shadow-[0_4px_20px_-5px_#00e5ff66]">
                                    Schedule a Strategy Session <ArrowRight size={16} className="ml-1" />
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
                            Our Strategic Services
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Three interconnected pillars that guide enterprise leaders from ambiguity to confident, measurable action.
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
                                className="glass rounded-2xl p-7 border border-border/50 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 glow-cyan-sm group"
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

            {/* Why Us / Credentials Banner */}
            <section className="py-16">
                <div className="container max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass rounded-2xl p-10 border border-primary/20 glow-cyan text-center"
                    >
                        <p className="text-xs font-heading font-semibold text-primary uppercase tracking-[0.2em] mb-4">
                            Why AWAIS LLC
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-8 text-foreground">
                            Credentials That Deliver Confidence
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {whyUs.map((item) => (
                                <span
                                    key={item}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary"
                                >
                                    <CheckCircle size={14} />
                                    {item}
                                </span>
                            ))}
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
                            Ready to Transform?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                            Let's build your strategic roadmap together. Schedule a complimentary discovery session with our certified leadership team.
                        </p>
                        <a href="mailto:contact@awaisllc.com">
                            <Button size="lg" className="bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black font-bold h-14 px-12 rounded-xl shadow-[0_4px_20px_-5px_#00e5ff66]">
                                Schedule a Strategy Session <ArrowRight size={16} className="ml-2" />
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
);

export default StrategyPage;

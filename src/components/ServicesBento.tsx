import { motion } from "framer-motion";
import { Briefcase, BookOpen, CheckCircle, Cpu, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Strategy & Consulting",
    desc: "Strategic leadership and roadmap development for digital evolution.",
    bullets: [
      "Publishing & content strategy",
      "AI adoption & AI use-case consulting",
      "IT & digital transformation",
      "Product and platform strategy",
    ],
  },
  {
    icon: BookOpen,
    title: "Content & IP Development",
    desc: "Developing high-value intellectual property and technical assets.",
    bullets: [
      "Ghostwriting & manuscript development",
      "Technical documentation",
      "AI-assisted content creation",
      "Training materials & SOPs",
    ],
  },
  {
    icon: CheckCircle,
    title: "Editorial & Optimization",
    desc: "Ensuring clarity, accuracy, and compliance in every asset.",
    bullets: [
      "Editing & proofreading",
      "Technical and compliance editing",
      "AI-assisted review & QA",
      "Content clarity & optimization",
    ],
  },
  {
    icon: Cpu,
    title: "Technology, AI & Automation",
    desc: "Building the systems and tools that power modern enterprises.",
    bullets: [
      "Software development",
      "AI solutions & workflows",
      "Automation tools & systems",
      "Custom platforms & internal tools",
    ],
  },
  {
    icon: TrendingUp,
    title: "Distribution & Growth",
    desc: "Scaling your reach and maximizing the impact of your products.",
    bullets: [
      "Book & digital product marketing",
      "SEO & AI search optimization",
      "Platform publishing & launches",
      "Growth strategy & monetization",
    ],
  },
];

const ServicesBento = () => (
  <section id="services" className="py-24 relative">
    <div className="container max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Our Service Pillars
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive solutions blending strategic foresight with technical execution to drive your business forward.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className={`glass rounded-xl p-6 border border-border/50 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group ${
              i < 2 ? "lg:col-span-1" : ""
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20">
                <s.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">{s.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
            <ul className="space-y-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesBento;

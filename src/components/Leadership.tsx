import { motion } from "framer-motion";
import { Headphones, ExternalLink, CheckCircle, Cpu, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const leaders = [
  {
    name: "Awais Rizvi",
    subtitle: "Lead Enterprise Architect & SAP SD Certified Expert",
    bio: "Driving high-stakes digital transformations, platform strategy, and complex SAP S/4HANA implementations with over two decades of tech leadership.",
    highlights: [
      "SAP SD Certified Consultant",
      "21+ Years Enterprise Architecture",
      "AI Adoption & Digital Transformation Lead",
    ],
    icon: Cpu,
    delay: 0,
  },
  {
    name: "Syed Imon Rizvi",
    subtitle: "PMP Certified, Certified Scrum Master & Agile Coach",
    bio: "Ensuring flawless execution, operational efficiency, and rapid product delivery through world-class Agile methodologies and strict project governance.",
    highlights: [
      "PMP Certified Project Manager",
      "Certified Scrum Master & Agile Coach",
      "Operational Efficiency & Delivery Excellence",
    ],
    icon: Award,
    delay: 0.15,
  },
];

const Leadership = () => (
  <section id="leadership" className="py-24">
    <div className="container max-w-6xl">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <p className="text-xs font-heading font-semibold text-primary uppercase tracking-[0.2em] mb-3">
          Meet the Leadership
        </p>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Dual-Certified Expertise.<br />
          <span className="text-[#00e5ff]">One Unified Vision.</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A rare pairing of enterprise architecture and agile delivery mastery — built to tackle the most complex business challenges.
        </p>
      </motion.div>

      {/* Main 2-col + audiobook layout */}
      <div className="grid lg:grid-cols-3 gap-6 items-start">

        {/* Leadership Cards — takes 2/3 of the grid */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
          {leaders.map((leader) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: leader.delay }}
              className="glass rounded-2xl p-7 border border-border/50 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 glow-cyan-sm"
            >
              {/* Icon badge */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-5">
                <leader.icon className="text-primary" size={22} />
              </div>

              <h3 className="font-heading font-bold text-xl text-foreground mb-1">{leader.name}</h3>
              <p className="text-xs font-heading text-primary/80 font-semibold uppercase tracking-wide mb-4 leading-snug">
                {leader.subtitle}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{leader.bio}</p>

              <ul className="space-y-2">
                {leader.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="text-primary mt-0.5 shrink-0" size={15} />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Audiobook Promo — takes 1/3 */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl p-8 glow-cyan border border-primary/20 flex flex-col"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-xs font-heading font-semibold text-primary uppercase tracking-widest mb-5 self-start">
            New Release
          </span>

          {/* Decorative audiobook cover */}
          <div className="relative w-full aspect-square max-w-[200px] mx-auto mb-6 rounded-xl overflow-hidden border border-primary/20 shadow-[0_0_30px_-5px_#00e5ff44]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#0d2240] to-[#001a33]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
              <Headphones className="text-[#00e5ff] mb-3" size={40} />
              <p className="font-heading font-black text-white text-sm leading-tight">AGILE MASTERY</p>
              <p className="text-[#00e5ff] text-[10px] font-semibold uppercase tracking-widest mt-1">The Ultimate Playbook</p>
              <div className="mt-3 w-8 h-px bg-primary/40" />
              <p className="text-white/40 text-[10px] mt-2">for Scrum Success</p>
            </div>
          </div>

          <h3 className="font-heading font-bold text-xl mb-1 text-foreground">
            Agile Mastery
          </h3>
          <p className="text-sm text-muted-foreground mb-1 italic">
            "The Ultimate Playbook for Scrum Success."
          </p>
          <p className="text-xs text-primary/70 font-semibold mb-4">
            Authored & backed by Certified PMP & Scrum Master expertise.
          </p>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Unlock the secrets to building high-velocity teams, mastering agile frameworks, and dramatically increasing your project success rates.
          </p>
          <a
            href="https://www.audible.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto"
          >
            <Button className="w-full gap-2 rounded-full bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black font-bold">
              <Headphones size={16} />
              Listen on Audible <ExternalLink size={14} />
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Leadership;

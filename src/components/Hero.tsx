import { motion } from "framer-motion";
import { Briefcase, Server, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { icon: Briefcase, label: "21+ Years Enterprise Experience" },
  { icon: Server, label: "SAP SD Certified" },
  { icon: CheckCircle, label: "PMP Certified" },
  { icon: Users, label: "Certified Scrum Master & Agile Coach" },
];

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    {/* Ambient glow blobs */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-20 pointer-events-none">
      <div className="absolute top-0 left-10 w-96 h-96 bg-primary rounded-full mix-blend-screen blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-accent rounded-full mix-blend-screen blur-[120px]" />
    </div>

    <div className="container relative z-10 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Enterprise badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
          <span className="text-[10px] md:text-xs font-heading font-bold text-white/70 uppercase tracking-[0.2em]">
            Enterprise Tech Leader
          </span>
        </div>

        <h1 className="text-[36px] md:text-[54px] lg:text-[64px] font-heading font-extrabold tracking-tight leading-[1.1] mb-8 text-white">
          Empowering Success<br />
          Through <span className="text-[#00e5ff]">Strategic</span><br />
          <span className="text-[#00e5ff]">Leadership</span> & Creative<br />
          Solutions.
        </h1>

        <p className="text-base md:text-[19px] text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Backed by <strong className="text-white/90 font-bold">21+ years of expertise</strong>. We bridge the gap between complex enterprise challenges and elegant solutions through strategic consulting, AI-driven technology, and high-impact content development.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-4">
          <a href="#roi-calculator">
            <Button size="lg" className="bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black font-bold h-14 px-10 rounded-xl shadow-[0_4px_20px_-5px_#00e5ff66] transition-all duration-300">
              Optimize Our Costs
            </Button>
          </a>
          <a href="#services">
            <Button variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold h-14 px-10 rounded-xl backdrop-blur-sm transition-all duration-300">
              Explore Services
            </Button>
          </a>
        </div>

        {/* Trust badges - inline layout */}
        <div className="border-t border-border/30 pt-8 mt-10">
          <p className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-5">
            Trusted Expertise
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {badges.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <b.icon className="text-primary" size={18} />
                <span>{b.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;

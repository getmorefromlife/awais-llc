import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// ─────────────────────────────────────────────────────────────────
// Web3Forms — 100% free, unlimited emails, no backend needed.
//
// SETUP (takes 2 minutes):
//   1. Go to https://web3forms.com
//   2. Enter your email address → click "Create Access Key"
//   3. Copy the key and paste it below replacing YOUR_ACCESS_KEY_HERE
//
// That's it — form submissions will land directly in your inbox.
// ─────────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = "5746df60-9cd6-4d2e-9a99-d3233a1296cd";

const Footer = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    // Optional: customise the subject line that arrives in your inbox
    data.append("subject", "New enquiry from AWAIS LLC website");
    data.append("from_name", "AWAIS LLC Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        toast({
          title: "Message received! ✅",
          description: "We'll get back to you within one business day.",
        });
        form.reset();
      } else {
        throw new Error(json.message || "Submission failed");
      }
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please email us directly at info@awais.us",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <footer id="contact" className="border-t border-border/50 py-24">
      <div className="container max-w-6xl">

        {/* ── Section Header — centred ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-heading font-semibold text-primary uppercase tracking-[0.2em] mb-3">
            Let's Talk
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Start a Conversation
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to transform your enterprise? Fill in the form below or reach us directly — we respond within one business day.
          </p>
        </motion.div>

        {/* ── Main Grid: Form + Info ─────────────────────────── */}
        <div className="grid lg:grid-cols-5 gap-8 items-start max-w-5xl mx-auto">

          {/* Contact Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 glass rounded-2xl p-8 border border-border/50 glow-cyan-sm"
          >
            <h3 className="font-heading font-bold text-xl mb-6 text-foreground">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Your Name"
                required
                className="bg-muted/50"
              />
              <Input
                name="email"
                placeholder="Email Address"
                type="email"
                required
                className="bg-muted/50"
              />
              <Input
                name="company"
                placeholder="Company / Organisation (optional)"
                className="sm:col-span-2 bg-muted/50"
              />
              <Textarea
                name="message"
                placeholder="Tell us about your project or challenge…"
                required
                className="sm:col-span-2 bg-muted/50 min-h-[140px]"
              />
              <Button
                type="submit"
                disabled={sending}
                size="lg"
                className="sm:col-span-2 w-full gap-2 rounded-xl bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-black font-bold shadow-[0_4px_20px_-5px_#00e5ff55]"
              >
                <Send size={16} />
                {sending ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Info Panel — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Direct contact */}
            <div className="glass rounded-2xl p-6 border border-border/50">
              <h3 className="font-heading font-bold text-lg mb-5 text-foreground">Direct Contact</h3>
              <a
                href="mailto:info@awais.us"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4 group"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors shrink-0">
                  <Mail size={15} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground/60 mb-0.5">Email</p>
                  <p className="text-foreground font-medium">info@awais.us</p>
                </div>
              </a>
              <a
                href="tel:+18402078720"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors shrink-0">
                  <Phone size={15} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground/60 mb-0.5">Phone</p>
                  <p className="text-foreground font-medium">+1-840-207-8720</p>
                </div>
              </a>
            </div>

            {/* Location */}
            <div className="glass rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                  <MapPin size={15} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground/60 mb-0.5">Based In</p>
                  <p className="text-foreground font-medium">Anaheim, California</p>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="glass rounded-2xl p-6 border border-border/50">
              <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Quick Links</h4>
              <div className="flex flex-col gap-2.5">
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  Blog & Insights
                </Link>
                <Link to="/strategy" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  Strategy & Consulting
                </Link>
                <Link to="/content" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  Content & IP Development
                </Link>
                <Link to="/technology" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  Technology & Automation
                </Link>
                <a
                  href="https://www.audible.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  Agile Mastery (Audiobook)
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────── */}
        <div className="mt-16 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AWAIS LLC. All rights reserved. · Anaheim, California
        </div>
      </div>
    </footer>
  );
};

export default Footer;

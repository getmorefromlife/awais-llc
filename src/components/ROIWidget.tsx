import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const ROIWidget = () => {
  const [spend, setSpend] = useState([100000]);
  const savings = Math.round(spend[0] * 0.2);

  return (
    <section id="roi-calculator" className="py-24">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Unlock Your Cloud ROI
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Corporate clients lose thousands due to unoptimized infrastructure. Calculate how much our project cost optimization can save you instantly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-8 sm:p-12 glow-cyan"
        >
          <div className="mb-8">
            <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">
              Estimated Monthly Cloud Spend
            </h3>
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
                ${spend[0].toLocaleString()}
              </span>
              <span>$500,000</span>
            </div>
          </div>

          <div className="text-center mb-8 py-6 rounded-xl bg-background/40">
            <p className="text-muted-foreground text-sm mb-2">Potential Savings with AWAIS LLC</p>
            <p className="text-5xl sm:text-6xl font-heading font-bold text-accent">
              ${savings.toLocaleString()}
            </p>
          </div>

          <div className="text-center">
            <a href="#contact">
              <Button size="lg" className="px-10 rounded-full">Claim Your Savings</Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROIWidget;

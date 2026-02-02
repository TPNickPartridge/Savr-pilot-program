import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const benefits = [
  "Monetize empty inventory without discounting your brand",
  "Predictable, guaranteed revenue during slow hours",
  "Attract new diners without replacing existing ones",
  "Keep full control over service quality and experience",
  "Pilot-phase feedback directly shapes the product",
];

const WhyInterested = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Why Restaurants Are Interested
            </h2>
            <p className="text-xl text-muted-foreground">
              Built for operators, not coupon hunters.
            </p>
          </div>

          <div className="bg-gradient-to-br from-background to-secondary/30 rounded-2xl p-8 md:p-12 border border-border shadow-lg">
            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-lg text-foreground/90">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyInterested;

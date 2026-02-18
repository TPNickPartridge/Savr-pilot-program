import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const thisIs = [
  "A limited Toronto pilot",
  "Feedback-driven and collaborative",
  "Designed to test pricing, timing, and demand",
];

const thisIsNot = [
  "A long-term commitment",
  "A discount platform",
  "A public deal site",
];

const PilotDetails = () => {
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
              What This Is — and What It Isn't
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl p-8 border border-primary/20 bg-accent/30 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </div>
                This is
              </h3>
              <ul className="space-y-4">
                {thisIs.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground/90">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl p-8 border border-border bg-secondary/50 transition-all duration-300 hover:shadow-lg"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                  <X className="w-5 h-5 text-muted-foreground" />
                </div>
                This is not
              </h3>
              <ul className="space-y-4">
                {thisIsNot.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <X className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PilotDetails;

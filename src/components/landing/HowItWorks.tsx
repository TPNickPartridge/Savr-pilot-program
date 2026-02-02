import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Identify your slow days and time slots",
    description: "Tell us when your tables typically go unused",
  },
  {
    number: "02",
    title: "Set how many tables you'd like to fill",
    description: "You control the volume — no surprises",
  },
  {
    number: "03",
    title: "Offer a curated menu or selected items",
    description: "Create an experience that fits your operations",
  },
  {
    number: "04",
    title: "Receive guaranteed payouts",
    description: "Get paid for guests who would not have otherwise visited",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">
              How the Pilot Works
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Four simple steps to start filling empty tables
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="relative bg-card rounded-2xl p-8 border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 group"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <span className="absolute top-6 right-6 text-6xl font-bold text-primary/10 font-display transition-colors duration-300 group-hover:text-primary/20">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary/20">
                    <span className="text-primary font-bold font-display">{step.number}</span>
                  </div>
                  <h3 className="font-semibold text-xl text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-light">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center mt-12"
          >
            <p className="inline-block text-lg text-muted-foreground bg-accent/50 rounded-2xl px-8 py-5 border border-primary/10 font-light">
              This pilot is designed to complement your existing service — not disrupt peak operations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

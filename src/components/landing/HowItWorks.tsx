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
            <p className="text-xl text-muted-foreground">
              Four simple steps to start filling empty tables
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

            <div className="space-y-8 md:space-y-0">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * index }}
                  className={`relative md:flex md:items-center md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-background rounded-xl p-6 shadow-md border border-border hover:border-primary/20 transition-colors">
                      <span className="text-primary font-bold text-4xl font-display opacity-30">
                        {step.number}
                      </span>
                      <h3 className="font-semibold text-xl text-foreground mt-2 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md" />

                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center text-lg text-muted-foreground mt-12 max-w-2xl mx-auto bg-accent/50 rounded-xl p-6 border border-primary/10"
          >
            This pilot is designed to complement your existing service — not disrupt peak operations.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

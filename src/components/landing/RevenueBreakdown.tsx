import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

const steps = [
  {
    label: "Ingredients",
    subtitle: "Step 1: Ingredients",
    percent: 30,
    description:
      "About $9 of your $30 meal goes straight to the food on your plate — fresh produce, proteins, sauces, and everything that makes it delicious.",
    color: "hsl(185, 77%, 44%)",
  },
  {
    label: "The Team",
    subtitle: "Step 2: The Team",
    percent: 30,
    description:
      "Another $9 pays the people who make it all happen — chefs, servers, dishwashers, and hosts working to give you a great experience.",
    color: "hsl(185, 60%, 38%)",
  },
  {
    label: "The Space",
    subtitle: "Step 3: The Space",
    percent: 18,
    description:
      "Around $5.40 covers rent, electricity, water, and keeping the lights on — whether the restaurant is full or empty.",
    color: "hsl(220, 25%, 55%)",
  },
  {
    label: "Operating Costs",
    subtitle: "Step 4: Operating Costs",
    percent: 12,
    description:
      "About $3.60 goes to insurance, equipment, marketing, tech, and all the behind-the-scenes costs of running a business.",
    color: "hsl(220, 14%, 72%)",
  },
  {
    label: "What's Left",
    subtitle: "Step 5: What's Left",
    percent: 10,
    description:
      "After everything, roughly $3 remains. That's the margin most restaurants operate on — often even less.",
    color: "hsl(45, 80%, 55%)",
  },
];

const RevenueBreakdown = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Incremental Revenue Example
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Ever wonder where your $30 dinner actually goes? Here's a transparent look at the real numbers behind a meal.
            </p>
          </div>

          {/* Horizontal Breakdown Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-14"
          >
            <div className="rounded-2xl overflow-hidden h-10 md:h-12 flex w-full shadow-sm border border-border">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${step.percent}%` } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                  className="h-full flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: step.color }}
                >
                  <span className="text-white text-xs md:text-sm font-medium whitespace-nowrap px-1">
                    {step.percent}%
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-4">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <span
                    className="inline-block w-3 h-3 rounded-sm flex-shrink-0"
                    style={{ backgroundColor: step.color }}
                  />
                  {step.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Step-by-step breakdown */}
          <div className="space-y-5">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 * index + 0.5 }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border transition-all duration-300 hover:border-primary/20 hover:shadow-md group"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold font-display text-sm transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.percent}%
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">
                      {step.subtitle}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gratitude message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-center mt-14"
          >
            <div className="inline-flex flex-col items-center gap-3 bg-accent/50 rounded-2xl px-8 py-6 border border-primary/10">
              <Heart className="w-6 h-6 text-primary" />
              <p className="text-lg text-foreground/80 font-light max-w-lg">
                Every visit makes a difference. Thank you for supporting local restaurants and the people behind every plate.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevenueBreakdown;

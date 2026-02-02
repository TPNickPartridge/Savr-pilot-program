import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Users, TrendingDown, Truck } from "lucide-react";

const problems = [
  {
    icon: Users,
    text: "Staff scheduled, lights on, kitchen ready",
  },
  {
    icon: Clock,
    text: "Early evenings, late lunches, weekdays under-filled",
  },
  {
    icon: TrendingDown,
    text: "Discounting hurts brand and trains the wrong customer",
  },
  {
    icon: Truck,
    text: "Delivery apps take margin without filling seats",
  },
];

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="py-24 md:py-32 section-dark" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 text-center leading-tight">
            The hardest part of running a restaurant isn't peak hours —{" "}
            <span className="text-primary">it's the empty ones.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-primary/30 hover:shadow-lg group"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/30">
                  <problem.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-surface-dark-foreground/90 text-lg font-medium">
                  {problem.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-xl text-surface-dark-foreground/70 font-light"
          >
            Empty tables aren't a demand problem — they're a timing problem.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;

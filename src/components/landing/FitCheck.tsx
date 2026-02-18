import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const criteria = [
  "You experience slow periods during specific days or times",
  "You have tables that go unused despite full staffing",
  "You want incremental revenue, not margin erosion",
  "You're open to testing new demand channels thoughtfully",
];

const FitCheck = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fit" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Is SAVR a Good Fit for Your Restaurant?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {criteria.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-lg group"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-foreground/90 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-center text-muted-foreground font-light"
          >
            Fine-dining, casual, and neighborhood restaurants are all welcome.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FitCheck;

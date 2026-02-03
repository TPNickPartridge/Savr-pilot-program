import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 section-dark overflow-hidden relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Interested in Filling Empty Tables?
          </h2>
          
          <p className="text-xl text-surface-dark-foreground/80 mb-10 max-w-xl mx-auto font-light">
            We're inviting a small group of Toronto restaurants to help shape the first TastePass pilot.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="https://form.typeform.com/to/zHeavyYz"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-primary-glow transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] glow-effect"
            >
              Apply for the TastePass Pilot
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-sm text-surface-dark-foreground/60 font-light"
          >
            This is an interest and feedback form only — there is no obligation or commitment.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const benefits = [
  "Monetize empty inventory without discounting your brand",
  "Predictable, reliable revenue during slow hours",
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
            <p className="text-xl text-muted-foreground font-light">
              Built for operators, not coupon hunters.
            </p>
          </div>

          <motion.div 
            className="card-elevated p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index + 0.3 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-primary flex items-center justify-center mt-0.5 transition-transform duration-300 group-hover:scale-110">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-lg text-foreground/90 font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyInterested;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarClock, UtensilsCrossed, BadgePercent, CreditCard, TrendingUp } from "lucide-react";

const principles = [
  {
    icon: CalendarClock,
    title: "You choose the slow times",
    description: "Define exactly when you want to offer tables",
  },
  {
    icon: UtensilsCrossed,
    title: "You control the menu scope",
    description: "Set what's available for each session",
  },
  {
    icon: BadgePercent,
    title: "No public discounts",
    description: "Your brand stays premium and protected",
  },
  {
    icon: CreditCard,
    title: "Guests pre-pay",
    description: "Guaranteed revenue before they arrive",
  },
  {
    icon: TrendingUp,
    title: "Keep the upside",
    description: "Drinks and add-ons stay with you",
  },
];

const WhatIs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="what-is" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">
              What Is <span className="text-primary">TastePass</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              TastePass helps restaurants fill empty tables with guaranteed revenue.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-elevated p-8 md:p-10 mb-16"
          >
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
              TastePass allows restaurants to offer limited off-peak availability to diners who pre-pay for a curated dining experience. Restaurants control the timing, volume, and menu — TastePass simply brings demand to seats that would otherwise go unused.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                className="group text-center p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110">
                  <principle.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIs;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { XCircle, CheckCircle2, DollarSign, UtensilsCrossed, TrendingUp } from "lucide-react";

const EmptyTables = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Why Empty Tables Are Worth{" "}
              <span className="text-primary">$0</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Restaurants carry high fixed costs — rent, labour, utilities — regardless of how many guests walk in.
            </p>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-center text-lg text-muted-foreground font-light mb-14 max-w-xl mx-auto"
          >
            During off-peak hours, an empty table doesn't just earn nothing — it costs you money. Filling it, even at a reduced rate, creates real contribution margin.
          </motion.p>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {/* Empty Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-2xl border border-border bg-card p-8 relative overflow-hidden"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-destructive/60" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Empty Table</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="w-4 h-4" />
                    <span className="font-medium">Revenue</span>
                  </div>
                  <span className="font-display text-2xl font-bold text-foreground">$0</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <UtensilsCrossed className="w-4 h-4" />
                    <span className="font-medium">Food Cost</span>
                  </div>
                  <span className="font-display text-2xl font-bold text-foreground">$0</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-medium">Contribution</span>
                  </div>
                  <span className="font-display text-2xl font-bold text-destructive">$0</span>
                </div>
              </div>

              <p className="mt-6 text-sm text-muted-foreground font-light">
                Fixed costs keep running. Zero guests means zero return on those costs.
              </p>
            </motion.div>

            {/* Filled Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="rounded-2xl border border-primary/30 bg-card p-8 relative overflow-hidden"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Filled via SAVR</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="w-4 h-4" />
                    <span className="font-medium">Revenue</span>
                  </div>
                  <span className="font-display text-2xl font-bold text-foreground">$50</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <UtensilsCrossed className="w-4 h-4" />
                    <span className="font-medium">Food Cost</span>
                  </div>
                  <span className="font-display text-2xl font-bold text-foreground">−$15</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-medium">Contribution</span>
                  </div>
                  <span className="font-display text-2xl font-bold text-primary">+$35</span>
                </div>
              </div>

              <p className="mt-6 text-sm text-muted-foreground font-light">
                Even at a 50% payout, each filled table adds directly to your bottom line.
              </p>
            </motion.div>
          </div>

          {/* Closing Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <p className="inline-block text-lg text-muted-foreground bg-accent/50 rounded-2xl px-8 py-5 border border-primary/10 font-light max-w-2xl">
              Optimizing unused capacity doesn't reduce value — it increases sustainability.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmptyTables;

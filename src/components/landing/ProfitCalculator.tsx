import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, AlertTriangle, DollarSign } from "lucide-react";

const ProfitCalculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [menuPrice, setMenuPrice] = useState(30);
  const [foodCostPct, setFoodCostPct] = useState(30);
  const [payoutPct, setPayoutPct] = useState(50);
  const [emptySeats, setEmptySeats] = useState(20);

  const calc = useMemo(() => {
    const revenueReceived = menuPrice * (payoutPct / 100);
    const foodCost = menuPrice * (foodCostPct / 100);
    const contribution = revenueReceived - foodCost;
    const monthlyImpact = contribution * emptySeats * 4;
    const breakEvenPayout = foodCostPct;
    return { revenueReceived, foodCost, contribution, monthlyImpact, breakEvenPayout };
  }, [menuPrice, foodCostPct, payoutPct, emptySeats]);

  const contributionColor =
    calc.contribution > 0.5
      ? "text-primary"
      : calc.contribution < -0.5
        ? "text-destructive"
        : "text-yellow-500";

  const monthlyColor =
    calc.monthlyImpact > 0.5
      ? "text-primary"
      : calc.monthlyImpact < -0.5
        ? "text-destructive"
        : "text-yellow-500";

  return (
    <section className="py-24 md:py-32 section-dark" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <Calculator className="w-4 h-4" />
              Interactive Tool
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Empty Table Profit Calculator
            </h2>
            <p className="text-xl text-surface-dark-foreground/70 font-light max-w-2xl mx-auto">
              Adjust the sliders to see how filling off-peak seats impacts your bottom line.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sliders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 space-y-8"
            >
              <SliderRow
                label="Average Menu Price"
                value={menuPrice}
                min={15}
                max={60}
                step={1}
                format={(v) => `$${v}`}
                onChange={setMenuPrice}
              />
              <SliderRow
                label="Food Cost %"
                value={foodCostPct}
                min={20}
                max={40}
                step={1}
                format={(v) => `${v}%`}
                onChange={setFoodCostPct}
              />
              <SliderRow
                label="Payout %"
                value={payoutPct}
                min={30}
                max={70}
                step={1}
                format={(v) => `${v}%`}
                onChange={setPayoutPct}
              />
              <SliderRow
                label="Empty Seats Per Week"
                value={emptySeats}
                min={0}
                max={100}
                step={1}
                format={(v) => `${v}`}
                onChange={setEmptySeats}
              />
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 flex flex-col justify-between"
            >
              <div className="space-y-5">
                <ResultRow
                  icon={<DollarSign className="w-4 h-4" />}
                  label="Revenue Received"
                  value={`$${calc.revenueReceived.toFixed(2)}`}
                  valueClass="text-surface-dark-foreground"
                />
                <ResultRow
                  icon={<AlertTriangle className="w-4 h-4" />}
                  label="Food Cost"
                  value={`−$${calc.foodCost.toFixed(2)}`}
                  valueClass="text-surface-dark-foreground"
                />
                <div className="border-t border-white/10 pt-5">
                  <ResultRow
                    icon={<TrendingUp className="w-4 h-4" />}
                    label="Contribution per Seat"
                    value={`${calc.contribution >= 0 ? "+" : ""}$${calc.contribution.toFixed(2)}`}
                    valueClass={contributionColor}
                    large
                  />
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <p className="text-sm text-surface-dark-foreground/60 font-medium mb-1">
                    Estimated Monthly Impact
                  </p>
                  <p className={`font-display text-3xl md:text-4xl font-bold ${monthlyColor}`}>
                    {calc.monthlyImpact >= 0 ? "+" : ""}${calc.monthlyImpact.toFixed(0)}
                  </p>
                  <p className="text-xs text-surface-dark-foreground/40 mt-1">
                    {emptySeats} seats × 4 weeks
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <p className="text-sm text-surface-dark-foreground/60 bg-white/5 rounded-lg px-4 py-2.5 border border-white/5">
                  Break-even payout ={" "}
                  <span className="font-bold text-primary">{calc.breakEvenPayout}%</span>
                  <span className="text-surface-dark-foreground/40"> (equals food cost %)</span>
                </p>
                <p className="text-xs text-surface-dark-foreground/40 font-light">
                  Assumes no additional staffing is required during off-peak hours.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface SliderRowProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}

const SliderRow = ({ label, value, min, max, step, format, onChange }: SliderRowProps) => (
  <div>
    <div className="flex items-center justify-between mb-3">
      <span className="text-sm font-medium text-surface-dark-foreground/80">{label}</span>
      <span className="font-display text-lg font-bold text-primary">{format(value)}</span>
    </div>
    <Slider
      value={[value]}
      min={min}
      max={max}
      step={step}
      onValueChange={([v]) => onChange(v)}
      className="w-full"
    />
    <div className="flex justify-between mt-1.5">
      <span className="text-xs text-surface-dark-foreground/30">{format(min)}</span>
      <span className="text-xs text-surface-dark-foreground/30">{format(max)}</span>
    </div>
  </div>
);

interface ResultRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  valueClass: string;
  large?: boolean;
}

const ResultRow = ({ icon, label, value, valueClass, large }: ResultRowProps) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 text-surface-dark-foreground/60">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
    <span className={`font-display font-bold ${valueClass} ${large ? "text-2xl" : "text-xl"}`}>
      {value}
    </span>
  </div>
);

export default ProfitCalculator;

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }} />

      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      
      {/* Subtle teal accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>

            <span className="inline-block mb-6 px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white/90 rounded-full text-sm font-medium border border-white/20 shadow-lg">
              Now piloting in Toronto
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] drop-shadow-lg">

            Empty Tables.
            <br />
            <span className="text-primary">Real Revenue.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-light">Turn slow dining hours into reliable revenue without public discounts, delivery apps, or brand dilution.


          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-white/70 mb-10 max-w-xl mx-auto font-light">

            SAVR is piloting a new way for Toronto restaurants to monetize off-peak tables with pre-paid guests.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <a
              href="https://form.typeform.com/to/DnXB5hWJ"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-glow transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] glow-effect">

              Apply for the SAVR Pilot
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 text-base font-medium bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30">

              Learn how the pilot works
              <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">

          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>);

};

export default Hero;
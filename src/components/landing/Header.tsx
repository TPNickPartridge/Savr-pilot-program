import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-md">
            <span className="text-primary-foreground font-bold text-sm">TP</span>
          </div>
          <span className="font-display text-xl font-semibold text-foreground tracking-tight">
            TastePass
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium">
            The Problem
          </a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium">
            How It Works
          </a>
          <a href="#fit" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium">
            Is It For You?
          </a>
        </nav>

        <a
          href="https://form.typeform.com/to/zHeavyYz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-glow transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
        >
          Apply Now
        </a>
      </div>
    </motion.header>
  );
};

export default Header;

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="font-display text-xl font-semibold text-foreground tracking-tight">
              SAVR
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center font-light">
            Turning empty tables into real revenue.
          </p>

          <a
            href="mailto:savr.pilot@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
          >
            savr.pilot@gmail.com
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground/60 font-light">
            © {new Date().getFullYear()} SAVR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

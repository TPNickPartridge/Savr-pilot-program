const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">TP</span>
            </div>
            <span className="font-display text-xl font-semibold text-foreground">
              Taste Pass
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            Turning empty tables into real revenue.
          </p>

          <a
            href="mailto:hello@tastepass.com"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            hello@tastepass.com
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground/60">
            © {new Date().getFullYear()} Taste Pass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

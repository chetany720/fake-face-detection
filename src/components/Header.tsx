import { Scan, Zap } from "lucide-react";

export const Header = () => {
  return (
    <header className="text-center space-y-4 py-8">
      {/* Logo */}
      <div className="flex items-center justify-center gap-3">
        <div className="relative">
          <div className="absolute inset-0 blur-xl bg-primary/30" />
          <div className="relative p-3 rounded-lg border border-primary/50 bg-card glow-primary">
            <Scan className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-display font-bold tracking-wider text-glow-primary text-primary animate-flicker">
          FACE<span className="text-accent">SCAN</span> AI
        </h1>
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <Zap className="w-3 h-3 text-primary" />
          <span className="uppercase tracking-widest">Deep Learning Detection System v2.4.1</span>
          <Zap className="w-3 h-3 text-primary" />
        </div>
      </div>

      {/* Tagline */}
      <p className="text-muted-foreground max-w-md mx-auto">
        Advanced neural network analysis to detect AI-generated faces with{" "}
        <span className="text-primary">99.7% accuracy*</span>
      </p>

      {/* Status bar */}
      <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground/70 pt-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>SYSTEM ONLINE</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span>MODEL LOADED</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span>GPU ACTIVE</span>
        </div>
      </div>
    </header>
  );
};

import { useEffect, useState } from "react";

interface ScannerViewProps {
  imageUrl: string;
  isScanning: boolean;
}

export const ScannerView = ({ imageUrl, isScanning }: ScannerViewProps) => {
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    if (isScanning) {
      setScanProgress(0);
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 60);
      return () => clearInterval(interval);
    }
  }, [isScanning]);

  return (
    <div className="relative rounded-lg overflow-hidden border-2 border-primary/50 glow-primary">
      {/* Image */}
      <div className="relative aspect-square max-h-[400px] overflow-hidden">
        <img
          src={imageUrl}
          alt="Subject for analysis"
          className="w-full h-full object-cover"
        />

        {/* Scan overlay */}
        {isScanning && (
          <>
            {/* Scan line */}
            <div
              className="absolute left-0 right-0 h-1 bg-gradient-to-b from-transparent via-primary to-transparent animate-scanline"
              style={{ boxShadow: "0 0 20px hsl(180 100% 50%)" }}
            />

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />

            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary animate-pulse-glow" />
            <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-primary animate-pulse-glow" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-primary animate-pulse-glow" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary animate-pulse-glow" />

            {/* Face detection box (mock) */}
            <div 
              className="absolute border-2 border-accent animate-border-pulse"
              style={{
                top: "20%",
                left: "25%",
                width: "50%",
                height: "60%",
              }}
            >
              <div className="absolute -top-6 left-0 text-xs text-accent font-mono">
                FACE_DETECTED
              </div>
            </div>
          </>
        )}
      </div>

      {/* Progress bar */}
      {isScanning && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary">
          <div
            className="h-full bg-primary transition-all duration-100"
            style={{ width: `${scanProgress}%`, boxShadow: "0 0 10px hsl(180 100% 50%)" }}
          />
        </div>
      )}

      {/* Status text */}
      <div className="absolute top-2 left-2 flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${isScanning ? "bg-primary animate-pulse" : "bg-muted"}`} />
        <span className="text-xs font-mono text-primary/80">
          {isScanning ? `SCANNING... ${scanProgress}%` : "READY"}
        </span>
      </div>
    </div>
  );
};

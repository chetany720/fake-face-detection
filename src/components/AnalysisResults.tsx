import { Shield, ShieldAlert, ShieldCheck, Activity, Cpu, Eye, Fingerprint } from "lucide-react";

interface AnalysisResult {
  verdict: "REAL" | "FAKE" | "SUSPICIOUS";
  confidence: number;
  metrics: {
    symmetry: number;
    skinTexture: number;
    eyeReflection: number;
    hairDetail: number;
    artifactScore: number;
  };
  warnings: string[];
}

interface AnalysisResultsProps {
  results: AnalysisResult;
}

export const AnalysisResults = ({ results }: AnalysisResultsProps) => {
  const getVerdictColor = () => {
    switch (results.verdict) {
      case "REAL":
        return "text-green-400";
      case "FAKE":
        return "text-destructive";
      case "SUSPICIOUS":
        return "text-amber-400";
    }
  };

  const getVerdictGlow = () => {
    switch (results.verdict) {
      case "REAL":
        return "glow-success";
      case "FAKE":
        return "glow-accent";
      case "SUSPICIOUS":
        return "glow-warning";
    }
  };

  const getVerdictIcon = () => {
    switch (results.verdict) {
      case "REAL":
        return <ShieldCheck className="w-8 h-8" />;
      case "FAKE":
        return <ShieldAlert className="w-8 h-8" />;
      case "SUSPICIOUS":
        return <Shield className="w-8 h-8" />;
    }
  };

  const MetricBar = ({ label, value, icon: Icon }: { label: string; value: number; icon: React.ElementType }) => (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Icon className="w-3 h-3" />
          <span>{label}</span>
        </div>
        <span className="text-primary font-mono">{value}%</span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary/50 to-primary rounded-full transition-all duration-1000"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Verdict Card */}
      <div className={`p-6 rounded-lg border-2 border-current ${getVerdictColor()} ${getVerdictGlow()} bg-card/50`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`${getVerdictColor()}`}>
              {getVerdictIcon()}
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Analysis Complete</p>
              <p className={`text-2xl font-display font-bold ${getVerdictColor()}`}>
                {results.verdict === "REAL" ? "AUTHENTIC HUMAN" : results.verdict === "FAKE" ? "AI GENERATED" : "INCONCLUSIVE"}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Confidence</p>
            <p className={`text-3xl font-display font-bold ${getVerdictColor()}`}>
              {results.confidence}%
            </p>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 p-4 rounded-lg border border-border bg-card/30">
        <div className="flex items-center gap-2 text-xs text-muted-foreground border-b border-border pb-2">
          <Activity className="w-3 h-3" />
          <span className="uppercase tracking-wider">Biometric Analysis</span>
        </div>
        
        <div className="grid gap-3">
          <MetricBar label="Facial Symmetry" value={results.metrics.symmetry} icon={Fingerprint} />
          <MetricBar label="Skin Texture Authenticity" value={results.metrics.skinTexture} icon={Eye} />
          <MetricBar label="Eye Reflection Pattern" value={results.metrics.eyeReflection} icon={Eye} />
          <MetricBar label="Hair Detail Analysis" value={results.metrics.hairDetail} icon={Activity} />
          <MetricBar label="Digital Artifact Score" value={results.metrics.artifactScore} icon={Cpu} />
        </div>
      </div>

      {/* Warnings */}
      {results.warnings.length > 0 && (
        <div className="p-4 rounded-lg border border-amber-500/30 bg-amber-500/5">
          <div className="flex items-center gap-2 text-xs text-amber-400 mb-2">
            <ShieldAlert className="w-3 h-3" />
            <span className="uppercase tracking-wider">Detected Anomalies</span>
          </div>
          <ul className="space-y-1">
            {results.warnings.map((warning, i) => (
              <li key={i} className="text-sm text-amber-400/80 font-mono flex items-start gap-2">
                <span className="text-amber-500">›</span>
                {warning}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Disclaimer */}
      <p className="text-[10px] text-muted-foreground/50 text-center font-mono">
        ⚠ THIS IS A PARODY TOOL • RESULTS ARE RANDOMLY GENERATED FOR ENTERTAINMENT PURPOSES ONLY
      </p>
    </div>
  );
};

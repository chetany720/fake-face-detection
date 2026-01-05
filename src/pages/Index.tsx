import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { UploadZone } from "@/components/UploadZone";
import { ScannerView } from "@/components/ScannerView";
import { AnalysisResults } from "@/components/AnalysisResults";
import { generateFakeAnalysis } from "@/lib/fakeAnalysis";
import { RefreshCw } from "lucide-react";

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

const Index = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);

  const handleImageUpload = useCallback((file: File) => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    setResults(null);
    setIsAnalyzing(true);

    // Simulate analysis time
    setTimeout(() => {
      setIsAnalyzing(false);
      setResults(generateFakeAnalysis());
    }, 3000);
  }, []);

  const handleReset = () => {
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }
    setImageUrl(null);
    setResults(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-background bg-grid-pattern noise-overlay relative">
      <div className="relative z-10 container max-w-2xl mx-auto px-4 py-8">
        <Header />

        <main className="space-y-8">
          {!imageUrl ? (
            <UploadZone onImageUpload={handleImageUpload} isAnalyzing={isAnalyzing} />
          ) : (
            <div className="space-y-6">
              <ScannerView imageUrl={imageUrl} isScanning={isAnalyzing} />

              {results && (
                <>
                  <AnalysisResults results={results} />
                  
                  <button
                    onClick={handleReset}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all font-display tracking-wider"
                  >
                    <RefreshCw className="w-4 h-4" />
                    ANALYZE ANOTHER SUBJECT
                  </button>
                </>
              )}
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-xs text-muted-foreground/50 space-y-1">
          <p>* Accuracy claim is entirely fictional</p>
          <p className="font-mono">FACESCAN AI © 2024 • For Entertainment Only</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

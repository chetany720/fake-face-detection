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

const realWarnings = [
  "Minor lighting inconsistencies detected",
  "Slight blur in peripheral areas",
  "Natural micro-asymmetries present",
];

const fakeWarnings = [
  "Unnatural skin smoothness detected",
  "Inconsistent eye reflection patterns",
  "Hair strand artifacts at boundaries",
  "Missing natural skin pores",
  "Symmetry exceeds human norms",
  "Background blur inconsistencies",
  "Ear geometry anomalies detected",
];

const suspiciousWarnings = [
  "Analysis inconclusive - edge case detected",
  "Possible heavy post-processing",
  "Unusual color grading applied",
  "Resolution artifacts affecting analysis",
];

function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function generateFakeAnalysis(): AnalysisResult {
  // Random verdict with weighted probability
  const roll = Math.random();
  let verdict: "REAL" | "FAKE" | "SUSPICIOUS";
  
  if (roll < 0.4) {
    verdict = "REAL";
  } else if (roll < 0.85) {
    verdict = "FAKE";
  } else {
    verdict = "SUSPICIOUS";
  }

  // Generate metrics based on verdict
  let metrics: AnalysisResult["metrics"];
  let confidence: number;
  let warnings: string[];

  switch (verdict) {
    case "REAL":
      metrics = {
        symmetry: randomBetween(75, 92),
        skinTexture: randomBetween(80, 98),
        eyeReflection: randomBetween(85, 99),
        hairDetail: randomBetween(78, 95),
        artifactScore: randomBetween(85, 99),
      };
      confidence = randomBetween(75, 95);
      warnings = pickRandom(realWarnings, randomBetween(0, 2));
      break;

    case "FAKE":
      metrics = {
        symmetry: randomBetween(92, 100),
        skinTexture: randomBetween(30, 65),
        eyeReflection: randomBetween(20, 55),
        hairDetail: randomBetween(35, 60),
        artifactScore: randomBetween(15, 45),
      };
      confidence = randomBetween(70, 98);
      warnings = pickRandom(fakeWarnings, randomBetween(2, 4));
      break;

    case "SUSPICIOUS":
      metrics = {
        symmetry: randomBetween(80, 95),
        skinTexture: randomBetween(50, 75),
        eyeReflection: randomBetween(45, 70),
        hairDetail: randomBetween(55, 80),
        artifactScore: randomBetween(40, 65),
      };
      confidence = randomBetween(45, 65);
      warnings = pickRandom(suspiciousWarnings, randomBetween(1, 3));
      break;
  }

  return {
    verdict,
    confidence,
    metrics,
    warnings,
  };
}

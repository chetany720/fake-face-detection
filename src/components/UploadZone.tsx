import { useCallback, useState } from "react";
import { Upload, AlertCircle } from "lucide-react";

interface UploadZoneProps {
  onImageUpload: (file: File) => void;
  isAnalyzing: boolean;
}

export const UploadZone = ({ onImageUpload, isAnalyzing }: UploadZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = e.dataTransfer.files;
      if (files && files[0]) {
        if (files[0].type.startsWith("image/")) {
          onImageUpload(files[0]);
        }
      }
    },
    [onImageUpload]
  );

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      onImageUpload(files[0]);
    }
  };

  return (
    <div
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={`
        relative overflow-hidden rounded-lg border-2 border-dashed p-12
        transition-all duration-300 cursor-pointer group
        ${isDragging 
          ? "border-primary bg-primary/10 glow-primary" 
          : "border-border hover:border-primary/50 hover:bg-secondary/30"
        }
        ${isAnalyzing ? "pointer-events-none opacity-50" : ""}
      `}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        disabled={isAnalyzing}
      />
      
      <div className="flex flex-col items-center gap-4 text-center">
        <div className={`
          p-4 rounded-full border border-primary/30 bg-primary/5
          transition-all duration-300
          ${isDragging ? "glow-primary scale-110" : "group-hover:glow-primary group-hover:scale-105"}
        `}>
          <Upload className="w-8 h-8 text-primary" />
        </div>
        
        <div className="space-y-2">
          <p className="text-lg font-display text-foreground">
            {isDragging ? "DROP IMAGE HERE" : "UPLOAD SUBJECT"}
          </p>
          <p className="text-sm text-muted-foreground">
            Drag & drop or click to select an image file
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
          <AlertCircle className="w-3 h-3" />
          <span>JPG, PNG, WebP supported • Max 10MB</span>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/50" />
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/50" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/50" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/50" />
    </div>
  );
};

import { useState, useCallback } from "react";
import { Upload, Image as ImageIcon, CheckCircle } from "lucide-react";

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
}

const ImageUpload = ({ onImageUpload }: ImageUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setUploadedFile(file);
      onImageUpload(file);
    }
  }, [onImageUpload]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);
      onImageUpload(file);
    }
  }, [onImageUpload]);

  const getFileExtension = (filename: string) => {
    return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2).toUpperCase();
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Upload Image</h3>
      
      <div
        className={`glass-card relative border-2 border-dashed transition-all duration-300 cursor-pointer hover:glass-glow ${
          dragActive ? "border-primary scale-105" : "border-white/30"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer z-10"
          onChange={handleChange}
          accept="image/*"
        />
        
        <div className="flex flex-col items-center justify-center py-12 px-6">
          {uploadedFile ? (
            <div className="animate-fade-scale text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-primary mb-4" />
              <p className="text-sm font-medium text-foreground mb-2">
                {uploadedFile.name}
              </p>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                {getFileExtension(uploadedFile.name)} uploaded
              </div>
            </div>
          ) : (
            <>
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-sm font-medium text-foreground mb-2">
                Drop your image here or click to browse
              </p>
              <p className="text-xs text-muted-foreground">
                Supports JPG, PNG, SVG, GIF and more
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
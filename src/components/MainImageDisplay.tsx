import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MainImageDisplayProps {
  isGenerating: boolean;
  generatedImage?: string;
}

const MainImageDisplay = ({ isGenerating, generatedImage }: MainImageDisplayProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = 'thumbnail-1280x720.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Main Thumbnail (1280×720)</h3>
      
      <div className="glass-card p-4">
        <div 
          className="relative bg-muted/20 rounded-xl overflow-hidden"
          style={{ aspectRatio: '1280/720' }}
        >
          {isGenerating ? (
            <div className="absolute inset-0 flex items-center justify-center animate-shimmer">
              <div className="flex flex-col items-center space-y-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">Generating your thumbnail...</p>
              </div>
            </div>
          ) : generatedImage ? (
            <div className="relative">
              <img
                src={generatedImage}
                alt="Generated thumbnail"
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                </div>
              )}
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted-foreground text-center px-4">
                Upload an image and describe your idea to generate thumbnails
              </p>
            </div>
          )}
        </div>
        
        {generatedImage && imageLoaded && (
          <div className="mt-4 flex justify-center">
            <Button
              onClick={handleDownload}
              className="glass-glow hover:scale-105 transition-transform duration-200"
              variant="default"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Main Thumbnail
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainImageDisplay;
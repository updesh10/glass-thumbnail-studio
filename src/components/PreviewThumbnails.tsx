import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PreviewThumbnail {
  id: number;
  url?: string;
  isLoading: boolean;
}

interface PreviewThumbnailsProps {
  isGenerating: boolean;
  thumbnails: PreviewThumbnail[];
}

const PreviewThumbnails = ({ isGenerating, thumbnails }: PreviewThumbnailsProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set([...prev, id]));
  };

  const handleDownload = (thumbnail: PreviewThumbnail) => {
    if (thumbnail.url) {
      const link = document.createElement('a');
      link.href = thumbnail.url;
      link.download = `thumbnail-preview-${thumbnail.id}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-foreground">Preview Variations</h3>
      
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((id) => {
          const thumbnail = thumbnails.find(t => t.id === id);
          const isLoaded = loadedImages.has(id);
          
          return (
            <div key={id} className="glass-card p-4 hover:glass-glow transition-all duration-300">
              <div 
                className="relative bg-muted/20 rounded-lg overflow-hidden mb-3"
                style={{ aspectRatio: '16/9' }}
              >
                {thumbnail?.isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center animate-shimmer">
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  </div>
                ) : thumbnail?.url ? (
                  <div className="relative">
                    <img
                      src={thumbnail.url}
                      alt={`Preview thumbnail ${id}`}
                      className={`w-full h-full object-cover transition-opacity duration-500 ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(id)}
                    />
                    {!isLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="h-4 w-4 animate-spin text-primary" />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Preview {id}</span>
                  </div>
                )}
              </div>
              
              {thumbnail?.url && isLoaded && (
                <Button
                  onClick={() => handleDownload(thumbnail)}
                  size="sm"
                  variant="secondary"
                  className="w-full hover:scale-105 transition-transform duration-200"
                >
                  <Download className="mr-1 h-3 w-3" />
                  Download
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PreviewThumbnails;
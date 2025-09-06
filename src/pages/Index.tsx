import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ImageUpload from "@/components/ImageUpload";
import TextInput from "@/components/TextInput";
import MainImageDisplay from "@/components/MainImageDisplay";
import PreviewThumbnails from "@/components/PreviewThumbnails";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PreviewThumbnail {
  id: number;
  url?: string;
  isLoading: boolean;
}

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [mainThumbnail, setMainThumbnail] = useState<string>("");
  const [previewThumbnails, setPreviewThumbnails] = useState<PreviewThumbnail[]>([]);
  const { toast } = useToast();

  const handleImageUpload = (file: File) => {
    setUploadedImage(file);
  };

  const handleTextChange = (text: string) => {
    setDescription(text);
  };

  const simulateGeneration = async () => {
    if (!uploadedImage || !description.trim()) {
      toast({
        title: "Missing Information",
        description: "Please upload an image and provide a description.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setMainThumbnail("");
    setPreviewThumbnails([
      { id: 1, isLoading: true },
      { id: 2, isLoading: true },
      { id: 3, isLoading: true },
    ]);

    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate placeholder thumbnails (in real app, this would be API calls)
    const placeholderUrl = URL.createObjectURL(uploadedImage);
    
    setMainThumbnail(placeholderUrl);
    
    // Simulate staggered loading of previews
    for (let i = 1; i <= 3; i++) {
      setTimeout(() => {
        setPreviewThumbnails(prev => 
          prev.map(thumb => 
            thumb.id === i 
              ? { ...thumb, url: placeholderUrl, isLoading: false }
              : thumb
          )
        );
      }, 500 * i);
    }

    setIsGenerating(false);
    
    toast({
      title: "Thumbnails Generated!",
      description: "Your AI-powered thumbnails are ready for download.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Section - Inputs */}
          <div className="space-y-8">
            <div className="glass-card hover:glass-glow transition-all duration-300">
              <h2 className="text-3xl font-bold mb-8 gradient-text">Create Your Thumbnail</h2>
              
              <div className="space-y-8">
                <ImageUpload onImageUpload={handleImageUpload} />
                <TextInput onTextChange={handleTextChange} />
                
                <Button
                  onClick={simulateGeneration}
                  disabled={isGenerating}
                  className="w-full glass-glow hover:scale-105 transition-all duration-300 py-6 text-lg font-semibold"
                  size="lg"
                >
                  <Sparkles className="mr-3 h-6 w-6" />
                  {isGenerating ? "Generating Magic..." : "Generate Thumbnails"}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Section - Outputs */}
          <div className="space-y-8">
            <MainImageDisplay 
              isGenerating={isGenerating} 
              generatedImage={mainThumbnail}
            />
            
            <PreviewThumbnails 
              isGenerating={isGenerating}
              thumbnails={previewThumbnails}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
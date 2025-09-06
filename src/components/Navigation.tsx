import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card rounded-none border-l-0 border-r-0 border-t-0">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-lavender" />
            <span className="text-xl font-bold gradient-text">Thumbnail Maker</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Gallery
            </a>
            <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Help
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground">
              Sign In
            </Button>
            <Button size="sm" className="glass-glow">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
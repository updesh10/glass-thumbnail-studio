import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-lavender/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-coral/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-scale">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Effortless</span>
              <br />
              <span className="gradient-text">Thumbnail</span>
              <br />
              <span className="text-foreground">Generation</span>
            </h1>
            <p className="text-xl mb-8 text-foreground/70 max-w-lg leading-relaxed">
              The first AI-powered platform that transforms your images into stunning, 
              professional thumbnails without complex editing tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="glass-card px-8 py-4 font-semibold hover:scale-105 transition-transform animate-pulse-glow">
                Get Started
              </button>
              <button className="glass-card px-8 py-4 font-medium text-foreground/80 hover:text-foreground transition-colors">
                View Examples
              </button>
            </div>
          </div>
          
          {/* Right Visual Element */}
          <div className="relative">
            <div className="glass-card p-8 animate-float">
              <div className="aspect-video bg-gradient-to-br from-lavender/20 to-coral/10 rounded-xl border border-lavender/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-lavender/20 flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <p className="text-sm text-foreground/60">AI-Generated Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
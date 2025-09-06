import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="glass-card animate-fade-scale">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Thumbnail Maker
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground">
            Generate elegant thumbnails with AI-powered design
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your images into stunning thumbnails using advanced AI technology. 
            Upload any image type and describe your vision to create professional-quality thumbnails instantly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
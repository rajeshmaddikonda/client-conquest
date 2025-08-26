import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center">
      {/* Enhanced Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/15 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-glow/10 rounded-full blur-3xl"></div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-white/50 rounded-full animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                RAJESH
                <span className="block text-primary-glow">MADDIKONDA</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                Strategic Sales Leader & Revenue Growth Expert
              </p>
            </div>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              27+ years of transforming IT sales landscapes with proven expertise in driving 
              revenue growth, building high-performance teams, and delivering exceptional results 
              across diverse industry verticals.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">27+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">16%</div>
                <div className="text-sm text-white/70">CAGR Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">$5M+</div>
                <div className="text-sm text-white/70">Revenue Portfolio</div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>rajeshmaddikonda@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+91 95381 68468</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4" />
                <span>linkedin.com/in/rajeshmaddikonda</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-elegant"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => scrollToSection('experience')}
              >
                View Experience
              </Button>
            </div>
          </div>
          
          {/* Right Content - Enhanced Professional Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Card with Glow Effect */}
              <div className="aspect-square bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 p-8 shadow-glow relative overflow-hidden group">
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-primary-glow/20 rounded-3xl"></div>
                
                <div className="relative w-full h-full bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <div className="text-white text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-white/30 to-white/10 rounded-full flex items-center justify-center border-2 border-white/20 shadow-glow">
                      <span className="text-4xl font-bold bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">RM</span>
                    </div>
                    <p className="text-sm text-white/80 font-medium">Sales Leadership Expert</p>
                    <div className="flex justify-center gap-2 mt-3">
                      <div className="w-8 h-1 bg-white/60 rounded-full"></div>
                      <div className="w-8 h-1 bg-white/40 rounded-full"></div>
                      <div className="w-8 h-1 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full animate-float blur-sm"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-primary-glow/30 rounded-full animate-float delay-1000 blur-sm"></div>
              <div className="absolute top-1/4 -right-4 w-12 h-12 bg-white/15 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 -left-4 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-500"></div>
              
              {/* Success indicators */}
              <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/20">
                <div className="text-white text-center">
                  <div className="text-lg font-bold">27+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/20">
                <div className="text-white text-center">
                  <div className="text-lg font-bold">16%</div>
                  <div className="text-xs">CAGR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
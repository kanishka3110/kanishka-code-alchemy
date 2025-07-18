import { Button } from '@/components/ui/button';
import { Github, Mail, ArrowDown } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/60"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Profile Picture Placeholder */}
          <div className="w-32 h-32 rounded-full bg-gradient-primary mx-auto mb-8 flex items-center justify-center shadow-glow animate-float">
            <span className="text-4xl font-bold text-primary-foreground">KG</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Full Stack Engineer
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
            Mastering Creation, Solving Problems
          </p>

          {/* Brief Introduction */}
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up">
            Self-driven Full Stack Engineer specializing in <span className="text-primary font-semibold">Node.js</span> and <span className="text-primary font-semibold">React</span>. 
            Winner of Google Hackathon and L'Oréal Sustainability Hackathon. 
            I've never worked for a company before—not because I couldn't—but because I've always been building for myself first.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-3"
            >
              View My Projects
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-3"
            >
              <Mail className="mr-2 h-5 w-5" />
              Connect with Me
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-3"
            >
              <a href="https://github.com/kanishka3110" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-primary hover:text-primary-glow transition-colors"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
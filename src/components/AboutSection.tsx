import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Trophy, Code, Rocket } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey of innovation, independence, and relentless problem-solving
            </p>
          </div>

          {/* Main Bio */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Card className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">My Philosophy</h3>
                  <p className="text-foreground/90 leading-relaxed mb-6">
                    I've spent my time building products for myself and in hackathons, not in jobs. 
                    The reason? I wanted to first master creation and problem-solving at real speed, 
                    not just follow orders.
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    Now, I'm ready to channel that energy into building for your team, bringing 
                    the same ownership mindset that led to my hackathon victories and independent project success.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              {/* Achievement Cards */}
              <Card className="bg-gradient-card border-border hover:shadow-glow-accent transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <Trophy className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Google Hackathon Winner</h4>
                    <p className="text-muted-foreground text-sm">Recognized for innovative solution and technical excellence</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border hover:shadow-glow-accent transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <Trophy className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">L'Oréal Sustainability Hackathon Winner</h4>
                    <p className="text-muted-foreground text-sm">Developed sustainable tech solutions</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border hover:shadow-glow-accent transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <Code className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Self-Taught Excellence</h4>
                    <p className="text-muted-foreground text-sm">Mastered full-stack development through hands-on projects</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education */}
          <div className="text-center">
            <Card className="bg-gradient-card border-border max-w-2xl mx-auto hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Education</h3>
                <h4 className="text-xl font-semibold text-primary mb-2">
                  Gokaraju Rangaraju Institute of Engineering and Technology
                </h4>
                <p className="text-muted-foreground mb-2">
                  Bachelor's in Electrical and Electronics Engineering
                </p>
                <p className="text-accent font-medium">
                  Expected Graduation: 2026
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Award, TrendingUp } from 'lucide-react';

const ProjectsSection = () => {
  const featuredProject = {
    title: "Project Sentinel",
    subtitle: "Supply Chain Risk Dashboard",
    description: "Built an end-to-end dashboard for predicting global supply chain risks using AI. Integrated real-time data pipelines, anomaly detection, and interactive visualization to help businesses anticipate and mitigate supply chain disruptions.",
    techStack: ["Node.js", "React", "Streamlit", "MongoDB", "Python", "AI/ML"],
    highlights: [
      "Real-time risk prediction algorithms",
      "Interactive data visualization dashboard", 
      "Scalable data pipeline architecture",
      "AI-powered anomaly detection"
    ],
    impact: "Enterprise-grade solution equivalent to startup MVP"
  };

  const additionalProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
      type: "Web Application"
    },
    {
      title: "Real-time Chat Application", 
      description: "Scalable chat application with WebSocket integration, user authentication, and message persistence.",
      techStack: ["React", "Socket.io", "Express", "PostgreSQL"],
      type: "Real-time App"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with team workflows, deadlines, and progress tracking.",
      techStack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      type: "Productivity Tool"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world solutions built with startup-level execution and ownership mindset
            </p>
          </div>

          {/* Featured Project */}
          <div className="mb-16">
            <Card className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-primary" />
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    Featured Project
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bold text-foreground mb-2">
                  {featuredProject.title}
                </CardTitle>
                <p className="text-xl text-primary font-semibold">
                  {featuredProject.subtitle}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.techStack.map((tech, index) => (
                      <Badge 
                        key={index}
                        className="bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {featuredProject.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-foreground/80">
                        <TrendingUp className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <p className="text-foreground font-medium text-center">
                    <span className="text-primary">Impact:</span> {featuredProject.impact}
                  </p>
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <a href="https://github.com/kanishka3110" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Additional Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalProjects.map((project, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-border hover:shadow-glow-accent transition-all duration-300"
                >
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2 border-primary text-primary">
                      {project.type}
                    </Badge>
                    <CardTitle className="text-xl text-foreground">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-muted text-muted-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* GitHub CTA */}
          <div className="text-center">
            <Card className="bg-gradient-card border-border max-w-2xl mx-auto hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Explore More Projects
                </h3>
                <p className="text-foreground/80 mb-6">
                  Check out my complete portfolio on GitHub to see more innovative solutions 
                  and technical implementations.
                </p>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <a href="https://github.com/kanishka3110" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    Visit GitHub Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
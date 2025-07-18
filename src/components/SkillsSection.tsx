import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Server, 
  Cloud, 
  TestTube, 
  GitBranch, 
  Palette,
  Database,
  Globe
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Zustand", "Framer Motion"],
      description: "Creating responsive, interactive user interfaces"
    },
    {
      title: "Backend Development", 
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
      description: "Building scalable server-side applications"
    },
    {
      title: "Database & Storage",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
      description: "Designing efficient data storage solutions"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Vercel", "Netlify", "AWS (Basics)", "Docker", "CI/CD"],
      description: "Deploying and maintaining applications"
    },
    {
      title: "Testing & Quality",
      icon: <TestTube className="h-6 w-6" />,
      skills: ["Jest", "Cypress", "Unit Testing", "Integration Testing"],
      description: "Ensuring code quality and reliability"
    },
    {
      title: "Development Tools",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
      description: "Streamlining development workflow"
    },
    {
      title: "Design & UX",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Figma to Code", "UX-First Development", "Responsive Design"],
      description: "Creating user-centered experiences"
    },
    {
      title: "Methodologies",
      icon: <Code className="h-6 w-6" />,
      skills: ["Agile Workflow", "Test-Driven Development", "Clean Code"],
      description: "Following best practices and methodologies"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border hover:shadow-glow-accent transition-all duration-300 group"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="text-primary group-hover:text-primary-glow transition-colors">
                      {category.icon}
                    </div>
                    <span className="text-foreground">{category.title}</span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-card border-border max-w-4xl mx-auto hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Startup-Level Execution
                </h3>
                <p className="text-foreground/90 leading-relaxed text-lg">
                  My experience comes from building real products under pressure, 
                  solving critical problems fast, and delivering results that matter. 
                  Every project I've worked on required me to think like an owner, 
                  not just a developer.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
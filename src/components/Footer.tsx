import { Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Kanishka Gonepelly
              </span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Full Stack Engineer specializing in Node.js and React. 
              Ready to bring ownership mindset and startup-level execution to your team.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8">
              <a 
                href="mailto:kanishkagonepally@gmail.com"
                className="flex items-center justify-center w-12 h-12 bg-muted hover:bg-primary/20 rounded-lg transition-all duration-300 hover:shadow-glow-accent group"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              
              <a 
                href="https://github.com/kanishka3110"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-muted hover:bg-primary/20 rounded-lg transition-all duration-300 hover:shadow-glow-accent group"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Kanishka Gonepally. All rights reserved.
              </p>
              
              <p className="text-muted-foreground text-sm flex items-center gap-1">
                Built with <Heart className="h-4 w-4 text-red-500" /> using React & Tailwind CSS
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
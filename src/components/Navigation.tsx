import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Rajesh Maddikonda
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Contact Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-muted-foreground hover:text-primary"
            >
              <a href="tel:+919538168468">
                <Phone className="w-4 h-4 mr-2" />
                Call
              </a>
            </Button>
            <Button
              size="sm"
              asChild
              className="bg-primary hover:bg-primary/90 shadow-elegant"
            >
              <a href="mailto:rajeshmaddikonda@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5 rounded-md ${
                    activeSection === item.id 
                      ? 'text-primary bg-primary/5' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Contact Buttons */}
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full justify-start"
                >
                  <a href="tel:+919538168468">
                    <Phone className="w-4 h-4 mr-2" />
                    +91 95381 68468
                  </a>
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="w-full justify-start bg-primary hover:bg-primary/90"
                >
                  <a href="mailto:rajeshmaddikonda@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    rajeshmaddikonda@gmail.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
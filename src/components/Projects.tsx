import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Target, 
  Cloud,
  Building,
  Handshake,
  BarChart3,
  Award
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AWS Cloud-Based India Digital Stamp SAAS Solution",
      company: "Pitney Bowes India",
      category: "Digital Transformation",
      icon: <Cloud className="w-6 h-6" />,
      description: "Spearheaded the rollout of India's first cloud-based digital stamp solution, working with product, pre-sales, and sales teams to secure regulatory approvals and drive adoption by state governments.",
      achievements: [
        "Secured regulatory approvals for digital stamp solution",
        "Drove adoption across multiple state governments", 
        "Collaborated with cross-functional teams for successful launch",
        "Established new revenue stream through government partnerships"
      ],
      technologies: ["AWS Cloud", "SAAS", "Government Solutions", "Regulatory Compliance"],
      metrics: {
        impact: "National Scale",
        timeline: "12 Months",
        reach: "Multiple States"
      }
    },
    {
      title: "OEM Partnership & Kiosk Solutions Launch",
      company: "Pitney Bowes India",
      category: "Strategic Partnerships",
      icon: <Handshake className="w-6 h-6" />,
      description: "Led strategic OEM partnerships and launched innovative kiosk solutions, achieving 15% business growth through collaboration and rapid sales team onboarding.",
      achievements: [
        "Achieved 15% business growth through partnerships",
        "Successfully launched new kiosk product line",
        "Enabled rapid sales team onboarding and training",
        "Captured emerging market opportunities"
      ],
      technologies: ["OEM Integration", "Kiosk Technology", "Partnership Management", "Sales Enablement"],
      metrics: {
        impact: "15% Growth",
        timeline: "6 Months", 
        reach: "National"
      }
    },
    {
      title: "Warehouse Automation Solutions Initiative",
      company: "Pitney Bowes India",
      category: "Market Expansion",
      icon: <Building className="w-6 h-6" />,
      description: "Pioneered market research and competitor analysis to identify growth areas, introducing warehouse automation solutions through partnerships with local and global manufacturers.",
      achievements: [
        "Identified new market opportunities through research",
        "Established partnerships with automation manufacturers",
        "Expanded solution portfolio in logistics sector",
        "Increased market share in warehouse automation"
      ],
      technologies: ["Automation Systems", "Market Research", "Competitive Analysis", "Manufacturing Partnerships"],
      metrics: {
        impact: "New Market",
        timeline: "18 Months",
        reach: "Pan-India"
      }
    },
    {
      title: "Cross-Learning Sales Performance Program",
      company: "Pitney Bowes India", 
      category: "Sales Excellence",
      icon: <Users className="w-6 h-6" />,
      description: "Implemented comprehensive cross-learning programs that improved lead conversion rates from 25% to 36% and enhanced overall sales team performance.",
      achievements: [
        "Improved conversion rates from 25% to 36%",
        "Enhanced team collaboration and knowledge sharing",
        "Reduced training time for new hires",
        "Increased overall sales team productivity"
      ],
      technologies: ["Sales Training", "Performance Analytics", "Learning Management", "Conversion Optimization"],
      metrics: {
        impact: "44% Improvement",
        timeline: "12 Months",
        reach: "Regional Teams"
      }
    },
    {
      title: "Channel Partner Revenue Growth Initiative",
      company: "Xerox India",
      category: "Channel Development",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Managed 500+ channel partners and implemented strategic initiatives that boosted channel partner revenue by 20% in one year across South & West regions.",
      achievements: [
        "Managed 500+ channel partners effectively",
        "Achieved 20% revenue growth in one year",
        "Expanded channel width across territories",
        "Implemented partner-led campaign strategies"
      ],
      technologies: ["Channel Management", "Partner Portal", "Revenue Analytics", "Territory Management"],  
      metrics: {
        impact: "20% Growth",
        timeline: "12 Months",
        reach: "500+ Partners"
      }
    },
    {
      title: "Enterprise Digital Solutions Portfolio",
      company: "Xerox India",
      category: "Product Excellence", 
      icon: <Award className="w-6 h-6" />,
      description: "As Product Sales Manager, delivered 162% of budgeted revenues in the high-end digital solutions category, earning recognition as Country's Best Product Sales Manager.",
      achievements: [
        "Delivered 162% of budgeted revenues",
        "Recognized as Country's Best Product Sales Manager",
        "Exceeded targets for 5 consecutive years",
        "Established market leadership in digital solutions"
      ],
      technologies: ["Digital Solutions", "Product Management", "Revenue Optimization", "Market Leadership"],
      metrics: {
        impact: "162% of Target",
        timeline: "Annual",
        reach: "National"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Key Projects & Initiatives
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic initiatives that drove significant business growth and market expansion
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                        {project.icon}
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {project.category}
                        </Badge>
                        <p className="text-sm text-muted-foreground">{project.company}</p>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="font-bold text-primary text-sm">{project.metrics.impact}</div>
                      <div className="text-xs text-muted-foreground">Impact</div>
                    </div>
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="font-bold text-primary text-sm">{project.metrics.timeline}</div>
                      <div className="text-xs text-muted-foreground">Timeline</div>
                    </div>
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="font-bold text-primary text-sm">{project.metrics.reach}</div>
                      <div className="text-xs text-muted-foreground">Reach</div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies & Approaches</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="border-0 shadow-card bg-gradient-to-r from-primary/5 to-primary-glow/5 inline-block">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Ready to Drive Your Next Success Story?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  Let's discuss how my proven track record of delivering exceptional results 
                  can contribute to your organization's growth and success.
                </p>
                <Button className="bg-primary hover:bg-primary/90 shadow-elegant">
                  <a href="#contact" className="flex items-center gap-2">
                    Get In Touch
                    <ExternalLink className="w-4 h-4" />
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

export default Projects;
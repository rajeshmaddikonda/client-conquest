import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, Award } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Revenue Excellence",
      description: "Delivered 16% CAGR revenue growth and 8% increase in gross margins through strategic initiatives"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership", 
      description: "Built and inspired high-performance sales teams across national and regional territories"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Vision",
      description: "Pioneered go-to-market strategies that accelerated growth and strengthened customer relationships"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Recognition",
      description: "Star Performer for 5 consecutive years and Country's Best Product Sales Manager"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming sales landscapes with strategic vision and proven execution
            </p>
          </div>

          {/* Main Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                My Professional Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With 27 years of experience in IT industry sales and business growth, I have dedicated my career 
                to helping organizations achieve consistent revenue growth, expand market share, and build strong 
                partner ecosystems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As the National Sales Head at Pitney Bowes India, I've been instrumental in shaping high-impact 
                go-to-market strategies that not only accelerated revenue growth but also strengthened customer 
                relationships across diverse industry verticals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines strategic sales leadership with hands-on execution, focusing on solution-based 
                selling, cost optimization, and strategic client acquisition to deliver measurable results.
              </p>
            </div>
            
            <Card className="shadow-card border-0 bg-gradient-to-br from-primary/5 to-primary-glow/5">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6 text-foreground">Core Values</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-foreground">Strategic Excellence</h5>
                      <p className="text-sm text-muted-foreground">Driving long-term success through data-driven strategies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-foreground">Team Empowerment</h5>
                      <p className="text-sm text-muted-foreground">Building and mentoring high-performance teams</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-foreground">Client Partnership</h5>
                      <p className="text-sm text-muted-foreground">Creating lasting relationships through value delivery</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-foreground">Innovation Focus</h5>
                      <p className="text-sm text-muted-foreground">Embracing new technologies and market opportunities</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Achievements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center text-foreground">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <Card className="mt-16 border-0 bg-gradient-to-r from-primary/5 to-primary-glow/5 shadow-card">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-muted-foreground italic leading-relaxed mb-6 max-w-3xl mx-auto">
                  I've had the privilege of working closely with Rajesh Maddikonda, and I can confidently say he is a 
                  dynamic sales leader who brings both strategic vision and ground-level execution to the table. What 
                  truly sets Rajesh apart is his ability to build and inspire high performance teams.
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-foreground">Sandip Kumar Kar</p>
                <p className="text-sm text-muted-foreground">SCM Head, Pitney Bowes, Mumbai, India</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
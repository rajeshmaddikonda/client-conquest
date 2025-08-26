import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Settings, 
  BarChart3, 
  Target,
  Handshake,
  Database,
  Brain,
  Award
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Sales & Revenue Growth",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      skills: [
        "Strategic Sales Leadership",
        "Revenue Achievement", 
        "Market Expansion",
        "Lead Conversion Optimization",
        "Wallet Share Growth",
        "Client Retention"
      ]
    },
    {
      title: "Client Engagement",
      icon: <Handshake className="w-6 h-6" />,
      color: "from-green-500 to-green-600", 
      skills: [
        "CXO Engagement",
        "SLA Management",
        "Long-Term Relationship Building",
        "Client Acquisition",
        "Stakeholder Management",
        "Customer Success"
      ]
    },
    {
      title: "Sales Operations",
      icon: <Settings className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      skills: [
        "Salesforce CRM (SFDC)",
        "Pipeline Forecasting", 
        "Accurate Sales Reporting",
        "Contract Negotiation",
        "Renewal & Upselling Strategies",
        "Performance Analytics"
      ]
    },
    {
      title: "Market & Strategy",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      skills: [
        "Market Research",
        "Competitor Analysis",
        "Brand Positioning",
        "Go-to-Market Planning",
        "Channel & OEM Alliances",
        "Industry Networking"
      ]
    },
    {
      title: "Leadership & Execution", 
      icon: <Users className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      skills: [
        "Team Mentoring",
        "Cross-Functional Collaboration",
        "P&L Ownership",
        "Value-Based Selling",
        "Solution Selling",
        "Change Management"
      ]
    }
  ];

  const certifications = [
    "Star Performer of the Year (2008-2012)",
    "Country's Best Product Sales Manager", 
    "162% Budget Achievement Recognition",
    "Strategic Sales Leadership",
    "Advanced CRM Management"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive skill set developed through 27+ years of sales excellence and leadership
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary" 
                        className="mr-2 mb-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="border-0 shadow-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">27+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">$5M+</div>
                <div className="text-sm text-muted-foreground">Revenue Portfolio</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">46%</div>
                <div className="text-sm text-muted-foreground">Profitability Achieved</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Forecasting Accuracy</div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications & Recognition */}
          <Card className="border-0 shadow-card bg-gradient-to-r from-primary/5 to-primary-glow/5">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl">Recognition & Achievements</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
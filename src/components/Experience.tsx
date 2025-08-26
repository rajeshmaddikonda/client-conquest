import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp, Users, Target, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "PITNEY BOWES INDIA LTD",
      position: "National Sales Head",
      location: "Bengaluru",
      duration: "Jan 2024 – Present",
      type: "Current Role",
      achievements: [
        "Commanding national sales strategy and attaining fiscal objectives through strategic alliances and innovation",
        "Achieved 15% business growth through OEM partnership collaboration and new kiosk solutions",
        "Governed $5M revenue portfolio at 46% profitability by aligning pricing strategies",
        "Enhanced EBIT by 8% through improved gross margins and cost optimization initiatives",
        "Optimized sales operations to achieve 90% forecasting accuracy using SFDC management",
        "Enhanced brand positioning by representing company at industry forums and networking events"
      ],
      skills: ["Strategic Planning", "OEM Partnerships", "Revenue Management", "Team Leadership", "SFDC", "Brand Management"]
    },
    {
      company: "PITNEY BOWES INDIA LTD", 
      position: "Regional Business Head – South & East",
      location: "Bengaluru",
      duration: "Mar 2015 – Dec 2023",
      type: "Leadership Role",
      achievements: [
        "Delivered 36% CAGR revenue growth over 8 years across e-commerce, 3PL, BFSI, manufacturing and government sectors",
        "Amplified profitability from 40% to 51% through high-margin solutions and value-based selling strategies",
        "Improved lead conversion rates from 25% to 36% through cross-learning programs",
        "Pioneered 50% CAGR market share expansion through OEM and automation solutions",
        "Championed AWS cloud-based India Digital Stamp SAAS solution rollout with regulatory approvals",
        "Spearheaded market research and competitor analysis for warehouse automation solutions"
      ],
      skills: ["P&L Management", "Client Acquisition", "Cross-selling", "Market Research", "Cloud Solutions", "Government Relations"]
    },
    {
      company: "XEROX INDIA LTD",
      position: "Regional Channel Development Manager",
      location: "Bengaluru", 
      duration: "Jan 2014 – Feb 2015",
      type: "Channel Leadership",
      achievements: [
        "Expanded Xerox's footprint in underserved territories through regional partner strategies",
        "Boosted channel partner revenue by 20% in one year through strategic initiatives",
        "Improved indirect field sales capabilities through comprehensive skill development programs",
        "Managed 500+ channel partners and reseller base effectively"
      ],
      skills: ["Channel Management", "Partner Development", "Training & Development", "Territory Expansion"]
    },
    {
      company: "XEROX INDIA LTD",
      position: "Multiple Progressive Roles",
      location: "Hyderabad",
      duration: "1998 – 2013",
      type: "Career Growth",
      achievements: [
        "Business Development Manager - SMB Segment: Drove small and medium business growth",
        "Product Sales Manager: Delivered 162% of budgeted revenues in digital solutions category",
        "Account Relationship Manager: Managed enterprise accounts and client relationships", 
        "Service Operations Manager: Led service delivery operations in Andhra Pradesh",
        "Technical Specialist: Provided technical expertise and customer support"
      ],
      skills: ["Business Development", "Product Management", "Account Management", "Service Operations", "Technical Support"]
    }
  ];

  const education = [
    {
      degree: "PGDAM – Marketing",
      institution: "Indian Institute of Advanced Management",
      location: "Mumbai",
      year: "1996 – 1998"
    },
    {
      degree: "BE – Electrical and Electronics Engineering", 
      institution: "Andhra University",
      location: "Visakhapatnam",
      year: "1990 – 1994"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven track record of driving growth and excellence across leading organizations
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground mb-2">
                        {exp.position}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                        <Target className="w-4 h-4" />
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant={index === 0 ? "default" : "secondary"}
                      className={index === 0 ? "bg-primary" : ""}
                    >
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Core Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-foreground">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-0 shadow-card bg-gradient-to-br from-primary/5 to-primary-glow/5">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h4 className="font-bold text-foreground text-lg">{edu.degree}</h4>
                      <p className="text-primary font-semibold">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.year}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
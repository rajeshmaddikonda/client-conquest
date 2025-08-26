import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "rajeshmaddikonda@gmail.com",
      link: "mailto:rajeshmaddikonda@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 95381 68468",
      link: "tel:+919538168468"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Bengaluru, India",
      link: null
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/rajeshmaddikonda",
      link: "https://www.linkedin.com/in/rajeshmaddikonda"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to drive revenue growth and build strategic partnerships? 
              Let's discuss how we can work together to achieve exceptional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  With 27+ years of proven success in IT sales leadership, I'm always interested in 
                  discussing new opportunities, strategic partnerships, and innovative solutions that 
                  drive business growth.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">{contact.label}</p>
                          {contact.link ? (
                            <a 
                              href={contact.link}
                              className="text-muted-foreground hover:text-primary transition-colors"
                              target={contact.link.startsWith('http') ? '_blank' : undefined}
                              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Stats */}
              <Card className="border-0 shadow-card bg-gradient-to-r from-primary/5 to-primary-glow/5">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-center">Ready to Partner With</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">IT Companies</div>
                      <div className="text-sm text-muted-foreground">Technology Solutions</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">Startups</div>
                      <div className="text-sm text-muted-foreground">Growth Strategy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">Enterprises</div>
                      <div className="text-sm text-muted-foreground">Sales Leadership</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">Consultancies</div>
                      <div className="text-sm text-muted-foreground">Strategic Advisory</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input 
                          type="text" 
                          required 
                          className="border-input focus:ring-primary focus:border-primary"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input 
                          type="text" 
                          required 
                          className="border-input focus:ring-primary focus:border-primary"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input 
                        type="email" 
                        required 
                        className="border-input focus:ring-primary focus:border-primary"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input 
                        type="text" 
                        className="border-input focus:ring-primary focus:border-primary"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input 
                        type="text" 
                        required 
                        className="border-input focus:ring-primary focus:border-primary"
                        placeholder="What would you like to discuss?"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea 
                        required 
                        rows={5}
                        className="border-input focus:ring-primary focus:border-primary resize-none"
                        placeholder="Tell me about your project, goals, or how we can work together..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 shadow-elegant"
                      size="lg"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      I'll get back to you within 24 hours. Looking forward to connecting!
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="border-0 shadow-card bg-gradient-to-r from-primary/5 to-primary-glow/5 inline-block">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Ready to Transform Your Sales Strategy?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  Let's schedule a conversation to explore how my experience in driving 
                  revenue growth and building successful teams can benefit your organization.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild className="bg-primary hover:bg-primary/90 shadow-elegant">
                    <a href="mailto:rajeshmaddikonda@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Me
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://www.linkedin.com/in/rajeshmaddikonda" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
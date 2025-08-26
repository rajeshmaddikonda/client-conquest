import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sandip Kumar Kar",
      position: "SCM Head, Pitney Bowes India",
      location: "Mumbai, India",
      content: "I've had the privilege of working closely with Rajesh Maddikonda, and I can confidently say he is a dynamic sales leader who brings both strategic vision and ground-level execution to the table. As the National Sales Head at Pitney Bowes India, Rajesh has been instrumental in shaping and driving high impact go-to-market strategies that not only accelerated revenue growth but also strengthened customer relationships across verticals. What truly sets Rajesh apart is his ability to build and inspire high performance teams.",
      rating: 5
    },
    {
      name: "Ashima Mathur",
      position: "Head of Marketing, Pitney Bowes India",
      location: "Noida, India",
      content: "I have been working with Rajesh for over 8 years, and during this time, I have witnessed his exceptional leadership as Regional Sales Head and then National Sales Head. He has a rare ability to combine strategic vision with hands-on execution, consistently driving business growth and motivating teams to achieve ambitious goals. His deep market knowledge, account relationships, client-first approach, and ability to inspire trust make him an outstanding sales leader. Beyond results, Rajesh leads with trust, integrity, collaboration, and empathy—qualities that make him not just a successful professional but also a great colleague to work with., a great team player and an asset to any organization.",
      rating: 5
    },
    {
      name: "Sushant Shekhar",
      position: "Regional Manager- East",
      location: "Kolkata, India",
      content: "A great leader. Excellent team person. He was always there to support whenever we needed him. 24x7. Got freedom and space to implement our ideas. Thoroughly enjoyed working under his leadership.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-accent/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary-glow rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What People Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Testimonials and recognition from colleagues, industry peers, and organizations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in group hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-primary/60" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              
              {/* Content */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 text-sm">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {testimonial.position}
                </p>
                <p className="text-xs text-primary/80 mt-1">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

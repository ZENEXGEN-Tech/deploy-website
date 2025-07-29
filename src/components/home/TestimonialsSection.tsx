import { Star, Quote } from "lucide-react";
import { Badge } from "../ui/badge";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechFlow",
      content:
        "ZENEXGEN transformed our legacy systems into a modern, scalable platform. Their AI integration increased our efficiency by 300%.",
      rating: 5,
      company: "TechFlow",
    },
    {
      name: "Michael Chen",
      role: "Founder at StartupX",
      content:
        "The mobile app they developed exceeded our expectations. Clean code, beautiful design, and delivered ahead of schedule.",
      rating: 5,
      company: "StartupX",
    },
    {
      name: "Emma Rodriguez",
      role: "VP of Operations at InnovateCorp",
      content:
        "Their automation solutions streamlined our entire workflow. We saved 40 hours per week and improved accuracy significantly.",
      rating: 5,
      company: "InnovateCorp",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Quote className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Client Success</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with ZENEXGEN
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group relative p-10 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:scale-105 ${
                index === 1 ? "md:translate-y-8" : ""
              } hover:translate-y-0`}
            >
              <div className="flex items-center mb-6">
                <Quote className="h-10 w-10 text-primary/60" />
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <div className="font-semibold text-foreground text-lg">
                  {testimonial.name}
                </div>
                <div className="text-muted-foreground mb-2">
                  {testimonial.role}
                </div>
                <Badge
                  variant="outline"
                  className="bg-primary/10 border-primary/20"
                >
                  {testimonial.company}
                </Badge>
              </div>

              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

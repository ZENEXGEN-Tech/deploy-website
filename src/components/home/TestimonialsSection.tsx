import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

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

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with ZENEXGEN.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="card-glass card-hover">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/60 mb-4" />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

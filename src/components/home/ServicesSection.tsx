import { Card, CardContent } from "@/components/ui/card";
import { Code2, Brain, Smartphone, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.",
    features: [
      "Full-stack development",
      "Scalable architecture",
      "Modern frameworks",
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions that learn, adapt, and optimize your business processes for maximum efficiency.",
    features: [
      "Predictive analytics",
      "Natural language processing",
      "Computer vision",
    ],
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    description:
      "Responsive web applications and native mobile apps that provide exceptional user experiences.",
    features: [
      "Cross-platform development",
      "Progressive web apps",
      "Native performance",
    ],
  },
  {
    icon: Zap,
    title: "Automation & Digital Transformation",
    description:
      "Streamline operations and accelerate growth through intelligent automation and digital innovation.",
    features: ["Process automation", "Digital workflows", "System integration"],
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your
            business and drive sustainable growth in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="card-glass card-hover group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center text-primary group-hover:text-primary-glow transition-colors cursor-pointer">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
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

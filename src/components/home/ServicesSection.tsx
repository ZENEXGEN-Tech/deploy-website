import { Code2, Brain, Smartphone, Zap, ArrowRight } from "lucide-react";

const ServicesSection = () => {
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
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
      iconBg: "from-emerald-500 to-teal-600",
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
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
      iconBg: "from-emerald-500 to-teal-600",
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
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
      iconBg: "from-emerald-500 to-teal-600",
    },
    {
      icon: Zap,
      title: "Automation & Digital Transformation",
      description:
        "Streamline operations and accelerate growth through intelligent automation and digital innovation.",
      features: [
        "Process automation",
        "Digital workflows",
        "System integration",
      ],
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
      iconBg: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Code2 className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to transform your
            business and drive sustainable growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative p-10 rounded-3xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 hover:shadow-2xl`}
            >
              <div
                className={`absolute -top-6 left-8 w-16 h-16 bg-gradient-to-r ${service.iconBg} rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500`}
              >
                <service.icon className="h-8 w-8 text-white" />
              </div>

              <div className="pt-12">
                <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center group/item">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-4 group-hover/item:scale-150 transition-transform" />
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                        {feature}
                      </span>
                      <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 text-primary transition-all transform translate-x-2 group-hover/item:translate-x-0" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-primary group-hover:text-primary-glow transition-colors cursor-pointer">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

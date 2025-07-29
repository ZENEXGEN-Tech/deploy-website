import { Target, Lightbulb, Users, Rocket, Heart } from "lucide-react";

const WhyZenexgenSection = () => {
  const values = [
    {
      icon: Target,
      title: "Precision-Driven",
      description:
        "Every line of code, every design element, and every strategic decision is crafted with meticulous attention to detail.",
      accent: "text-emerald-500",
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends, implementing cutting-edge solutions that give you a competitive advantage.",
      accent: "text-emerald-500",
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our success. We build lasting partnerships through transparent communication and exceptional results.",
      accent: "text-emerald-500",
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    },
    {
      icon: Rocket,
      title: "Future-Ready",
      description:
        "We design scalable solutions that grow with your business, ensuring long-term value and adaptability.",
      accent: "text-emerald-500",
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    },
  ];

  return (
    <section className="py-32 bg-muted/30 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary-glow/10 to-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Heart className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why Choose <span className="text-gradient">ZENEXGEN</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don&apos;t just build software – we craft digital experiences
            that transform businesses and create lasting impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br ${value.gradient} border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:scale-105 text-center`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <value.icon className={`h-8 w-8 ${value.accent}`} />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {value.description}
              </p>
              <div
                className={`absolute -bottom-2 -right-2 w-20 h-20 ${value.accent.replace("text-", "bg-")}/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700`}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 hover:rotate-12 transition-transform duration-500">
            <Rocket className="h-12 w-12 text-primary-foreground" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join forward-thinking companies who trust ZENEXGEN to deliver
            exceptional software solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyZenexgenSection;

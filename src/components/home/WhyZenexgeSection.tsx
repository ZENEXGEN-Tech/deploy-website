import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Users, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision-Driven",
    description:
      "Every line of code, every design element, and every strategic decision is crafted with meticulous attention to detail.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of technology trends, implementing cutting-edge solutions that give you a competitive advantage.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your success is our success. We build lasting partnerships through transparent communication and exceptional results.",
  },
  {
    icon: Rocket,
    title: "Future-Ready",
    description:
      "We design scalable solutions that grow with your business, ensuring long-term value and adaptability.",
  },
];

export const WhyZenexgenSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">ZENEXGEN</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just build software – we craft digital experiences that
            transform businesses and create lasting impact in an ever-evolving
            technological landscape.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="card-glass text-center group hover:shadow-glow"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 animate-glow">
            <Rocket className="h-10 w-10 text-primary-foreground" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join forward-thinking companies who trust ZENEXGEN to deliver
            exceptional software solutions that drive real business results.
          </p>
        </div>
      </div>
    </section>
  );
};

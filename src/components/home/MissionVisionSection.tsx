import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const missionVisionData = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation in an ever-evolving digital landscape.",
    highlights: [
      "Deliver cutting-edge solutions",
      "Foster business growth",
      "Enable digital transformation",
    ],
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading technology partner that shapes the future of business through intelligent software solutions and transformative digital experiences.",
    highlights: [
      "Industry leadership",
      "Future-focused innovation",
      "Transformative impact",
    ],
    gradient: "from-purple-500 to-pink-600",
  },
];

const values = [
  {
    icon: Heart,
    title: "Excellence",
    description:
      "We strive for perfection in every line of code and every client interaction.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace emerging technologies to create tomorrow's solutions today.",
  },
];

export const MissionVisionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Purpose</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Driven by purpose, guided by vision. We believe in creating
            technology that makes a meaningful difference in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {missionVisionData.map((item, index) => (
            <Card
              key={item.title}
              className="card-glass card-hover group h-full"
            >
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 b rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-lg flex-1">
                  {item.description}
                </p>

                <div className="space-y-3">
                  {item.highlights.map((highlight, idx) => (
                    <div
                      key={highlight}
                      className="flex items-center text-sm font-medium"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-primary mr-3`}
                      />
                      <span className="text-foreground/80">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Our <span className="text-gradient">Core Values</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do and every decision we
            make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card key={value.title} className="card-glass card-hover group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
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

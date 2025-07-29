import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Heart, Award, Cpu, Zap, Brain } from "lucide-react";
import { Banner } from "@/components/Banner";

const values = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the leading force in intelligent software innovation, empowering businesses to thrive in the digital future.",
  },
  {
    icon: Target,
    title: "Mission",
    description:
      "Creating cutting-edge software solutions that combine AI, automation, and human creativity to solve complex business challenges.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Innovation, integrity, collaboration, and excellence drive everything we do. We believe in building lasting partnerships.",
  },
];

const spineItems = [
  {
    icon: Cpu,
    title: "AI-First Approach",
    description:
      "Every solution we build is powered by AI — from automation bots to predictive analytics that anticipate business needs.",
  },
  {
    icon: Zap,
    title: "Real-Time Innovation",
    description:
      "We build systems that learn and evolve in real-time, enabling faster decision-making and automation at scale.",
  },
  {
    icon: Brain,
    title: "Human + Machine Synergy",
    description:
      "Our software blends machine learning with human insight to create intuitive, transformative digital experiences.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Banner
        title=<>
          Building the <span className="text-gradient">Future</span>
        </>
        badge="About ZENEXGEN"
        description="We're a team of passionate innovators, engineers, and visionaries dedicated to creating software that doesn't just work—it transforms."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="card-glass text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spine Effect Section */}
      <section className="py-24 bg-muted/20 relative">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-transparent z-0"></div>
          <div className="space-y-24 relative z-10">
            {spineItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-primary text-white flex items-center justify-center shadow-xl">
                  <item.icon className="w-10 h-10" />
                </div>
                <div className="bg-background p-8 rounded-2xl shadow-lg max-w-xl">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/10 to-primary-glow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Award className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              What We <span className="text-gradient">Believe</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Technology should be an enabler, not a barrier. We believe in
              creating software that's intuitive, powerful, and
              accessible—solutions that feel natural and empower people to
              achieve more than they thought possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
                <p className="text-muted-foreground">
                  Complex problems, elegant solutions
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Always pushing boundaries
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Impact</h3>
                <p className="text-muted-foreground">
                  Creating meaningful change
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

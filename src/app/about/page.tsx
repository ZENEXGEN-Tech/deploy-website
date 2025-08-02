import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Target,
  Heart,
  Award,
  Users,
  Code,
  Zap,
  Lightbulb,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Banner } from "@/components/Banner";
import OurStack from "@/components/OurStack";
import type { Metadata } from "next";
import { coreValues, missionVisionData, processFlow } from "@/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the story behind our mission and values.",
};

const MissionVisionSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary-glow/10 to-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Our Purpose</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Driven by <span className="text-gradient">Purpose</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe in creating technology that makes a meaningful difference
            in the world
          </p>
        </div>

        {/* Mission & Vision - Floating Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {missionVisionData.map((item) => (
            <div
              key={item.title}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 hover:shadow-2xl`}
            >
              {/* Floating Icon */}
              <div
                className={`absolute -top-6 left-8 w-12 h-12 bg-gradient-to-r ${item.iconBg} rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500`}
              >
                <item.icon className="h-6 w-6 text-white" />
              </div>

              <div className="pt-8">
                <h3 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-4">
                  {item.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center group/item"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-4 group-hover/item:scale-150 transition-transform" />
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                        {highlight}
                      </span>
                      <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 text-primary transition-all transform translate-x-2 group-hover/item:translate-x-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values - Asymmetric Layout */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Core <span className="text-gradient">Values</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {coreValues.map((value, index) => (
            <div
              key={value.title}
              className={`group relative p-10 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-xl ${
                index === 0 ? "md:translate-y-8" : "md:-translate-y-8"
              } hover:translate-y-0`}
            >
              <div className="flex items-start space-x-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className={`h-8 w-8 ${value.accent}`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div
                className={`absolute -bottom-2 -right-2 w-20 h-20 ${value.accent.replace("text-", "bg-")}/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div className="min-h-screen">
      <Banner
        title={
          <>
            Building the <span className="text-gradient">Future</span>
          </>
        }
        badge="About ZENEXGEN"
        description="We're a team of passionate innovators, engineers, and visionaries dedicated to creating software that doesn't just work—it transforms."
      />

      <MissionVisionSection />
      <OurStack />

      {/* Process Flow Section - Enhanced */}
      <section className="py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Code className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Our Methodology</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
              every time
            </p>
          </div>

          <div className="relative">
            {/* Enhanced Connection line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processFlow.map((process) => (
                <div key={process.step} className="relative group">
                  <Card className="card-glass card-hover text-center group-hover:scale-105 transition-all duration-300 group-hover:shadow-2xl">
                    <CardContent className="p-8">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:rotate-12 transition-transform duration-500">
                          <process.icon className="h-10 w-10 text-primary-foreground" />
                        </div>
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                          {process.step}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {process.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {process.description}
                      </p>
                      <Badge
                        variant="outline"
                        className="text-xs bg-primary/10 border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {process.duration}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Beliefs Section */}
      <section className="py-32 bg-gradient-to-br from-primary/10 to-primary-glow/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 hover:rotate-12 transition-transform duration-500">
              <Award className="h-12 w-12 text-primary-foreground" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              What We <span className="text-gradient">Believe</span>
            </h2>
            <p className="text-2xl text-muted-foreground leading-relaxed mb-16 max-w-4xl mx-auto">
              Technology should be an enabler, not a barrier. We believe in
              creating software that&apos;s intuitive, powerful, and
              accessible—solutions that feel natural and empower people to
              achieve more than they thought possible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              {[
                {
                  title: "Simplicity",
                  desc: "Complex problems, elegant solutions",
                  icon: "✨",
                },
                {
                  title: "Innovation",
                  desc: "Always pushing boundaries",
                  icon: "🚀",
                },
                {
                  title: "Impact",
                  desc: "Creating meaningful change",
                  icon: "🌟",
                },
              ].map((belief) => (
                <div key={belief.title} className="group text-center">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {belief.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {belief.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">{belief.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

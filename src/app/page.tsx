import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

import ClientLogos from "@/components/home/ClientsSection";
import { HeroSection } from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyZenexgenSection from "@/components/home/WhyZenexgeSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ClientLogos />
      <ServicesSection />
      <WhyZenexgenSection />
      <TestimonialsSection />

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary-glow/10 to-primary/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Get Started Today</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Transform Your{" "}
              <span className="text-gradient">Business</span>?
            </h2>

            <p className="text-2xl text-muted-foreground leading-relaxed mb-16 max-w-4xl mx-auto">
              Join innovative companies who trust ZENEXGEN to deliver
              exceptional software solutions that drive real business results
              and transform digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="btn-hero group px-8 py-4 text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <Mail className="mr-3 h-6 w-6" />
                Get in Touch
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-secondary px-8 py-4 text-lg hover:scale-105 transition-all duration-300 hover:shadow-xl border-2"
              >
                View Our Work
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              {[
                {
                  title: "100% Success Rate",
                  desc: "Every project delivered on time",
                  icon: "🎯",
                },
                {
                  title: "50+ Happy Clients",
                  desc: "Trusted by industry leaders",
                  icon: "🤝",
                },
                {
                  title: "24/7 Support",
                  desc: "Always here when you need us",
                  icon: "⚡",
                },
              ].map((stat, index) => (
                <div key={stat.title} className="group text-center">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {stat.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

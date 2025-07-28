import { ServicesSection } from "@/components/home/ServicesSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import SplineScene from "@/components/SplineScene";
import { WhyZenexgenSection } from "@/components/home/WhyZenexgeSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { MissionVisionSection } from "@/components/home/MissionVisionSection";
import { Globe } from "@/components/magicui/globe";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SplineScene />
      <ServicesSection />
      <MissionVisionSection />
      <WhyZenexgenSection />
      <TestimonialsSection />
      <section className="py-24 bg-gradient-to-br from-primary/10 to-primary-glow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your{" "}
              <span className="text-gradient">Business</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Join innovative companies who trust ZENEXGEN to deliver
              exceptional software solutions that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero group">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

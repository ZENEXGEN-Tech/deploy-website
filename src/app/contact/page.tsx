import { Banner } from "@/components/Banner";
import { ContactClient } from "@/components/contact/ContactClient";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CheckCircle,
  Star,
  Globe,
  Users,
  MapPin,
  ArrowRight,
  Sparkles,
  Download,
  PlayCircle,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us and let's build something great.",
};

const contactStats = [
  {
    icon: CheckCircle,
    number: "24hrs",
    label: "Response Time",
    sublabel: "Average",
  },
  {
    icon: Star,
    number: "98%",
    label: "Client Satisfaction",
    sublabel: "Rating",
  },
  {
    icon: Globe,
    number: "50+",
    label: "Countries Served",
    sublabel: "Globally",
  },
  {
    icon: Users,
    number: "500+",
    label: "Projects Delivered",
    sublabel: "Successfully",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Banner
        title={
          <>
            Let&apos;s Build{" "}
            <span className="text-gradient">Something Great</span>
          </>
        }
        description="Ready to transform your business with intelligent software solutions? We'd love to hear about your project and discuss how we can help."
        badge="Get In Touch"
      />

      {/* Stats Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-gradient">ZENEXGEN</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by businesses worldwide for exceptional service and
              results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {contactStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <h4 className="text-lg font-semibold mb-1">{stat.label}</h4>
                <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Component for Contact Form and Interactive Content */}
      <ContactClient />

      {/* Map Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Our Location</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Find <span className="text-gradient">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Located in DHA Phase 8, Karachi, Pakistan
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-sm border border-white/20">
            {/* Floating Icon */}
            <div className="absolute -top-6 left-8 w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-2xl z-10">
              <MapPin className="h-7 w-7 text-white" />
            </div>

            <div className="h-96 overflow-hidden rounded-t-3xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.727234567!2d67.0731!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDQnMjMuMiJF!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-t-3xl"
              ></iframe>
            </div>

            <div className="p-8 bg-background/95 backdrop-blur-sm border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    ZENEXGEN Headquarters
                  </h3>
                  <p className="text-muted-foreground text-lg mb-1">
                    DHA Phase 8, Al Murtaza Commercial
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Karachi, Pakistan
                  </p>
                </div>
                <Link
                  className={cn(
                    buttonVariants(),
                    "hover:scale-105 transition-all duration-300 group"
                  )}
                  href={
                    "https://maps.google.com/?q=DHA+Phase+8+Al+Murtaza+Commercial+Karachi+Pakistan"
                  }
                  target="_blank"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary/10 to-primary-glow/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 hover:rotate-12 transition-transform duration-500">
            <Sparkles className="h-10 w-10 text-primary-foreground" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Get <span className="text-gradient">Started</span>?
          </h2>

          <p className="text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
            Whether you have a specific project in mind or just want to explore
            possibilities, we&apos;re excited to discuss how ZENEXGEN can help
            transform your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="btn-hero group px-8 py-4 text-lg">
              <PlayCircle className="w-5 h-5 mr-2" />
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-2 hover:scale-105 transition-all duration-300 group"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Our Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Brain,
  Smartphone,
  Zap,
  ArrowRight,
  Database,
  Cloud,
  Shield,
  Cpu,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "custom-software-development",
    icon: Code2,
    title: "Custom Software Development",
    shortDescription:
      "Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.",
    features: [
      "Full-stack development",
      "Scalable architecture",
      "Modern frameworks",
    ],
    category: "Development",
  },
  {
    id: "ai-machine-learning",
    icon: Brain,
    title: "AI & Machine Learning",
    shortDescription:
      "Intelligent solutions that learn, adapt, and optimize your business processes for maximum efficiency.",
    features: [
      "Predictive analytics",
      "Natural language processing",
      "Computer vision",
    ],
    category: "AI/ML",
  },
  {
    id: "web-mobile-apps",
    icon: Smartphone,
    title: "Web & Mobile Apps",
    shortDescription:
      "Responsive web applications and native mobile apps that provide exceptional user experiences.",
    features: [
      "Cross-platform development",
      "Progressive web apps",
      "Native performance",
    ],
    category: "Development",
  },
  {
    id: "automation-digital-transformation",
    icon: Zap,
    title: "Automation & Digital Transformation",
    shortDescription:
      "Streamline operations and accelerate growth through intelligent automation and digital innovation.",
    features: ["Process automation", "Digital workflows", "System integration"],
    category: "Automation",
  },
  {
    id: "cloud-infrastructure",
    icon: Cloud,
    title: "Cloud Infrastructure",
    shortDescription:
      "Scalable cloud solutions that ensure your applications perform optimally under any load.",
    features: [
      "AWS/Azure deployment",
      "Microservices architecture",
      "Auto-scaling solutions",
    ],
    category: "Infrastructure",
  },
  {
    id: "cybersecurity-solutions",
    icon: Shield,
    title: "Cybersecurity Solutions",
    shortDescription:
      "Comprehensive security frameworks to protect your digital assets and ensure compliance.",
    features: [
      "Security audits",
      "Penetration testing",
      "Compliance frameworks",
    ],
    category: "Security",
  },
  {
    id: "data-analytics",
    icon: Database,
    title: "Data Analytics & Business Intelligence",
    shortDescription:
      "Transform raw data into actionable insights that drive strategic business decisions.",
    features: [
      "Data visualization",
      "Real-time analytics",
      "Predictive modeling",
    ],
    category: "Analytics",
  },
  {
    id: "iot-solutions",
    icon: Cpu,
    title: "IoT Solutions",
    shortDescription:
      "Connected device ecosystems that enable smart automation and real-time monitoring.",
    features: ["Device connectivity", "Edge computing", "Real-time monitoring"],
    category: "IoT",
  },
];

const categories = [
  "All",
  "Development",
  "AI/ML",
  "Automation",
  "Infrastructure",
  "Security",
  "Analytics",
  "IoT",
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your
            business and drive sustainable growth in the digital age.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === activeCategory ? "default" : "outline"}
                className="rounded-full transition-all duration-200"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card
                key={service.id}
                className="card-glass card-hover group h-full"
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <service.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="text-xs font-medium text-primary mb-2">
                        {service.category}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-2 mb-6">
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

                  <Link
                    href={`/services/${service.id}`}
                    className="flex items-center text-primary group-hover:text-primary-glow transition-colors cursor-pointer mt-auto"
                  >
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="btn-hero">
                Get Started
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

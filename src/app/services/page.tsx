// app/services/page.tsx (Server Component)
import {
  Code2,
  Brain,
  Smartphone,
  Zap,
  Database,
  Cloud,
  Shield,
  Cpu,
  Sparkles,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Banner } from "@/components/Banner";

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
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    iconBg: "from-emerald-500 to-teal-600",
    accent: "text-emerald-500",
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
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    iconBg: "from-emerald-500 to-teal-600",
    accent: "text-emerald-500",
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
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    iconBg: "from-emerald-500 to-teal-600",
    accent: "text-emerald-500",
  },
  {
    id: "automation-digital-transformation",
    icon: Zap,
    title: "Automation & Digital Transformation",
    shortDescription:
      "Streamline operations and accelerate growth through intelligent automation and digital innovation.",
    features: ["Process automation", "Digital workflows", "System integration"],
    category: "Automation",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    iconBg: "from-emerald-500 to-teal-600",
    accent: "text-emerald-500",
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
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    iconBg: "from-emerald-500 to-teal-600",
    accent: "text-emerald-500",
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
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    iconBg: "from-emerald-500 to-teal-600",
    accent: "text-emerald-500",
  },
  {
    id: "iot-solutions",
    icon: Cpu,
    title: "IoT Solutions",
    shortDescription:
      "Connected device ecosystems that enable smart automation and real-time monitoring.",
    features: ["Device connectivity", "Edge computing", "Real-time monitoring"],
    category: "IoT",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    iconBg: "from-emerald-500 to-teal-600",
    accent: "text-emerald-500",
  },
];

const categories = [
  { name: "All", count: services.length },
  {
    name: "Development",
    count: services.filter((s) => s.category === "Development").length,
  },
  {
    name: "AI/ML",
    count: services.filter((s) => s.category === "AI/ML").length,
  },
  {
    name: "Automation",
    count: services.filter((s) => s.category === "Automation").length,
  },
  {
    name: "Infrastructure",
    count: services.filter((s) => s.category === "Infrastructure").length,
  },
  {
    name: "Security",
    count: services.filter((s) => s.category === "Security").length,
  },
  {
    name: "Analytics",
    count: services.filter((s) => s.category === "Analytics").length,
  },
  { name: "IoT", count: services.filter((s) => s.category === "IoT").length },
];

const stats = [
  {
    icon: CheckCircle,
    number: "100+",
    label: "Projects Delivered",
    sublabel: "Successfully",
  },
  { icon: Star, number: "98%", label: "Client Satisfaction", sublabel: "Rate" },
  { icon: Zap, number: "24/7", label: "Support", sublabel: "Available" },
  { icon: Brain, number: "50+", label: "AI Models", sublabel: "Deployed" },
];
import { ServicesFilter } from "@/components/services/ServicesFilter";
import { categories, servicesData, stats } from "@/data";

export default function Services() {
  return (
    <div className="min-h-screen">
      <Banner
        title={
          <>
            We <span className="text-gradient">Build</span> the Future
          </>
        }
        badge="Our Services"
        description="Comprehensive technology solutions designed to transform your business and drive sustainable growth in the digital age."
      />

      {/* Services Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary-glow/10 to-primary/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Service <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cutting-edge solutions tailored to your unique business needs
            </p>
          </div>

          {/* Client Component for filtering */}
          <ServicesFilter services={servicesData} categories={categories} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Impact</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary/10 to-primary-glow/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 hover:rotate-12 transition-transform duration-500">
            <Sparkles className="h-10 w-10 text-primary-foreground" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Transform Your{" "}
            <span className="text-gradient">Business</span>?
          </h2>

          <p className="text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
            Let&apos;s discuss how our services can help you achieve your goals
            and drive meaningful growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" className="btn-hero group px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-2 hover:scale-105 transition-all duration-300"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Banner } from "@/components/Banner";
import { CareersClient } from "@/components/career/CareerClient";
import {
  Sparkles,
  Heart,
  Zap,
  Trophy,
  Coffee,
  Users,
  Globe,
  Award,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team and build the future of business.",
};

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health, dental, and vision insurance plus wellness stipend",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    iconBg: "from-green-500 to-emerald-600",
  },
  {
    icon: Zap,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours and unlimited PTO",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    iconBg: "from-green-500 to-emerald-600",
  },
  {
    icon: Trophy,
    title: "Growth & Learning",
    description:
      "$2,000 annual learning budget for courses, conferences, and certifications",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    iconBg: "from-green-500 to-emerald-600",
  },
  {
    icon: Coffee,
    title: "Great Perks",
    description:
      "Top-tier equipment, team retreats, and monthly team building events",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    iconBg: "from-green-500 to-emerald-600",
  },
];

const companyStats = [
  {
    icon: Users,
    number: "50+",
    label: "Team Members",
    sublabel: "Worldwide",
  },
  {
    icon: Globe,
    number: "15+",
    label: "Countries",
    sublabel: "Remote Team",
  },
  {
    icon: Award,
    number: "4.9",
    label: "Glassdoor Rating",
    sublabel: "Employee Satisfaction",
  },
  {
    icon: Rocket,
    number: "95%",
    label: "Retention Rate",
    sublabel: "Employee Growth",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Banner
        title={
          <>
            Join <span className="text-gradient">Our Team</span>
          </>
        }
        badge="Careers"
        description="Be part of a team that's revolutionizing how businesses operate through intelligent software solutions. Build your career while building the future."
      />

      {/* Culture Section */}
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
              <span className="text-sm font-medium">Life at ZENEXGEN</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Where <span className="text-gradient">Innovation</span> Meets
              <br />
              <span className="text-gradient">Opportunity</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We believe great work happens when passionate people have the
              freedom to innovate, grow, and make a meaningful impact.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${benefit.gradient} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 hover:shadow-2xl text-center`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${benefit.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-2xl`}
                >
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>

                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-primary-glow/5 to-primary/10 backdrop-blur-sm border border-white/10 text-center">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-2xl">
              <Users className="h-7 w-7 text-white" />
            </div>
            <div className="pt-8">
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-6 leading-relaxed">
                &quot;At ZENEXGEN, we don&apos;t just work together—we{" "}
                <span className="text-gradient">innovate</span> together,{" "}
                <span className="text-gradient">learn</span> together, and{" "}
                <span className="text-gradient">grow</span> together.&quot;
              </blockquote>
              <cite className="text-lg text-muted-foreground">
                — Mashal Tareen, CEO & Founder
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Culture</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to creating an exceptional
              workplace
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
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

      {/* Client Component for Careers Data */}
      <CareersClient />

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary/10 to-primary-glow/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 hover:rotate-12 transition-transform duration-500">
            <Sparkles className="h-10 w-10 text-primary-foreground" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Don&apos;t See the Perfect{" "}
            <span className="text-gradient">Role</span>?
          </h2>

          <p className="text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
            We&apos;re always interested in meeting talented individuals. Send
            us your resume and tell us what you&apos;re passionate about.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="btn-hero group px-8 py-4 text-lg">
              Send Us Your Resume
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-2 hover:scale-105 transition-all duration-300"
            >
              Schedule a Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Users,
  Coffee,
  Zap,
  Heart,
  Trophy,
  ArrowRight,
  Code2,
  Brain,
  Palette,
  Server,
  Target,
  Megaphone,
  Sparkles,
  Star,
  Globe,
  Award,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { Banner } from "@/components/Banner";

const openPositions = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $160k",
    description:
      "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
    requirements: [
      "5+ years experience",
      "React & Node.js",
      "Cloud platforms (AWS/GCP)",
      "TypeScript",
    ],
    icon: Code2,
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    iconBg: "from-green-500 to-emerald-600",
    accent: "text-green-500",
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    department: "AI & Data",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$140k - $180k",
    description:
      "Lead the development of AI solutions and machine learning models that power our next-generation products.",
    requirements: [
      "PhD or MS in CS/ML",
      "Python & TensorFlow/PyTorch",
      "3+ years ML experience",
      "MLOps knowledge",
    ],
    icon: Brain,
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    iconBg: "from-green-500 to-emerald-600",
    accent: "text-green-500",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$90k - $120k",
    description:
      "Create beautiful, intuitive user experiences that delight our customers and drive business growth.",
    requirements: [
      "4+ years UX/UI design",
      "Figma proficiency",
      "Design systems",
      "User research experience",
    ],
    icon: Palette,
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    iconBg: "from-green-500 to-emerald-600",
    accent: "text-green-500",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110k - $145k",
    description:
      "Build and maintain our cloud infrastructure, ensuring scalability, reliability, and security. Work with Us to design",
    requirements: [
      "Docker & Kubernetes",
      "CI/CD pipelines",
      "AWS/GCP expertise",
      "Infrastructure as Code",
    ],
    icon: Server,
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    iconBg: "from-green-500 to-emerald-600",
    accent: "text-green-500",
  },
  {
    id: 5,
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $170k",
    description:
      "Drive product strategy and execution for our enterprise software solutions. Work with Us to design",
    requirements: [
      "5+ years PM experience",
      "B2B SaaS background",
      "Agile methodologies",
      "Data-driven mindset",
    ],
    icon: Target,
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    iconBg: "from-green-500 to-emerald-600",
    accent: "text-green-500",
  },
  {
    id: 6,
    title: "Marketing Intern",
    department: "Marketing",
    location: "Remote",
    type: "Internship",
    salary: "$20/hour",
    description:
      "Support our marketing team with content creation, social media, and campaign management.",
    requirements: [
      "Marketing/Communications major",
      "Social media savvy",
      "Content creation skills",
      "Growth mindset",
    ],
    icon: Megaphone,
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    iconBg: "from-green-500 to-emerald-600",
    accent: "text-green-500",
  },
];

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

const departments = [
  { name: "All", count: openPositions.length },
  {
    name: "Engineering",
    count: openPositions.filter((p) => p.department === "Engineering").length,
  },
  {
    name: "AI & Data",
    count: openPositions.filter((p) => p.department === "AI & Data").length,
  },
  {
    name: "Design",
    count: openPositions.filter((p) => p.department === "Design").length,
  },
  {
    name: "Infrastructure",
    count: openPositions.filter((p) => p.department === "Infrastructure")
      .length,
  },
  {
    name: "Product",
    count: openPositions.filter((p) => p.department === "Product").length,
  },
  {
    name: "Marketing",
    count: openPositions.filter((p) => p.department === "Marketing").length,
  },
];

const types = ["All", "Full-time", "Internship"];

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
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const filteredPositions = openPositions.filter((position) => {
    const matchesDepartment =
      selectedDepartment === "All" ||
      position.department === selectedDepartment;
    const matchesType =
      selectedType === "All" || position.type === selectedType;
    return matchesDepartment && matchesType;
  });

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
                {/* Floating Icon */}
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

                {/* Decorative Element */}
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

      {/* Open Positions Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Join Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find your next opportunity to make an impact. We&apos;re always
              looking for talented individuals who share our passion for
              innovation.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((department) => (
              <Button
                key={department.name}
                variant={
                  department.name === selectedDepartment ? "default" : "outline"
                }
                className={`rounded-full transition-all duration-300 group ${
                  department.name === selectedDepartment
                    ? "bg-gradient-primary hover:shadow-glow scale-105"
                    : "hover:scale-105 hover:border-primary/50"
                }`}
                onClick={() => setSelectedDepartment(department.name)}
              >
                <span>{department.name}</span>
                <span
                  className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                    department.name === selectedDepartment
                      ? "bg-white/20"
                      : "bg-primary/10 text-primary group-hover:bg-primary/20"
                  }`}
                >
                  {department.count}
                </span>
              </Button>
            ))}
          </div>

          {/* Type Filter */}
          <div className="flex justify-center gap-3 mb-16">
            {types.map((type) => (
              <Button
                key={type}
                variant={type === selectedType ? "secondary" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type)}
                className="rounded-full transition-all duration-300 hover:scale-105"
              >
                {type}
              </Button>
            ))}
          </div>

          {/* Positions Grid */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-4" layout>
            {filteredPositions.map((position, index) => (
              <div
                key={position.id}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${position.gradient} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 hover:shadow-2xl`}
              >
                {/* Floating Icon */}
                <div
                  className={`absolute -top-6 left-8 w-14 h-14 bg-gradient-to-r ${position.iconBg} rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500`}
                >
                  <position.icon className="h-7 w-7 text-white" />
                </div>

                <div className="pt-8">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {position.department}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {position.type}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {position.title}
                  </h3>

                  {/* Location & Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Karachi, Pakistan
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {position.type}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {position.description}
                  </p>

                  {/* Requirements */}
                  <div className="space-y-3 mb-8">
                    {position.requirements.map((requirement, idx) => (
                      <div
                        key={requirement}
                        className="flex items-center group/item"
                      >
                        <div
                          className={`w-1.5 h-1.5 ${position.accent.replace("text-", "bg-")} rounded-full mr-3 group-hover/item:scale-150 transition-transform`}
                        />
                        <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {requirement}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Apply Button */}
                  <Button className="w-full bg-gradient-primary hover:shadow-glow group/btn">
                    <span>Apply Now</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>

                {/* Decorative Element */}
                <div
                  className={`absolute -bottom-2 -right-2 w-20 h-20 ${position.accent.replace("text-", "bg-")}/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700`}
                ></div>
              </div>
            ))}
          </motion.div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gradient-to-r from-muted to-muted-foreground/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">No Positions Found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                No positions match your current filters. Try adjusting your
                search criteria or check back later for new opportunities.
              </p>
            </div>
          )}
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

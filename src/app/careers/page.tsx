"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useQuery } from "convex/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
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
  DollarSign,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { Banner } from "@/components/Banner";
import { api } from "../../../convex/_generated/api";

// Static data for benefits and stats (these don't change often)
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

const types = ["All", "Full-time", "Part-time", "Contract", "Internship"];

// Icon mapping for departments
const departmentIcons: Record<string, any> = {
  Engineering: Code2,
  "AI & Data": Brain,
  Design: Palette,
  Infrastructure: Server,
  Product: Target,
  Marketing: Megaphone,
  Sales: DollarSign,
  HR: Users,
  Finance: DollarSign,
  Operations: Target,
};

// Skeleton components
const PositionCardSkeleton = () => (
  <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-white/10">
    <div className="absolute -top-6 left-8 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl">
      <Skeleton className="h-7 w-7" />
    </div>

    <div className="pt-8">
      <div className="flex items-center gap-3 mb-4">
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-5 w-16" />
      </div>

      <Skeleton className="h-8 w-4/5 mb-4" />

      <div className="flex items-center gap-4 text-sm mb-6">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
      </div>

      <Skeleton className="h-4 w-16 mb-4" />

      <div className="space-y-3 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center">
            <Skeleton className="w-1.5 h-1.5 rounded-full mr-3" />
            <Skeleton className="h-4 w-32" />
          </div>
        ))}
      </div>

      <Skeleton className="h-10 w-full rounded-lg" />
    </div>
  </div>
);

const DepartmentFilterSkeleton = () => (
  <div className="flex flex-wrap justify-center gap-3 mb-12">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <Skeleton key={i} className="h-10 w-24 rounded-full" />
    ))}
  </div>
);

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  // Fetch data from Convex
  const careers = useQuery(api.careers.getAllCareers, {
    isActive: true,
  });
  const departments = useQuery(api.careers.getDepartments);

  // Filter positions based on selection
  const filteredPositions =
    careers?.filter((position) => {
      const matchesDepartment =
        selectedDepartment === "All" ||
        position.department === selectedDepartment;
      const matchesType =
        selectedType === "All" || position.type === selectedType;
      return matchesDepartment && matchesType;
    }) || [];

  // Get featured positions
  const featuredPositions =
    careers?.filter((career) => career.featured).slice(0, 6) || [];

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

      {/* Featured Positions (if any) */}
      {(featuredPositions.length > 0 || careers === undefined) && (
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Star className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">
                  Featured Opportunities
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hot <span className="text-gradient">Openings</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {careers === undefined
                ? // Show skeleton while loading
                  Array.from({ length: 6 }).map((_, index) => (
                    <PositionCardSkeleton key={index} />
                  ))
                : featuredPositions.map((position) => {
                    const IconComponent =
                      departmentIcons[position.department] || Users;
                    return (
                      <div
                        key={position._id}
                        className="group relative p-6 rounded-2xl bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                      >
                        <div className="absolute -top-3 -right-3">
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Featured
                          </Badge>
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {position.department}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {position.type}
                            </Badge>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {position.title}
                        </h3>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {position.type}
                          </span>
                        </div>

                        {position.salary && (
                          <p className="text-green-600 font-medium mb-4">
                            {position.salary}
                          </p>
                        )}

                        <Button className="w-full bg-gradient-primary hover:shadow-glow group/btn">
                          <span>View Details</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    );
                  })}
            </div>
          </div>
        </section>
      )}

      {/* Open Positions Section */}
      <section className="py-32 relative overflow-hidden">
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
          {departments === undefined ? (
            <DepartmentFilterSkeleton />
          ) : departments && departments.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {departments.map((department) => (
                <Button
                  key={department.name}
                  variant={
                    department.name === selectedDepartment
                      ? "default"
                      : "outline"
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
          ) : null}

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
          <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-6" layout>
            {careers === undefined ? (
              // Show skeleton while loading
              Array.from({ length: 9 }).map((_, index) => (
                <PositionCardSkeleton key={index} />
              ))
            ) : filteredPositions.length > 0 ? (
              filteredPositions.map((position) => {
                const IconComponent =
                  departmentIcons[position.department] || Users;
                return (
                  <div
                    key={position._id}
                    className="group relative p-8 rounded-3xl bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="absolute -top-6 left-8 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>

                    <div className="pt-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="secondary" className="text-xs">
                          {position.department}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {position.type}
                        </Badge>
                        {position.featured && (
                          <Badge
                            variant="outline"
                            className="text-xs text-yellow-600 border-yellow-200"
                          >
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Featured
                          </Badge>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {position.type}
                        </div>
                        {position.remoteAllowed && (
                          <Badge variant="outline" className="text-xs">
                            Remote OK
                          </Badge>
                        )}
                      </div>

                      {position.salary && (
                        <p className="text-green-600 font-medium mb-4">
                          {position.salary}
                        </p>
                      )}

                      <div className="flex items-center gap-2 mb-6">
                        <Badge variant="outline" className="text-xs">
                          {position.experienceLevel} Level
                        </Badge>
                        {position.applicationDeadline && (
                          <Badge
                            variant="outline"
                            className="text-xs text-orange-600"
                          >
                            <Calendar className="w-3 h-3 mr-1" />
                            Apply by{" "}
                            {new Date(
                              position.applicationDeadline
                            ).toLocaleDateString()}
                          </Badge>
                        )}
                      </div>

                      <div className="space-y-2 mb-8">
                        {position.requirements
                          .slice(0, 3)
                          .map((requirement, idx) => (
                            <div
                              key={idx}
                              className="flex items-center group/item"
                            >
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 group-hover/item:scale-150 transition-transform" />
                              <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                                {requirement}
                              </span>
                            </div>
                          ))}
                        {position.requirements.length > 3 && (
                          <p className="text-xs text-muted-foreground ml-5">
                            +{position.requirements.length - 3} more
                            requirements
                          </p>
                        )}
                      </div>

                      <Button className="w-full bg-gradient-primary hover:shadow-glow group/btn">
                        <span>Apply Now</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>

                    <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-green-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="w-20 h-20 bg-gradient-to-r from-muted to-muted-foreground/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Star className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">No Positions Found</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  {careers?.length === 0
                    ? "We're not currently hiring, but we're always interested in meeting talented individuals."
                    : "No positions match your current filters. Try adjusting your search criteria or check back later for new opportunities."}
                </p>
                {(selectedDepartment !== "All" || selectedType !== "All") && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedDepartment("All");
                      setSelectedType("All");
                    }}
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            )}
          </motion.div>
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

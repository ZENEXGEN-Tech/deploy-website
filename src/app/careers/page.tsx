"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Coffee,
  Zap,
  Heart,
  Trophy,
  ArrowRight,
} from "lucide-react";

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
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110k - $145k",
    description:
      "Build and maintain our cloud infrastructure, ensuring scalability, reliability, and security.",
    requirements: [
      "Docker & Kubernetes",
      "CI/CD pipelines",
      "AWS/GCP expertise",
      "Infrastructure as Code",
    ],
  },
  {
    id: 5,
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $170k",
    description:
      "Drive product strategy and execution for our enterprise software solutions.",
    requirements: [
      "5+ years PM experience",
      "B2B SaaS background",
      "Agile methodologies",
      "Data-driven mindset",
    ],
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
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health, dental, and vision insurance plus wellness stipend",
  },
  {
    icon: Zap,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours and unlimited PTO",
  },
  {
    icon: Trophy,
    title: "Growth & Learning",
    description:
      "$2,000 annual learning budget for courses, conferences, and certifications",
  },
  {
    icon: Coffee,
    title: "Great Perks",
    description:
      "Top-tier equipment, team retreats, and monthly team building events",
  },
];

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const departments = [
    "All",
    "Engineering",
    "AI & Data",
    "Design",
    "Infrastructure",
    "Product",
    "Marketing",
  ];
  const types = ["All", "Full-time", "Internship"];

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
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Shape the <span className="text-gradient">Future</span> with Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Be part of a team that's revolutionizing how businesses operate
              through intelligent software solutions. Build your career while
              building the future.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Life at <span className="text-gradient">ZENEXGEN</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe great work happens when passionate people have the
              freedom to innovate, grow, and make a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="card-glass text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="card-glass">
            <CardContent className="p-12 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-6" />
              <blockquote className="text-2xl font-medium text-foreground mb-4">
                "At ZENEXGEN, we don't just work together—we innovate together,
                learn together, and grow together."
              </blockquote>
              <cite className="text-muted-foreground">
                — Mashal Tareen, CEO & Founder
              </cite>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find your next opportunity to make an impact. We're always looking
              for talented individuals who share our passion for innovation.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDepartment(dept)}
                  className="text-xs"
                >
                  {dept}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <Badge
                  key={type}
                  variant={selectedType === type ? "secondary" : "outline"}
                  onClick={() => setSelectedType(type)}
                  className="text-xs"
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredPositions.map((position) => (
              <Card key={position.id} className="card-glass card-hover">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold">
                          {position.title}
                        </h3>
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>

                      <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {/* {position.location} */}
                          Karachi, Pakistan
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {position.type}
                        </div>
                        {/* <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {position.salary}
                        </div> */}
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {position.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req) => (
                          <Badge
                            key={req}
                            variant="outline"
                            className="text-xs"
                          >
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <Button className="w-full lg:w-auto group">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No positions match your current filters. Try adjusting your
                search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See the Perfect Role?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always interested in meeting talented individuals. Send us
              your resume and tell us what you're passionate about.
            </p>
            <Button size="lg" className="btn-hero">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

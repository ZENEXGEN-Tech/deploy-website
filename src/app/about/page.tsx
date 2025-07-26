import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Target,
  Heart,
  Award,
  Users,
  Calendar,
  MapPin,
} from "lucide-react";

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    bio: "Visionary leader with 10+ years in tech innovation",
    location: "San Francisco, CA",
  },
  {
    name: "Mashal Khan",
    role: "CTO",
    bio: "AI/ML expert and full-stack architect",
    location: "Austin, TX",
  },
  {
    name: "Aryan khan",
    role: "Lead Designer",
    bio: "UX/UI specialist creating beautiful experiences",
    location: "New York, NY",
  },
  {
    name: "Marcus Rodriguez",
    role: "VP of Engineering",
    bio: "Scalable systems and DevOps enthusiast",
    location: "Seattle, WA",
  },
];

const values = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the leading force in intelligent software innovation, empowering businesses to thrive in the digital future.",
  },
  {
    icon: Target,
    title: "Mission",
    description:
      "Creating cutting-edge software solutions that combine AI, automation, and human creativity to solve complex business challenges.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Innovation, integrity, collaboration, and excellence drive everything we do. We believe in building lasting partnerships.",
  },
];

const milestones = [
  {
    year: "2021",
    title: "Company Founded",
    description:
      "ZENEXGEN was born with a vision to transform businesses through intelligent software solutions.",
  },
  {
    year: "2022",
    title: "First Major Client",
    description:
      "Successfully delivered our first enterprise-level AI automation platform.",
  },
  {
    year: "2023",
    title: "Team Expansion",
    description:
      "Grew to 15+ talented engineers and designers across multiple time zones.",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description:
      "Recognized as a top emerging software development company by TechReview.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              About ZENEXGEN
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building the <span className="text-gradient">Future</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate innovators, engineers, and visionaries
              dedicated to creating software that doesn't just work—it
              transforms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="card-glass text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Talented individuals from diverse backgrounds united by a shared
              passion for creating exceptional software experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="card-glass card-hover text-center"
              >
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-3">
                    {member.bio}
                  </p>
                  <div className="flex items-center justify-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {member.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From a bold idea to a thriving company—here's how we've grown and
              evolved to become a trusted technology partner.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <Card
                    className={`card-glass w-full max-w-md ${
                      index % 2 === 0 ? "mr-auto" : "ml-auto"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <Calendar className="h-5 w-5 text-primary mr-2" />
                        <span className="text-primary font-semibold">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/10 to-primary-glow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Award className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              What We <span className="text-gradient">Believe</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Technology should be an enabler, not a barrier. We believe in
              creating software that's intuitive, powerful, and
              accessible—solutions that feel natural and empower people to
              achieve more than they thought possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
                <p className="text-muted-foreground">
                  Complex problems, elegant solutions
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Always pushing boundaries
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Impact</h3>
                <p className="text-muted-foreground">
                  Creating meaningful change
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

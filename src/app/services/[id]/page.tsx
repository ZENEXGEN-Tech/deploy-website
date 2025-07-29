import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Brain,
  Smartphone,
  Zap,
  ArrowLeft,
  Check,
  Database,
  Cloud,
  Shield,
  Cpu,
  Users,
  Clock,
  Target,
  Star,
} from "lucide-react";
import Link from "next/link";

const serviceDetails = {
  "custom-software-development": {
    icon: Code2,
    title: "Custom Software Development",
    category: "Development",
    description:
      "Transform your business with tailor-made software solutions designed specifically for your unique requirements. Our expert development team combines cutting-edge technologies with industry best practices to deliver scalable, maintainable, and high-performance applications.",
    longDescription:
      "At ZENEXGEN, we understand that every business has unique challenges and requirements. Our custom software development services are designed to address these specific needs through innovative, scalable solutions that grow with your business. We leverage the latest technologies and methodologies to ensure your software not only meets current requirements but is also future-ready.",
    features: [
      "Full-stack web application development",
      "Enterprise software solutions",
      "Legacy system modernization",
      "API development and integration",
      "Microservices architecture",
      "Cloud-native applications",
      "DevOps and CI/CD implementation",
      "Performance optimization",
      "Security implementation",
      "Ongoing maintenance and support",
    ],
    technologies: [
      "React",
      "Node.js",
      "Python",
      "Java",
      "AWS",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
    ],
    benefits: [
      "Increased operational efficiency",
      "Scalable solutions that grow with your business",
      "Competitive advantage through custom features",
      "Improved user experience",
      "Better data management and insights",
      "Reduced manual processes",
    ],
    process: [
      {
        step: "Discovery & Analysis",
        description:
          "Understanding your business requirements and technical needs",
      },
      {
        step: "Architecture Design",
        description: "Creating scalable and maintainable system architecture",
      },
      {
        step: "Development",
        description: "Agile development with regular feedback and iterations",
      },
      {
        step: "Testing & QA",
        description: "Comprehensive testing to ensure quality and reliability",
      },
      {
        step: "Deployment",
        description: "Smooth deployment and production setup",
      },
      {
        step: "Support & Maintenance",
        description: "Ongoing support and feature enhancements",
      },
    ],
    pricing: "Starting from $15,000",
    timeline: "8-16 weeks",
    teamSize: "3-8 developers",
  },
  "ai-machine-learning": {
    icon: Brain,
    title: "AI & Machine Learning",
    category: "AI/ML",
    description:
      "Harness the power of artificial intelligence and machine learning to automate processes, gain insights from data, and create intelligent solutions that adapt and improve over time.",
    longDescription:
      "Our AI and machine learning services help businesses leverage the transformative power of intelligent technologies. From predictive analytics to natural language processing, we develop AI solutions that drive innovation and competitive advantage.",
    features: [
      "Predictive analytics and forecasting",
      "Natural language processing (NLP)",
      "Computer vision and image recognition",
      "Recommendation systems",
      "Chatbots and virtual assistants",
      "Fraud detection systems",
      "Automated decision making",
      "Data mining and pattern recognition",
      "Deep learning implementations",
      "AI model deployment and monitoring",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenAI",
      "AWS SageMaker",
      "Azure ML",
      "Jupyter",
    ],
    benefits: [
      "Automated decision making",
      "Improved accuracy in predictions",
      "Enhanced customer experiences",
      "Cost reduction through automation",
      "New revenue opportunities",
      "Better risk management",
    ],
    process: [
      {
        step: "Data Assessment",
        description: "Evaluating data quality and availability",
      },
      {
        step: "Problem Definition",
        description: "Clearly defining the AI use case and success metrics",
      },
      {
        step: "Model Development",
        description: "Building and training AI models",
      },
      {
        step: "Validation & Testing",
        description: "Rigorous testing and validation of model performance",
      },
      {
        step: "Integration",
        description: "Seamless integration with existing systems",
      },
      {
        step: "Monitoring & Optimization",
        description: "Continuous monitoring and model improvement",
      },
    ],
    pricing: "Starting from $25,000",
    timeline: "12-20 weeks",
    teamSize: "2-5 data scientists",
  },
  "web-mobile-apps": {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    category: "Development",
    description:
      "Create stunning, responsive web applications and native mobile apps that provide exceptional user experiences across all devices and platforms.",
    longDescription:
      "Our web and mobile app development services focus on creating user-centric applications that not only look great but also perform exceptionally well. We use modern frameworks and technologies to ensure your apps are fast, reliable, and scalable.",
    features: [
      "Responsive web application development",
      "iOS and Android native apps",
      "Cross-platform mobile development",
      "Progressive Web Apps (PWA)",
      "E-commerce applications",
      "Social media integration",
      "Real-time features and notifications",
      "Offline functionality",
      "App store optimization",
      "Performance monitoring",
    ],
    technologies: [
      "React",
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Vue.js",
      "Next.js",
      "Firebase",
    ],
    benefits: [
      "Reach customers on all devices",
      "Improved user engagement",
      "Brand recognition and loyalty",
      "Direct communication channel",
      "Increased sales and conversions",
      "Better customer insights",
    ],
    process: [
      {
        step: "UX/UI Design",
        description: "Creating intuitive and engaging user experiences",
      },
      {
        step: "Prototype Development",
        description: "Building interactive prototypes for validation",
      },
      {
        step: "Development",
        description: "Native or cross-platform development",
      },
      {
        step: "Testing",
        description: "Comprehensive testing across devices and platforms",
      },
      {
        step: "App Store Submission",
        description: "Handling app store submissions and approvals",
      },
      {
        step: "Launch & Support",
        description: "Post-launch support and updates",
      },
    ],
    pricing: "Starting from $20,000",
    timeline: "10-18 weeks",
    teamSize: "4-6 developers",
  },
  "automation-digital-transformation": {
    icon: Zap,
    title: "Automation & Digital Transformation",
    category: "Automation",
    description:
      "Streamline operations and accelerate growth through intelligent automation and comprehensive digital transformation strategies.",
    longDescription:
      "Our automation and digital transformation services help businesses modernize their operations, eliminate manual processes, and embrace digital-first approaches that drive efficiency and growth.",
    features: [
      "Business process automation",
      "Workflow optimization",
      "Digital strategy consulting",
      "Legacy system modernization",
      "Cloud migration services",
      "Integration platforms",
      "Robotic Process Automation (RPA)",
      "Document management systems",
      "Digital workplace solutions",
      "Change management support",
    ],
    technologies: [
      "Power Automate",
      "Zapier",
      "UiPath",
      "AWS",
      "Azure",
      "Salesforce",
      "SAP",
      "Microsoft 365",
    ],
    benefits: [
      "Reduced operational costs",
      "Improved efficiency and productivity",
      "Better customer experiences",
      "Faster time-to-market",
      "Enhanced data insights",
      "Competitive advantage",
    ],
    process: [
      {
        step: "Current State Analysis",
        description: "Assessing existing processes and systems",
      },
      {
        step: "Strategy Development",
        description: "Creating comprehensive transformation roadmap",
      },
      {
        step: "Automation Implementation",
        description: "Implementing automated workflows and processes",
      },
      {
        step: "Training & Adoption",
        description: "Ensuring successful user adoption",
      },
      {
        step: "Optimization",
        description: "Continuous improvement and optimization",
      },
      {
        step: "Scaling",
        description: "Expanding automation across the organization",
      },
    ],
    pricing: "Starting from $30,000",
    timeline: "16-24 weeks",
    teamSize: "3-7 consultants",
  },
  "cloud-infrastructure": {
    icon: Cloud,
    title: "Cloud Infrastructure",
    category: "Infrastructure",
    description:
      "Build scalable, reliable cloud infrastructure that ensures optimal performance and cost-efficiency for your applications.",
    longDescription:
      "Our cloud infrastructure services provide the foundation for modern, scalable applications. We design and implement cloud solutions that are secure, cost-effective, and capable of handling any workload.",
    features: [
      "Cloud architecture design",
      "AWS/Azure/GCP implementation",
      "Microservices deployment",
      "Auto-scaling solutions",
      "Load balancing and CDN setup",
      "Database optimization",
      "Monitoring and alerting",
      "Disaster recovery planning",
      "Cost optimization",
      "Security hardening",
    ],
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Terraform",
      "Kubernetes",
      "Docker",
      "Prometheus",
      "Grafana",
    ],
    benefits: [
      "Improved application performance",
      "Reduced infrastructure costs",
      "Enhanced scalability",
      "Better reliability and uptime",
      "Simplified maintenance",
      "Global reach and availability",
    ],
    process: [
      {
        step: "Infrastructure Assessment",
        description: "Evaluating current infrastructure and requirements",
      },
      {
        step: "Architecture Design",
        description: "Designing optimal cloud architecture",
      },
      {
        step: "Migration Planning",
        description: "Creating detailed migration strategy",
      },
      {
        step: "Implementation",
        description: "Setting up cloud infrastructure",
      },
      {
        step: "Testing & Optimization",
        description: "Performance testing and optimization",
      },
      {
        step: "Monitoring Setup",
        description: "Implementing monitoring and alerting",
      },
    ],
    pricing: "Starting from $18,000",
    timeline: "8-14 weeks",
    teamSize: "2-4 engineers",
  },
  "cybersecurity-solutions": {
    icon: Shield,
    title: "Cybersecurity Solutions",
    category: "Security",
    description:
      "Protect your digital assets with comprehensive cybersecurity frameworks, threat detection, and compliance solutions.",
    longDescription:
      "Our cybersecurity services provide multi-layered protection for your digital assets, ensuring your business stays secure against evolving threats while maintaining compliance with industry standards.",
    features: [
      "Security audits and assessments",
      "Penetration testing",
      "Vulnerability management",
      "Security awareness training",
      "Incident response planning",
      "Compliance frameworks (SOC2, GDPR)",
      "Identity and access management",
      "Network security implementation",
      "Data encryption and protection",
      "24/7 security monitoring",
    ],
    technologies: [
      "SIEM tools",
      "Vulnerability scanners",
      "Firewall solutions",
      "Encryption tools",
      "IAM platforms",
    ],
    benefits: [
      "Protection against cyber threats",
      "Regulatory compliance",
      "Reduced security risks",
      "Improved customer trust",
      "Business continuity assurance",
      "Cost savings from prevented breaches",
    ],
    process: [
      {
        step: "Security Assessment",
        description: "Comprehensive evaluation of current security posture",
      },
      {
        step: "Risk Analysis",
        description: "Identifying and prioritizing security risks",
      },
      {
        step: "Strategy Development",
        description: "Creating tailored security strategy",
      },
      {
        step: "Implementation",
        description: "Deploying security solutions and controls",
      },
      {
        step: "Testing & Validation",
        description: "Verifying security effectiveness",
      },
      {
        step: "Ongoing Monitoring",
        description: "Continuous monitoring and improvement",
      },
    ],
    pricing: "Starting from $22,000",
    timeline: "10-16 weeks",
    teamSize: "2-5 security experts",
  },
  "data-analytics": {
    icon: Database,
    title: "Data Analytics & Business Intelligence",
    category: "Analytics",
    description:
      "Transform raw data into actionable insights with advanced analytics and business intelligence solutions.",
    longDescription:
      "Our data analytics services help businesses unlock the value of their data through advanced analytics, visualization, and business intelligence solutions that drive informed decision-making.",
    features: [
      "Data warehouse design",
      "ETL pipeline development",
      "Interactive dashboards",
      "Predictive analytics",
      "Real-time reporting",
      "Data visualization",
      "Performance metrics tracking",
      "Self-service analytics",
      "Data governance frameworks",
      "Advanced statistical analysis",
    ],
    technologies: [
      "Tableau",
      "Power BI",
      "Apache Spark",
      "Snowflake",
      "AWS Redshift",
      "Python",
      "R",
      "SQL",
    ],
    benefits: [
      "Data-driven decision making",
      "Improved business insights",
      "Operational efficiency gains",
      "Revenue optimization",
      "Risk reduction",
      "Competitive advantage",
    ],
    process: [
      {
        step: "Data Discovery",
        description: "Identifying and cataloging available data sources",
      },
      {
        step: "Requirements Analysis",
        description: "Understanding business intelligence needs",
      },
      {
        step: "Data Pipeline Development",
        description: "Building robust data processing pipelines",
      },
      {
        step: "Dashboard Creation",
        description: "Developing interactive visualizations",
      },
      {
        step: "Training & Adoption",
        description: "Ensuring successful user adoption",
      },
      {
        step: "Optimization",
        description: "Continuous improvement and refinement",
      },
    ],
    pricing: "Starting from $20,000",
    timeline: "12-18 weeks",
    teamSize: "3-5 analysts",
  },
  "iot-solutions": {
    icon: Cpu,
    title: "IoT Solutions",
    category: "IoT",
    description:
      "Create connected ecosystems with IoT solutions that enable smart automation and real-time monitoring.",
    longDescription:
      "Our IoT solutions connect devices, sensors, and systems to create intelligent ecosystems that provide real-time insights and enable automated responses to changing conditions.",
    features: [
      "IoT device development",
      "Sensor integration",
      "Edge computing solutions",
      "Real-time monitoring systems",
      "Predictive maintenance",
      "Remote device management",
      "Data collection and analysis",
      "Alert and notification systems",
      "Mobile and web dashboards",
      "Scalable IoT platforms",
    ],
    technologies: [
      "Arduino",
      "Raspberry Pi",
      "AWS IoT",
      "Azure IoT",
      "MQTT",
      "LoRaWAN",
      "Zigbee",
      "Bluetooth",
    ],
    benefits: [
      "Improved operational efficiency",
      "Real-time visibility and control",
      "Predictive maintenance capabilities",
      "Reduced operational costs",
      "Enhanced safety and compliance",
      "New business model opportunities",
    ],
    process: [
      {
        step: "Use Case Definition",
        description: "Identifying IoT opportunities and requirements",
      },
      {
        step: "System Design",
        description: "Designing IoT architecture and components",
      },
      {
        step: "Prototype Development",
        description: "Building and testing proof of concept",
      },
      {
        step: "Full Implementation",
        description: "Deploying complete IoT solution",
      },
      {
        step: "Integration & Testing",
        description: "Integrating with existing systems",
      },
      {
        step: "Monitoring & Support",
        description: "Ongoing monitoring and maintenance",
      },
    ],
    pricing: "Starting from $28,000",
    timeline: "14-22 weeks",
    teamSize: "3-6 engineers",
  },
};

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: serviceId } = await params;
  const service = serviceId
    ? serviceDetails[serviceId as keyof typeof serviceDetails]
    : null;

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-muted/30 overflow-hidden">
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>

          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <service.icon className="h-8 w-8 text-white" />
            </div>

            <div className="flex-1">
              <Badge variant="secondary" className="mb-4">
                {service.category}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-white/80 max-w-3xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {service.longDescription}
              </p>
              <h3 className="text-2xl font-bold mb-6">What&apos;s Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-6">Our Process</h3>
              <div className="space-y-6 mb-12">
                {service.process.map((step, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{step.step}</h4>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {service.benefits.map((benefit, index) => (
                  <Card key={index} className="card-glass">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-primary" />
                        <span>{benefit}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="card-glass sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Project Details</h3>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Timeline</div>
                        <div className="text-sm text-muted-foreground">
                          {service.timeline}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Team Size</div>
                        <div className="text-sm text-muted-foreground">
                          {service.teamSize}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Starting Price</div>
                        <div className="text-sm text-muted-foreground">
                          {service.pricing}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-medium mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <Link href="/contact">
                      <Button className="w-full btn-hero">Get Started</Button>
                    </Link>
                    <Button variant="outline" className="w-full">
                      Schedule Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how {service.title.toLowerCase()} can transform
            your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="btn-hero">
                Start Your Project
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

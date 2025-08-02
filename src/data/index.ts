import {
  Eye,
  Target,
  Heart,
  Award,
  Users,
  Code,
  Zap,
  Lightbulb,
  Sparkles,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Trophy,
  Coffee,
  Rocket,
  Globe2,
  CheckCircle,
  Star,
  Brain,
  Code2,
  Smartphone,
  Cloud,
  Shield,
  Database,
  Cpu,
} from "lucide-react";

// ABOUT PAGE
export const missionVisionData = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Creating cutting-edge software solutions that combine AI, automation, and human creativity to solve complex business challenges.",
    highlights: [
      "Deliver cutting-edge solutions",
      "Foster business growth",
      "Enable digital transformation",
    ],
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    iconBg: "from-emerald-500 to-teal-600",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading force in intelligent software innovation, empowering businesses to thrive in the digital future.",
    highlights: [
      "Industry leadership",
      "Future-focused innovation",
      "Transformative impact",
    ],
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    iconBg: "from-emerald-500 to-teal-600",
  },
];

export const coreValues = [
  {
    icon: Heart,
    title: "Excellence",
    description:
      "We strive for perfection in every line of code and every client interaction, delivering solutions that exceed expectations.",
    accent: "text-rose-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace emerging technologies to create tomorrow's solutions today, pushing the boundaries of what's possible.",
    accent: "text-amber-500",
  },
];

export const processFlow = [
  {
    step: "01",
    title: "Consultation",
    description: "We analyze your business needs and technical requirements",
    icon: Users,
    duration: "1-2 days",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Custom roadmap and architecture planning for your solution",
    icon: Target,
    duration: "3-5 days",
  },
  {
    step: "03",
    title: "Development",
    description: "Agile development with regular updates and feedback loops",
    icon: Code,
    duration: "2-12 weeks",
  },
  {
    step: "04",
    title: "Deployment",
    description: "Launch, testing, optimization, and ongoing support",
    icon: Zap,
    duration: "1-2 weeks",
  },
];

// BLOG PAGE

export const blogStats = [
  {
    icon: BookOpen,
    number: "150+",
    label: "Articles",
    sublabel: "Published",
  },
  {
    icon: Eye,
    number: "50K+",
    label: "Monthly Readers",
    sublabel: "Globally",
  },
  {
    icon: TrendingUp,
    number: "95%",
    label: "Reader Satisfaction",
    sublabel: "Rating",
  },
  {
    icon: Heart,
    number: "10K+",
    label: "Newsletter",
    sublabel: "Subscribers",
  },
];

// Careers Page

export const benefits = [
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

export const companyStats = [
  {
    icon: Users,
    number: "50+",
    label: "Team Members",
    sublabel: "Worldwide",
  },
  {
    icon: Globe2,
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

// Services Page
export const servicesData = [
  {
    id: "custom-software-development",
    iconName: "Code2",
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
    iconName: "Brain",
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
    iconName: "Smartphone",
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
    iconName: "Zap",
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
    id: "cloud-infrastructure",
    iconName: "Cloud",
    title: "Cloud Infrastructure",
    shortDescription:
      "Scalable cloud solutions that ensure your applications perform optimally under any load.",
    features: [
      "AWS/Azure deployment",
      "Microservices architecture",
      "Auto-scaling solutions",
    ],
    category: "Infrastructure",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    iconBg: "from-emerald-500 to-teal-600",
    accent: "text-emerald-500",
  },
  {
    id: "cybersecurity-solutions",
    iconName: "Shield",
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
    iconName: "Database",
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
    iconName: "Cpu",
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

export const categories = [
  { name: "All", count: servicesData.length },
  {
    name: "Development",
    count: servicesData.filter((s) => s.category === "Development").length,
  },
  {
    name: "AI/ML",
    count: servicesData.filter((s) => s.category === "AI/ML").length,
  },
  {
    name: "Automation",
    count: servicesData.filter((s) => s.category === "Automation").length,
  },
  {
    name: "Infrastructure",
    count: servicesData.filter((s) => s.category === "Infrastructure").length,
  },
  {
    name: "Security",
    count: servicesData.filter((s) => s.category === "Security").length,
  },
  {
    name: "Analytics",
    count: servicesData.filter((s) => s.category === "Analytics").length,
  },
  {
    name: "IoT",
    count: servicesData.filter((s) => s.category === "IoT").length,
  },
];

export const stats = [
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

// Services Details Page

export const serviceDetails = {
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

export const contactStats = [
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
    icon: Globe2,
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

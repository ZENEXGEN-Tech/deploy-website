"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  Briefcase,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Code2,
  Brain,
  Smartphone,
  Zap,
  FileText,
  Handshake,
  HelpCircle,
  Star,
  Globe,
  Calendar,
  Download,
  PlayCircle,
} from "lucide-react";
import { toast } from "sonner";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import { Banner } from "@/components/Banner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@zenexgen.com",
    description: "Send us an email anytime",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    iconBg: "from-green-500 to-emerald-600",
    accent: "text-green-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm PST",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    iconBg: "from-green-500 to-emerald-600",
    accent: "text-green-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "DHA Phase 8, Al Murtaza Commercial",
    description: "Karachi, Pakistan",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    iconBg: "from-green-500 to-emerald-600",
    accent: "text-green-500",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Fri 9AM-5PM PST",
    description: "We respond within 24 hours",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    iconBg: "from-green-500 to-emerald-600",
    accent: "text-green-500",
  },
];

const inquiryOptions = [
  {
    value: "Custom Software Development",
    label: "Custom Software Development",
    icon: Code2,
  },
  {
    value: "AI & Machine Learning",
    label: "AI & Machine Learning",
    icon: Brain,
  },
  {
    value: "Web & Mobile Apps",
    label: "Web & Mobile Apps",
    icon: Smartphone,
  },
  {
    value: "Automation & Digital Transformation",
    label: "Automation & Digital Transformation",
    icon: Zap,
  },
  {
    value: "Technical Consultation",
    label: "Technical Consultation",
    icon: FileText,
  },
  {
    value: "Partnership Opportunities",
    label: "Partnership Opportunities",
    icon: Handshake,
  },
  {
    value: "Other",
    label: "Other",
    icon: HelpCircle,
  },
];

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
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      inquiryType: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success(
        "Message sent successfully! We'll get back to you within 24 hours.",
        {
          icon: <CheckCircle className="h-4 w-4" />,
          duration: 5000,
        }
      );

      form.reset();
    } catch (error) {
      toast.error(
        "Failed to send message. Please try again or contact us directly."
      );
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="min-h-screen">
      <Banner
        title={
          <>
            Let's Build <span className="text-gradient">Something Great</span>
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

      {/* Contact Form Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary-glow/10 to-primary/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Send us a message</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Start Your <span className="text-gradient">Project</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-sm border border-white/20">
                {/* Floating Icon */}
                <div className="absolute -top-6 left-8 w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-2xl">
                  <Send className="h-7 w-7 text-white" />
                </div>

                <div className="pt-8">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium">
                                Name *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your full name"
                                  className="bg-background/80 backdrop-blur-sm border-white/10 focus:border-primary/50 transition-all duration-300"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium">
                                Email *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="your@email.com"
                                  className="bg-background/80 backdrop-blur-sm border-white/10 focus:border-primary/50 transition-all duration-300"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              Company
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your company name"
                                className="bg-background/80 backdrop-blur-sm border-white/10 focus:border-primary/50 transition-all duration-300"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="inquiryType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              Inquiry Type *
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="bg-background/80 backdrop-blur-sm border-white/10 focus:border-primary/50 transition-all duration-300">
                                  <SelectValue placeholder="Select an inquiry type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {inquiryOptions.map((option) => (
                                  <SelectItem
                                    key={option.value}
                                    value={option.value}
                                    className="flex items-center"
                                  >
                                    <div className="flex items-center">
                                      <option.icon className="w-4 h-4 mr-2" />
                                      {option.label}
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              Message *
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project, goals, and how we can help..."
                                className="min-h-[120px] bg-background/80 backdrop-blur-sm border-white/10 focus:border-primary/50 transition-all duration-300 resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full btn-hero group py-4 text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Get in touch</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Multiple Ways to{" "}
                  <span className="text-gradient">Connect</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Choose the best way to reach us. We're here to help and answer
                  any questions you might have.
                </p>
              </div>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className={`group relative p-6 rounded-3xl bg-gradient-to-br ${info.gradient} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 hover:shadow-2xl`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {/* Floating Icon */}
                    <div
                      className={`absolute -top-3 left-6 w-12 h-12 bg-gradient-to-r ${info.iconBg} rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500`}
                    >
                      <info.icon className="h-6 w-6 text-white" />
                    </div>

                    <div className="pt-4">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-foreground font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {info.description}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div
                      className={`absolute -bottom-1 -right-1 w-16 h-16 ${info.accent.replace("text-", "bg-")}/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700`}
                    ></div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-primary/10 via-primary-glow/5 to-primary/10 backdrop-blur-sm border border-white/10">
                <div className="absolute -top-3 left-6 w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-2xl">
                  <Calendar className="h-6 w-6 text-white" />
                </div>

                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Prefer to talk directly?
                  </h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start hover:scale-105 transition-all duration-300 group"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Schedule a Discovery Call
                      <ArrowRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start hover:scale-105 transition-all duration-300 group"
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Meet Our Team
                      <ArrowRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start hover:scale-105 transition-all duration-300 group"
                    >
                      <Briefcase className="mr-2 h-4 w-4" />
                      Request a Proposal
                      <ArrowRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transition-all duration-300 group"
                  onClick={() =>
                    window.open(
                      "https://maps.google.com/?q=DHA+Phase+8+Al+Murtaza+Commercial+Karachi+Pakistan",
                      "_blank"
                    )
                  }
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
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
            possibilities, we're excited to discuss how ZENEXGEN can help
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

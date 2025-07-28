"use client";
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
} from "lucide-react";
import { toast } from "sonner";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@zenexgen.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm PST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "DHA Phase 8, Al Murtaza Commercial",
    description: "Karachi, Pakistan",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Fri 9AM-5PM PST",
    description: "We respond within 24 hours",
  },
];

const inquiryOptions = [
  {
    value: "Custom Software Development",
    label: "Custom Software Development",
  },
  { value: "AI & Machine Learning", label: "AI & Machine Learning" },
  { value: "Web & Mobile Apps", label: "Web & Mobile Apps" },
  {
    value: "Automation & Digital Transformation",
    label: "Automation & Digital Transformation",
  },
  { value: "Technical Consultation", label: "Technical Consultation" },
  { value: "Partnership Opportunities", label: "Partnership Opportunities" },
  { value: "Other", label: "Other" },
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Build <span className="text-gradient">Something Great</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with intelligent software
              solutions? We'd love to hear about your project and discuss how we
              can help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <Card className="card-glass">
                <CardContent className="p-8">
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
                              <FormLabel>Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your full name"
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
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="your@email.com"
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
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your company name"
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
                            <FormLabel>Inquiry Type *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an inquiry type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {inquiryOptions.map((option) => (
                                  <SelectItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
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
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project, goals, and how we can help..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full btn-hero group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Rest of your component remains the same */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
                <p className="text-muted-foreground">
                  Choose the best way to reach us. We're here to help and answer
                  any questions you might have.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="card-glass">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">
                            {info.title}
                          </h3>
                          <p className="text-foreground font-medium mb-1">
                            {info.content}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">
                  Prefer to talk directly?
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Schedule a Discovery Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Meet Our Team
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Request a Proposal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your sections remain the same */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-muted-foreground">
              Located in DHA Phase 8, Karachi, Pakistan
            </p>
          </div>

          <Card className="card-glass">
            <CardContent className="p-0">
              <div className="h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.727234567!2d67.0731!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDQnMjMuMiJF!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>

              <div className="p-6 bg-background/95 backdrop-blur-sm border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      ZENEXGEN Headquarters
                    </h3>
                    <p className="text-muted-foreground">
                      DHA Phase 8, Al Murtaza Commercial
                    </p>
                    <p className="text-muted-foreground">Karachi, Pakistan</p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() =>
                      window.open(
                        "https://maps.google.com/?q=DHA+Phase+8+Al+Murtaza+Commercial+Karachi+Pakistan",
                        "_blank"
                      )
                    }
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you have a specific project in mind or just want to
              explore possibilities, we're excited to discuss how ZENEXGEN can
              help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                Download Our Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

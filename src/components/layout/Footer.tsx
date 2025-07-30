"use client";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Info - Takes more space */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo2.png"
                className="w-36 h-auto brightness-110"
                alt="zenexgen logo"
                width={144}
                height={144}
              />
            </Link>

            <div className="mb-6">
              <p className="text-base leading-relaxed mb-4">
                Shaping the future through intelligent innovation. We combine
                creativity, precision, and performance to empower businesses
                through digital transformation.
              </p>
              <div className="inline-flex items-center space-x-2 text-emerald-400 text-sm font-medium bg-emerald-400/10 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>Transforming Ideas Into Reality</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3  hover:text-emerald-400 transition-colors">
                <Mail className="h-4 w-4 text-emerald-400" />
                <a href="mailto:hello@zenexgen.com" className="text-sm">
                  hello@zenexgen.com
                </a>
              </div>
              <div className="flex items-center space-x-3  hover:text-emerald-400 transition-colors">
                <Phone className="h-4 w-4 text-emerald-400" />
                <a href="tel:+025551234567" className="text-sm">
                  +02 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3 ">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span className="text-sm">Karachi, Pakistan</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/company/zenexgen",
                    label: "LinkedIn",
                  },
                  {
                    icon: Twitter,
                    href: "https://twitter.com/zenexgen",
                    label: "Twitter",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/zenexgen",
                    label: "GitHub",
                  },
                  {
                    icon: Instagram,
                    href: "https://instagram.com/zenexgen",
                    label: "Instagram",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: "icon" }),
                      "w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center hover:bg-teal-700 transition-all duration-300 hover:scale-110 group"
                    )}
                    aria-label={label}
                  >
                    <Icon className="h-6 w-6 text-white group-hover:transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
                { label: "Blog", href: "/blog" },
                { label: "Resources", href: "/resources" },
                { label: "FAQ", href: "/faq" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-emerald-400 transition-colors text-sm flex items-center group"
                  >
                    <span>{label}</span>
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              {[
                {
                  label: "Custom Software",
                  href: "/services/custom-software",
                  desc: "Tailored solutions",
                },
                {
                  label: "AI & ML Solutions",
                  href: "/services/ai-ml",
                  desc: "Intelligent systems",
                },
                {
                  label: "Web & Mobile Apps",
                  href: "/services/web-mobile",
                  desc: "Digital experiences",
                },
                {
                  label: "Digital Transformation",
                  href: "/services/digital-transformation",
                  desc: "Business evolution",
                },
              ].map(({ label, href, desc }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="block hover:text-emerald-400 transition-colors group"
                  >
                    <div className="flex items-center">
                      <span className="text-sm font-medium">{label}</span>
                      <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                    </div>
                    <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                      {desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold mb-6 text-lg">Stay Updated</h3>
            <p className=" text-sm mb-6 leading-relaxed">
              Get the latest insights on digital transformation, AI innovations,
              and industry trends delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 transition-all"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubscribed}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubscribed ? (
                  <>
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 rounded-lg border">
              <div className="flex items-center space-x-2 text-emerald-400 text-sm mb-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="font-medium">Legal</span>
              </div>
              <div className="flex flex-wrap gap-4 text-xs">
                <Link href="/privacy" className=" transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className=" transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className=" transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} ZENEXGEN. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-xs text-slate-500">
              <span>🚀 Building the future, one innovation at a time</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

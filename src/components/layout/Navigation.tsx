"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = usePathname();

  // Close mobile menu when clicking outside or resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById("mobile-nav");
      if (nav && !nav.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location === "/";
    }
    return location.startsWith(path);
  };

  return (
    <>
      {/* Background overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        id="mobile-nav"
        className={cn(
          "fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl backdrop-blur-xl transition-all duration-300 z-50",
          // Better mobile margins and responsive design
          "mt-3 mx-auto rounded-2xl border sm:mt-4 sm:mx-5 md:mt-5 md:mx-6 lg:mx-8",
          "px-4 sm:px-6 lg:px-8",
          // Consistent styling - same for all routes and scroll states
          "bg-background/90 border-border/50 shadow-lg backdrop-blur-2xl"
        )}
      >
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="zenexgen logo"
              className="w-12 h-12"
              width={1000}
              height={1000}
            />

            <span className="md:text-xl text-lg lg:text-xl font-bold text-foreground">
              ZENEXGEN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-200 relative group py-2",
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-full h-0.5 bg-current transform transition-all duration-200",
                    isActive(item.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            {/* Get Started Button - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block">
              <Button
                asChild
                onClick={() => (window.location.href = "/contact")}
                size="sm"
                className="bg-teal-500 hover:bg-teal-500/90 rounded-lg px-4 py-2 transition-all duration-200 group"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Get Started</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="w-9 h-9 rounded-lg transition-colors duration-200 hover:bg-muted"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="border-t border-border/20 backdrop-blur-xl">
            <div className="py-4 space-y-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-lg mx-3 transition-all duration-200 transform",
                    isActive(item.href)
                      ? "text-teal-500 bg-teal-500/10 border-l-2 border-teal-500"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {item.name}
                </Link>
              ))}

              {/* Get Started button for mobile */}
              <div className="px-3 pt-2">
                <Button
                  asChild
                  className="w-full bg-teal-500 hover:bg-teal-500/90 text-primary-foreground rounded-lg py-3 transition-all duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center space-x-2"
                  >
                    <span className="font-medium">Get Started</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

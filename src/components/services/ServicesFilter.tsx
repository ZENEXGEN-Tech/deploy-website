// app/services/ServicesFilter.tsx (Client Component)
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import * as Icons from "lucide-react";

interface Service {
  id: string;
  iconName: string;
  title: string;
  shortDescription: string;
  features: string[];
  category: string;
  gradient: string;
  iconBg: string;
  accent: string;
}

interface Category {
  name: string;
  count: number;
}

interface ServicesFilterProps {
  services: Service[];
  categories: Category[];
}

export function ServicesFilter({ services, categories }: ServicesFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  // Helper function to get icon component from icon name
  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent || Icons.Code2; // fallback to Code2 if icon not found
  };

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-20">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant={category.name === activeCategory ? "default" : "outline"}
            className={`rounded-full transition-all duration-300 group ${
              category.name === activeCategory
                ? "bg-gradient-primary hover:shadow-glow scale-105"
                : "hover:scale-105 hover:border-primary/50"
            }`}
            onClick={() => setActiveCategory(category.name)}
          >
            <span>{category.name}</span>
            <span
              className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                category.name === activeCategory
                  ? "bg-white/20"
                  : "bg-primary/10 text-primary group-hover:bg-primary/20"
              }`}
            >
              {category.count}
            </span>
          </Button>
        ))}
      </div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        layout
      >
        {filteredServices.map((service) => {
          const IconComponent = getIcon(service.iconName);

          return (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 hover:shadow-2xl h-full flex flex-col`}
            >
              {/* Floating Icon */}
              <div
                className={`absolute -top-6 left-8 w-14 h-14 bg-gradient-to-r ${service.iconBg} rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500`}
              >
                <IconComponent className="h-7 w-7 text-white" />
              </div>

              <div className="pt-8 flex flex-col h-full">
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mb-4 self-start">
                  <span className="text-xs font-medium">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {service.shortDescription}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center group/item">
                      <div
                        className={`w-1.5 h-1.5 ${service.accent.replace(
                          "text-",
                          "bg-"
                        )} rounded-full mr-3 group-hover/item:scale-150 transition-transform`}
                      />
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <Link
                  href={`/services/${service.id}`}
                  className="flex items-center text-primary group-hover:text-primary-glow transition-colors cursor-pointer mt-auto group/link"
                >
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>

              {/* Decorative Element */}
              <div
                className={`absolute -bottom-2 -right-2 w-20 h-20 ${service.accent.replace(
                  "text-",
                  "bg-"
                )}/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700`}
              >
                {" "}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}

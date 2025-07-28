"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Card({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <motion.div
      data-slot="card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
      className={cn(
        "group bg-white/10 text-white backdrop-blur-md relative overflow-hidden rounded-2xl border border-white/20 p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-white/40",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-transparent before:to-pink-500/10 before:blur-2xl before:z-[-1]",
        className
      )}
      {...props}
    >
      {/* Glow Ring Effect */}
      <div className="absolute -inset-px z-[-1] rounded-[inherit] bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition duration-500 group-hover:opacity-40 blur-sm" />
      {children}
    </motion.div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("grid gap-1.5 mb-4", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <motion.h3
      data-slot="card-title"
      className={cn("text-xl font-bold tracking-tight", className)}
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <motion.p
      data-slot="card-description"
      className={cn("text-sm text-white/70", className)}
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("text-white", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center justify-between pt-4", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};

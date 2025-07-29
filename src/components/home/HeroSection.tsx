import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroGloble from "./HeroGloble";
import { NumberTicker } from "../ui/number-ticker";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-10 items-center w-full max-w-7xl mx-auto mt-26">
          {/* Left side - Text content */}
          <div className="space-y-8 z-10 relative order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none text-black">
                Next-Gen
                <br />
                <span className="text-teal-500">Digital</span>
                <br />
                Solutions
              </h1>

              <p className="text-xl sm:text-2xl text-black/70 leading-relaxed font-light">
                We deliver cutting-edge technology solutions that drive
                sustainable growth and digital transformation. Partner with us
                to unlock your business potential in the digital age.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link
                href={"/services"}
                className={
                  (cn(buttonVariants({ size: "lg" })),
                  "bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 flex items-center rounded-2xl h-16 text-xl font-bold")
                }
              >
                Get Started
                <ArrowRight className="ml-2 h-8 w-8" />
              </Link>
            </div>

            {/* Stats or features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-5xl font-bold text-teal-500">
                  <NumberTicker value={50} />+
                </div>
                <div className="text-sm lg:text-xl text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-5xl font-bold text-teal-500">
                  <NumberTicker value={98} />%
                </div>
                <div className="text-sm lg:text-xl text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-5xl font-bold text-teal-500">
                  <NumberTicker value={24} />/<NumberTicker value={7} />
                </div>
                <div className="text-sm lg:text-xl text-muted-foreground">
                  Support
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Globe */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] order-1 lg:order-2 lg:block hidden">
            <HeroGloble />
          </div>
        </div>
      </div>
    </section>
  );
};

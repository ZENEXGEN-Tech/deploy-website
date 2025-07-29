"use client";

import { Award } from "lucide-react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const ClientsSection = () => {
  const clients = [
    {
      name: "TechCorp",
      logo: "https://resend.com/static/customers/warner-bros.svg",
    },
    {
      name: "InnovateLab",
      logo: "https://resend.com/static/customers/gumroad.svg",
    },
    {
      name: "DataFlow",
      logo: "https://resend.com/static/customers/max.svg",
    },
    {
      name: "CloudSync",
      logo: "https://resend.com/static/customers/osnplus.svg",
    },
    {
      name: "NextGen",
      logo: "https://resend.com/static/customers/totvs.svg",
    },
    {
      name: "DigitalEdge",
      logo: "https://resend.com/static/customers/voahoteis.svg",
    },
    {
      name: "SmartSys",
      logo: "https://resend.com/static/customers/sameday.svg",
    },
    {
      name: "FutureTech",
      logo: "https://resend.com/static/customers/briefer.svg",
    },
    {
      name: "CodeBase",
      logo: "https://resend.com/static/customers/booth.svg",
    },
    {
      name: "WebForce",
      logo: "https://resend.com/static/customers/lastro.svg",
    },
  ];

  return (
    <section className="py-32 bg-muted/30 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Award className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Trusted Worldwide</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by leading companies worldwide to deliver exceptional
            results
          </p>
        </div>

        {/* First Marquee - Left to Right */}
        <div className="mb-8">
          <Marquee speed={50} pauseOnHover={true} className="py-4">
            {clients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="mx-6 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 p-6 border border-white/10 hover:border-white/20 flex items-center justify-center min-w-[180px] h-20 hover:scale-105"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={100}
                  height={48}
                  unoptimized
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Second Marquee - Right to Left */}
        <div className="mb-12">
          <Marquee
            speed={50}
            direction="right"
            pauseOnHover={true}
            className="py-4"
          >
            {clients
              .slice()
              .reverse()
              .map((client, index) => (
                <div
                  key={`${client.name}-reverse-${index}`}
                  className="mx-6 bg-gradient-to-br from-primary/20 via-primary-glow/20 to-primary/20 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 p-6 border border-white/10 hover:border-white/20 flex items-center justify-center min-w-[180px] h-20 hover:scale-105"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={100}
                    height={48}
                    unoptimized
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

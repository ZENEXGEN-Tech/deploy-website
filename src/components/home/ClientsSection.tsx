import React from "react";
import Marquee from "react-fast-marquee";

const ClientLogos = () => {
  // Dummy client logos data
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
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Section Header - Center Aligned */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading companies worldwide to deliver exceptional
            results
          </p>
        </div>

        {/* First Marquee - Moving Right */}
        <div className="mb-8">
          <Marquee speed={50} pauseOnHover={true} className="py-4">
            {clients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="mx-6 bg-black rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-200 flex items-center justify-center min-w-[180px] h-20"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Second Marquee - Moving Left */}
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
                  className="mx-6 bg-teal-500 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-200 flex items-center justify-center min-w-[180px] h-20"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;

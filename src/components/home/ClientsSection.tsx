import React from "react";
import Marquee from "react-fast-marquee";

const ClientLogos = () => {
  // Dummy client logos data
  const clients = [
    {
      name: "TechCorp",
      logo: "https://via.placeholder.com/150x80/4F46E5/FFFFFF?text=TechCorp",
    },
    {
      name: "InnovateLab",
      logo: "https://via.placeholder.com/150x80/EF4444/FFFFFF?text=InnovateLab",
    },
    {
      name: "DataFlow",
      logo: "https://via.placeholder.com/150x80/10B981/FFFFFF?text=DataFlow",
    },
    {
      name: "CloudSync",
      logo: "https://via.placeholder.com/150x80/F59E0B/FFFFFF?text=CloudSync",
    },
    {
      name: "NextGen",
      logo: "https://via.placeholder.com/150x80/8B5CF6/FFFFFF?text=NextGen",
    },
    {
      name: "DigitalEdge",
      logo: "https://via.placeholder.com/150x80/06B6D4/FFFFFF?text=DigitalEdge",
    },
    {
      name: "SmartSys",
      logo: "https://via.placeholder.com/150x80/EC4899/FFFFFF?text=SmartSys",
    },
    {
      name: "FutureTech",
      logo: "https://via.placeholder.com/150x80/84CC16/FFFFFF?text=FutureTech",
    },
    {
      name: "CodeBase",
      logo: "https://via.placeholder.com/150x80/F97316/FFFFFF?text=CodeBase",
    },
    {
      name: "WebForce",
      logo: "https://via.placeholder.com/150x80/6366F1/FFFFFF?text=WebForce",
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
                className="mx-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-200 flex items-center justify-center min-w-[180px] h-20"
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
                  className="mx-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-200 flex items-center justify-center min-w-[180px] h-20"
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

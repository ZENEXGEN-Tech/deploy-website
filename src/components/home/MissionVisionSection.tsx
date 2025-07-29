import React from "react";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const missionVisionData = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation in an ever-evolving digital landscape.",
    highlights: [
      "Deliver cutting-edge solutions",
      "Foster business growth",
      "Enable digital transformation",
    ],
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading technology partner that shapes the future of business through intelligent software solutions and transformative digital experiences.",
    highlights: [
      "Industry leadership",
      "Future-focused innovation",
      "Transformative impact",
    ],
  },
];

const values = [
  {
    icon: Heart,
    title: "Excellence",
    description:
      "We strive for perfection in every line of code and every client interaction.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace emerging technologies to create tomorrow's solutions today.",
  },
];

export const MissionVisionSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Purpose</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by purpose, guided by vision. We believe in creating
            technology that makes a meaningful difference.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          {/* Mission - Large Left Grid */}
          <div className="lg:col-span-7 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            </div>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {missionVisionData[0].description}
            </p>

            <div className="space-y-3">
              {missionVisionData[0].highlights.map((highlight) => (
                <div key={highlight} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision - Medium Right Grid */}
          <div className="lg:col-span-5 rounded-2xl p-8 text-black">
            <div className="flex items-center mb-6 ">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Our Vision</h3>
            </div>

            <p className="text-lg mb-6 leading-relaxed text-gray-600">
              {missionVisionData[1].description}
            </p>

            <div className="space-y-3">
              {missionVisionData[1].highlights.map((highlight) => (
                <div key={highlight} className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3" />
                  <span className="text-gray-600">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Values
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do and every decision we
            make.
          </p>
        </div>

        {/* Values Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`rounded-2xl p-8 transition-all hover:scale-105 ${
                index === 0
                  ? "bg-white border border-gray-200 shadow-sm hover:shadow-md"
                  : "bg-gray-900 text-white"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    index === 0 ? "bg-gray-100" : "bg-white/10"
                  }`}
                >
                  <value.icon
                    className={`w-6 h-6 ${
                      index === 0 ? "text-gray-700" : "text-white"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h4
                    className={`text-2xl font-bold mb-3 ${
                      index === 0 ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {value.title}
                  </h4>
                  <p
                    className={`text-lg leading-relaxed ${
                      index === 0 ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;

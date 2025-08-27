import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Award, Clock, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="dark-container min-h-screen flex items-center pt-20">
      <div className="dark-content-container w-full">
        <div className="grid lg:grid-cols-2 lg:gap-x-40 gap-24 items-center">
          <div className="space-y-4">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-white leading-tight">
                <span className="whitespace-nowrap">FL LAMINATE FLOOR</span>
                <br />
                <span className="text-[#63a547]">HANDYMAN</span>
                <br />
                SERVICE
              </h1>
              <p className="body-large text-gray-300 max-w-xl">
                Transform your vision into reality with our award-winning construction services. We deliver exceptional
                quality, innovation, and craftsmanship for residential, commercial, and industrial projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="btn-primary group"
                onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}
              >
                View Our Work
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </Button>
              <Button
                className="btn-secondary"
                onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              >
                Get Free Quote
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              <div className="text-center">
                <Award className="mx-auto mb-2 text-[#63a547]" size={32} />
                <div className="heading-3 text-white">50+</div>
                <div className="body-small text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <Clock className="mx-auto mb-2 text-[#63a547]" size={32} />
                <div className="heading-3 text-white">15+</div>
                <div className="body-small text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <Users className="mx-auto mb-2 text-[#63a547]" size={32} />
                <div className="heading-3 text-white">100%</div>
                <div className="body-small text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square border border-gray-800 relative overflow-hidden">
              <img src="/logo.png" alt="Premium Construction Project" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white font-semibold text-lg">Latest Project</div>
                <div className="text-gray-300">Luxury Residential Complex</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

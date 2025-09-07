import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Award, Clock, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="dark-container min-h-screen flex items-center pt-20"
      aria-label="Hero section"
    >
      <div className="dark-content-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-x-40 items-center">
          {/* Copy + CTA */}
          <div className="space-y-5 sm:space-y-6">
            <div className="space-y-4 sm:space-y-5">
              <h1 className="text-white font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl text-center lg:text-left">
                <span className="whitespace-nowrap">FL LAMINATE FLOOR</span>
                <br />
                <span className="text-[#63a547]">HANDYMAN</span>
                <br />
                <span>SERVICE</span>
              </h1>
              <p className="text-gray-300 max-w-xl text-base sm:text-lg text-justify">
                Transform your vision into reality with our award-winning construction services. We deliver exceptional
                quality, innovation, and craftsmanship for residential, commercial, and industrial projects.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                className="btn-primary group w-full sm:w-auto justify-center"
                onClick={() =>
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Our Work
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </Button>
              <Button
                className="btn-secondary w-full sm:w-auto justify-center"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get Free Quote
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-800">
              <div className="text-center">
                <Award className="mx-auto mb-2 text-[#63a547]" size={32} />
                <div className="heading-3 text-white text-2xl">50+</div>
                <div className="body-small text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <Clock className="mx-auto mb-2 text-[#63a547]" size={32} />
                <div className="heading-3 text-white text-2xl">15+</div>
                <div className="body-small text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <Users className="mx-auto mb-2 text-[#63a547]" size={32} />
                <div className="heading-3 text-white text-2xl">100%</div>
                <div className="body-small text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden border border-gray-800 rounded-2xl shadow-sm aspect-[4/3] sm:aspect-square">
              <img
                src="/logo.webp"
                alt="Premium Construction Project"
                className="w-full h-full object-cover object-top sm:object-center"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-6">
                <div className="text-white font-semibold text-base sm:text-lg">Latest Project</div>
                <div className="text-gray-300 text-sm sm:text-base">Luxury Residential Complex</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
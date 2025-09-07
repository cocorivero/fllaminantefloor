import React from "react";
import { Building, Mail, Phone } from "lucide-react";
import { info } from "../data/mock";

export const Footer = () => {
  const serviceCols = Array.from({ length: Math.ceil(info.services.length / 5) }, (_, i) =>
    info.services.slice(i * 5, i * 5 + 5)
  );

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="dark-content-container py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <Building className="text-[#63a547] mr-3" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white">HANDYMAN</h3>
                <span className="text-2xl font-bold text-[#63a547]">SERVICE</span>
              </div>
            </div>
            <p className="body-medium text-gray-300">
              Leading construction company delivering premium quality projects with exceptional craftsmanship and
              innovative solutions.
            </p>
          </div>

          <div>
            <h4 className="heading-3 text-white mb-6">Services</h4>

            <div
              className="
                grid grid-cols-1 sm:grid-cols-2
                [@supports(display:grid)]:gap-8
              "
            >
              {serviceCols.map((col, colIdx) => (
                <ul key={colIdx} className="space-y-3">
                  {col.map((service, idx) => (
                    <li key={`${colIdx}-${idx}`}>
                      <a href="#" className="body-medium text-gray-400 hover:text-[#63a547] transition-colors">
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div>
            <h4 className="heading-3 text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-[#63a547]" size={16} />
                <a
                  href={`tel:${info.phone}`}
                  className="body-small text-gray-300 hover:text-[#63a547] transition-colors"
                >
                  {info.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#63a547]" size={16} />
                <a
                  href={`mailto:${info.email}`}
                  className="body-small text-gray-300 hover:text-[#63a547] transition-colors"
                >
                  {info.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-gray-800 pt-8">
          <p className="body-small text-gray-400">© {new Date().getFullYear()} Coco&apos;s Dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Play, X, Calendar, DollarSign } from 'lucide-react';
import { mockProjects } from '../data/mock';

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Renovation'];
  
  const filteredProjects = filter === 'All' 
    ? mockProjects 
    : mockProjects.filter(project => project.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="portfolio" className="dark-container py-24">
      <div className="dark-content-container">
        <div className="text-center mb-16">
          <h2 className="display-large text-white mb-4">
            OUR <span className="text-[#63a547]">PORTFOLIO</span>
          </h2>
          <p className="body-large text-gray-300 max-w-3xl mx-auto">
            Explore our exceptional construction projects spanning residential, commercial, 
            and industrial sectors. Each project showcases our commitment to quality and innovation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={filter === category ? "btn-primary" : "btn-secondary"}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="dark-grid">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="bg-gray-900 border-gray-800 overflow-hidden group cursor-pointer hover:border-[#63a547]/50 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    className="btn-primary"
                    onClick={() => openModal(project)}
                  >
                    <Play size={16} className="mr-2" />
                    View Details
                  </Button>
                </div>
                <Badge className="absolute top-4 right-4 bg-[#63a547] text-black">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="heading-2 text-white mb-2">{project.title}</h3>
                <p className="body-medium text-gray-300 mb-4">{project.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={16} className="mr-1" />
                    {project.budget}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 border border-gray-800 max-w-4xl w-full max-h-screen overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="display-medium text-white mb-2">{selectedProject.title}</h3>
                    <Badge className="bg-[#00FFD1] text-black">{selectedProject.category}</Badge>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={closeModal}
                    className="text-white hover:text-[#63a547]"
                  >
                    <X size={24} />
                  </Button>
                </div>

                <div className="aspect-video mb-6 bg-gray-800">
                  <iframe
                    src={selectedProject.video}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={selectedProject.title}
                  ></iframe>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="heading-3 text-white mb-4">Project Details</h4>
                    <p className="body-medium text-gray-300 mb-6">{selectedProject.description}</p>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Duration:</span>
                        <span className="text-white">{selectedProject.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Budget:</span>
                        <span className="text-white">{selectedProject.budget}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Category:</span>
                        <span className="text-white">{selectedProject.category}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full aspect-square object-cover border border-gray-800"
                    />
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800">
                  <Button 
                    className="btn-primary w-full"
                    onClick={() => {
                      closeModal();
                      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Start Similar Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
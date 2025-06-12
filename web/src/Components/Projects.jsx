import React from "react";
import { ExternalLinkIcon } from "lucide-react";
import { StaticWebsites } from "../Components/PagesProjects/StaticWebsites";
import { TresDWeb } from "../Components/PagesProjects/TresDWeb";
import { ECommerce } from "../Components/PagesProjects/ECommerce";
import { CustomWebApp } from "../Components/PagesProjects/CustomWebApp";
import { Link } from "react-router-dom";
import "./Projects.css";

import tresd from "../assets/img/3d.jpg";
import webstatic from "../assets/img/webstatic.jpg";
import ecom from "../assets/img/ecom.jpg";
import custom from "../assets/img/custom.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Statics Websites",
      description:
        "Professional and elegant websites. Ideal for businesses or individuals looking for a modern, informative, and easy-to-navigate online presence.",
      image: webstatic,
      tags: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "User-Friendly",
        "Custom Layouts",
      ],
      path: "/projects/static-websites",
      component: StaticWebsites,
    },
    {
      title: "3D Websites",
      description:
        "Immersive and interactive websites with 3D elements, designed to captivate users and provide a unique browsing experience. Perfect for creative portfolios, events, or tech-driven brands.",
      image: tresd,
      tags: [
        "3D Experience",
        "Interactive",
        "Responsive",
        "Creative Design",
        "Brand Identity",
      ],
      path: "/projects/3d-web",
      component: TresDWeb,
    },
    {
      title: "E-commerce",
      description:
        "Online stores, featuring secure payments, product management, and a smooth shopping experience across all devices.",
      image: ecom,
      tags: [
        "Secure Payments",
        "Product Management",
        "Mobile-Friendly",
        "SEO Ready",
        "Fast Performance",
      ],
      path: "/projects/ecommerce",
      component: ECommerce,
    },
    {
      title: "Custom Web Application",
      description:
        "Custom-built web applications tailored to your specific business needs. From dashboards to internal tools, these apps are designed to improve workflow, automate processes, and deliver real value.",
      image: custom,
      tags: [
        "Tailored Functionality",
        "Automation",
        "Scalable",
        "Secure",
        "User-Centric Design",
      ],
      path: "/projects/custom-web-app",
      component: CustomWebApp,
    },
  ];

  return (
    <section id="projects" className="!py-20 bg-black w-full">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="!text-3xl !md:text-5xl !font-bold !mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and passion for
            creating innovative digital solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-white/30 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 ${
                    project.title === "3D Websites" ? "translate-up" : ""
                  } ${project.title === "E-commerce" ? "translate-up2" : ""}`}
                />
              </div>
              <div className="!p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1 text-sm text-white hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLinkIcon size={16} /> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-sm text-white hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon size={16} /> Source Code
                    </a>
                  )}
                </div>

                <div className="mt-12 text-center !py-4">
                  <Link
                    to={project.path}
                    className="!px-10 !py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors inline-flex"
                  >
                    See more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

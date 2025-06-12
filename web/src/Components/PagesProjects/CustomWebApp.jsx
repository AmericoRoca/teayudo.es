import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { NavbarDos } from "./NavbarDos";
import { FooterDos } from "./FooterDos";
import ComingSoon from "../../assets/ComingSoon/ComingSoon.svg";

export const CustomWebApp = () => {
  const categories = [
    {
      id: "cooming-soon-1",
      title: "Social Media Lav",
      description: "Cooming Soon",
      image: ComingSoon,
      liveUrl: "/",
    },
    {
      id: "cooming-soon-2",
      title: "CookHub",
      description: "Cooming Soon",
      image: ComingSoon,
      liveUrl: "/",
    },
    {
      id: "cooming-soon-3",
      title: "Cooming Soon3",
      description: "Cooming Soon",
      image: ComingSoon,
      liveUrl: "/",
    },
    {
      id: "cooming-soon-4",
      title: "Cooming Soon4",
      description: "Cooming Soon",
      image: ComingSoon,
      liveUrl: "/",
    },
  ];
  return (
    <>
      <NavbarDos />
      <main className="!pt-20 !w-full bg-black">
        {/* Hero Section */}
        <section className="!py-20 !bg-zinc-900 !border-b !border-zinc-800">
          <div className="!container !mx-auto !px-6">
            <div className="!max-w-3xl">
              <h1 className="!text-4xl !md:text-6xl !font-bold !mb-6 text-white">
                Custom Web Applications
              </h1>
              <p className="!text-gray-400 !text-xl">
              Browse a range of tailor-made web applications developed to solve specific business challenges through smart design and robust functionality. This section highlights projects built with technologies like React, Node.js, Firebase, and Next.js, focusing on scalability, security, and performance. From internal tools to customer-facing platforms, each application is crafted to deliver a seamless experience and meet unique client requirements.
              </p>
            </div>
          </div>
        </section>
        {/* Categories Grid */}
        <section className="!py-20 bg-black">
          <div className="!container !mx-auto !px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={category.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg border border-zinc-800 hover:border-white/30 transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t !from-black/90 !via-black/60 to-transparent">
                    <div className="!absolute !bottom-0 !p-6 !w-full">
                      <div className="!flex !justify-between !items-end">
                        <div>
                          <h2 className="!text-2xl !font-bold !mb-2">
                            {category.title}
                          </h2>
                          <p className="!text-gray-400 !mb-4">
                            {category.description}
                          </p>
                        </div>
                        <ArrowRightIcon
                          size={24}
                          className="!text-white !opacity-50 !group-hover:opacity-100 !transform !group-hover:translate-x-1 !transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterDos />
    </>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { NavbarDos } from "./NavbarDos";
import { FooterDos } from "./FooterDos";
import ComingSoon from "../../assets/ComingSoon/ComingSoon.svg";
import TeresaWebsite from "../../assets/img/teresa-website.png";
import CaravaningWebsite from "../../assets/img/caravaning.jpg";
import CaravaningGan from "../../assets/img/caravaning-gan.png";
import Check from "../../assets/img/check.png";

export const StaticWebsites = () => {
  const categories = [
    {
      id: "teresa-hernandez-psicologia",
      title: "Teresa Hernandez Psicología",
      description: "Professional website for psychological consultation",
      image: TeresaWebsite,
      liveUrl: "https://teresahernandezpsicologia.es",
    },
    {
      id: "caravaning-gan",
      title: "Caravaning-Gan",
      description: "Caravan workshop website",
      image: CaravaningGan,
      liveUrl: "https://caravaning-gan.es",
    },
    {
      id: "caravaning-check",
      title: "Caravaning Check",
      description: "Professional motorhome reviewer website",
      image: Check,
      liveUrl: "https://caravaningcheck.es",
    },
    {
      id: "cooming-soon-4",
      title: "Te ayudo",
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
                Static Websites
              </h1>
              <p className="!text-gray-400 !text-xl">
              Perfect for businesses and individuals looking for a simple, fast, and effective online presence.

Static websites are ideal for those who need a clean, straightforward website without the complexity of constant updates or dynamic content. Whether you're a small business, a freelancer, or an individual wanting to showcase your portfolio, static websites provide a fast and reliable solution for your digital presence.

They are designed to be lightweight, easy to maintain, and deliver a seamless user experience. If you're looking for a professional yet simple website that gets the job done, static websites are the way to go.
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
                      className="!w-full !h-full object-contain group-hover:scale-105 transition-transform duration-700"
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

import React from "react";
import { BriefcaseIcon, GraduationCapIcon, AwardIcon } from "lucide-react";
export const About = () => {
  return (
    <section id="about" className="!py-20 bg-[#F2E1D0] w-full">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="!text-3xl md:text-5xl !font-bold !mb-6">About Me</h2>
            <p className="text-gray-300 mb-6 text-lg">
              I am a passionate Fullstack Developer with hands-on experience in
              creating dynamic, high-performance web applications using
              frameworks like React, and Laravel. I have a strong foundation in
              both frontend and backend technologies, coupled with expertise in
              managing relational (SQL) and non-relational (NoSQL) databases. My
              proficiency with version control systems like GIT ensures smooth
              collaboration and efficient project management.
            </p>
            <p className="text-gray-400 mb-8">
              I thrive in fast-paced environments where I can continuously learn
              and push my limits. Whether working independently or as part of a
              team, I embrace agile methodologies to deliver high-quality,
              scalable solutions. My education is a blend of formal academic
              training and self-taught skills, driven by my deep curiosity and
              desire to improve constantly. I'm eager to contribute to
              innovative projects and am always looking to learn new
              technologies and approaches. I’m excited to take on new
              challenges, grow as a developer, and bring my best to every
              project.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-black rounded-md">
                  <BriefcaseIcon size={24} className="text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Professional Experience
                  </h3>
                  <p className="text-gray-400">
                    5+ years building web applications and digital solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-black rounded-md">
                  <GraduationCapIcon size={24} className="text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Education</h3>
                  <p className="text-gray-400">
                    Bachelor's in Computer Science, Advanced Web Development
                    Certification
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-black rounded-md">
                  <AwardIcon size={24} className="text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Achievements</h3>
                  <p className="text-gray-400">
                  Successfully delivered multiple client and personal projects, ranging from e-commerce platforms to custom web apps, using technologies like React, Laravel, and Three.js.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-zinc-800 to-black rounded-lg overflow-hidden">
              <img
                src="../src/assets/img/Fotoperfil.png"
                alt="Developer Portrait"
                className="w-full h-full object-cover mix-blend-luminosity opacity-80"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-black p-4 rounded-lg border border-zinc-800 w-48">
              <div className="text-sm text-gray-400 mb-1">
                Currently working with
              </div>
              <div className="font-semibold">
                React, Three.js, Node.js & GraphQL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

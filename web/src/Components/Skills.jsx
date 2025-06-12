import React from 'react'
import {
  CodeIcon,
  ServerIcon,
  LayoutIcon,
  DatabaseIcon,
  BrainIcon,
  GlobeIcon,
} from 'lucide-react'
export const Skills = () => {
  const skills = [
    {
      title: 'Frontend Development',
      icon: <LayoutIcon size={36} />,
      description:
        'Creating responsive, accessible, and performant user interfaces with modern frameworks and tools.',
      techs: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js'],
    },
    {
      title: 'Backend Development',
      icon: <ServerIcon size={36} />,
      description:
        'Building robust server-side applications with efficient APIs and services.',
      techs: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL'],
    },
    {
      title: 'Database Management',
      icon: <DatabaseIcon size={36} />,
      description:
        'Designing and optimizing database structures for performance and scalability.',
      techs: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
    },
    {
      title: 'Web Performance',
      icon: <GlobeIcon size={36} />,
      description:
        'Optimizing web applications for speed, accessibility, and user experience.',
      techs: ['Lazy Loading', 'Code Splitting', 'Performance Metrics', 'SEO'],
    },
    {
      title: 'Problem Solving',
      icon: <BrainIcon size={36} />,
      description:
        'Analyzing complex problems and developing elegant, efficient solutions.',
      techs: ['Algorithms', 'Data Structures', 'System Design', 'Debugging'],
    },
    {
      title: 'Clean Code',
      icon: <CodeIcon size={36} />,
      description:
        'Writing maintainable, well-documented, and testable code following best practices.',
      techs: ['SOLID Principles', 'Design Patterns', 'Code Reviews', 'Testing'],
    },
  ]
  return (
    <section id="skills" className="!py-20 bg-zinc-900 w-full">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="!text-3xl !md:text-5xl !font-bold !mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My expertise spans across various technologies and methodologies,
            allowing me to tackle diverse challenges in software development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-black !p-8 rounded-lg border border-zinc-800 hover:border-white/30 transition-all duration-300"
            >
              <div className="mb-4 text-gray-300">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-gray-400 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

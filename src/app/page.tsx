"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hello, Welcome to my portfolio";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["TypeScript", "JavaScript", "Python", "PHP", "Java", "C"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Next.js", "React.js", "Node.js", "Django", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Databases & ORM",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Docker", "AWS", "Google Cloud", "Git", "Figma", "Jira", "Postman"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Expense Tracker",
      year: "2025 - Present",
      description: "Personal finance management wep application with expense tracking, categorization and data visualization. Buit with Next.js 16, PostgreSQL, Prisma and Recharts. Implement RESTful API, interactivedashboard and filtering system with responsive design.",
      tags: ["Next.js", "PostgreSQL", "RESTful API", "Prisma", "Recharts"],
      github: "https://github.com/aomati145/Expense-Tracker.git"
    },
    {
      id: 2,
      title: "Kinkhaw Rueyang",
      year: "2024",
      description: "Online food ordering web application with dual interfaces for merchants and customers (non-delivery system). Built with HTML, Tailwind CSS, Django, and PostgreSQL. Implemented menu management, order processing workflow, and user authentication systems.",
      tags: ["Django", "PostgreSQL", "Tailwind CSS", "HTML"],
      github: "https://github.com/Phuwit1/serverside-project"
    },
    {
      id: 3,
      title: "Eldercare",
      year: "2024",
      description: "Web platform connecting elderly individuals with caregivers using Django and PostgreSQL. Implemented role-based user systems, appointment booking with status tracking, and profile management. Deployed on Google Cloud Platform with Docker containerization.",
      tags: ["Django", "PostgreSQL", "Docker", "Google Cloud"],
      github: "https://github.com/CosmoGuy112/Eldercare"
    },
    {
      id: 4,
      title: "FlexiStock",
      year: "2024",
      description: "Warehouse management system using Microservices Architecture with Node.js, React.js, and PostgreSQL. Implemented ML-based inventory forecasting with Prophet via FastAPI, real-time messaging with RabbitMQ, and Google Maps integration.",
      tags: ["Node.js", "React.js", "PostgreSQL", "FastAPI", "RabbitMQ", "Google Maps"],
      github: "https://github.com/aomati145/Warehouse.git",
    },
    
  ];

  return (
    <main className="bg-zinc-950 text-white min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="fixed inset-0 pointer-events-none opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="max-w-7xl w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-shrink-0 relative group">
              <Image
                src="/Me.png"
                alt="Atikun Pidsayo"
                width={400}
                height={400}
                className="rounded-full border border-white/10 shadow-2xl group-hover:border-blue-500/50 transition-all duration-300"
                style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
                priority
              />
            </div>

            <div className="text-center md:text-left space-y-6 flex-1">
              <div className="text-sm md:text-base text-zinc-500 font-mono min-h-[24px]">
                {displayedText}
                <span className="animate-pulse">|</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                  Atikun Pidsayo
                </h1>
                <p className="text-lg md:text-xl text-blue-400">
                  Information Technology Student
                </p>
              </div>

              <div className="inline-block px-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
                <p className="text-sm text-zinc-400">
                  B.Sc. (Information Technology) at <span className="text-blue-400">King Mongkut's Institute of Technology Ladkrabang</span>
                </p>
              </div>

              <p className="text-base text-zinc-400 max-w-2xl leading-relaxed">
                Passionate about building modern web applications with expertise in{' '}
                <span className="text-blue-400">Next.js</span>,{' '}
                <span className="text-blue-400">Django</span>,{' '}
                <span className="text-blue-400">React</span>, and{' '}
                <span className="text-blue-400">Node.js</span>.
                Experienced in developing full-stack solutions from tax optimization to healthcare platforms.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a
                  href="mailto:atikun145@gmail.com"
                  className="group px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-zinc-400 group-hover:text-blue-400 transition">📧</span>
                    <span className="text-zinc-300 group-hover:text-white transition">atikun145@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://github.com/aomati145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-zinc-300 group-hover:text-white transition">aomati145</span>
                  </div>
                </a>

                <div className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-zinc-400">📱</span>
                    <span className="text-zinc-300">093-101-2808</span>
                  </div>
                </div>

                <a
                  href="https://drive.google.com/file/d/1_c-Izxs6H9NmSEJv49jwvrYUKLx31sd6/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-zinc-300 group-hover:text-white transition">Resume</span>
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                >
                  <span>View Projects</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 hover:bg-white/10 transition-all"
              >
                <h3 className="text-lg font-semibold text-blue-400 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="projects" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 hover:bg-white/10 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                      {project.year}
                    </span>
                  </div>

                  
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors group/link"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="group-hover/link:underline">View on GitHub</span>
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

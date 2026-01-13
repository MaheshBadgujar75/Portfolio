import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, ArrowRight } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import SEO from "../components/SEO";
import { PROJECTS } from "../../contants";

const Projects: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(PROJECTS[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  // Get active project details
  const activeProject = PROJECTS.find((p) => p.id === activeId) || PROJECTS[0];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-dark text-slate-200 selection:bg-primary selection:text-white pb-20"
    >
      <SEO title="Projects" description="Archive of selected works." />

      {/* Header */}
      <div className="pt-32 pb-12 px-4 md:px-12 border-b border-white/10">
        <div className="flex items-end justify-between">
          <h1 className="text-[12vw] leading-[0.8] font-heading font-bold text-white tracking-tighter">
            WORK<span className="text-primary">.</span>
            <br />
            ARCHIVE
          </h1>
          <div className="hidden md:block text-right mb-4">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">
              Total Projects
            </div>
            <div className="text-4xl font-heading font-bold text-white">
              0{PROJECTS.length}
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-[100vw] mx-auto flex flex-col md:flex-row">
        {/* LEFT COLUMN: SCROLLABLE LIST */}
        <div className="w-full md:w-1/2 z-10 bg-dark relative">
          <div className="flex flex-col">
            {PROJECTS.map((project, index) => (
              <ProjectListItem
                key={project.id}
                project={project}
                index={index}
                isActive={activeId === project.id}
                setActiveId={setActiveId}
              />
            ))}
          </div>

          {/* Mobile Only Preview (Inline) */}
          <div className="md:hidden p-4 sticky bottom-0 bg-dark border-t border-white/10">
            <div className="aspect-video w-full overflow-hidden rounded-lg relative">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <a
                  href="#"
                  className="px-6 py-3 bg-primary text-white font-bold rounded-full text-sm uppercase tracking-widest"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: STICKY PREVIEW (Desktop Only) */}
        <div className="hidden md:block w-1/2 h-[80vh] sticky top-[20vh] right-0 overflow-hidden border-l border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="absolute inset-0 bg-black/20 z-10"></div>

              {/* Image */}
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover grayscale opacity-60"
              />

              {/* Overlay Details */}
              <div className="absolute inset-0 z-20 p-12 flex flex-col justify-between bg-gradient-to-t from-black via-transparent to-transparent">
                <div className="flex justify-end gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <LuGithub size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 border border-white/20 rounded-full text-xs font-mono text-slate-300 bg-black/50 backdrop-blur-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h2 className="text-4xl font-heading font-bold text-white mb-4 leading-tight">
                      {activeProject.description}
                    </h2>
                    <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm cursor-pointer group w-fit">
                      Read Case Study{" "}
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-2 transition-transform"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none z-30 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20"></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

interface ProjectListItemProps {
  project: any;
  index: number;
  isActive: boolean;
  setActiveId: (id: string) => void;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({
  project,
  index,
  isActive,
  setActiveId,
}) => {
  return (
    <div
      onMouseEnter={() => setActiveId(project.id)}
      className={`group relative py-12 px-4 md:px-12 border-b border-white/10 cursor-pointer transition-colors duration-500 ${isActive ? "bg-white/5" : "hover:bg-white/5"
        }`}
    >
      <div className="flex items-baseline justify-between relative z-10">
        <div className="flex items-baseline gap-6 md:gap-12">
          <span
            className={`font-mono text-xs md:text-sm transition-colors duration-300 ${isActive ? "text-primary" : "text-slate-600"
              }`}
          >
            0{index + 1}
          </span>
          <h2
            className={`text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter transition-all duration-300 ${isActive
              ? "text-white translate-x-4"
              : "text-slate-500 group-hover:text-white"
              }`}
          >
            {project.title}
          </h2>
        </div>
        <ArrowUpRight
          className={`transition-all duration-300 ${isActive
            ? "text-primary opacity-100 rotate-45"
            : "text-slate-700 opacity-0 group-hover:opacity-100"
            }`}
          size={32}
        />
      </div>

      {/* Category Label (Hidden by default, shown on active) */}
      <div
        className={`mt-4 ml-[calc(1.5rem+12px)] md:ml-[calc(3rem+24px)] overflow-hidden transition-all duration-500 ${isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <span className="text-xs font-mono text-primary uppercase tracking-widest border border-primary/30 px-2 py-1 rounded bg-primary/10">
          {project.category}
        </span>
      </div>
    </div>
  );
};

export default Projects;

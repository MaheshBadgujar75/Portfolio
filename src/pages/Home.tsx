import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

import SEO from "../components/SEO";
import { PROJECTS, SKILLS } from "../../contants";

interface Project {
  id: string | number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
}

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="bg-dark min-h-screen text-slate-200 selection:bg-primary selection:text-white"
    >
      <SEO title="Home" description="Creative Full Stack Developer Portfolio" />

      <HeroSection />
      <IntroSection />
      <StackedProjects />
      <TechTicker />
      <CTASection />
    </div>
  );
};

// --- SLICED TEXT COMPONENT ---
const SlicedText = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <div className={`relative group cursor-none ${className}`}>
      {/* Base Text (Hidden placeholder for layout) */}
      <span className="opacity-0">{children}</span>

      {/* Center Reveal Layer (The Core) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
        <span className="text-primary font-heading font-black tracking-tighter blur-[2px] scale-110 select-none">
          {children}
        </span>
      </div>

      {/* Top Half */}
      <div className="absolute top-0 left-0 w-full h-[50%] overflow-hidden transition-transform duration-500 ease-[0.23,1,0.32,1] group-hover:-translate-x-2 group-hover:-translate-y-1 z-10">
        <span className="absolute top-0 left-0 text-white font-heading font-black tracking-tighter">
          {children}
        </span>
      </div>

      {/* Bottom Half */}
      <div className="absolute bottom-0 left-0 w-full h-[50%] overflow-hidden transition-transform duration-500 ease-[0.23,1,0.32,1] group-hover:translate-x-2 group-hover:translate-y-1 z-10">
        <span className="absolute bottom-0 left-0 text-white font-heading font-black tracking-tighter">
          {children}
        </span>
      </div>

      {/* Decorative Line (Appears on Split) */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 z-20"></div>
    </div>
  );
};

// --- HERO SECTION ---
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4 pt-20">
      {/* Background Abstract */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center h-full">
        {/* Row 1: Full Stack + Name */}
        <motion.div
          style={{ x: y1 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-white/10 pb-4 mb-4 md:mb-8 md:pb-8"
        >
          <div className="overflow-visible py-2">
            <SlicedText className="text-[13vw] md:text-[10vw] leading-none">
              FULL STACK
            </SlicedText>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-4 md:mt-0 md:text-right md:mb-2"
          >
            <div className="flex items-center gap-3 md:justify-end mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-200 leading-none tracking-tight mix-blend-difference">
              MAHESH
              <br />
              <span className="text-white">BADGUJAR</span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Row 2: Description + Developer */}
        <motion.div
          style={{ x: y2 }}
          className="flex flex-col md:flex-row items-end md:items-start justify-between"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="hidden md:block max-w-sm mt-4 order-2 md:order-1"
          >
            <p className="text-slate-400 leading-relaxed text-sm md:text-base mb-4">
              Crafting robust, scalable web ecosystems and intuitive mobile
              experiences with modern architecture.
            </p>
            <div className="flex gap-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
              <span>// Based in India</span>
            </div>
          </motion.div>

          <div className="overflow-hidden order-1 md:order-2 w-full md:w-auto text-right">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="text-[13vw] md:text-[10vw] font-heading font-bold leading-none tracking-tighter text-white/10"
            >
              DEVELOPER
            </motion.h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- INTRO SECTION ---
const IntroSection = () => {
  return (
    <section className="py-24 md:py-40 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/4 sticky top-32">
          <span className="block w-2 h-2 bg-primary mb-4 rounded-full shadow-[0_0_10px_#FF0033]"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            The Mission
          </span>
        </div>
        <div className="md:w-3/4">
          <p className="text-3xl md:text-5xl font-heading font-medium leading-[1.2] text-slate-300 mb-12">
            I help companies and startups build{" "}
            <span className="text-white">digital products</span> that matter.
            From complex{" "}
            <span className="text-primary">backend architectures</span> to fluid{" "}
            <span className="text-primary">frontend interfaces</span>, I handle
            the full lifecycle of software development.
          </p>

          {/* Image Placeholder */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 relative group mb-12"
          >
            {/* Overlay that disappears on hover */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />

            {/* Image */}
            <img
              src="/MissionImage.png"
              alt="Digital Product Lab Team"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />

            {/* Optional Label */}
            <div className="absolute bottom-6 left-6 z-20 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-xs font-mono text-white uppercase tracking-widest">
                Digital Product Lab
              </span>
            </div>
          </motion.div>

          <div>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-primary transition-colors"
            >
              <span className="uppercase tracking-widest text-sm font-bold group-hover:text-primary transition-colors">
                More about me
              </span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform group-hover:text-primary"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- STACKED PROJECTS SECTION ---
const StackedProjects = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Type guard to ensure PROJECTS is an array of Project type
  const projects: Project[] = PROJECTS as Project[];

  return (
    <section ref={container} className="relative px-4 pb-20 max-w-7xl mx-auto">
      <div className="mb-20 md:mb-32">
        <h2 className="group text-[10vw] md:text-[6vw] font-heading font-bold text-white/5 leading-none w-fit cursor-pointer">
          <span className="transition-all duration-300 group-hover:text-primary">
            SELECTED WORKS
          </span>
          <span className="block w-0 h-[2px] bg-white/40 transition-all duration-300 group-hover:w-full"></span>
        </h2>
      </div>

      {projects.slice(0, 4).map((project, i) => {
        const targetScale = 1 - (projects.slice(0, 4).length - i) * 0.05;
        return (
          <Card
            key={project.id}
            i={i}
            project={project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}

      <div className="flex justify-center mt-20">
        <Link
          to="/projects"
          className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-primary hover:border-primary transition-all duration-300"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

interface CardProps {
  i: number;
  project: Project;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  i,
  project,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="relative flex flex-col md:flex-row bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden w-full h-[60vh] md:h-[70vh] shadow-2xl origin-top"
      >
        {/* Content Side */}
        <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-between relative z-10 bg-zinc-900/80 backdrop-blur-sm md:bg-zinc-900">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono text-primary border border-primary/30 px-2 py-1 rounded">
                0{i + 1}
              </span>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                {project.category}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              {project.title}
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              {project.description}
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.slice(0, 3).map((tech: string) => (
                <span
                  key={tech}
                  className="text-[10px] uppercase tracking-wider text-slate-500 border border-white/10 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest hover:text-primary transition-colors"
            >
              See Case Study
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={16}
              />
            </Link>
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full md:w-3/5 h-full relative overflow-hidden">
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-50"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

// --- TECH TICKER ---
const TechTicker = () => {
  // Type guard for SKILLS
  const skills = SKILLS as {
    frontend: string[];
    backend: string[];
    [key: string]: string[];
  };

  const allSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.frontend,
    ...skills.backend,
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-black overflow-hidden relative">
      <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-20 pointer-events-none"></div>
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-16 items-center pr-16"
        >
          {allSkills.map((skill, i) => (
            <div key={`${skill}-${i}`} className="flex items-center gap-4">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-4xl md:text-6xl font-heading font-bold text-white/10 hover:text-white transition-colors cursor-default uppercase">
                {skill}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- CTA SECTION ---
const CTASection = () => {
  return (
    <section className="py-32 px-4 flex flex-col items-center justify-center bg-zinc-900/30 relative overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="text-4xl md:text-7xl font-heading font-bold text-white mb-8">
          HAVE AN IDEA?
        </h2>
        <p className="text-slate-400 text-lg md:text-xl mb-12">
          I'm currently available for freelance projects and open to full-time
          opportunities.
        </p>
        <Link
          to="/contact"
          className="group relative inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-bold rounded-full overflow-hidden transition-transform active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-2">
            START A PROJECT{" "}
            <ArrowRight
              size={20}
              className="group-hover:rotate-[-45deg] transition-transform duration-300"
            />
          </span>
          <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 mix-blend-screen"></div>
        </Link>
      </div>
    </section>
  );
};

export default Home;

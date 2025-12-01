import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Download,
  Terminal,
  Cpu,
  Globe,
  Zap,
  Briefcase,
  Award,
  Code2,
  ArrowRight,
} from "lucide-react";
import SEO from "../components/SEO";
import { SKILLS } from "../../contants";

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const yText = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const opacityText = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleImg = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-dark text-slate-300 selection:bg-primary selection:text-white overflow-hidden relative"
    >
      <SEO title="About" description="The architect behind the code." />

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/5 rounded-full blur-[120px] animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      {/* --- SECTION 1: THE HOOK (Parallax Hero) --- */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="relative z-10 text-center px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
              System Identity
            </span>
          </div>
          <h1 className="text-[15vw] leading-[0.8] font-heading font-black text-white tracking-tighter mix-blend-difference">
            THE
            <br />
            ARCHITECT
          </h1>
        </motion.div>

        {/* Hero Image (Absolute Centered) */}
        <motion.div
          style={{ scale: scaleImg }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[30vw] aspect-[3/4] z-0 opacity-40 md:opacity-100 mix-blend-luminosity md:mix-blend-normal pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10"></div>
          <img
            src="/AboutImage.jpg"
            alt="Mahesh Badgujar"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

        <div className="absolute bottom-10 left-0 right-0 text-center z-20">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest animate-bounce">
            Scroll to Decrypt
          </p>
        </div>
      </section>

      {/* --- SECTION 2: THE NARRATIVE --- */}
      <section className="py-32 px-4 max-w-4xl mx-auto relative z-10">
        <div className="grid md:grid-cols-[100px_1fr] gap-12">
          <div className="hidden md:flex flex-col items-center sticky top-32 h-fit">
            <div className="w-px h-24 bg-gradient-to-b from-transparent to-primary"></div>
            <div className="w-3 h-3 border border-primary rounded-full bg-dark z-10"></div>
            <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent"></div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-8">
              01 // The Origin
            </h2>
            <p className="text-2xl md:text-4xl leading-relaxed font-heading font-medium text-slate-300">
              I don't just write code; I{" "}
              <span className="text-white bg-primary/20 px-1">
                engineer solutions
              </span>
              . My journey began with a curiosity for how things work, which
              evolved into a passion for building
              <span className="text-white border-b border-white/20">
                {" "}
                scalable digital ecosystems
              </span>
              .
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-slate-400 mt-8 font-light">
              Today, I operate at the intersection of design and logic.
              Specializing in the{" "}
              <strong className="text-white">MERN stack</strong> and{" "}
              <strong className="text-white">Mobile Architecture</strong>, I
              help businesses transform complex requirements into seamless,
              user-centric applications.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <StatCard value="2.5+" label="Years Exp." />
              <StatCard value="35+" label="Projects" />
              <StatCard value="24/7" label="Support" />
              <StatCard value="100%" label="Commitment" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE ARSENAL (Skills) --- */}
      <section className="py-32 bg-zinc-900/30 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-20 right-20 text-[20vw] font-black text-white/5 leading-none pointer-events-none select-none">
            SKILLS
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="mb-20">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
              02 // The Arsenal
            </h2>
            <h3 className="text-5xl md:text-7xl font-heading font-bold text-white">
              TECH STACK
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillColumn
              icon={<Globe className="text-primary" size={24} />}
              title="Frontend"
              skills={SKILLS.frontend}
            />
            <SkillColumn
              icon={<Terminal className="text-primary" size={24} />}
              title="Backend"
              skills={SKILLS.backend}
            />
            <SkillColumn
              icon={<Cpu className="text-primary" size={24} />}
              title="Mobile"
              skills={SKILLS.mobile}
            />
            <SkillColumn
              icon={<Zap className="text-primary" size={24} />}
              title="Automation"
              skills={SKILLS.automation}
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 5: DOWNLOAD --- */}
      <section className="py-20 text-center border-t border-white/10 bg-black">
        <h2 className="text-3xl font-heading font-bold text-white mb-8">
          REQUIRE FULL ACCESS?
        </h2>
        <a
          href="#"
          className="group inline-flex items-center gap-4 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          <Download size={20} />
          <span>DOWNLOAD RESUME</span>
        </a>
      </section>
    </div>
  );
};

// --- SUB COMPONENTS ---

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-primary/50 transition-colors group">
    <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors">
      {value}
    </div>
    <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
      {label}
    </div>
  </div>
);

const SkillColumn = ({
  icon,
  title,
  skills,
}: {
  icon: any;
  title: string;
  skills: string[];
}) => (
  <div className="group p-8 bg-zinc-900/50 border border-white/5 hover:border-primary hover:bg-zinc-900 transition-all duration-500 rounded-xl relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      {icon}
    </div>
    <div className="mb-6 flex items-center gap-3">
      <div className="p-2 bg-white/5 rounded-lg text-primary">{icon}</div>
      <h4 className="text-xl font-bold text-white">{title}</h4>
    </div>
    <div className="space-y-3">
      {skills.map((skill, i) => (
        <div
          key={i}
          className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-200 transition-colors"
        >
          <span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span>
          {skill}
        </div>
      ))}
    </div>
  </div>
);

const TimelineItem = ({
  year,
  title,
  company,
  desc,
  align,
}: {
  year: string;
  title: string;
  company: string;
  desc: string;
  align: "left" | "right";
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
      align === "left" ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* Spacer Side */}
    <div className="hidden md:block md:w-1/2"></div>

    {/* Center Node */}
    <div className="absolute left-[10px] md:left-1/2 top-0 -translate-x-1/2 z-10">
      <div className="w-5 h-5 bg-dark border-2 border-primary rounded-full shadow-[0_0_15px_#FF0033]"></div>
    </div>

    {/* Content Side */}
    <div
      className={`md:w-1/2 pl-12 md:pl-0 ${
        align === "right" ? "md:pl-16" : "md:pr-16 md:text-right"
      }`}
    >
      <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-primary font-bold mb-4">
        {year}
      </span>
      <h4 className="text-3xl font-heading font-bold text-white mb-1">
        {title}
      </h4>
      <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
        {company}
      </div>
      <p className="text-slate-400 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default About;

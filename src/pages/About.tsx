import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Globe, Download } from "../components/Icons";
import SEO from "../components/SEO";
import { SKILLS } from "../../contants";

const About: React.FC = () => {
  return (
    <div className="bg-dark text-slate-300 selection:bg-primary selection:text-white font-sans overflow-x-hidden">
      <SEO title="About" description="The story behind the code." />

      {/* Background Noise */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <CinematicHero />
      <EditorialBio />
      <ChaosSkills />
    </div>
  );
};

// --- 1. HERO: CINEMATIC SIDE-BY-SIDE ---
const CinematicHero = () => {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  // Parallax effects
  const xLeft = useTransform(scrollY, [0, 500], [0, -50]);
  const xRight = useTransform(scrollY, [0, 500], [0, 50]);
  const yBottom = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden pt-20">
      <div className="relative z-10 w-full max-w-[95vw] mx-auto flex flex-col items-center justify-center min-h-[80vh]">
        {/* Top Row: FULL - IMAGE - STACK */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:gap-8">
          {/* Left: FULL */}
          <motion.div
            style={{ x: xLeft }}
            className="order-2 md:order-1 mix-blend-difference text-white"
          >
            <RevealText
              text="FULL"
              className="text-[15vw] md:text-[12vw] leading-[0.8] font-heading font-black tracking-tighter"
            />
          </motion.div>

          {/* Center: Image */}
          <motion.div
            style={{ rotate }}
            className="order-1 md:order-2 relative z-10 w-[70vw] md:w-[25vw] aspect-[3/4] shadow-2xl my-8 md:my-0 mx-4"
          >
            <div className="w-full h-full rounded-sm overflow-hidden border-4 border-white/5 relative bg-zinc-900 group">
              <img
                src="/AboutImage.jpg"
                alt="Profile"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
              />
              {/* Overlay Text */}
              <div className="absolute bottom-4 left-4 right-4 mix-blend-difference text-white">
                <div className="flex justify-between items-end">
                  <span className="font-heading font-bold text-xl md:text-2xl">
                    M. BADGUJAR
                  </span>
                  <Globe className="animate-spin-slow" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: STACK */}
          <motion.div
            style={{ x: xRight }}
            className="order-3 md:order-3 mix-blend-difference text-white"
          >
            <RevealText
              text="STACK"
              className="text-[15vw] md:text-[12vw] leading-[0.8] font-heading font-black tracking-tighter"
              delay={0.1}
            />
          </motion.div>
        </div>

        {/* Bottom Row: DEVELOPER & DESIGNER */}
        <motion.div
          style={{ y: yBottom }}
          className="order-4 mt-8 md:mt-12 mix-blend-difference text-white text-center"
        >
          <RevealText
            text="DEVELOPER & DESIGNER"
            className="text-[8vw] md:text-[5vw] leading-[0.9] font-heading font-bold tracking-tighter text-white/90"
            delay={0.2}
          />
        </motion.div>
      </div>
    </section>
  );
};

const RevealText = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay },
    },
  };

  const child: Variants = {
    visible: {
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      y: "100%",
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text.split("").map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// --- 2. BIO: EDITORIAL GRID ---
const EditorialBio = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        {/* Left: Stats Grid */}
        <div className="md:col-span-4 space-y-8">
          <div className="text-xs font-bold text-primary uppercase tracking-widest mb-8 border-l-2 border-primary pl-4">
            The Vital Stats
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatBox label="Years Exp." value="2.5+" />
            <StatBox label="Projects" value="15+" />
            <StatBox label="Commits" value="2k+" />
            <StatBox label="Coffee" value="∞" />
          </div>

          <a
            href="/resume.pdf"
            className="group block w-full bg-white text-black py-4 px-6 text-center font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded-sm border border-white/20"
          >
            <span className="flex items-center justify-center gap-2">
              <Download size={18} /> Download CV
            </span>
          </a>
        </div>

        {/* Right: Narrative */}
        <div className="md:col-span-8">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
            I build digital products that{" "}
            <span className="text-primary">refuse</span> to be ignored.
          </h2>
          <div className="space-y-6 text-lg text-slate-400 font-light leading-relaxed">
            <p>
              My journey started with a simple curiosity: "How does this work?"
              That curiosity quickly spiraled into an obsession with digital
              architecture. Today, I stand at the intersection of engineering
              and design.
            </p>
            <p>
              I don't just write code; I architect solutions. Whether it's
              optimizing a Node.js backend for high throughput or crafting a
              pixel-perfect React interface, I approach every problem with a
              blend of creative intuition and engineering rigor.
            </p>
            <p className="text-white font-bold">
              My philosophy is simple: Complication is easy. Simplicity is hard.
              I strive for the latter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatBox = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-white/5 border border-white/10 p-4 text-center hover:bg-white/10 transition-colors">
    <div className="text-3xl font-heading font-bold text-white mb-1">
      {value}
    </div>
    <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
      {label}
    </div>
  </div>
);

// --- 3. SKILLS: CHAOS VORTEX (Compact Version) ---
const ChaosSkills = () => {
  return (
    <section className="py-20 overflow-hidden bg-black relative border-t border-white/10 h-[450px] flex flex-col justify-center">
      <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 text-center mb-8 relative z-10">
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white">
          THE ARSENAL
        </h2>
      </div>

      <div className="relative h-[250px] flex items-center justify-center">
        {/* Diagonal Marquees */}
        <div className="absolute w-[120%] rotate-6 bg-zinc-900/50 border-y border-white/10 py-4 backdrop-blur-sm z-30 hover:z-40 transition-all hover:scale-105 hover:bg-primary/10">
          <Marquee items={SKILLS.frontend} speed={30} />
        </div>

        <div className="absolute w-[120%] -rotate-3 bg-zinc-900/50 border-y border-white/10 py-4 backdrop-blur-sm z-20 hover:z-40 transition-all hover:scale-105 hover:bg-primary/10">
          <Marquee items={SKILLS.backend} speed={25} reverse />
        </div>

        <div className="absolute w-[120%] rotate-[-12deg] bg-zinc-900/50 border-y border-white/10 py-4 backdrop-blur-sm z-10 hover:z-40 transition-all hover:scale-105 hover:bg-primary/10">
          <Marquee items={SKILLS.mobile} speed={40} />
        </div>

        <div className="absolute w-[120%] rotate-[15deg] bg-zinc-900/50 border-y border-white/10 py-4 backdrop-blur-sm z-0 hover:z-40 transition-all hover:scale-105 hover:bg-primary/10">
          <Marquee items={SKILLS.automation} speed={35} reverse />
        </div>
      </div>

      <div className="mt-8 text-center relative z-10">
        <p className="text-slate-500 mb-4 font-mono text-xs uppercase tracking-widest">
          Mastery over matter
        </p>
        <a
          href="/projects"
          className="inline-flex items-center gap-2 text-white border-b border-white hover:text-primary hover:border-primary transition-colors pb-1 font-bold tracking-widest uppercase"
        >
          See them in action <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

const Marquee = ({
  items,
  speed = 20,
  reverse = false,
}: {
  items: string[];
  speed?: number;
  reverse?: boolean;
}) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
        className="flex gap-16 items-center pr-16"
      >
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className="text-4xl md:text-6xl font-heading font-bold text-white/20 hover:text-white transition-colors cursor-default uppercase"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default About;

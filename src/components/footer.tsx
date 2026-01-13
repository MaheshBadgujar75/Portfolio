import React, { memo, useCallback } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowUp, ArrowRight } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { SOCIAL_LINKS } from "../../contants";
import { motion, useScroll, useTransform } from "framer-motion";

// Memoized subcomponents
const SocialLink = memo(({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group relative w-16 h-16 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-white overflow-hidden hover:border-primary/50 transition-colors"
    aria-label={label}
  >
    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
    <div className="relative z-10 group-hover:text-white transition-colors group-hover:scale-110 duration-300">
      {icon}
    </div>
  </a>
));
SocialLink.displayName = "SocialLink";

const FooterLink = memo(({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link
      to={to}
      className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors w-fit"
    >
      <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="uppercase text-sm font-bold tracking-wider group-hover:translate-x-1 transition-transform duration-300">
        {children}
      </span>
    </Link>
  </li>
));
FooterLink.displayName = "FooterLink";

// Animation variants (defined outside component to prevent recreation)
const headingVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Footer: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const xTransform = useTransform(scrollYProgress, [0.5, 1], ["20%", "-20%"]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const currentYear = new Date().getFullYear();

  const marqueeText = "INNOVATE CREATE DEPLOY";

  return (
    <footer className="bg-black relative pt-32 pb-10 overflow-hidden border-t border-white/10 selection:bg-primary selection:text-white">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

      {/* Massive Moving Text Background - Infinite Marquee */}
      <div className="absolute top-10 md:top-20 left-0 w-full overflow-hidden pointer-events-none select-none z-0 opacity-[0.04]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {/* Repeat text to ensure seamless loop. Since text is huge, 4 copies is plenty. */}
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24">
              <span className="text-[18vw] font-black font-heading text-white leading-none">
                {marqueeText}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-end">
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              transition={{ duration: 0.8, ease: "circOut" }}
              viewport={{ once: true }}
              className="text-7xl md:text-9xl font-heading font-black text-white leading-[0.85] tracking-tighter mb-8"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-500">
                READY
              </span>
              <span className="block text-primary cursor-default">
                TO START?
              </span>
            </motion.h2>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-white text-black rounded-full text-lg font-bold overflow-hidden flex items-center gap-2 border border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Start a Project
                </span>
                <ArrowRight
                  className="relative z-10 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1"
                  size={20}
                />
                <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-end items-start md:items-end">
            <p className="text-slate-400 max-w-sm text-lg md:text-right mb-8 font-light leading-relaxed">
              Crafting digital experiences that merge{" "}
              <span className="text-white font-bold">art</span> with{" "}
              <span className="text-white font-bold">engineering</span>. Let's
              build the future together.
            </p>
            <div className="flex gap-4">
              <SocialLink
                href={SOCIAL_LINKS.github}
                icon={<LuGithub size={24} />}
                label="Github"
              />
              <SocialLink
                href={SOCIAL_LINKS.linkedin}
                icon={<LuLinkedin size={24} />}
                label="LinkedIn"
              />
              <SocialLink
                href={`mailto:${SOCIAL_LINKS.email}`}
                icon={<Mail size={24} />}
                label="Email"
              />
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16" />

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-3xl font-heading font-bold text-white mb-6 block tracking-tighter hover:text-primary transition-colors"
            >
              MAHESH<span className="text-primary">.DEV</span>
            </Link>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Full Stack Developer & UI/UX enthusiast based in India.
              Specializing in the React ecosystem, Native Android, and scalable
              Automation workflows.
            </p>
          </div>

          <div>
            <h4 className="text-primary font-mono text-xs font-bold uppercase tracking-widest mb-8">
              SITEMAP //
            </h4>
            <ul className="space-y-4">
              <FooterLink to="/about">About_Me</FooterLink>
              <FooterLink to="/projects">Selected_Works</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-mono text-xs font-bold uppercase tracking-widest mb-8">
              LEGAL //
            </h4>
            <ul className="space-y-4">
              <li className="text-slate-500 text-sm hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all" />
                Privacy Policy
              </li>
              <li className="text-slate-500 text-sm hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all" />
                Terms & Conditions
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-white/5 relative">
          {/* Massive Background Watermark */}
          <div className="text-[12rem] md:text-[16rem] leading-none font-black text-white/[0.03] absolute bottom-[-40px] md:bottom-[-80px] left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 whitespace-nowrap font-heading">
            Lets Build
          </div>

          <div className="relative z-10 text-xs font-mono text-slate-600 uppercase tracking-wider">
            © {currentYear} MAHESH BADGUJAR.{" "}
            <br className="md:hidden" />{" "}
            <span className="hidden md:inline"> // </span> ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="relative z-10 group flex items-center gap-3 text-sm font-bold text-white hover:text-primary transition-colors uppercase tracking-widest mt-4 md:mt-0"
            aria-label="Scroll to top"
          >
            BACK TO TOP
            <span className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(255,0,51,0.5)]">
              <ArrowUp size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
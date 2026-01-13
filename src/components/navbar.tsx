import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { NAV_ITEMS, SOCIAL_LINKS } from "../../contants";
import { LuGithub, LuLinkedin } from "react-icons/lu";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 md:top-8 right-4 md:right-8 z-50 flex justify-end pointer-events-none"
      >
        <div
          className={`pointer-events-auto transition-all duration-500 ease-[0.23,1,0.32,1] 
            ${isScrolled
              ? "bg-zinc-950/90 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-2 px-3 scale-[0.95] origin-top-right"
              : "bg-zinc-900/60 backdrop-blur-xl border-white/5 py-3 px-5 scale-100"
            } 
            rounded-full border flex items-center gap-4 md:gap-6 group/nav`}
        >
          {/* Logo - Acts as Home */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white font-bold font-heading text-xs group-hover/nav:scale-110 transition-transform shadow-[0_0_15px_rgba(255,0,51,0.4)]">
              MB
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors hover:text-white ${isActive ? "text-white" : "text-slate-400"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="hidden md:block w-px h-4 bg-white/10"></div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=badgujarm98@gmail.com"
              className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300
      ${isScrolled
                  ? "bg-white text-black hover:bg-primary hover:text-white"
                  : "bg-primary text-white hover:bg-white hover:text-black"
                }
    `}
            >
              <span>Let's Talk</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-zinc-950 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 pt-8 border-b border-white/10">
              <span className="font-heading font-bold text-xl text-white tracking-widest">
                MENU
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-6 gap-2">
              {NAV_ITEMS.map((item, i) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex items-center gap-4 py-4 border-b border-white/5 group-hover:border-primary/50 transition-colors"
                  >
                    <span className="text-xs font-mono text-primary/50 group-hover:text-primary transition-colors">
                      0{i + 1}
                    </span>
                    <span
                      className={`text-5xl md:text-6xl font-heading font-bold tracking-tighter transition-all duration-300 ${location.pathname === item.path
                        ? "text-white translate-x-4"
                        : "text-slate-500 group-hover:text-white group-hover:translate-x-4"
                        }`}
                    >
                      {item.label}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-white/10 bg-zinc-900/50">
              <div className="flex justify-between items-center">
                <div className="text-xs font-mono text-slate-500">
                  BASED IN INDIA <br />
                  AVAILABLE FOR HIRE
                </div>
                <div className="flex gap-4">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-primary transition-colors"
                  >
                    <LuGithub />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-primary transition-colors"
                  >
                    <LuLinkedin />
                  </a>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="text-white hover:text-primary transition-colors"
                  >
                    <Mail />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

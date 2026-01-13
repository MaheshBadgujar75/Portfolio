import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code, Smartphone, Zap, Server, CheckCircle } from '../components/Icons';
import SEO from '../components/SEO';
import { SERVICES } from '../../contants';

// Map icon strings to components
const ICON_MAP: Record<string, any> = {
  'Globe': Code,
  'Smartphone': Smartphone,
  'Workflow': Zap,
  'Server': Server
};

// High-quality imagery for each service
const SERVICE_IMAGES: Record<string, string> = {
  'web-dev': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
  'app-dev': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
  'automation': 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
  'api-dev': 'https://images.unsplash.com/photo-1558494949-ef2cb3cc30e1?q=80&w=2070&auto=format&fit=crop'
};

// Value props for each service
const SERVICE_BADGES: Record<string, string> = {
  'web-dev': 'High Performance & SEO Optimized',
  'app-dev': 'Native iOS & Android Experience',
  'automation': '24/7 Automated Workflows',
  'api-dev': 'Secure Enterprise Infrastructure'
};

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(SERVICES[0].id);

  return (
    <div className="min-h-screen bg-dark text-slate-200 pt-24 pb-20 px-4 md:px-8 relative overflow-hidden selection:bg-primary selection:text-white">
      <SEO title="Services" description="High-end engineering capabilities." />

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/5 rounded-full blur-[150px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20 relative">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10vw] leading-[0.8] font-heading font-bold text-white select-none pointer-events-none absolute top-[-5vw] left-0 -z-10 whitespace-nowrap"
          >
            SERVICES<span className="text-primary">.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12"
          >
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mt-12 md:mt-24 leading-none">
              DIGITAL <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">EXPERTISE</span>
            </h2>
            <div className="h-px flex-grow bg-white/10 mb-4 hidden md:block"></div>
            <div className="flex flex-col text-xs font-mono text-primary mb-2 opacity-80">
              <span>EST. 2024 // V2.0</span>
              <span>SYSTEM STATUS: OPTIMAL</span>
            </div>
          </motion.div>
        </header>

        <div className="flex flex-col gap-4">
          {SERVICES.map((service, index) => (
            <ServiceSlab
              key={service.id}
              service={service}
              index={index}
              isActive={activeId === service.id}
              onClick={() => setActiveId(activeId === service.id ? null : service.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceSlab = ({ service, index, isActive, onClick }: any) => {
  const Icon = ICON_MAP[service.icon] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className={`group relative border bg-zinc-900/40 backdrop-blur-md overflow-hidden transition-all duration-500 cursor-pointer ${isActive
        ? 'border-primary shadow-[0_0_30px_rgba(255,0,51,0.15)] bg-zinc-900/80'
        : 'border-white/5 hover:border-white/20 hover:bg-zinc-800/40'
        }`}
    >
      {/* Active Glow/Scanline Background */}
      <AnimatePresence>
        {isActive && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary/5 pointer-events-none z-0"
            />
            <motion.div
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-1 bg-primary z-20"
            />
          </>
        )}
      </AnimatePresence>

      <div className="relative z-10 p-6 md:p-10 flex flex-col h-full">
        {/* Header Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 md:gap-12">
            <span className={`font-mono text-sm transition-colors duration-300 ${isActive ? 'text-primary' : 'text-slate-600'}`}>0{index + 1}</span>
            <h3 className={`text-2xl md:text-5xl font-heading font-bold transition-all duration-500 ${isActive ? 'text-white translate-x-4' : 'text-slate-400 group-hover:text-white'}`}>
              {service.title}
            </h3>
          </div>

          <div className={`p-4 rounded-full border transition-all duration-500 ${isActive
            ? 'bg-primary text-white border-primary rotate-90 scale-110'
            : 'bg-transparent text-slate-500 border-white/10 group-hover:border-white group-hover:text-white group-hover:-rotate-45'
            }`}>
            <ArrowUpRight size={24} />
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-10 md:pt-16 grid md:grid-cols-2 gap-12 border-t border-white/5 mt-8">
                <div className="order-2 md:order-1">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    Description
                  </h4>
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 font-light">
                    {service.description}
                  </p>

                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Technical Stack</h4>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {service.features.map((feature: string, i: number) => (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        key={i}
                        className="flex items-center gap-3 text-sm font-mono text-slate-400 group/item hover:text-white transition-colors"
                      >
                        <span className="w-1.5 h-1.5 bg-slate-600 group-hover/item:bg-primary transition-colors rounded-sm"></span>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual / Image Area */}
                <div className="order-1 md:order-2 relative h-64 md:h-auto bg-black rounded-xl border border-white/10 flex items-center justify-center overflow-hidden group/visual shadow-2xl">

                  {/* Dynamic Background Image */}
                  <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 z-0"
                  >
                    <img
                      src={SERVICE_IMAGES[service.id]}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-60 group-hover/visual:scale-105 transition-transform duration-1000 grayscale group-hover/visual:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
                  </motion.div>

                  {/* Central Icon */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="relative z-10 p-6 bg-black/30 backdrop-blur-xl rounded-full border border-white/10 group-hover/visual:border-primary/50 transition-colors"
                  >
                    <Icon strokeWidth={1.5} size={48} className="text-white group-hover/visual:text-primary transition-colors duration-300" />
                  </motion.div>

                  {/* Value Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <CheckCircle size={16} />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Client Benefit</div>
                        <div className="text-sm font-bold text-white leading-none">{SERVICE_BADGES[service.id]}</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Services;
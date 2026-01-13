import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, ArrowUpRight, Check, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import { SOCIAL_LINKS } from "../../contants";

type ContactFormInputs = {
   name: string;
   email: string;
   budget: string;
   message: string;
};

const Contact: React.FC = () => {
   const { register, handleSubmit, formState: { errors, isSubmitting: formSubmitting }, reset, watch } = useForm<ContactFormInputs>();
   const [isSuccess, setIsSuccess] = useState(false);
   const [focusedField, setFocusedField] = useState<string | null>(null);

   // Watch fields for progress bar calculation
   const watchedFields = watch();
   const filledFields = Object.values(watchedFields).filter(Boolean).length;
   const progress = (filledFields / 4) * 100;

   const onSubmit = async (data: ContactFormInputs) => {
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby0znCOckZizBWfsKfgT9M1ASf84LZHzlwm85y8m2_8NnkqoVnVxMYjw71ylqUxL7kK/exec";

      try {
         const formData = new FormData();
         formData.append("name", data.name);
         formData.append("email", data.email);
         formData.append("budget", data.budget);
         formData.append("message", data.message);
         formData.append("Date", new Date().toLocaleString());

         await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            body: formData,
            mode: "no-cors",
         });

         setIsSuccess(true);
         reset();
      } catch (error) {
         console.error("Error submitting form", error);
         alert("Transmission failed. Please check your connection.");
      }
   };


   const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

   return (
      <div className="min-h-screen bg-dark text-slate-200 pt-28 pb-20 px-4 md:px-8 relative overflow-hidden selection:bg-primary selection:text-white">
         <SEO title="Contact" description="Establish connection." />

         {/* Background Ambience */}
         <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] opacity-40"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[150px] opacity-40"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
         </div>

         <div className="max-w-7xl mx-auto relative z-10">

            {/* HEADER SECTION */}
            <header className="mb-20 md:mb-32">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-8">
                  <div>
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-3 mb-4"
                     >
                        <span className="relative flex h-2 w-2">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-mono font-bold text-green-500 uppercase tracking-widest">Lets Build Together</span>
                     </motion.div>
                     <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: smoothEase }}
                        className="text-[10vw] md:text-[8vw] leading-[0.85] font-heading font-bold text-white tracking-tighter"
                     >
                        LET'S TALK
                     </motion.h1>
                  </div>

                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.5 }}
                     className="mt-8 md:mt-0 text-right hidden md:block"
                  >
                     <div className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-1">Local Time (India)</div>
                     <TimeDisplay />
                  </motion.div>
               </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

               {/* LEFT: INFO STACK (4 Cols) */}
               <div className="lg:col-span-4 space-y-8 h-fit lg:sticky lg:top-32">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8 border-l-2 border-primary pl-4">
                     Communication Channels
                  </div>

                  <ContactCard
                     href="https://mail.google.com/mail/?view=cm&fs=1&to=badgujarm98@gmail.com"
                     icon={<Mail size={20} />}
                     label="Email Address"
                     value={SOCIAL_LINKS.email}
                     action="Copy Email"
                     isCopy
                  />

                  <ContactCard
                     icon={<Phone size={20} />}
                     label="Phone Number"
                     value={SOCIAL_LINKS.phone}
                     action="Call Now"
                     href={`tel:${SOCIAL_LINKS.phone.replace(/\s/g, '')}`}
                  />

                  <div className="pt-8 border-t border-white/10 mt-12">
                     <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Social Uplink</div>
                     <div className="flex flex-wrap gap-4">
                        <SocialLink label="GitHub" href={SOCIAL_LINKS.github} />
                        <SocialLink label="LinkedIn" href={SOCIAL_LINKS.linkedin} />
                     </div>
                  </div>
               </div>

               {/* RIGHT: CINEMA FORM (8 Cols) */}
               <div className="lg:col-span-8">
                  <AnimatePresence mode="wait">
                     {isSuccess ? (
                        <motion.div
                           initial={{ opacity: 0, scale: 0.95 }}
                           animate={{ opacity: 1, scale: 1 }}
                           className="bg-zinc-900/50 border border-white/10 rounded-3xl p-12 md:p-20 text-center flex flex-col items-center justify-center min-h-[50vh]"
                        >
                           <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white mb-8 shadow-[0_0_40px_rgba(255,0,51,0.4)]">
                              <Check size={48} />
                           </div>
                           <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Transmission Sent</h3>
                           <p className="text-slate-400 text-lg mb-12 max-w-md">
                              I've received your signal. Expect a response on your secure channel within 24 hours.
                           </p>
                           <button
                              onClick={() => setIsSuccess(false)}
                              className="px-8 py-4 border border-white/20 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                           >
                              Send Another
                           </button>
                        </motion.div>
                     ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-16 md:space-y-24 relative">

                           {/* Progress Line */}
                           <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block">
                              <motion.div
                                 animate={{ height: `${progress}%` }}
                                 className="w-full bg-primary shadow-[0_0_10px_#FF0033] transition-all duration-700"
                              />
                           </div>

                           <div className="md:pl-12 space-y-16 md:space-y-24">
                              {/* Name */}
                              <div className={`relative transition-all duration-500 ${focusedField === 'name' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
                                 <label className="block text-xs font-mono text-primary uppercase tracking-widest mb-4">01 // Identity</label>
                                 <input
                                    {...register("name", { required: true })}
                                    type="text"
                                    placeholder="What's your name?"
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-3xl md:text-5xl font-heading font-medium text-white placeholder:text-white/10 focus:outline-none focus:border-primary transition-all"
                                 />
                                 {errors.name && <span className="absolute -bottom-6 left-0 text-xs text-primary font-mono"> FIELD REQUIRED</span>}
                              </div>

                              {/* Email */}
                              <div className={`relative transition-all duration-500 ${focusedField === 'email' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
                                 <label className="block text-xs font-mono text-primary uppercase tracking-widest mb-4">02 // Frequency</label>
                                 <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    placeholder="Your email address?"
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-3xl md:text-5xl font-heading font-medium text-white placeholder:text-white/10 focus:outline-none focus:border-primary transition-all"
                                 />
                              </div>

                              {/* Budget/Type */}
                              <div className={`relative transition-all duration-500 ${focusedField === 'budget' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
                                 <label className="block text-xs font-mono text-primary uppercase tracking-widest mb-4">03 // Parameters</label>
                                 <select
                                    {...register("budget", { required: true })}
                                    onFocus={() => setFocusedField('budget')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-3xl md:text-5xl font-heading font-medium text-white/50 focus:text-white focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer"
                                 >
                                    <option value="" className="bg-dark text-slate-500">Select Project Type</option>
                                    <option value="web" className="bg-dark text-white">Web Development</option>
                                    <option value="mobile" className="bg-dark text-white">Mobile Application</option>
                                    <option value="automation" className="bg-dark text-white">Automation System</option>
                                    <option value="other" className="bg-dark text-white">Other Inquiry</option>
                                 </select>
                              </div>

                              {/* Message */}
                              <div className={`relative transition-all duration-500 ${focusedField === 'message' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
                                 <label className="block text-xs font-mono text-primary uppercase tracking-widest mb-4">04 // Transmission</label>
                                 <textarea
                                    {...register("message", { required: true })}
                                    rows={1}
                                    onInput={(e) => {
                                       e.currentTarget.style.height = 'auto';
                                       e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                                    }}
                                    placeholder="Tell me about your project..."
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-3xl md:text-5xl font-heading font-medium text-white placeholder:text-white/10 focus:outline-none focus:border-primary transition-all resize-none overflow-hidden"
                                 />
                              </div>

                              {/* Submit */}
                              <div className="pt-8">
                                 <button
                                    type="submit"
                                    disabled={formSubmitting}
                                    className="group relative w-full md:w-auto inline-flex items-center gap-4 px-10 py-6 bg-white text-black rounded-full text-lg font-bold uppercase tracking-widest disabled:opacity-50 overflow-hidden"
                                 >
                                    <span className="relative z-10 flex items-center gap-3">
                                       {formSubmitting ? 'Transmitting...' : 'Initialize Sequence'}
                                       <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.16,1,0.3,1]"></div>
                                 </button>
                              </div>
                           </div>
                        </form>
                     )}
                  </AnimatePresence>
               </div>

            </div>
         </div>
      </div>
   );
};

// --- Sub Components ---

const TimeDisplay = () => {
   const [time, setTime] = useState(new Date());

   useEffect(() => {
      const timer = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(timer);
   }, []);

   // Format for India Time (IST is UTC+5:30)
   const options: Intl.DateTimeFormatOptions = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
   };

   const timeString = time.toLocaleTimeString('en-US', options);

   return (
      <div className="text-3xl font-heading font-bold text-white tabular-nums flex items-center justify-end gap-3">
         <Clock size={24} className="text-primary" />
         {timeString}
      </div>
   );
};

interface ContactCardProps {
   icon: React.ReactNode;
   label: string;
   value: string;
   action?: string;
   href?: string;
   isCopy?: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, label, value, action, href, isCopy }) => {
   const [copied, setCopied] = useState(false);

   const handleAction = (e: React.MouseEvent) => {
      if (isCopy) {
         e.preventDefault();
         navigator.clipboard.writeText(value);
         setCopied(true);
         setTimeout(() => setCopied(false), 2000);
      }
   };

   const Content = (
      <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-primary/50 transition-all group cursor-pointer relative overflow-hidden">
         <div className="flex items-center gap-4 mb-3 relative z-10">
            <div className="p-2 bg-zinc-900 rounded-lg text-primary group-hover:scale-110 transition-transform">
               {copied ? <Check size={20} /> : icon}
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{label}</span>
         </div>
         <div className="text-lg font-bold text-white break-all relative z-10">{value}</div>

         {action && (
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-primary font-bold">
               {copied ? 'COPIED!' : `[ ${action} ]`}
            </div>
         )}

         <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </div>
   );

   return href ? <a href={href} onClick={handleAction} className="block">{Content}</a> : <div onClick={handleAction} className="block">{Content}</div>;
};

const SocialLink = ({ label, href }: { label: string, href: string }) => (
   <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="px-5 py-2 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 hover:border-primary transition-all"
   >
      {label}
   </a>
);

export default Contact;
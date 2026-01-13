import { Suspense, lazy, useEffect, useRef } from "react";
import {
  MemoryRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { AnimatePresence } from "framer-motion";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));

// Custom Cursor Component
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }

      if (outlineRef.current) {
        // Add a slight delay/lag for the outline for organic feel
        outlineRef.current.animate(
          {
            transform: `translate(${clientX}px, ${clientY}px)`,
          },
          { duration: 500, fill: "forwards" }
        );
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      />
      <div
        ref={outlineRef}
        className="cursor-outline fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] hidden md:block"
      />
    </>
  );
};

const LoadingFallback = () => (
  <div className="min-h-screen bg-dark flex items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center text-primary font-bold text-xs">
        DEV
      </div>
    </div>
  </div>
);

// Animated Routes Wrapper
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <CustomCursor />
      <div className="flex flex-col min-h-screen bg-dark text-slate-100 font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

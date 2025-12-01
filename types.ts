export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
  }
  
  export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    role: string;
    text: string;
    avatar?: string;
  }
  
  export interface NavigationItem {
    label: string;
    path: string;
  }
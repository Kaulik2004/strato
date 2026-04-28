'use client';

import PreviousMembers from "../components/PreviousMembers"; // adjust path as needed
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Rocket, Calendar, ChevronDown, X, Menu, Target, Eye, 
  Linkedin, Github, Twitter, Mail, Phone, MapPin, 
  Users, Star, Plane, Satellite, Trophy, Award, BookOpen,
  GraduationCap, Microscope
} from 'lucide-react';

// Proper TypeScript interfaces
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  onClick?: () => void;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary';
  className?: string;
}

interface SeparatorProps {
  className?: string;
}

// Updated UI Components with proper TypeScript
const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'default', 
  onClick 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };
  
  const sizes = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 rounded-md',
    lg: 'h-11 px-8 rounded-md',
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle: React.FC<CardProps> = ({ children, className = '' }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
);

const CardDescription: React.FC<CardProps> = ({ children, className = '' }) => (
  <p className={`text-sm text-muted-foreground ${className}`}>
    {children}
  </p>
);

const CardContent: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/80',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  };

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

const Separator: React.FC<SeparatorProps> = ({ className = '' }) => (
  <hr className={`shrink-0 bg-border h-[1px] w-full ${className}`} />
);

// Theme Toggle Component
const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  
  // Handle theme change with proper Next.js 15 approach
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme');
      setIsDark(theme === 'dark');
    }
  }, []);
  
  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      const newTheme = !isDark ? 'dark' : 'light';
      setIsDark(!isDark);
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', !isDark);
    }
  };
  
  return (
    <Button 
      variant="outline" 
      size="sm"
      onClick={toggleTheme}
      className="w-10 h-10 p-0 rounded-full"
    >
      {isDark ? '🌙' : '☀️'}
    </Button>
  );
};

// TypeScript interfaces for data
interface SocialLinks {
  linkedin?: string;
  github?: string;
  twitter?: string;
}

interface Member {
  name: string;
  role: string;
  department: string;
  image: string;
  social: SocialLinks;
}

interface Achievement {
  title: string;
  type: string;
  date: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}
interface Project {
  title: string;
  timeline: string;
  status: 'ongoing' | 'completed';
  description: string;
  image: string;
}

interface Event {
  title: string;
  type: 'upcoming' | 'past';
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  // registrationLink?: string; // Add this line
}


// Sample data with proper typing
const members: Member[] = [
  {
    name: "Naman Ray",
    role: "Club President",
    department: "Mechanical Engineering",
    image: "https://lh3.googleusercontent.com/d/1IPMXdCveS4_9LEGEWLCGEhlw9rPoS4J0",
    social: {
      linkedin: "https://www.linkedin.com/in/namanray",
      twitter: "#"
    }
  },
  {
    name: "Hritam Dey",
    role: "Club Vice-President",
    department: "Mechanical Engineering",
    image: "https://lh3.googleusercontent.com/d/1-GwtGrTGGUKZWVIynFwGG_ex3OUAGZiX",
    social: {
      linkedin: "https://www.linkedin.com/in/hritam-dey?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "#"
    }
  },
  {
    name: "Prothoma Dutta",
    role: "Secretary",
    department: "Mechanical Engineering",
    image: "https://lh3.googleusercontent.com/d/1JBB-vzPoAw2bYjHBJctdJrnNleZ8oV9e",
    social: {
      linkedin: "https://www.linkedin.com/in/prothoma-dutta-4b7297329",
      twitter: "#"
    }
  },
    {
    name: "Kaulik Das",
    role: "Sponsorship Lead",
    department: "Mechanical Engineering",
    image: "https://lh3.googleusercontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA",
    social: {
      linkedin: "https://www.linkedin.com/in/kaulik-das-63273328b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Kaulik2004"
    }
  },
   {
    name: "Divyansh Dutta",
    role: "Technical Chair",
    department: "Electrical Engineering",
    image: "https://lh3.googleusercontent.com/d/1jBY61MWw5fmoD4QS5cOjYxS6epv7NPkU",
    social: {
      linkedin: "https://www.linkedin.com/in/divyansh-dutta-b93857297/",
      twitter: "#"
    }
  },
   {
    name: "Satyam Roy",
    role: "Management Lead",
    department: "Mechanical Engineering",
    image: "https://lh3.googleusercontent.com/u/0/d/15HdeBFIZCLOAa0L8ECFvx1qlfYiTqz3C",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
   {
    name: "Avipso Sinha",
    role: "Treasurer",
    department: "Mechanical Engineering",
    image: "https://lh3.googleusercontent.com/d/1GQB6y79CTy4XlgHusoWkBWHN9-HHOewp",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
   {
    name: "Syed Zishan Aziz",
    role: "RC plane & Drone Lead",
    department: "Mechanical Engineering",
    image: "https://lh3.googleusercontent.com/d/1Kt0fI2uF3Ch_EK0qbo3E-RTJgf87Lj48",
    social: {
      linkedin: "https://www.linkedin.com/in/syed-zishan-aziz-3a48a1286?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      twitter: "#"
    }
  },
  {
    name: "Priyanshu Kumar ",
    role: "Cansat Lead",
    department: "Mechanical Engineering",
    image: "https://lh3.googleusercontent.com/d/1CpBXb-T7ApuBH-56_bFXbAi6fx10RBNr",
    social: {
      linkedin: "https://www.linkedin.com/in/priyanshu-kumar-924252313",
      twitter: "#"
    }
  },
  {
    name: "Swarnava Roy ",
    role: "Event Lead",
    department: "Mechanical Engineering",
    image: "https://lh3.googleusercontent.com/u/0/d/1NzpRTmTZxVUBTlRRBDfHbv-g6ZG7LW-D",
    social: {
      linkedin: "https://www.linkedin.com/in/swarnava-roy-277894336?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      twitter: "#"
    }
  },
    {
    name: "Debaditya Chaudhuri",
    role: "Publicity Chair",
    department: "Mechanical Engineering",
    image: "https://lh3.googleusercontent.com/d/1BSPqV8mkT-kcDncVy-gpGl1fwVovoA4d=s500",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
   {
    name: "Shayan Charan",
    role: "Content Team Lead",
    department: "Mechanical Engineering",
    image: "https://lh3.googleusercontent.com/d/10jL0tldi5A9sgVpN6IrzTmvaTz5XJa-8",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Ayurdyuti Ghosh ",
    role: "Social Media Lead",
    department: "Mechanical Engineering",
    image: "https://lh3.googleusercontent.com/d/1I-3qhNgGzdAll36DDJdVmrcw35z-MJzZ",
    social: {
      linkedin: "https://www.linkedin.com/in/ayurdyuti-ghosh-9b2b22335?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      twitter: "#"
    }
  },
    {
    name: "Souradip Daw ",
    role: "OC Lead",
    department: "Electrical Engineering",
    image: "https://lh3.googleusercontent.com/u/0/d/1sttQWtM8b4dhFk_PL2K06POBcnDUk9zD",
    social: {
      linkedin: "https://www.linkedin.com/in/souradip-daw-535799351/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdbzUBl4BST6JLfUPPEM%2FxQ%3D%3D",
      twitter: "#"
    }
  },
    {
    name: "Bornita Mandal",
    role: "OC Lead",
    department: "Electrical Engineering",
    image: "https://lh3.googleusercontent.com/d/1FMs8RLzZm5PO8O5ZtDMr-8QekxDw6q5q",
    social: {
      linkedin: "https://www.linkedin.com/in/bornita-mandal-377374321?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      twitter: "#"
    }
  },
  {
    name: "Sagnik Tripathy",
    role: "Membership Lead",
    department: "Chemical Engineering",
    image: "https://lh3.googleusercontent.com/d/1XO_i_OpmuY4arszGlcX3ynd9vImEb8Y6",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];
//Achievements
const achievements: Achievement[] = [
  {
    title: "NSSC Contingent Award 2025",
    type: "Competition",
    date: "January 2025",
    description: "The club represented Jadavpur University at the National Students’ Space Challenge at IIT Kharagpur. The team won the Contingent Award for exceptional participation, teamwork, and innovation in aerospace competitions.",
    icon: Star
  },
  {
    title: "RC Plane 1.0, Design & Manufacturing",
    type: "Innovation",
    date: "2024",
    description: "The club successfully completed its first fully functional RC aircraft, built entirely in-house. The project included conceptual design, fuselage and wing construction, electronic installation, and test flights. It demonstrated the team's skills in aeromodelling and systems integration",
    icon: Rocket
  },
  {
    title: "Aircraft Design Projects (V-tail & H-tail) ",
    type: "Research",
    date: "2025",
    description: "The team finished detailed aerodynamic and structural designs for both V-tail and H-tail aircraft configurations. These projects serve as stepping stones for participation in the National Aeromodelling Competition 2025-26, highlighting the club’s commitment to research and design.",
    icon: Microscope
  },
  {
    title: "Technical Events: Jal Astra & Skysprint",
    type: "Competition",
    date: "2025",
    description: "The club successfully organized two large-scale aeromodelling events. Both events attracted over 100 team registrations, providing hands-on learning experiences and promoting excitement for aerospace across campus.",
    icon: BookOpen
  },
  // {
  //   title: "Satellite Design Competition",
  //   type: "Competition",
  //   date: "June 2022",
  //   description: "",
  //   icon: Satellite
  // },
  {
    title: "Seminar on Aerospace Engineering",
    type: "Recognition",
    date: "April 2025",
    description: "The club conducted a seminar for over 200+ undergraduate students.",
    icon: GraduationCap
  }
];

const events: Event[] = [
  {
    title: "SkySprint 2026",
    type: "upcoming",
    date: "TBD",
    time: "TBD",
    location: "JU,Salt Lake Ground",
    description: "An event that challenges participants to master the delicate balance of aerodynamics and structural engineering.",
    image: "https://lh3.googleusercontent.com/d/1wHCkyYXnwFRHI05OpucYqBuXYYLKJ-fl"
  },
  {
    title: "JalAstra 2026",
    type: "upcoming",
    date: "TBD",
    time: "TBD",
    location: "Football Ground, JU Campus",
    description: "An exciting water rocket competition where teams design and build rockets using  water bottles",
    image: "https://lh3.googleusercontent.com/d/1z1poXGme5s5dPVEi0sR-ORx0Zl0g7pSs"
  },
 {
  title: "Wind-Craft-A motorised glider workshop",
  type: "past",
  date: "2nd April, 2026",
  time: "TBD",
  location: "Mechanical Engineering Department, JU",
  description: "Master the mechanics of flight with hands-on motorised  glider building experience.Register now to secure your spot and transform your project into a high-performance reality.",
  image: "https://lh3.googleusercontent.com/d/1SAf4SO3Gah0mtPeW61WTXKF8NyZaYr-Y",
  // registrationLink: "https://forms.gle/your-workshop-registration-link" 
},
  {
    title: "Jalastra",
    type: "past",
    date: "2025-04-19",
    time: "10:00 AM - 5:00 PM",
    location: "JU, Salt Lake Ground",
    description: "An exciting water rocket competition where teams design and build rockets using  water bottles  highlighting creativity, engineering skills, and aerodynamic design in this thrilling showcase of talent at Srijan 2025.",
   image: "https://lh3.googleusercontent.com/d/1hbM9y3qQAIhcq8Q96xOMt3Dg1mMyZ2m_"
  },
  {
    title: "SkySprint",
    type: "past",
    date: "2025-04-19",
    time: "10:00 AM - 4:00 PM",
    location: "Sports Ground",
    description: "Exhilarating competitive event that challenges participants to master the delicate balance of aerodynamics and structural engineering. The core of the competition involves designing and fabricating custom gliders, often using lightweight materials like balsa wood, foam, or composites, to achieve peak flight performance.",
    image: "https://lh3.googleusercontent.com/d/1CtqY04Nr2Ekb_YE8Tdnmu4shUPsKYsXV"
  }
];
// Ongoing Projects
const projects: Project[] = [
  {
    title: "CanSat",
    timeline: "Jan 2025 - Ongoing",
    status: "ongoing",
    description:
      "The main task is to manage a mission life cycle,  from the Preliminary Design Review (PDR) to post-flight data analysis, mirroring the rigorous standards of the global aerospace industry",
    image: "https://lh3.googleusercontent.com/d/1VeidCzpwJp8hMf9lv7A-0KBKChpT5-GB",
  },
  {
    title: "3D Printed Ecplison Model Development",
    timeline: "Feb 2026 - Present",
    status: "ongoing",
    description:
      "Project focuses on developing a high-fidelity scaled replica of the Epsilon launch vehicle, utilizing additive manufacturing to achieve complex aerodynamic geometries and internal structural ribbing. By integrating lightweight PLA or PETG materials.",
    image: "https://lh3.googleusercontent.com/d/1QMaTIwpBFQmHc_bDi_koKkvFol-InxBI",
  },
  {
    title: "F22 Raptor RC Model",
    timeline: "Jan 2026 - Ongoing",
    status: "ongoing",
    description:
      "a lightweight, 3D-printed airframe and a high-thrust EDF (Electric Ducted Fan) system. By utilizing thin-wall printing techniques and carbon-fiber reinforcements, the model mimics the stealth geometry and aerodynamic stability of the fifth-generation fighter for both high-speed passes and low-speed high-alpha flight.",
    image: "https://lh3.googleusercontent.com/d/13uw_PmC8xNDn-FC22HLTaUym4sJiipmS",
  },
];

// Define variants with proper typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    y: 20, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  }
};

const AerospaceClubWebsite: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  const [current, setCurrent] = useState(0);
  const [expandedSlide, setExpandedSlide] = useState<number | null>(null);  

const slides = [
  { img: "https://lh3.googleusercontent.com/d/14SwWtLUXBhZhGjxO08zIDn8wBA1POgoT", label: "WindCraft Rewind" },
  { img: "https://lh3.googleusercontent.com/d/1ZsMhU2-8_cPyHtrLzneAeWKzKYiKrug_", label: "Technical Sessions" },
  { img: "https://lh3.googleusercontent.com/d/1gibzmOIECl2xAFXIPATR-C56M9knUpAG", label: "Motorised Glider Build" },
  { img: "https://lh3.googleusercontent.com/d/1kn0-V93zLoXGb2IitVwLf-lDcSffovnU", label: "Hands-On Testing" },
  {img: "https://lh3.googleusercontent.com/d/1cJ_XENSR_ewiLXgm7bQh7_FOwXMcDjBP", label: "All about that Day" }
];

useEffect(() => {
  const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000); //5000 milisec for slide
  return () => clearInterval(timer);
}, []);

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const sections = ['home', 'about', 'members', 'achievements', 'events', 'projects','contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 transition-colors duration-300">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
  className="flex items-center space-x-2 cursor-pointer"
  whileHover="hovered" // This "label" triggers children with the same variant name
>
  {/* The Rocket Icon: Isolated Rotation */}
  <motion.div
    variants={{
      hovered: { rotate: 360, scale: 1.2 } // Rocket scales and spins
    }}
    transition={{ type: "spring", stiffness: 400, damping: 90 }}
  >
    <Rocket className="h-8 w-8 text-primary" />
  </motion.div>

  {/* The Text: No rotation, perhaps a slight scale or just static */}
  <motion.span 
    className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
    variants={{
      hovered: { x: 10,scale:1.05} // Optional: subtle nudge to the right instead of spinning
    }}
  
  >
    
    JU Aerospace Club
  </motion.span>
</motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'members', 'achievements', 'events', 'projects','contact'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary relative ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {['home', 'about', 'members', 'achievements', 'events', 'contact'].map((section, index) => (
                    <motion.button
                      key={section}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(section)}
                      className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md w-full text-left transition-colors"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section 
  id="home" 
  className="relative min-h-[140vh] md:min-h-[1200px] flex items-start justify-center overflow-hidden pt-32 pb-20"
>
  <motion.div 
    className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30 dark:opacity-20 h-full"
    initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5 }}
  >
    <div 
      className="w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg?auto=compress&cs=tinysrgb&w=1600')"
      }}
    />
  </motion.div>
  <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-primary/20" />
  
  <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="flex flex-col space-y-12" // Adds consistent gaps between elements
    >
      <motion.h1 
        className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-blue-600 to-cyan-500 bg-clip-text text-transparent"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Stratosphere
        </motion.h1>
              <motion.h1 
              className="text-5xl sm:text-5xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-cyan-500 bg-clip-text text-transparent"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              JU Aerospace Club
      </motion.h1>

      <motion.p 
        className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Reaching for the stars through innovation, collaboration, and cutting-edge aerospace technology
      </motion.p>

{/* Workshop Box - 5 Slices */}
<motion.div
  className="w-full max-w-3xl mx-auto overflow-hidden rounded-2xl relative
             border border-orange-500/30
             shadow-[0_0_40px_-8px_rgba(249,115,22,0.5),0_0_80px_-20px_rgba(239,68,68,0.3),inset_0_0_40px_-20px_rgba(249,115,22,0.05)]
             hover:shadow-[0_0_60px_-8px_rgba(249,115,22,0.7),0_0_100px_-20px_rgba(239,68,68,0.5)]
             transition-all duration-700 ease-in-out bg-black/70 backdrop-blur-md"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.9 }}
>
  {/* Corner accents */}
  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/70 rounded-tl-2xl z-20 pointer-events-none" />
  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500/70 rounded-tr-2xl z-20 pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-500/70 rounded-bl-2xl z-20 pointer-events-none" />
  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/70 rounded-br-2xl z-20 pointer-events-none" />

  {/* Flame overlay */}
  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-orange-950/40 via-transparent to-transparent z-0" />

  {/* Title */}
  <div className="relative z-10 pt-5 pb-3 text-center">
    <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mx-auto">
      <span className="text-orange-400 text-xs">✦</span>
      <h2 className="text-sm font-semibold tracking-[0.3em] uppercase bg-gradient-to-r from-orange-300 via-red-400 to-orange-500 bg-clip-text text-transparent">
        Workshop Gallery
      </h2>
      <span className="text-orange-400 text-xs">✦</span>
    </div>
  </div>

  {/* 5 Slices */}
  <div className="relative flex h-64 sm:h-72 md:h-80 z-10 group">
    {slides.map((slide, i) => (
      <div
        key={i}
        onClick={() => setExpandedSlide(i)}
        className="relative flex-1 overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:flex-[3]
                   /* Replaced dark background with an inner glow for separation */
                   shadow-[inset_0_0_30px_rgba(0,0,0,0.6)] hover:shadow-none"
      >
    
        <img
          src={slide.img}
          alt={slide.label}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out
                     grayscale brightness-110 contrast-125
                     group-hover:grayscale group-hover:brightness-90
                     hover:!grayscale-0 hover:!brightness-100 hover:!contrast-100"
        />


        {/* Orange side border between slices - Increased opacity slightly for distinction */}
        {i < slides.length - 1 && (
          <div className="absolute right-0 top-0 bottom-0 w-px bg-orange-500/30 z-10" />
        )}

        {/* Label - only visible on hover */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end pb-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <span className="px-3 py-1 rounded-full bg-black/60 border border-orange-500/40 text-orange-300 text-[10px] font-medium tracking-widest uppercase backdrop-blur-sm whitespace-nowrap">
            {slide.label}
          </span>
        </div>

        {/* Expand icon on hover */}
        <div className="absolute top-3 right-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="w-6 h-6 rounded-full bg-black/60 border border-orange-500/40 flex items-center justify-center">
            <span className="text-orange-400 text-[10px]">⤢</span>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Dot indicators */}
  <div className="flex justify-center items-center gap-2 py-4 relative z-10">
    {slides.map((_, i) => (
      <button
        key={i}
        onClick={() => setExpandedSlide(i)}
        className="w-2 h-2 rounded-full bg-orange-500/40 hover:bg-orange-500 transition-all duration-300"
      />
    ))}
  </div>
</motion.div>

{/* Lightbox / Zoom Modal - Kept same as requested */}
<AnimatePresence>
  {expandedSlide !== null && (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setExpandedSlide(null)}
    >
      <motion.div
        className="relative max-w-4xl w-full mx-4 rounded-2xl overflow-hidden border border-orange-500/30
                   shadow-[0_0_60px_-10px_rgba(249,115,22,0.6)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Corner accents on modal */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/70 rounded-tl-2xl z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500/70 rounded-tr-2xl z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-500/70 rounded-bl-2xl z-20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/70 rounded-br-2xl z-20 pointer-events-none" />

        <img
          src={slides[expandedSlide].img}
          alt={slides[expandedSlide].label}
          className="w-full h-auto max-h-[80vh] object-cover"
        />

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-between">
          <span className="px-4 py-1 rounded-full bg-black/60 border border-orange-500/40 text-orange-300 text-xs font-medium tracking-widest uppercase backdrop-blur-sm">
            {slides[expandedSlide].label}
          </span>
          <span className="text-orange-400/60 text-xs tracking-wider">
            {expandedSlide + 1} / {slides.length}
          </span>
        </div>

        {/* Prev / Next inside modal */}
        <button
          onClick={() => setExpandedSlide((s) => (s! - 1 + slides.length) % slides.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-orange-500/40 text-orange-400 flex items-center justify-center hover:bg-orange-500/30 transition-all"
        >
          &#8592;
        </button>
        <button
          onClick={() => setExpandedSlide((s) => (s! + 1) % slides.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-orange-500/40 text-orange-400 flex items-center justify-center hover:bg-orange-500/30 transition-all"
        >
          &#8594;
        </button>

        {/* Close button */}
        <button
          onClick={() => setExpandedSlide(null)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 border border-orange-500/40 text-orange-400 flex items-center justify-center hover:bg-red-500/30 hover:border-red-400 transition-all text-sm z-30"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      {/* Bottom Action Buttons */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
          onClick={() => scrollToSection('about')}
        >
          <Rocket className="mr-2 h-5 w-5" />
          Explore Our Mission
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
          onClick={() => scrollToSection('events')}
        >
          <Calendar className="mr-2 h-5 w-5" />
          Upcoming Events
        </Button>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              About Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The Aerospace Club at Jadavpur University is dedicated to fostering innovation, research, and practical learning in aerospace engineering and related fields.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Target className="h-8 w-8 text-primary" />
                      </motion.div>
                      <CardTitle className="text-2xl">Our Mission</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      To inspire and educate the next generation of students through hands-on projects, 
                      research opportunities, and industry collaborations. We strive to bridge the gap between 
                      theoretical knowledge and practical application.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Eye className="h-8 w-8 text-primary" />
                      </motion.div>
                      <CardTitle className="text-2xl">Our Vision</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      To become a leading aerospace research and development hub that contributes significantly 
                      to India's space program and aviation industry while nurturing innovative minds capable 
                      of solving tomorrow's aerospace challenges.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { number: "60+", label: "Active Members" },
                { number: "5+", label: "Projects Completed" },
                { number: "3+", label: "Awards Won" },
                { number: "3", label: "Years of Excellence" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center space-y-2 p-6 rounded-lg bg-card/30 border border-border/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated individuals who drive our mission forward with passion, expertise, and innovation.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {members.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group overflow-hidden">
                  <CardHeader className="text-center">
                    <motion.div 
                      className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                    </motion.div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <Badge variant="outline" className="border-border">
                      {member.department}
                    </Badge>
                    <div className="flex justify-center space-x-3">
                      {member.social.linkedin && (
                        <motion.a
                          href={member.social.linkedin}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </motion.a>
                      )}
                      {member.social.github && (
                        <motion.a
                          href={member.social.github}
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </motion.a>
                      )}
                      {member.social.twitter && (
                        <motion.a
                          href={member.social.twitter}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                        </motion.a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* {added} */}
          <div className="flex justify-center">
            <PreviousMembers />
          {/* {added} */}
          </div>

        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Our Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating our milestones and recognitions that showcase our commitment to excellence in aerospace engineering.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 hover:scale-105 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="h-8 w-8 text-primary flex-shrink-0" />
                        </motion.div>
                        <Badge 
                          variant="secondary" 
                          className={`ml-2 ${
                            achievement.type === 'Innovation' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                            achievement.type === 'Research' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                            achievement.type === 'Innovation' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                            achievement.type === 'Workshop' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' :
                            'bg-gray-500/20 text-gray-400 border-gray-500/30'
                          }`}
                        >
                          {achievement.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{achievement.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{achievement.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with our upcoming events and revisit the highlights from our past programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Calendar className="mr-3 h-6 w-6 text-primary" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {events.filter(event => event.type === 'upcoming').map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 border-l-4 border-l-primary overflow-hidden group">
                      <div className="flex">
                        <div className="flex-1">
                          <CardHeader>
                            <CardTitle className="text-lg">{event.title}</CardTitle>
                            <CardDescription className="text-primary">
                              {new Date(event.date).toLocaleDateString()} • {event.time}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-2">{event.description}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4 mr-1" />
                              {event.location}
                            </div>
                          </CardContent>
                        </div>
                        <div className="w-24 h-24 m-4 rounded-lg overflow-hidden">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Past Events */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Star className="mr-3 h-6 w-6 text-yellow-500" />
                Past Events
              </h3>
              <div className="space-y-4">
                {events.filter(event => event.type === 'past').map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 border-l-4 border-l-yellow-500 overflow-hidden group">
                      <div className="flex">
                        <div className="flex-1">
                          <CardHeader>
                            <CardTitle className="text-lg">{event.title}</CardTitle>
                            <CardDescription className="text-yellow-500">
                              {new Date(event.date).toLocaleDateString()} • {event.time}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-2">{event.description}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4 mr-1" />
                              {event.location}
                            </div>
                          </CardContent>
                        </div>
                        <div className="w-24 h-24 m-4 rounded-lg overflow-hidden">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Ongoing Projects Section */}
<section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
        Ongoing Projects
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Take a look at the innovative research and development projects currently being built by our club members.
      </p>
    </motion.div>

    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {projects.map((project, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 hover:scale-105 transition-all duration-300 overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <Badge 
                className={`absolute top-4 right-4 ${
                  project.status === 'ongoing' 
                    ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' 
                    : 'bg-green-500/20 text-green-400 border-green-500/30'
                }`}
                variant="secondary"
              >
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription>{project.timeline}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to join our mission? Get in touch with us to learn more about our programs and opportunities.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Get In Touch</CardTitle>
                  <CardDescription>
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div 
                    className="flex items-center space-x-3 text-muted-foreground"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    {/* <span>aerospace.club@ju.ac.in</span> */}
                    <a 
                   href="mailto:aerospace.club@ju.ac.in" 
                   className="hover:text-primary transition-colors"
                     >
                     aerospace.club@ju.ac.in
                    </a>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-3 text-muted-foreground"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+91 98306 69894</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-3 text-muted-foreground"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Aerospace Club, Mechanical Department, Jadavpur University, Kolkata - 700032</span>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Monday - Friday</span>
                    <span className="text-primary">9:00 AM - 6:00 PM</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span>Saturday</span>
                    <span className="text-primary">10:00 AM - 2:00 PM</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <div className="mt-6 pt-6 border-t">
  <motion.div
    whileHover={{ 
      scale: 1.05, // Makes it slightly bigger 
      filter: "brightness(1.2)" // Adds a "highlight" 
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }} // Smoother animation
  >
    <a 
      href="https://docs.google.com/forms/d/e/1FAIpQLSdETe4BnHSGF0RgMtFqc9qtRzI9gReMdbddfgTAm9Ok2PPa7g/viewform?usp=publish-editor" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-full"
    >
      <Button className="w-full bg-primary hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/20">
        <Users className="mr-2 h-4 w-4" />
        Join Our Club
      </Button>
    </a>
  </motion.div>
</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <motion.div 
                className="flex items-center space-x-2 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <Rocket className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  JU Aerospace Club
                </span>
              </motion.div>
              <p className="text-muted-foreground mb-4">
                Inspiring the next generation of engineers through innovation, 
                collaboration, and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <motion.div 
                  className="flex items-center space-x-1 text-muted-foreground"
                  whileHover={{ scale: 1.1 }}
                >
                  <Plane className="h-4 w-4" />
                  <span className="text-sm">Aviation</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-1 text-muted-foreground"
                  whileHover={{ scale: 1.1 }}
                >
                  <Satellite className="h-4 w-4" />
                  <span className="text-sm">Space Tech</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-1 text-muted-foreground"
                  whileHover={{ scale: 1.1 }}
                >
                  <Rocket className="h-4 w-4" />
                  <span className="text-sm">Rockets</span>
                </motion.div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Members', 'Achievements','Projects', 'Events'].map((link) => (
                  <li key={link}>
                    <motion.button
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>aerospace.club@ju.ac.in</li>
                <li>+91 98306 69894</li>
                <li>Jadavpur University</li>
                <li>Kolkata, West Bengal</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center text-muted-foreground text-sm">
            <p>&copy; 2026 JU Aerospace Club. All rights reserved. Built with passion for aerospace excellence.</p>
          </div>
          {/* <div className="relative h-64 w-full border border-dashed">    */}
              <div className="text-extreme-right text-muted-foreground text-[5px] leading-none">
              <p>KD's</p>
              </div>
           {/* </div> */}
        </div>
      </footer>
    </main>
  );
};

export default AerospaceClubWebsite;

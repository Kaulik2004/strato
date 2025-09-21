"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Rocket, Calendar, ChevronDown, X, Menu, Target, Eye, 
  Linkedin, Github, Twitter, Mail, Phone, MapPin, 
  Users, Star, Plane, Satellite, Trophy, Award, BookOpen,
  GraduationCap, Microscope
} from 'lucide-react';

// UI Components (assuming these are from your UI library)
const Button = ({ children, className = '', variant = 'default', size = 'default', onClick }: any) => (
  <button 
    className={`px-4 py-2 rounded-md font-medium transition-colors ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const Card = ({ children, className = '' }: any) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }: any) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '' }: any) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = '' }: any) => (
  <p className={`text-sm text-muted-foreground ${className}`}>
    {children}
  </p>
);

const CardContent = ({ children, className = '' }: any) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = 'default', className = '' }: any) => (
  <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${className}`}>
    {children}
  </span>
);

const Separator = ({ className = '' }: any) => (
  <hr className={`border-t ${className}`} />
);

// Theme Toggle Component (simplified)
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <Button 
      variant="outline" 
      size="sm"
      onClick={() => setIsDark(!isDark)}
      className="w-10 h-10 p-0 rounded-full"
    >
      {isDark ? '🌙' : '☀️'}
    </Button>
  );
};

// Sample data
const members = [
  {
    name: "Dr. Anika Sharma",
    role: "Faculty Advisor",
    department: "Aerospace Engineering",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Rahul Verma",
    role: "Club President",
    department: "Mechanical Engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Priya Patel",
    role: "Technical Lead",
    department: "Electronics Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const achievements = [
  {
    title: "National Rocketry Challenge 2023",
    type: "Competition",
    date: "March 2023",
    description: "Secured 1st place in the national rocketry competition with our innovative design.",
    icon: Rocket
  },
  {
    title: "AI in Aerospace Research",
    type: "Research",
    date: "January 2023",
    description: "Published paper on machine learning applications in aerodynamic optimization.",
    icon: Microscope
  },
  {
    title: "Drone Innovation Award",
    type: "Innovation",
    date: "November 2022",
    description: "Received recognition for developing a novel drone delivery system for medical supplies.",
    icon: Award
  },
  {
    title: "Wind Tunnel Workshop",
    type: "Workshop",
    date: "August 2022",
    description: "Organized a hands-on workshop on wind tunnel testing for 100+ students.",
    icon: BookOpen
  },
  {
    title: "Satellite Design Competition",
    type: "Competition",
    date: "June 2022",
    description: "Finalists in the national satellite design competition with our CubeSat prototype.",
    icon: Satellite
  },
  {
    title: "Aerospace Education Grant",
    type: "Recognition",
    date: "April 2022",
    description: "Awarded a grant to develop aerospace curriculum and learning materials.",
    icon: GraduationCap
  }
];

const events = [
  {
    title: "Rocket Launch Workshop",
    type: "upcoming",
    date: "2023-12-15",
    time: "2:00 PM - 5:00 PM",
    location: "Aerospace Lab, JU Campus",
    description: "Hands-on workshop on rocket design, construction, and launch techniques.",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Guest Lecture: Space Technology",
    type: "upcoming",
    date: "2023-12-22",
    time: "11:00 AM - 1:00 PM",
    location: "Main Auditorium",
    description: "Dr. Vikram Sarabhai from ISRO will share insights on recent advancements in space technology.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Annual Aerospace Symposium",
    type: "past",
    date: "2023-10-10",
    time: "9:00 AM - 5:00 PM",
    location: "Conference Hall",
    description: "Annual event showcasing student projects and research in aerospace engineering.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Drone Racing Competition",
    type: "past",
    date: "2023-08-20",
    time: "10:00 AM - 4:00 PM",
    location: "Sports Ground",
    description: "Inter-college drone racing competition with participants from 15 institutions.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  }
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

export default function AerospaceClubWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'members', 'achievements', 'events', 'contact'];
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
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Rocket className="h-8 w-8 text-primary animate-pulse-slow" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                JU Aerospace Club
              </span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'members', 'achievements', 'events', 'contact'].map((section) => (
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
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30 dark:opacity-20"
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
          >
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-cyan-500 bg-clip-text text-transparent"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              JU Aerospace Club
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Reaching for the stars through innovation, collaboration, and cutting-edge aerospace technology
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg transition-all duration-300"
                  onClick={() => scrollToSection('about')}
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Explore Our Mission
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg transition-all duration-300"
                  onClick={() => scrollToSection('events')}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Upcoming Events
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-primary" />
        </motion.div>
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
                      To inspire and educate the next generation of aerospace engineers through hands-on projects, 
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
                { number: "150+", label: "Active Members" },
                { number: "25+", label: "Projects Completed" },
                { number: "15+", label: "Awards Won" },
                { number: "8", label: "Years of Excellence" }
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
                            achievement.type === 'Competition' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
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
                    <span>aerospace.club@ju.ac.in</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-3 text-muted-foreground"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+91 98765 43210</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-3 text-muted-foreground"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Aerospace Department, Jadavpur University, Kolkata - 700032</span>
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
                    <span className="text-primary">10:00 AM - 4:00 PM</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full bg-primary hover:bg-primary/90 transition-colors duration-300">
                        <Users className="mr-2 h-4 w-4" />
                        Join Our Club
                      </Button>
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
                <Rocket className="h-8 w-8 text-primary animate-float" />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  JU Aerospace Club
                </span>
              </motion.div>
              <p className="text-muted-foreground mb-4">
                Inspiring the next generation of aerospace engineers through innovation, 
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
                {['About', 'Members', 'Achievements', 'Events'].map((link) => (
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
                <li>+91 98765 43210</li>
                <li>Jadavpur University</li>
                <li>Kolkata, West Bengal</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center text-muted-foreground text-sm">
            <p>&copy; 2024 JU Aerospace Club. All rights reserved. Built with passion for aerospace excellence.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
  'Full Stack Developer',
  'React.js Specialist',
  'Laravel PHP Developer',
  'REST API Creator',
  'Frontend & Backend Integrator',
  'Database Design Expert',
  'Responsive Web Developer',
  'State Management Pro (Redux/Context)',
  'Performance Optimization Advocate',
  'Component-Driven Developer',
  'Cross-Browser Compatibility Expert'
];


  const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/public/kinan-alnabolsi-cv.pdf";
  link.download = "kinan-alnablsi-cv.pdf"; // custom file name
  link.click();
};

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary-glow/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i * 10)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-6 h-6 border-2 border-primary/40 rotate-45" />
            ) : i % 3 === 1 ? (
              <div className="w-4 h-4 bg-primary/30 rounded-full" />
            ) : (
              <div className="w-8 h-1 bg-primary/50" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Radial Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-radial from-primary/30 to-transparent rounded-full blur-xl animate-glow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-radial from-primary-glow/20 to-transparent rounded-full blur-2xl animate-glow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          {/* <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-primary-dark shadow-glow animate-glow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-bold text-primary">
                AH
              </div>
            </div>
          </motion.div> */}

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground mb- mt-28"
          >
            {t('hero.greeting')}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">{t('hero.name')}</span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {roles[currentRole]}
              </motion.span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-orange hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              onClick={handleDownloadCV}
            >
              {t('hero.cta.projects')}
            </Button>
            <motion.a
            href={'#contact'}
            >
            <Button
              variant="outline"
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
            >
              {t('hero.cta.contact')}
            </Button>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              { icon: Github, href: 'https://github.com/Kinan-alnabolsi1', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/kinan-alnabolsi-0138aa347', label: 'LinkedIn' },
              { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&to=kinanalnablsi1@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-elevated hover:shadow-glow"
              >
                <Icon className="w-6 h-6" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
            >
              <ChevronDown className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const sectionElements = sections.map(id => {
        const element = document.getElementById(id === 'hero' ? '' : id);
        return { id, element };
      });

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'experience', href: '#experience' },
    { key: 'contact', href: '#contact' },
  ];

  const handleNavClick = (sectionKey: string) => {
    setActiveSection(sectionKey);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-elevated' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            KINAN ALNABLSI
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                onClick={() => handleNavClick(item.key)}
                whileHover={{ y: -2 }}
                className={`transition-smooth relative group px-5 ${
                  activeSection === item.key 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {t(`nav.${item.key}`)}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === item.key ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </motion.a>
            ))}
          </div>

          {/* Theme & Language Controls */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            {/* <Button
              variant="ghost" 
              size="sm"
              onClick={toggleLanguage}
              className="p-2"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-sm">{i18n.language.toUpperCase()}</span>
            </Button> */}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          className="lg:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-2 ">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(item.key)}
                className={`block py-2 transition-smooth ${
                  activeSection === item.key 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {t(`nav.${item.key}`)}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
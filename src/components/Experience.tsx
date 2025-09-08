import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Freelance",
      location: "Remote",
      period: "06/2024 - Present",
      achievements: [
        "Developed and maintained fullstack web applications using React.js for frontend and Laravel (PHP) for backend",
        "Built RESTful APIs and integrated them with React frontend for dynamic data display and interaction",
        "Designed MySQL databases with proper ERD diagrams to organize application data efficiently",
        "Created responsive and visually appealing user interfaces with a focus on UI/UX design for optimal user experience across devices",
        "Managed CRUD operations for multiple modules",
        "Ensured scalability, clean code structure, and maintainability following best practices in MVC and modern React development",
      ],
      technologies: [
        "React",
        "Javascript",
        "Laravel",
        "Php",
        "MySQL",
        "REST APIs",
        "Redux",
        "Material UI",
        "Tailwind CSS",
        ".....",
      ],
    },
    {
      id: 2,
      title: "Front End Web Developer",
      company: " Goma plus",
      location: "Remote",
      period: " 11/2023 – 06/2024",
      achievements: [
        "Developed and maintained user-facing webpages using HTML, CSS, JavaScript and jQuery",
        "Integrated front end code with server side code to implement dynamic pages",
        "Designed and implemented interactive user interfaces for websites and applications",
        "Developed React applications using RESTful APIs",
        "Created custom components, forms, and interfaces for user interactions in React",
        "Debugged and resolved issues related to React components",
        "Implemented automated tests for all React components using Jest",
      ],
      technologies: [
        "React",
        "Javascript",
        "Laravel",
        "Php",
        "MySQL",
        "REST APIs",
        "Redux",
        "Material UI",
        "Tailwind CSS",
        ".....",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{t('experience.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('experience.subtitle')}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />
            
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.company}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow" />
                  
                  <div className="ml-20">
                    <Card className="card-gradient shadow-elevated hover:shadow-glow transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-1">
                              {experience.title}
                            </h3>
                            <p className="text-lg text-primary font-semibold flex items-center">
                              <Briefcase className="w-4 h-4 mr-2" />
                              {experience.company}
                            </p>
                          </div>
                          <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="font-medium">{experience.period}</span>
                          </div>
                        </div>
                        
                        {/* <p className="text-muted-foreground mb-6 leading-relaxed">
                          {experience.description}
                        </p> */}
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: 0.5 + index * 0.1 + achievementIndex * 0.1 }}
                                className="flex items-start text-muted-foreground"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
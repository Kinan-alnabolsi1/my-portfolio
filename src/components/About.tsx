import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Award, Users, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { icon: Award, value: '2+', label: t('about.stats.experience') },
    { icon: Users, value: '6+', label: t('about.stats.projects') },
    // { icon: Coffee, value: '100+', label: t('about.stats.clients') },
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{t('about.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('about.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants}>
              <Card className="card-gradient shadow-elevated hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                    {t('about.description')}
                  </p>
                  
                  {/* Skills Preview */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Core Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Docker'].map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="space-y-6">
              {stats.map(({ icon: Icon, value, label }, index) => (
                <motion.div
                  key={label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <Card className="card-gradient shadow-elevated hover:shadow-glow transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={inView ? { scale: 1 } : { scale: 0 }}
                            transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 100 }}
                            className="text-3xl font-bold gradient-text"
                          >
                            {value}
                          </motion.div>
                          <p className="text-muted-foreground">{label}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
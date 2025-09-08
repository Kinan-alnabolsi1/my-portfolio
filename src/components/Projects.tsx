import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "E-card Application",
      description:
        "A responsive web application that allows users to create digital business cards using APIs. With the e-card app, users can easily input and display their personal and professional information as a business card, which can be viewed dynamically on the website. The application supports real-time updates and ensures that the e-cards are accessible and properly displayed on all screen sizes.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "JavaScript", "tailwind css", "Chart.js"],
      github: "https://github.com/Kinan-alnabolsi1/E-card",
    },
    {
      title: "Restaurant Menu",
      description:
        "Built a responsive restaurant menu web application using React.js and Tailwind CSS.  Integrated with external APIs to fetch and display categories and meals dynamically. Focused on UI/UX design to deliver a clean, intuitive, and visually appealing interface. Ensured full responsiveness across desktop, tablet, and mobile devices for a seamless user experience.",
      image:
        "/assets/res-menu.png",
      technologies: ["React", "JavaScript", "tailwind css", "Axios", "APIS"],
      github: "https://github.com/Kinan-alnabolsi1/Restaurant-Menu",
      live: "https://anteka.netlify.app/",
    },
    {
      title: "Menu Dashboard",
      description:
        "Developed a dashboard web application using React.js and Tailwind CSS for managing restaurant menus. Integrated with external APIs to perform CRUD operations (add, edit, delete meals and categories). Designed an intuitive and responsive UI with interactive tables and forms for seamless data management. Focused on usability and efficiency, ensuring restaurant staff can easily manage menu items in real time.",
      image:
        "/assets/dash-menu.png",
      technologies: ["React", "JavaScript", "tailwind css", "Axios", "APIS"],
      github: "https://github.com/Kinan-alnabolsi1/restaurant-dashboard",
    },
    {
      title: "Menu Dashboard (Backend)",
      description:
        "Developed a backend system using Laravel (PHP) to manage restaurant menus, categories, and meals. Built and exposed RESTful APIs for CRUD operations (create, read, update, delete). Implemented role-based authentication and authorization to secure access for admins and staff. Designed a MySQL database with a proper ERD (Entity-Relationship Diagram) to efficiently organize menus, categories, and meal details . Ensured scalability and clean code structure following MVC best practices",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["laravel", "php", "sanctum", "mysql"],
      github: "https://github.com/Kinan-alnabolsi1/restaurant-backend",
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
    <section id="projects" className="py-20 bg-muted/50">
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
              <span className="gradient-text">{t("projects.title")}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t("projects.subtitle")}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full card-gradient shadow-elevated hover:shadow-glow transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 text-black hover:bg-white"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          className="flex"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          {t("projects.viewCode")}
                        </a>
                      </Button>
                      {project.live && project.live !== "" && (
                        <Button
                          size="sm"
                          className="bg-primary text-primary-foreground hover:bg-primary-dark"
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            className="flex"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {t("projects.viewLive")}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p
                      className={`text-muted-foreground mb-2 leading-relaxed ${
                        expandedIndex !== index ? "line-clamp-2" : ""
                      }`}
                    >
                      {project.description}
                    </p>
                    {project.description.split(" ").length > 20 && (
                      <button
                        onClick={() =>
                          setExpandedIndex(
                            expandedIndex === index ? null : index
                          )
                        }
                        className="text-sm text-primary underline mb-4"
                      >
                        {expandedIndex === index ? "Read less" : "Read more"}
                      </button>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View More Button
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View All Projects
            </Button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
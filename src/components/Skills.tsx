import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Cloud,
  GitBranch,
  Terminal,
  Palette,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: t("skills.frontend"),
      icon: Globe,
      skills: [
        { name: "React.js", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 100 },
        { name: "MUI (Material UI)", level: 90 },
        { name: "HTML", level: 100 },
        { name: "CSS", level: 100 },
        { name: "Responsive Design", level: 100 },
        { name: "UI/UX Design Principles", level: 100 },
        { name: "Animation & Transitions", level: 90 },
      ],
    },
    {
      title: t("skills.backend"),
      icon: Database,
      skills: [
        { name: "Laravel PHP", level: 80 },
        { name: "REST API Development", level: 90 },
        { name: "MySQL / Database Design", level: 80 },
        { name: "Authentication & Authorization", level: 85 },
        { name: "MVC Architecture", level: 95 },
        { name: "Eloquent ORM", level: 90 },
        { name: "Validation & Error Handling", level: 85 },
        { name: "Middleware & Routing", level: 90 },
        { name: "Performance Optimization", level: 80 },
      ],
    },
    {
      title: t("skills.tools"),
      icon: Terminal,
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "CI/CD Pipelines", level: 78 },
        { name: "Composer (PHP Dependency Manager)", level: 90 },
        { name: "npm / Yarn", level: 90 },
        { name: "Postman / API Testing", level: 88 },
        { name: "VS Code / IDEs", level: 95 },
        { name: "Linux / Command Line", level: 70 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="py-20">
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
              <span className="gradient-text">{t("skills.title")}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t("skills.subtitle")}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full card-gradient shadow-elevated hover:shadow-glow transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span>{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial="hidden"
                              animate={inView ? "visible" : "hidden"}
                              variants={progressVariants}
                              custom={skill.level}
                              className="h-full bg-gradient-to-r from-primary to-primary-dark rounded-full shadow-glow"
                              style={{
                                filter:
                                  "drop-shadow(0 0 4px hsl(21 100% 51% / 0.5))",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technology Icons */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8">Technologies I Love</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Code2, name: "JavaScript" },
                { icon: Database, name: "Databases" },
                { icon: Cloud, name: "Cloud Services" },
                { icon: Smartphone, name: "Mobile Development" },
                { icon: GitBranch, name: "Version Control" },
                { icon: Palette, name: "UI/UX Design" },
              ].map(({ icon: Icon, name }, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                  }
                  transition={{
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    filter: "drop-shadow(0 0 10px hsl(21 100% 51% / 0.6))",
                  }}
                  className="p-4 rounded-full bg-card shadow-elevated hover:shadow-glow transition-all duration-300 cursor-pointer group"
                >
                  <Icon className="w-8 h-8 text-primary group-hover:animate-glow" />
                  <span className="sr-only">{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

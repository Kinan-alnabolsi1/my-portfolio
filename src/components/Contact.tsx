import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.info.email"),
      value: "kinanalnablsi1@gmail.com",
      href: "mailto:kinanalnablsi1@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.info.phone"),
      value: "+963 940 431 659",
      href: "tel:+963940431659",
    },
    {
      icon: MapPin,
      label: t("contact.info.location"),
      value: "Damascus, Syria",
      // href: "#",
    },
  ];

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        await emailjs.send(
          "service_fwzdp98", // from EmailJS dashboard
          "template_jowfxfe", // from EmailJS dashboard
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          "9ijHeKochnetK3H3X" // from EmailJS dashboard
        );

        toast({
          title: "Success!",
          description: t("contact.success"),
        });

        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        toast({
          title: "Error",
          description: t("contact.error"),
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
    <section id="contact" className="py-20 bg-muted/50">
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
              <span className="gradient-text">{t('contact.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hello, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-lg card-gradient shadow-elevated hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Animated Background Element */}
              <div className="relative mt-12">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-xl" />
                <div className="relative bg-card rounded-lg p-6 text-center">
                  <h4 className="text-lg font-semibold mb-2">Ready to work together?</h4>
                  <p className="text-muted-foreground">Let's create something amazing!</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="card-gradient shadow-elevated">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          className="transition-transform"
                        >
                          <Input
                            name="name"
                            placeholder={t('contact.form.name')}
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="h-12 border-border focus:border-primary transition-colors"
                          />
                        </motion.div>
                      </div>

                      <div>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          className="transition-transform"
                        >
                          <Input
                            name="email"
                            type="email"
                            placeholder={t('contact.form.email')}
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="h-12 border-border focus:border-primary transition-colors"
                          />
                        </motion.div>
                      </div>

                      <div>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          className="transition-transform"
                        >
                          <Textarea
                            name="message"
                            placeholder={t('contact.form.message')}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="border-border focus:border-primary transition-colors resize-none"
                          />
                        </motion.div>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-orange hover:shadow-glow transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="mr-2"
                          >
                            <Send className="w-5 h-5" />
                          </motion.div>
                        ) : (
                          <Send className="w-5 h-5 mr-2" />
                        )}
                        {isSubmitting ? 'Sending...' : t('contact.form.send')}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
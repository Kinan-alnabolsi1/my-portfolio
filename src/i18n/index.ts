import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "nav.about": "About",
      "nav.skills": "Skills", 
      "nav.projects": "Projects",
      "nav.experience": "Experience",
      "nav.contact": "Contact",
      
      // Hero Section
      "hero.greeting": "Hi, I'm",
      "hero.name": "Kinan Alnabolsi",
      "hero.role": "Full Stack Developer",
      "hero.description": "Passionate about creating amazing web applications with modern technologies. I build scalable, user-friendly solutions that make a difference.",
      "hero.cta.projects": "Download CV",
      "hero.cta.contact": "Get In Touch",
      
      // About Section
      "about.title": "About Me",
      "about.subtitle": "Get to know me better",
      "about.description": "I'm a passionate full-stack developer with 2+ years of experience building modern web applications. I love turning complex problems into simple, beautiful designs. When I'm not coding, you'll find me exploring new technologies.",
      "about.stats.experience": "Years Experience",
      "about.stats.projects": "Projects Completed", 
      "about.stats.clients": "Happy Clients",
      
      // Skills Section
      "skills.title": "Skills & Technologies",
      "skills.subtitle": "What I work with",
      "skills.frontend": "Frontend",
      "skills.backend": "Backend",
      "skills.tools": "Tools & Others",
      
      // Projects Section
      "projects.title": "Featured Projects",
      "projects.subtitle": "Some of my recent work",
      "projects.viewCode": "View Code",
      "projects.viewLive": "Live Demo",
      
      // Experience Section
      "experience.title": "Work Experience",
      "experience.subtitle": "My professional journey",
      
      // Contact Section
      "contact.title": "Get In Touch",
      "contact.subtitle": "Let's work together",
      "contact.form.name": "Your Name",
      "contact.form.email": "Your Email",
      "contact.form.message": "Your Message",
      "contact.form.send": "Send Message",
      "contact.info.email": "Email",
      "contact.info.phone": "Phone",
      "contact.info.location": "Location",
      
      // Common
      "common.loading": "Loading...",
      "common.error": "Something went wrong",
    }
  },
  ar: {
    translation: {
      // Navigation
      "nav.about": "نبذة عني",
      "nav.skills": "المهارات",
      "nav.projects": "المشاريع", 
      "nav.experience": "الخبرة",
      "nav.contact": "التواصل",
      
      // Hero Section
      "hero.greeting": "مرحباً، أنا",
      "hero.name": "كنان النابلسي",
      "hero.role": "مطور ويب متكامل",
      "hero.description": "شغوف بإنشاء تطبيقات ويب مذهلة باستخدام التقنيات الحديثة. أبني حلولاً قابلة للتطوير وسهلة الاستخدام تحدث فرقاً حقيقياً.",
      "hero.cta.projects": "تنزيل السيرة الذاتية",
      "hero.cta.contact": "تواصل معي",
      
      // About Section
      "about.title": "نبذة عني",
      "about.subtitle": "تعرف علي أكثر",
      "about.description": "أنا مطور ويب متكامل شغوف مع أكثر من سنتين من الخبرة في بناء تطبيقات ويب حديثة. أحب تحويل المشاكل المعقدة إلى تصاميم بسيطة وجميلة. عندما لا أكون أبرمج، ستجدني أستكشف تقنيات جديدة.",
      "about.stats.experience": "سنوات الخبرة",
      "about.stats.projects": "المشاريع المكتملة",
      "about.stats.clients": "عملاء سعداء",
      
      // Skills Section
      "skills.title": "المهارات والتقنيات",
      "skills.subtitle": "ما أعمل به",
      "skills.frontend": "الواجهة الأمامية",
      "skills.backend": "الواجهة الخلفية", 
      "skills.tools": "الأدوات وأخرى",
      
      // Projects Section
      "projects.title": "المشاريع المميزة",
      "projects.subtitle": "بعض من أعمالي الحديثة",
      "projects.viewCode": "عرض الكود",
      "projects.viewLive": "معاينة مباشرة",
      
      // Experience Section
      "experience.title": "الخبرة العملية",
      "experience.subtitle": "رحلتي المهنية",
      
      // Contact Section
      "contact.title": "تواصل معي",
      "contact.subtitle": "دعنا نعمل معاً",
      "contact.form.name": "اسمك",
      "contact.form.email": "بريدك الإلكتروني",
      "contact.form.message": "رسالتك",
      "contact.form.send": "إرسال الرسالة",
      "contact.info.email": "البريد الإلكتروني",
      "contact.info.phone": "الهاتف",
      "contact.info.location": "الموقع",
      
      // Common
      "common.loading": "جاري التحميل...",
      "common.error": "حدث خطأ ما",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
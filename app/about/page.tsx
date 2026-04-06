'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Globe, Wrench, Server, Code2, Layers, Smartphone, Database, Cpu
} from 'lucide-react';

export default function AboutPage() {
  // مجموعات المهارات الموسعة
  const skillGroups = [
    {
      category: "Frontend Development",
      skills: [
        { name: 'Vue.js 3 (Composition API)', level: '95%', color: 'bg-emerald-500' },
        { name: 'Next.js 14 & React', level: '90%', color: 'bg-indigo-600' },
        { name: 'Tailwind CSS & UI/UX', level: '98%', color: 'bg-sky-500' },
      ]
    },
    {
      category: "Backend & Systems",
      skills: [
        { name: 'Laravel 11 & PHP', level: '92%', color: 'bg-rose-500' },
        { name: 'RESTful APIs & Microservices', level: '88%', color: 'bg-amber-500' },
        { name: 'Database Architecture (MySQL)', level: '85%', color: 'bg-blue-600' },
      ]
    },
    {
      category: "Engineering Tools",
      skills: [
        { name: 'Git & Team Leadership', level: '95%', color: 'bg-slate-800' },
        { name: 'Systems Analysis', level: '90%', color: 'bg-violet-600' },
        { name: 'Software Design Patterns', level: '85%', color: 'bg-fuchsia-600' },
      ]
    }
  ];

  const careerTimeline = [
    { year: '2026', title: 'Tech Team Lead @ Clever', desc: 'قيادة الفرق التقنية لبناء حلول برمجية متكاملة ومبتكرة.' },
    { year: '2025', title: 'Backend Developer @ Rantisi Hospital', desc: 'تطوير وهندسة الأنظمة الخلفية في بيئة طبية معقدة.' },
    { year: '2023', title: 'Vue.js Developer', desc: 'بناء واجهات تفاعلية متطورة وتجارب مستخدم احترافية.' },
    { year: '2022', title: 'Intensive Training', desc: 'إتمام 8 كورسات تخصصية وجاهية في علوم البرمجة.' },
    { year: '2021', title: 'The Beginning', desc: 'بدء رحلة تخصص هندسة أنظمة الحاسوب والشغف التقني.' }
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfe] pb-20 font-sans" dir="rtl">
      
      {/* Hero Section - النبذة والاسم */}
      <section className="relative pt-24 md:pt-36 pb-20 px-6 text-center overflow-hidden">
        {/* تأثيرات خلفية هندسية */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] -z-10 animate-pulse" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 leading-none tracking-tighter">
            م. فرح بدر <span className="text-indigo-600"></span>
          </h1>
          <p className="text-xl md:text-3xl font-bold text-slate-500 leading-relaxed max-w-3xl mx-auto px-4">
            مهندسة أنظمة حاسوب | مطورة Full-Stack 
            <br className="hidden md:block" /> 
            أبني تجارب رقمية تجمع بين متانة الكود وجمال التصميم.
          </p>

          {/* روابط البراند الشخصي - صريحة ومتجاوبة */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a 
              href="https://www.linkedin.com/in/farah-bader" 
              target="_blank" 
              className="group flex items-center gap-3 px-8 py-4 bg-white text-indigo-600 border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Globe size={18} />
              <span className="font-black text-sm tracking-tight">LinkedIn Profile</span>
            </a>

            <a 
              href="https://github.com/farah-bader22" 
              target="_blank" 
              className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl shadow-2xl hover:bg-slate-800 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Terminal size={18} />
              <span className="font-black text-sm tracking-tight">GitHub Repository</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* المهارات - Grid متجاوب */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-16 justify-center md:justify-start">
           <div className="h-px bg-slate-200 flex-1 hidden md:block" />
           <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <Wrench className="text-indigo-600" /> Skills
           </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[3rem] border border-slate-50 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <h3 className="text-xs font-black text-indigo-600 mb-10 uppercase tracking-[0.2em]">{group.category}</h3>
              <div className="space-y-10">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-3">
                    <div className="flex justify-between items-center px-1">
                      <span className="text-[13px] font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">{skill.name}</span>
                      <span className="text-[10px] font-mono text-slate-300">{skill.level}</span>
                    </div>
                    <div className="h-1.5 bg-slate-50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full ${skill.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* المسيرة المهنية - Timeline أفقي متجاوب */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-slate-900 rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.1),transparent)]" />
          
          <h2 className="text-xl font-black mb-20 text-indigo-400 uppercase tracking-widest text-center md:text-right">
             Career Evolution 
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 relative">
            {careerTimeline.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="relative space-y-4 group"
              >
                <div className="text-[11px] font-black text-indigo-500 uppercase tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">
                   {item.year}
                </div>
                <div className="h-px bg-slate-800 w-full mb-4 group-hover:bg-indigo-500 transition-colors" />
                <h4 className="text-[15px] font-black text-white leading-snug group-hover:text-indigo-300 transition-colors">
                   {item.title}
                </h4>
                <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
                   {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer بسيط */}
      <footer className="mt-24 py-12 text-center border-t border-slate-50">
        <p className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">
          Eng. Farah Bader 
        </p>
      </footer>

    </div>
  );
}
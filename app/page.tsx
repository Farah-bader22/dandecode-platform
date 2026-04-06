'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Brain, MousePointer2, ArrowLeft, Gamepad2, Layout, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100" dir="rtl">
      
      {/* Hero Section - الهوية البصرية والرسالة المباشرة */}
      <section className="relative pt-24 pb-20 px-6 text-center overflow-hidden">
        {/* لمسة خلفية هندسية خفيفة */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03),transparent)] -z-10" />
        
        <div className="max-w-5xl mx-auto space-y-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-100"
          >
            <Terminal size={14} /> DandeCode Platform
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-slate-900 leading-[1.1] tracking-tighter"
          >
            نعلّم البرمجة <br /> 
            <span className="text-indigo-600">بأسلوب ذكي .</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto font-bold leading-relaxed"
          >
         منصة تفاعلية لتعليم الأطفال واليافعين أساسيات البرمجة وحل المشكلات بطريقة مبسطة
       
           
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
          >
            <Link href="/play" className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 group text-lg">
               جرب المختبر التفاعلي <Gamepad2 size={22} className="group-hover:scale-110 transition-transform" />
            </Link>
            <Link href="/about" className="px-10 py-4 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-black hover:bg-slate-50 transition-all text-center text-lg">
من انا
            </Link>
          </motion.div>
        </div>
      </section>

      {/* المميزات - هندسية مباشرة */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "تعلم تفاعلي",
              desc: "تبسيط الأكواد المعقدة من خلال واجهات بصرية ذكية تجذب انتباه اليافعين.",
              icon: <MousePointer2 className="text-indigo-600" size={26} />,
            },
            {
              title: "تفكير منطقي",
              desc: "بناء عقلية هندسية تساعد في ترتيب الأفكار وحل المشكلات بأسلوب منظم.",
              icon: <Brain className="text-indigo-600" size={26} />,
            },
            {
              title: "أساس تقني",
              desc: "تأسيس جيل جديد يمتلك الأدوات البرمجية اللازمة للابتكار في المستقبل.",
              icon: <Rocket className="text-indigo-600" size={26} />,
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="p-10 bg-slate-50 rounded-[3rem] border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* الرؤية الشخصية - Brand Section */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="bg-slate-900 rounded-[4rem] p-10 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          {/* تأثير ضوئي خافت */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-0" />
          
          <div className="flex-1 space-y-6 z-10 text-center md:text-right">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">رؤية م. فرح بدر</h2>
            <p className="text-slate-400 font-bold text-lg leading-relaxed max-w-xl">
              كقائدة فريق تقني، صممت DandeCode لتكون أكثر من مجرد منصة تعليمية؛ إنها تطبيق عملي لتحويل التكنولوجيا المعقدة إلى أدوات بسيطة ومتاحة للجميع.
            </p>
            <Link href="/about" className="inline-flex items-center gap-3 px-8 py-3 bg-white text-slate-900 rounded-2xl font-black hover:bg-indigo-50 transition-all group">
               المسيرة المهنية <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

       
<div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center group pointer-events-none sm:pointer-events-auto">
  

  <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-[80px] group-hover:bg-indigo-500/30 transition-all duration-700 opacity-50" />
  

  <div className="relative z-10 flex items-baseline gap-1 select-none transition-transform duration-500 group-hover:scale-110">
    
 
    <span className="text-[120px] md:text-[160px] font-black text-white leading-none tracking-tighter drop-shadow-2xl">
      D
    </span>

  
    <span className="text-4xl md:text-6xl font-mono font-bold text-indigo-400 -translate-y-4 md:-translate-y-8 opacity-80 group-hover:text-amber-400 group-hover:-translate-x-2 transition-all duration-500">
      {"{/}"}
    </span>

    <div className="absolute -bottom-2 left-0 w-0 h-1.5 bg-gradient-to-r from-indigo-500 to-transparent group-hover:w-full transition-all duration-700 rounded-full" />
  </div>


  <div className="absolute top-0 right-0 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-20" />
  <div className="absolute bottom-10 left-0 w-1 h-1 bg-white rounded-full animate-pulse opacity-30" />
</div>
        </div>
      </section>

      {/* Footer بسيط واحترافي */}
      <footer className="py-12 text-center border-t border-slate-50 opacity-40">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
          DandeCode // Engineering by Farah Bader // 2026
        </p>
      </footer>

    </div>
  );
}
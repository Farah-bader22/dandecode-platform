import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DandeCode | م. فرح بدر",
  description: "منصة تعليم البرمجة للأطفال بإشراف المهندسة فرح بدر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full bg-slate-50 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900">
        
        {/* Navigation Bar - تصميم زجاجي متجاوب */}
        <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-5 md:px-10 py-4">
            
            {/* Brand Name */}
            <Link href="/" className="group relative">
              <span className="text-2xl font-black tracking-tighter text-slate-900 group-hover:opacity-80 transition-opacity">
                Dande<span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Code</span>
              </span>
              <div className="absolute -bottom-1 right-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full rounded-full" />
            </Link>

            {/* Links - متجاوبة ومرتبة */}
            <div className="flex gap-4 md:gap-8 items-center">
              <div className="flex gap-5 md:gap-8 text-[12px] md:text-[13px] font-bold text-slate-500">
                <Link href="/" className="hover:text-indigo-600 transition-colors">الرئيسية</Link>
                {/* رابط المختبر التفاعلي (اللعبة) */}
                <Link href="/play" className="hover:text-indigo-600 transition-colors">المختبر</Link>
                <Link href="/about" className="hover:text-indigo-600 transition-colors text-indigo-600/80">من أنا</Link>
              </div>
            </div>

          </div>
        </nav>

        {/* Content Wrapper */}
        <main className="pt-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="py-12 px-6 text-center bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
               © 2026 DandeCode Lab // Crafted with 🤍 by Eng. Farah Bader
             </p>
          </div>
        </footer>

      </body>
    </html>
  );
}
'use client';

// استدعاء اللعبة من المجلد اللي إنتِ ورجيتيني إياه في الصورة
import CatMazeGame from '../components/CatMazeGame'; 

export default function PlayPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-black text-slate-900 mb-3">مختبر DandeCode التفاعلي</h1>
        <p className="text-slate-500 font-bold">تعلم المنطق البرمجي بمساعدة القطة الذكية!</p>
      </div>

      {/* هنا بنحط المكون اللي إنتِ تعبتِ عليه */}
      <div className="flex justify-center">
        <CatMazeGame />
      </div>
    </div>
  );
}
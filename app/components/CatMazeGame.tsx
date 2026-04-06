'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Terminal, Code2, Zap, Trash2, ChevronRight, Smartphone, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GRID_SIZE = 7; 
const START_POS = { x: 0, y: 0 };
const END_POS = { x: 6, y: 6 };
const OBSTACLES = [
  { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 3, y: 0 }, { x: 3, y: 1 }, 
  { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 5, y: 2 }, { x: 5, y: 3 }
];

export function CatMazeGame() {
  const [catPos, setCatPos] = useState(START_POS);
  const [commands, setCommands] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>(["// DandeCode Engine v4.0", "> Ready."]);
  const consoleEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const addLog = (msg: string) => {
    setLogs(prev => [...prev, `> ${msg}`]);
  };

  const runCode = async () => {
    if (commands.length === 0) return;
    setIsRunning(true);
    setCatPos(START_POS);
    addLog("Executing script...");
    
    let currentPos = { ...START_POS };
    for (let i = 0; i < commands.length; i++) {
      const cmd = commands[i];
      let nextPos = { ...currentPos };

      if (cmd === 'cat.moveRight();') nextPos.x += 1;
      if (cmd === 'cat.moveLeft();') nextPos.x -= 1;
      if (cmd === 'cat.moveUp();') nextPos.y -= 1;
      if (cmd === 'cat.moveDown();') nextPos.y += 1;

      if (nextPos.x < 0 || nextPos.x >= GRID_SIZE || nextPos.y < 0 || nextPos.y >= GRID_SIZE ||
          OBSTACLES.some(obs => obs.x === nextPos.x && obs.y === nextPos.y)) {
        addLog(`RuntimeError: Collision!`);
        setIsRunning(false);
        return;
      }
      currentPos = nextPos;
      setCatPos(currentPos);
      await new Promise(res => setTimeout(res, 450));
    }

    if (currentPos.x === END_POS.x && currentPos.y === END_POS.y) {
      addLog("SUCCESS: Goal reached! 🎉");
    }
    setIsRunning(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen p-2 md:p-6 font-sans text-right selection:bg-indigo-100" dir="rtl">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
            <Zap size={18} className="text-white" fill="currentColor" />
          </div>
          <h1 className="text-lg font-black text-slate-900 tracking-tight">Dande<span className="text-indigo-600">Code</span></h1>
        </div>
        <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
           م. فرح بدر
        </span>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        
        {/* Simulation Grid */}
        <div className="w-full bg-white p-3 rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between mb-3 px-2">
            <h3 className="text-[9px] font-bold text-slate-400 flex items-center gap-2 uppercase tracking-widest">
              <Monitor size={12} /> Grid_Simulation
            </h3>
          </div>
          
          <div className="w-full aspect-square max-w-[400px] mx-auto grid grid-cols-7 gap-1 bg-slate-50 p-2 rounded-xl border border-slate-200 shadow-inner">
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
              const x = i % GRID_SIZE;
              const y = Math.floor(i / GRID_SIZE);
              const isCat = catPos.x === x && catPos.y === y;
              const isTarget = END_POS.x === x && END_POS.y === y;
              const isObstacle = OBSTACLES.some(o => o.x === x && o.y === y);

              return (
                <div key={i} className={`aspect-square rounded-md flex items-center justify-center relative transition-all duration-300 border ${isObstacle ? 'bg-slate-300 border-slate-400' : 'bg-white border-slate-200'}`}>
                  {isObstacle && <span className="text-[10px] md:text-lg">🧱</span>}
                  {isTarget && <span className="text-sm md:text-2xl z-10">🏁</span>}
                  {isCat && (
                    <motion.div layoutId="cat" className="text-xl md:text-3xl z-20 drop-shadow-md">🐈</motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* JS Terminal */}
          <div className="mt-4 bg-[#0a0a0a] rounded-xl p-3 h-24 overflow-y-auto text-[10px] font-mono border border-zinc-800">
            {logs.map((log, i) => (
              <div key={i} className={`${log.includes('Error') ? 'text-red-400' : log.includes('SUCCESS') ? 'text-green-400' : 'text-zinc-500'}`}>
                {log}
              </div>
            ))}
            <div ref={consoleEndRef} />
          </div>
        </div>

        {/* Command Center - الموبايل أولاً */}
        <div className="w-full space-y-4">
          
          {/* Method Library - أصلحنا التداخل هنا */}
          <div className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm">
            <h3 className="text-[9px] font-bold text-slate-400 mb-3 uppercase tracking-widest text-center md:text-right">Cat_Methods()</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'cat.moveUp();', label: 'moveUp()', color: 'text-amber-600' },
                { id: 'cat.moveDown();', label: 'moveDown()', color: 'text-amber-600' },
                { id: 'cat.moveLeft();', label: 'moveLeft()', color: 'text-indigo-600' },
                { id: 'cat.moveRight();', label: 'moveRight()', color: 'text-indigo-600' },
              ].map(cmd => (
                <button 
                  key={cmd.id}
                  onClick={() => !isRunning && setCommands([...commands, cmd.id])}
                  className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-center text-[10px] font-mono hover:bg-indigo-50 active:scale-95 transition-all shadow-sm flex flex-col items-center justify-center min-h-[50px]"
                >
                  <span className={`${cmd.color} font-bold leading-tight`}>{cmd.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Script Editor */}
          <div className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm min-h-[150px]">
             <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest italic">main.js</span>
                <button onClick={() => setCommands([])} className="text-red-200"><Trash2 size={16} /></button>
             </div>
             <div className="space-y-1.5 overflow-x-hidden">
               <AnimatePresence>
                 {commands.map((c, i) => (
                   <motion.div 
                      initial={{ opacity: 0, x: -5 }} 
                      animate={{ opacity: 1, x: 0 }}
                      key={i} 
                      className="flex items-center gap-2 bg-indigo-50/50 px-2 py-1.5 rounded-lg border border-indigo-50/50 text-[10px] font-mono text-slate-600 overflow-hidden"
                   >
                     <span className="text-indigo-200 w-3 text-[8px]">{i + 1}</span>
                     <span className="truncate leading-none"><span className="text-indigo-500 font-bold italic">await</span> {c}</span>
                   </motion.div>
                 ))}
               </AnimatePresence>
               {commands.length === 0 && <p className="text-center text-slate-200 text-[10px] py-8 italic font-mono">// Start coding...</p>}
             </div>
          </div>

          {/* Main Actions */}
          <div className="grid grid-cols-4 gap-2 mb-10">
            <button 
              onClick={runCode}
              disabled={isRunning || commands.length === 0}
              className="col-span-3 bg-indigo-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg disabled:opacity-20 active:scale-95 transition-all text-xs"
            >
              <Zap size={16} fill="currentColor" /> RUN SCRIPT
            </button>
            <button 
              onClick={() => {setCommands([]); setCatPos(START_POS); setLogs(["> Ready."]); setIsRunning(false);}}
              className="bg-slate-200 text-slate-500 rounded-2xl flex items-center justify-center transition-all shadow-sm"
            >
              <RotateCcw size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 p-1 bg-white border-t border-slate-100 text-center text-[8px] text-slate-300 font-bold uppercase tracking-widest">
        <Smartphone size={8} className="inline ml-1" /> Ultra-Responsive Engine // m. farah bader
      </div>
    </div>
  );
}
export default CatMazeGame;
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity, Heart, Thermometer, ArrowLeft, CheckCircle, Smartphone } from 'lucide-react';
import { Button, Card, CardContent } from '@/components/ui';

export default function KioskVitals() {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<{
    bp?: string;
    pulse?: number;
    temp?: number;
  }>({});

  const scanSteps = [
    { title: 'Blood Pressure', icon: Activity, color: 'text-green-600', instruction: 'Insert arm into cuff and relax.' },
    { title: 'Heart Rate', icon: Heart, color: 'text-red-600', instruction: 'Place finger on the sensor light.' },
    { title: 'Temperature', icon: Thermometer, color: 'text-orange-600', instruction: 'Lean forward to the forehead scanner.' },
  ];

  useEffect(() => {
    if (step < 3) {
      let p = 0;
      const interval = setInterval(() => {
        p += 2;
        setProgress(p);
        if (p >= 100) {
          clearInterval(interval);
          completeStep(step);
        }
      }, 50); // 2.5 seconds per scan
      return () => clearInterval(interval);
    }
  }, [step]);

  const completeStep = (currentStep: number) => {
    // Mock Data Generation
    if (currentStep === 0) setResults(r => ({ ...r, bp: '120/80' }));
    if (currentStep === 1) setResults(r => ({ ...r, pulse: 72 }));
    if (currentStep === 2) setResults(r => ({ ...r, temp: 98.6 }));

    setTimeout(() => {
      setStep(s => s + 1);
      setProgress(0);
    }, 500);
  };

  const currentscan = scanSteps[step];

  if (step >= 3) {
    return (
      <div className="max-w-2xl mx-auto py-12 text-center space-y-8">
        <div className="inline-flex p-6 bg-green-100 text-green-600 rounded-full mb-4">
          <CheckCircle size={64} />
        </div>
        <h2 className="text-4xl font-bold text-[var(--gray-900)]">Checkup Complete!</h2>
        <p className="text-xl text-[var(--gray-600)]">Your vitals are within normal range.</p>
        
        <div className="grid grid-cols-3 gap-6 text-left">
           <Card className="bg-green-50 border-green-200">
             <CardContent className="p-6">
                <p className="text-sm font-bold text-green-700 uppercase">BP</p>
                <p className="text-3xl font-bold text-[var(--gray-900)]">{results.bp}</p>
             </CardContent>
           </Card>
           <Card className="bg-red-50 border-red-200">
             <CardContent className="p-6">
                <p className="text-sm font-bold text-red-700 uppercase">Pulse</p>
                <p className="text-3xl font-bold text-[var(--gray-900)]">{results.pulse} <span className="text-base text-gray-500 font-normal">bpm</span></p>
             </CardContent>
           </Card>
           <Card className="bg-orange-50 border-orange-200">
             <CardContent className="p-6">
                <p className="text-sm font-bold text-orange-700 uppercase">Temp</p>
                <p className="text-3xl font-bold text-[var(--gray-900)]">{results.temp}°F</p>
             </CardContent>
           </Card>
        </div>

        <div className="flex gap-4 justify-center pt-8">
           <Link href="/kiosk">
             <Button size="lg" variant="outline" className="text-xl px-8 py-6 h-auto">Run Again</Button>
           </Link>
           <Link href="/kiosk/telemedicine">
             <Button size="lg" className="text-xl px-8 py-6 h-auto gap-3">
               <Smartphone size={24} /> Send to Doctor
             </Button>
           </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12">
      <Link href="/kiosk">
        <Button variant="ghost" className="mb-8 gap-2 hover:bg-transparent pl-0 hover:pl-2 transition-all">
          <ArrowLeft /> Cancel Checkup
        </Button>
      </Link>

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[var(--gray-900)] mb-4">{currentscan.title}</h2>
        <p className="text-2xl text-[var(--gray-500)]">{currentscan.instruction}</p>
      </div>

      <div className="relative w-full h-80 bg-white rounded-3xl shadow-lg border border-[var(--gray-200)] flex items-center justify-center overflow-hidden mb-12">
         {/* Instruction Graphics */}
         <motion.div 
           animate={{ scale: [1, 1.1, 1] }}
           transition={{ duration: 2, repeat: Infinity }}
           className={`p-12 rounded-full bg-opacity-10 ${currentscan.color.replace('text-', 'bg-')}`}
         >
           <currentscan.icon size={120} className={currentscan.color} />
         </motion.div>
         
         {/* Scanning Overlay Line */}
         <motion.div 
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-1 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] z-10 opactiy-50"
         />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between text-lg font-medium text-[var(--gray-600)]">
           <span>Scanning...</span>
           <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-4 w-full bg-[var(--gray-100)] rounded-full overflow-hidden">
           <div 
             className="h-full bg-[var(--primary)] transition-all duration-75"
             style={{ width: `${progress}%` }}
           />
        </div>
      </div>
    </div>
  );
}

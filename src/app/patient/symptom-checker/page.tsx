'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Send, AlertCircle, CheckCircle, ArrowRight, RefreshCcw, Stethoscope, Activity, FileText, Brain, Sparkles, ChevronRight } from 'lucide-react';
import { Button, Card, CardContent, Input, TextArea, Badge, SeverityBadge, Spinner } from '@/components/ui';
import Link from 'next/link';

export default function SymptomChecker() {
  const [step, setStep] = useState<'input' | 'analyzing' | 'result'>('input');
  const [symptoms, setSymptoms] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleAnalyze = () => {
    if (!symptoms.trim()) return;
    setStep('analyzing');
    // Simulate AI processing time
    setTimeout(() => {
      setStep('result');
    }, 3000);
  };

  const reset = () => {
    setSymptoms('');
    setStep('input');
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Simulate voice input
    if (!isRecording) {
      setTimeout(() => {
        setSymptoms((prev) => prev + (prev ? ' ' : '') + "I have been feeling feverish since yesterday and have a severe headache.");
        setIsRecording(false);
      }, 2000);
    }
  };

  // Mock Result Data based on simple keyword matching (for demo)
  const getResult = () => {
    const text = symptoms.toLowerCase();
    if (text.includes('chest') || text.includes('heart')) {
      return {
        condition: 'Potential Cardiac Issue',
        severity: 'high' as const,
        confidence: 92,
        desc: 'Symptoms suggest a potential cardiac anomaly. Immediate medical attention is recommended.',
        action: 'consult_urgent'
      };
    } else if (text.includes('fever') && text.includes('headache')) {
      return {
        condition: 'Viral Fever / Flu',
        severity: 'medium' as const,
        confidence: 85,
        desc: 'Common symptoms of viral infection. Hydration and rest are advised, but consult a doctor if fever persists.',
        action: 'consult'
      };
    } else {
      return {
        condition: 'General Fatigue / Dehydration',
        severity: 'low' as const,
        confidence: 78,
        desc: 'Symptoms appear mild. Ensure proper hydration and rest.',
        action: 'self_care'
      };
    }
  };

  const result = getResult();

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-8 font-sans">
      {/* Header Section */}
      <div className="text-center relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl -z-10"></div>
         <Badge className="bg-teal-50 text-teal-600 border-teal-200 mb-4 hover:bg-teal-100 transition-colors cursor-default">
            <Sparkles size={12} className="mr-1" /> AI Powered Diagnosis
         </Badge>
         <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">How are you feeling today?</h1>
         <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Describe your symptoms in your local language. Our AI will analyze them instantly and guide you to the right care.
         </p>
      </div>

      <AnimatePresence mode="wait">
        {step === 'input' && (
          <motion.div
            key="input"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden relative">
               {/* Decorative Gradient Line */}
               <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500"></div>

               <div className="p-8 md:p-12 space-y-8">
                  <div>
                     <label className="block text-lg font-bold text-slate-800 mb-4">
                        Describe your symptoms
                     </label>
                     <div className="relative group">
                        <textarea
                           placeholder="e.g., I have a headache, high fever, and body pain since last night..."
                           value={symptoms}
                           onChange={(e) => setSymptoms(e.target.value)}
                           rows={6}
                           className="w-full bg-slate-50 rounded-3xl p-6 text-lg text-slate-900 placeholder:text-slate-400 border-2 border-transparent focus:border-blue-500/20 focus:bg-white focus:shadow-lg transition-all resize-none outline-none"
                        />
                        <button
                           onClick={toggleRecording}
                           className={`
                              absolute right-4 bottom-4 p-4 rounded-2xl transition-all shadow-md
                              ${isRecording 
                                 ? 'bg-rose-500 text-white animate-pulse shadow-rose-500/30' 
                                 : 'bg-white text-slate-600 hover:text-blue-600 hover:shadow-lg border border-slate-100'
                              }
                           `}
                        >
                           <Mic size={24} />
                        </button>
                     </div>
                     {isRecording && (
                        <p className="text-sm text-rose-500 mt-3 animate-pulse font-bold flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-rose-500"></span> Listening...
                        </p>
                     )}
                  </div>

                  <div>
                     <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Select</p>
                     <div className="flex flex-wrap gap-3">
                        {['Fever and cough', 'Stomach pain', 'Dizziness', 'Skin rash', 'Migraine', 'Joint Pain'].map((tag) => (
                           <button
                              key={tag}
                              onClick={() => setSymptoms(tag)}
                              className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-slate-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium text-sm"
                           >
                              {tag}
                           </button>
                        ))}
                     </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                     <Button 
                        onClick={handleAnalyze} 
                        className={`h-16 px-10 rounded-2xl text-lg font-bold transition-all ${
                           !symptoms.trim() 
                              ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                              : 'bg-slate-900 text-white hover:bg-slate-800 hover:scale-[1.02] shadow-xl shadow-slate-900/20'
                        }`}
                        disabled={!symptoms.trim()}
                     >
                        Analyze Symptoms <Brain size={20} className="ml-2" />
                     </Button>
                  </div>
               </div>
            </div>
          </motion.div>
        )}

        {step === 'analyzing' && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <div className="relative w-32 h-32 mb-8">
               <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-ping"></div>
               <div className="absolute inset-0 border-[6px] border-blue-100 rounded-full"></div>
               <div className="absolute inset-0 border-[6px] border-blue-600 rounded-full border-t-transparent animate-spin"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="text-blue-600" size={40} />
               </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Analyzing Symptoms...</h3>
            <p className="text-slate-500 text-lg animate-pulse">Checking against medical database</p>
          </motion.div>
        )}

        {step === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.4 }}
            className="space-y-6"
          >
            {/* Main Result Card */}
            <div className={`relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl border-2 ${
                  result.severity === 'high' ? 'border-rose-100 shadow-rose-900/5' : 
                  result.severity === 'medium' ? 'border-orange-100 shadow-orange-900/5' : 'border-teal-100 shadow-teal-900/5'
            }`}>
               {/* Banner */}
               <div className={`p-8 ${
                  result.severity === 'high' ? 'bg-rose-50' : 
                  result.severity === 'medium' ? 'bg-orange-50' : 'bg-teal-50'
               }`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                     <div>
                        <div className="flex items-center gap-2 mb-2">
                           <Activity className={`w-5 h-5 ${
                              result.severity === 'high' ? 'text-rose-600' : 
                              result.severity === 'medium' ? 'text-orange-600' : 'text-teal-600'
                           }`} />
                           <span className={`text-xs font-bold uppercase tracking-wider ${
                              result.severity === 'high' ? 'text-rose-600' : 
                              result.severity === 'medium' ? 'text-orange-600' : 'text-teal-600'
                           }`}>Analysis Report</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{result.condition}</h2>
                     </div>
                     <div className="flex items-center gap-4 bg-white/60 p-2 rounded-2xl backdrop-blur-sm border border-white/50">
                        <div className="text-right">
                           <p className="text-xs font-bold text-slate-400">AI Confidence</p>
                           <p className="text-xl font-bold text-slate-900">{result.confidence}%</p>
                        </div>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-lg ${
                           result.severity === 'high' ? 'bg-rose-500' : 
                           result.severity === 'medium' ? 'bg-orange-500' : 'bg-teal-500'
                        }`}>
                           A+
                        </div>
                     </div>
                  </div>
               </div>

               {/* Content */}
               <div className="p-8 md:p-10 space-y-10">
                  <div className="prose prose-lg text-slate-600 max-w-none">
                     <p className="text-lg leading-relaxed">{result.desc}</p>
                  </div>

                  {/* Action Box */}
                  <div>
                     <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Recommended Next Step</h4>
                     
                     {result.action === 'consult_urgent' ? (
                        <div className="bg-rose-50 rounded-3xl p-8 border border-rose-100 flex flex-col md:flex-row items-center gap-8">
                           <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                              <AlertCircle className="text-rose-600 w-8 h-8" />
                           </div>
                           <div className="flex-1 text-center md:text-left">
                              <h5 className="text-xl font-bold text-rose-800 mb-2">Consult a Doctor Immediately</h5>
                              <p className="text-rose-600/80 font-medium">Potential severity detected. Please speak with a specialist now.</p>
                           </div>
                           <Link href="/patient/consultations/book">
                              <Button className="h-14 px-8 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold shadow-lg shadow-rose-600/20">
                                 Book Urgent Call
                              </Button>
                           </Link>
                        </div>
                     ) : result.action === 'consult' ? (
                        <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100 flex flex-col md:flex-row items-center gap-8">
                           <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                              <Stethoscope className="text-orange-600 w-8 h-8" />
                           </div>
                           <div className="flex-1 text-center md:text-left">
                              <h5 className="text-xl font-bold text-orange-800 mb-2">Schedule a Consultation</h5>
                              <p className="text-orange-600/80 font-medium">A general physician consultation is recommended to confirm.</p>
                           </div>
                           <Link href="/patient/consultations/book">
                              <Button className="h-14 px-8 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-lg shadow-orange-600/20">
                                 Book Appointment
                              </Button>
                           </Link>
                        </div>
                     ) : (
                        <div className="bg-teal-50 rounded-3xl p-8 border border-teal-100 flex flex-col md:flex-row items-center gap-8">
                           <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                              <CheckCircle className="text-teal-600 w-8 h-8" />
                           </div>
                           <div className="flex-1 text-center md:text-left">
                              <h5 className="text-xl font-bold text-teal-800 mb-2">Home Care & Rest</h5>
                              <p className="text-teal-600/80 font-medium">Symptoms appear mild. Monitor for 24 hours.</p>
                           </div>
                           <Button variant="outline" className="h-14 px-8 rounded-xl border-2 border-teal-200 text-teal-700 font-bold hover:bg-teal-100">
                              View Home Remedies
                           </Button>
                        </div>
                     )}
                  </div>
               </div>
            </div>

            <div className="flex justify-center pt-4">
               <button 
                  onClick={reset}
                  className="group flex items-center gap-2 px-6 py-3 rounded-full text-slate-500 font-bold hover:bg-slate-100 transition-all"
               >
                  <RefreshCcw size={18} className="group-hover:-rotate-180 transition-transform duration-500" />
                  Check Another Symptom
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

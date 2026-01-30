'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Send, AlertCircle, CheckCircle, ArrowRight, RefreshCcw, Stethoscope, Activity, FileText, Brain, Sparkles, ChevronRight, Zap, MicOff } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/20 py-12">
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-10 bg-grid-pattern opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section - Minimal */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[var(--border-default)] shadow-sm mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[var(--text-secondary)]">AI Powered Diagnosis</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
            How are you feeling today?
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Describe your symptoms in your language. Our AI will analyze them instantly.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {step === 'input' && (
            <motion.div
              key="input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-3xl shadow-lg border border-[var(--border-default)] overflow-hidden">
                {/* Gradient Top Border */}
                <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500"></div>
                
                <div className="p-8 md:p-10 space-y-8">
                  {/* Input Section */}
                  <div>
                    <label className="block text-base font-bold text-[var(--text-primary)] mb-4">
                      Describe your symptoms
                    </label>
                    <div className="relative">
                      <textarea
                        placeholder="e.g., I have a headache, high fever, and body pain since last night..."
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                        rows={6}
                        className="w-full bg-[var(--gray-50)] rounded-2xl p-6 text-base text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] border-2 border-transparent focus:border-[var(--primary)]/30 focus:bg-white focus:shadow-lg transition-all resize-none outline-none"
                      />
                      
                      {/* Voice Button */}
                      <button
                        onClick={toggleRecording}
                        className={`absolute right-4 bottom-4 p-3.5 rounded-xl transition-all shadow-md ${
                          isRecording 
                            ? 'bg-red-500 text-white animate-pulse' 
                            : 'bg-white text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)] border border-[var(--border-default)]'
                        }`}
                      >
                        {isRecording ? <MicOff size={20} /> : <Mic size={20} />}
                      </button>
                    </div>
                    
                    {isRecording && (
                      <p className="text-sm text-red-500 mt-3 font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> 
                        Listening...
                      </p>
                    )}
                  </div>

                  {/* Quick Select */}
                  <div>
                    <p className="text-sm font-bold text-[var(--text-tertiary)] uppercase tracking-wide mb-4">
                      Quick Select
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Fever and cough', 'Stomach pain', 'Dizziness', 'Skin rash', 'Migraine', 'Joint Pain'].map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSymptoms(tag)}
                          className="px-4 py-2 bg-white border border-[var(--border-default)] rounded-full text-sm text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)] transition-all font-medium"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-end pt-4">
                    <Button 
                      onClick={handleAnalyze} 
                      className={`h-14 px-8 rounded-xl text-base font-bold transition-all flex items-center gap-2 ${
                        !symptoms.trim() 
                          ? 'bg-[var(--gray-200)] text-[var(--text-tertiary)] cursor-not-allowed' 
                          : 'bg-[var(--text-primary)] text-white hover:bg-[var(--gray-800)] hover:shadow-xl shadow-lg'
                      }`}
                      disabled={!symptoms.trim()}
                    >
                      Analyze Symptoms 
                      <Brain size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'analyzing' && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <div className="relative w-32 h-32 mb-8">
                <div className="absolute inset-0 bg-purple-500/10 rounded-full animate-ping"></div>
                <div className="absolute inset-0 border-4 border-purple-100 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="text-purple-600" size={40} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-3">Analyzing Symptoms...</h3>
              <p className="text-[var(--text-secondary)] text-lg animate-pulse">Checking against medical database</p>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="space-y-6"
            >
              {/* Result Card */}
              <div className={`bg-white rounded-3xl overflow-hidden shadow-xl border-2 ${
                result.severity === 'high' ? 'border-red-100' : 
                result.severity === 'medium' ? 'border-orange-100' : 'border-teal-100'
              }`}>
                {/* Header */}
                <div className={`p-8 ${
                  result.severity === 'high' ? 'bg-red-50' : 
                  result.severity === 'medium' ? 'bg-orange-50' : 'bg-teal-50'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Activity className={`w-5 h-5 ${
                          result.severity === 'high' ? 'text-red-600' : 
                          result.severity === 'medium' ? 'text-orange-600' : 'text-teal-600'
                        }`} />
                        <span className={`text-xs font-bold uppercase tracking-wider ${
                          result.severity === 'high' ? 'text-red-600' : 
                          result.severity === 'medium' ? 'text-orange-600' : 'text-teal-600'
                        }`}>Analysis Complete</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                        {result.condition}
                      </h2>
                    </div>
                    
                    {/* Confidence Badge */}
                    <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-sm">
                      <div className="text-right">
                        <p className="text-xs font-bold text-[var(--text-tertiary)] mb-1">AI Confidence</p>
                        <p className="text-2xl font-bold text-[var(--text-primary)]">{result.confidence}%</p>
                      </div>
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                        result.severity === 'high' ? 'bg-red-500' : 
                        result.severity === 'medium' ? 'bg-orange-500' : 'bg-teal-500'
                      }`}>
                        A+
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 space-y-8">
                  <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
                    {result.desc}
                  </p>

                  {/* Recommended Action */}
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-tertiary)] uppercase tracking-wide mb-4">
                      Recommended Next Step
                    </h4>
                    
                    {result.action === 'consult_urgent' ? (
                      <div className="bg-red-50 rounded-2xl p-6 border border-red-100 flex flex-col md:flex-row items-center gap-6">
                        <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                          <AlertCircle className="text-red-600 w-7 h-7" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h5 className="text-lg font-bold text-red-800 mb-2">Consult a Doctor Immediately</h5>
                          <p className="text-red-600/80 font-medium text-sm">Potential severity detected. Please speak with a specialist now.</p>
                        </div>
                        <Link href="/patient/consultations/book">
                          <Button className="h-12 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg">
                            Book Urgent Call
                          </Button>
                        </Link>
                      </div>
                    ) : result.action === 'consult' ? (
                      <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 flex flex-col md:flex-row items-center gap-6">
                        <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                          <Stethoscope className="text-orange-600 w-7 h-7" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h5 className="text-lg font-bold text-orange-800 mb-2">Schedule a Consultation</h5>
                          <p className="text-orange-600/80 font-medium text-sm">A general physician consultation is recommended to confirm.</p>
                        </div>
                        <Link href="/patient/consultations/book">
                          <Button className="h-12 px-6 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-lg">
                            Book Appointment
                          </Button>
                        </Link>
                      </div>
                    ) : (
                      <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100 flex flex-col md:flex-row items-center gap-6">
                        <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                          <CheckCircle className="text-teal-600 w-7 h-7" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h5 className="text-lg font-bold text-teal-800 mb-2">Home Care & Rest</h5>
                          <p className="text-teal-600/80 font-medium text-sm">Symptoms appear mild. Monitor for 24 hours.</p>
                        </div>
                        <Button variant="outline" className="h-12 px-6 rounded-xl border-2 border-teal-200 text-teal-700 font-bold hover:bg-teal-50">
                          View Home Remedies
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <div className="flex justify-center pt-4">
                <button 
                  onClick={reset}
                  className="group flex items-center gap-2 px-6 py-3 rounded-xl text-[var(--text-secondary)] font-semibold hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-[var(--border-default)]"
                >
                  <RefreshCcw size={18} className="group-hover:-rotate-180 transition-transform duration-500" />
                  Check Another Symptom
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

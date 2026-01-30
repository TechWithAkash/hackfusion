'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Send, AlertCircle, CheckCircle, ArrowRight, RefreshCcw, Stethoscope, Activity, FileText } from 'lucide-react';
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
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold text-[var(--gray-900)]">AI Symptom Checker</h1>
        <p className="text-[var(--gray-600)]">Describe your symptoms in your local language. Our AI will analyze them instantly.</p>
      </div>

      <AnimatePresence mode="wait">
        {step === 'input' && (
          <motion.div
            key="input"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                    What are you feeling?
                  </label>
                  <div className="relative">
                    <TextArea
                      placeholder="e.g., I have a headache and high fever..."
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      rows={6}
                      className="resize-none pr-12 text-lg"
                    />
                    <button
                      onClick={toggleRecording}
                      className={`
                        absolute right-3 bottom-3 p-2 rounded-full transition-all
                        ${isRecording ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-gray-100 text-gray-500 hover:bg-blue-50 hover:text-blue-600'}
                      `}
                    >
                      <Mic size={20} />
                    </button>
                  </div>
                  {isRecording && (
                    <p className="text-xs text-red-500 mt-2 animate-pulse font-medium">Listening...</p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 text-sm text-[var(--gray-500)]">
                  <span>Common inputs:</span>
                  {['Fever and cough', 'Stomach pain', 'Dizziness', 'Skin rash'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSymptoms(tag)}
                      className="px-3 py-1 bg-[var(--gray-100)] rounded-full hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <div className="pt-4">
                  <Button 
                    onClick={handleAnalyze} 
                    className="w-full h-12 text-lg"
                    disabled={!symptoms.trim()}
                  >
                    Analyze Symptoms <Activity size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {step === 'analyzing' && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center py-12"
          >
            <div className="relative w-24 h-24 mb-6">
              <div className="absolute inset-0 border-4 border-[var(--primary-light)] rounded-full animate-ping"></div>
              <div className="absolute inset-0 border-4 border-[var(--primary)] rounded-full border-t-transparent animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Activity className="text-[var(--primary)]" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--gray-900)] mb-2">Analyzing...</h3>
            <p className="text-[var(--gray-500)]">Consulting medical knowledge base</p>
          </motion.div>
        )}

        {step === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className={`border-t-4 ${result.severity === 'high' ? 'border-t-red-500' : result.severity === 'medium' ? 'border-t-orange-500' : 'border-t-green-500'}`}>
              <CardContent className="p-8 space-y-8">
                {/* Result Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-1">{result.condition}</h2>
                    <p className="text-[var(--gray-500)] flex items-center gap-2">
                       Confidence Score: <span className="font-semibold text-[var(--primary)]">{result.confidence}%</span>
                    </p>
                  </div>
                  <SeverityBadge severity={result.severity} className="text-lg px-4 py-1" />
                </div>

                {/* Description */}
                <div className="bg-[var(--gray-50)] p-4 rounded-xl border border-[var(--gray-200)]">
                  <p className="text-[var(--gray-700)] leading-relaxed">
                    {result.desc}
                  </p>
                </div>

                {/* Recommended Action */}
                <div>
                  <h4 className="text-sm font-bold text-[var(--gray-900)] uppercase tracking-wide mb-3">
                    Recommended Action
                  </h4>
                  {result.action === 'consult_urgent' ? (
                     <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex items-start gap-4">
                        <AlertCircle className="text-red-500 shrink-0 mt-1" size={24} />
                        <div>
                          <h5 className="font-bold text-red-700">Consult a Doctor Immediately</h5>
                          <p className="text-red-600 text-sm mt-1">Due to the potential severity, we recommend connecting with a specialist right now.</p>
                          <Link href="/patient/consultations/book">
                            <Button variant="danger" className="mt-4 w-full sm:w-auto">Book Urgent Consultation</Button>
                          </Link>
                        </div>
                     </div>
                  ) : result.action === 'consult' ? (
                     <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex items-start gap-4">
                        <Stethoscope className="text-orange-500 shrink-0 mt-1" size={24} />
                        <div>
                          <h5 className="font-bold text-orange-700">Schedule a Consultation</h5>
                          <p className="text-orange-600 text-sm mt-1">It is advisable to speak with a General Physician to confirm diagnosis.</p>
                          <Link href="/patient/consultations/book">
                            <Button variant="primary" className="mt-4 w-full sm:w-auto">Book Appointment</Button>
                          </Link>
                        </div>
                     </div>
                  ) : (
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start gap-4">
                        <CheckCircle className="text-green-500 shrink-0 mt-1" size={24} />
                        <div>
                          <h5 className="font-bold text-green-700">Home Care & Monitor</h5>
                          <p className="text-green-600 text-sm mt-1">Rest and hydration recommended. Monitor symptoms for 24 hours.</p>
                          <Button variant="outline" className="mt-4 w-full sm:w-auto border-green-200 text-green-700 hover:bg-green-100">View Home Remedies</Button>
                        </div>
                     </div>
                  )}
                </div>

                <div className="flex justify-center border-t border-[var(--border-color)] pt-6">
                  <button 
                    onClick={reset}
                    className="text-[var(--gray-500)] hover:text-[var(--primary)] flex items-center gap-2 text-sm font-medium transition-colors"
                  >
                    <RefreshCcw size={16} /> Check Another Symptom
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

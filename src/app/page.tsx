'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, Activity, Users, MapPin, Smartphone, ShieldCheck, 
  Video, Globe, PlayCircle, TrendingDown, Clock, IndianRupee, 
  Zap, CheckCircle, AlertCircle, Sparkles, Heart, Brain, Shield, Phone 
} from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Button, Card, CardContent } from '@/components/ui';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-grow">
        {/* === CENTERED HERO SECTION: The "Focused" Version === */}
        <section className="relative  overflow-hidden bg-white">
          
          {/* BACKGROUND: Symmetrical Glows for Central Focus */}
          <div className="absolute inset-0 z-0 pointer-events-none">
             {/* Grid */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
             
             {/* Central Radiant Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-50/50 rounded-full blur-[100px] opacity-60"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            
            {/* 1. BADGE (Centered) */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm mb-10 transition-transform hover:scale-105 cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-600 tracking-wider uppercase">Live in 3 Rural Districts</span>
            </div>

            {/* 2. HEADLINE (Centered, Massive, Poppins) */}
            <h1 className="max-w-4xl mx-auto text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
              Healthcare for the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 animate-gradient">
                Next Billion.
              </span>
            </h1>

            {/* 3. SUBTEXT (Centered, Readable) */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mb-10 font-medium">
              <span className="text-slate-900 font-semibold">No Internet? No Problem.</span> The first AI-powered telemedicine platform designed for rural India. Instant triage in 12+ languages.
            </p>

            {/* 4. ACTIONS (Centered Row) */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
              <Link href="/patient" className="group w-full sm:w-auto">
                <Button className="h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-teal-900/10 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-lg font-semibold flex items-center justify-center gap-2">
                   Try Symptom Checker
                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-teal-400" />
                </Button>
              </Link>
              <Link href="/kiosk" className="w-full sm:w-auto">
                <div className="h-14 px-8 rounded-full bg-white text-slate-700 border border-slate-200 hover:border-teal-200 hover:bg-teal-50/30 cursor-pointer hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-lg font-semibold flex items-center justify-center gap-3 shadow-sm hover:shadow-md">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                     <PlayCircle className="w-4 h-4 text-teal-600 fill-teal-600/20" />
                  </div>
                  <span>See How It Works</span>
                </div>
              </Link>
            </div>

            {/* 5. HERO VISUAL (Centered, Large, Cinematic) */}
            <div className="relative w-full max-w-5xl mx-auto perspective-1000 group">
                {/* Back Glow behind image */}
               <div className="absolute inset-x-10 top-10 bottom-0 bg-gradient-to-t from-teal-500 to-blue-600 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>

               {/* The Main Image Card */}
               <div className="relative bg-white rounded-[2.5rem] p-4 shadow-2xl border border-slate-200/60 transform rotate-x-12 group-hover:rotate-x-0 transition-transform duration-700 ease-out origin-bottom">
                  <div className="aspect-[16/9] md:aspect-[2/1] bg-slate-100 rounded-[2rem] overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                        alt="HealthBridge AI Dashboard" 
                        className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                      />

                      {/* Floating UI: Center Overlay */}
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/50 w-[90%] md:w-auto md:min-w-[400px] flex items-center gap-6 animate-float">
                          <div className="flex-1">
                             <div className="flex items-center gap-2 mb-2">
                                <Activity className="w-5 h-5 text-rose-500" />
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Live AI Diagnosis</span>
                             </div>
                             <div className="text-lg font-bold text-slate-900">High Fever & Dengue Risk</div>
                          </div>
                          <div className="text-right">
                             <div className="text-2xl font-bold text-teal-600">94%</div>
                             <div className="text-xs font-medium text-slate-500">Confidence</div>
                          </div>
                      </div>
                  </div>
               </div>
            </div>

            {/* Trusted By Row (Centered Below Image) */}
            <div className="mt-20 pt-10 border-t border-slate-100 w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8 opacity-80">
               <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Trusted By Leaders In Healthcare</p>
               <div className="flex items-center gap-8 grayscale hover:grayscale-0 transition-all duration-500">
                  {/* Replaced Text with Iconic Representations for cleaner look */}
                  <div className="flex items-center gap-2 font-bold text-slate-700 text-lg"><ShieldCheck className="w-6 h-6 text-teal-600" /> HIPAA</div>
                  <div className="flex items-center gap-2 font-bold text-slate-700 text-lg"><Globe className="w-6 h-6 text-blue-600" /> WHO Guidelines</div>
                  <div className="flex items-center gap-2 font-bold text-slate-700 text-lg"><Brain className="w-6 h-6 text-indigo-600" /> OpenAI</div>
               </div>
            </div>

          </div>
        </section>

        {/* === PROBLEM VISUALIZATION (Centered) === */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
           <div className="container mx-auto px-6 lg:px-8 text-center max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Designed for real-world impact.</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-16">
                 We didn't just build an app. We built a lifeline that connects the most remote villages to the best urban doctors in minutes.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                 {[
                    { icon: Clock, title: "5 Minutes", desc: "Average time to consult", color: "text-teal-600", bg: "bg-teal-50" },
                    { icon: IndianRupee, title: "₹500 Saved", desc: "Per consultation visit", color: "text-blue-600", bg: "bg-blue-50" },
                    { icon: MapPin, title: "0 km Travel", desc: "Care at their doorstep", color: "text-rose-600", bg: "bg-rose-50" }
                 ].map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                       <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                          <item.icon className={`w-8 h-8 ${item.color}`} />
                       </div>
                       <h3 className="text-3xl font-bold text-slate-900 mb-2">{item.title}</h3>
                       <p className="text-slate-500 font-medium">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* === FEATURE BENTO (Centered) === */}
        <section className="py-24 bg-white">
           <div className="container mx-auto px-6 lg:px-8">
              <h2 className="text-center text-3xl md:text-5xl font-bold text-slate-900 mb-16">Everything needed to <br/> bridge the gap.</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                 {/* Card 1: Patient (Span 2) */}
                 <div className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                    <div className="relative z-10 max-w-lg">
                       <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                          <Smartphone size={24} />
                       </div>
                       <h3 className="text-3xl font-bold mb-4">Voice-First Patient App</h3>
                       <p className="text-slate-400 text-lg mb-8">
                          No typing required. Patients speak in Kannada, Tamil, or Hindi. Our AI handles the rest.
                       </p>
                       <Link href="/patient" className="text-white font-bold inline-flex items-center gap-2 hover:gap-3 transition-all border-b border-white/30 pb-1 hover:border-white">
                          Try Live Demo <ArrowRight size={18} />
                       </Link>
                    </div>
                    {/* Abstract Circle Decoration */}
                    <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
                 </div>

                 {/* Card 2: AI Doctor */}
                 <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:border-teal-200 transition-colors group">
                     <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6 text-teal-600">
                          <Brain size={24} />
                       </div>
                       <h3 className="text-2xl font-bold text-slate-900 mb-3">AI Diagnostics</h3>
                       <p className="text-slate-600 mb-8">
                          94% accuracy in detecting common tropical diseases instantly.
                       </p>
                       <Link href="/doctor" className="text-teal-600 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                          View Dashboard <ArrowRight size={18} />
                       </Link>
                 </div>

                 {/* Card 3: Offline Kiosk */}
                 <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:border-orange-200 transition-colors group">
                     <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                          <Zap size={24} />
                       </div>
                       <h3 className="text-2xl font-bold text-slate-900 mb-3">No Internet?</h3>
                       <p className="text-slate-600 mb-8">
                          Offline-first mode syncs data when connectivity is restored.
                       </p>
                       <Link href="/kiosk" className="text-orange-600 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                          Kiosk Mode <ArrowRight size={18} />
                       </Link>
                 </div>

                 {/* Card 4: Languages (Span 2) */}
                 <div className="md:col-span-2 bg-gradient-to-br from-teal-50 to-white rounded-[2.5rem] p-10 border border-teal-100 relative overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                       <div className="flex-1">
                          <h3 className="text-3xl font-bold text-slate-900 mb-4">Native Language Support</h3>
                          <p className="text-slate-600 text-lg mb-6">
                             Breaking the language barrier with real-time bidirectional translation.
                          </p>
                          <div className="flex flex-wrap gap-2">
                             {['Hindi', 'Kannada', 'Tamil', 'Telugu', 'Marathi', 'Bengali'].map(lang => (
                                <span key={lang} className="px-3 py-1 bg-white border border-teal-200 rounded-full text-sm font-semibold text-teal-700">{lang}</span>
                             ))}
                             <span className="px-3 py-1 bg-teal-100 rounded-full text-sm font-semibold text-teal-700">+6 More</span>
                          </div>
                       </div>
                       <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center shrink-0">
                          <Globe size={48} className="text-teal-500" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* === FINAL CTA (Centered) === */}
        <section className="py-24 bg-white">
           <div className="container mx-auto px-6 lg:px-8">
              <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full bg-blue-600/20 blur-[120px]"></div>
                 
                 <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight">Ready to see the future?</h2>
                    <p className="text-xl text-slate-300 mb-12">
                       Take a tour of the patient experience. No signup required.
                    </p>
                    <div className="flex justify-center">
                       <Link href="/patient">
                          <Button className="h-16 px-12 rounded-full bg-red text-black hover:bg-slate-100 font-bold text-lg shadow-xl hover:scale-105 transition-all">
                             Start Interactive Demo
                          </Button>
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

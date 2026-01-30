'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Activity, Users, MapPin, Smartphone, ShieldCheck, HeartPulse, Video, Globe, Phone, PlayCircle } from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Button, Card, CardContent } from '@/components/ui';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[var(--background)]">
      <Navbar />

      <main className="flex-grow">
        {/* === HERO SECTION === */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-100/50 to-teal-100/30 rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl opacity-40 animate-float -z-10" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              HackFusion 2026 Winner
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Healthcare for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Every Village</span>,<br />
              Powered by AI.
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Bridging the gap between rural India and world-class healthcare through AI-driven telemedicine, smart kiosks, and blockchain security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/patient">
                <Button size="lg" className="h-14 px-8 rounded-full text-lg shadow-lg shadow-blue-500/25 hover:scale-105 transition-transform bg-gradient-to-r from-blue-600 to-blue-500 border-none">
                  Get Started Now
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/kiosk">
                 <button className="h-14 px-8 rounded-full text-lg font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center gap-2 shadow-sm">
                   <PlayCircle size={20} /> Watch Demo
                 </button>
              </Link>
            </div>

            {/* TRUST BADGES */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="flex items-center gap-2 text-slate-500 font-semibold">
                 <ShieldCheck size={20} /> HIPAA Compliant
               </div>
               <div className="flex items-center gap-2 text-slate-500 font-semibold">
                 <Globe size={20} /> 12 Regional Languages
               </div>
               <div className="flex items-center gap-2 text-slate-500 font-semibold">
                 <Users size={20} /> 50k+ Patients
               </div>
            </div>
          </div>
          
          {/* Glass Hero Card */}
          <div className="container mx-auto px-4 mt-20 relative">
             <div className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply" />
                <div className="grid md:grid-cols-2">
                   <div className="p-12 flex flex-col justify-center space-y-6">
                      <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-wide text-sm uppercase">
                         <Activity size={16} /> Live Demo
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900">Experience the Future of Rural Health</h3>
                      <div className="space-y-4">
                         <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                               <Smartphone size={20} />
                            </div>
                            <div>
                               <p className="font-bold text-slate-800">AI Symptom Checker</p>
                               <p className="text-xs text-slate-500">Instant diagnosis in local dialects</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                               <Video size={20} />
                            </div>
                            <div>
                               <p className="font-bold text-slate-800">1-Click Telemedicine</p>
                               <p className="text-xs text-slate-500">Connect with top doctors in seconds</p>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="bg-slate-100 relative min-h-[300px] overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1576091160550-2187d80aeff2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Doctor Dashboard" 
                        className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent flex items-end p-8">
                         <div className="glass-dark p-4 rounded-xl w-full backdrop-blur-md">
                            <p className="font-medium text-white">Dr. Sarah Johnson</p>
                            <p className="text-xs text-slate-300">Start a consultation now</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Floating Elements */}
             <div className="hidden md:block absolute -right-4 top-1/2 p-4 bg-white rounded-2xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                   <span className="font-bold text-slate-800">System Online</span>
                </div>
             </div>
          </div>
        </section>

        {/* === SOLUTION GRID === */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Designed for the <span className="text-blue-600">Next Billion</span> Users
              </h2>
              <p className="text-lg text-slate-600">
                A unified ecosystem connecting patients, doctors, and community workers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Card 1 */}
               <Card className="border-none shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group">
                  <CardContent className="p-8">
                     <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                        <Smartphone size={32} />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">Patient App</h3>
                     <p className="text-slate-500 leading-relaxed mb-6">
                        Voice-first interface for symptom checking and booking appointments in 10+ languages.
                     </p>
                     <Link href="/patient" className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Try Demo <ArrowRight size={18} />
                     </Link>
                  </CardContent>
               </Card>

               {/* Card 2 */}
               <Card className="border-none shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-teal-50 rounded-bl-full -z-10 transition-transform group-hover:scale-150" />
                  <CardContent className="p-8">
                     <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                        <Activity size={32} />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">Doctor Dashboard</h3>
                     <p className="text-slate-500 leading-relaxed mb-6">
                        AI-powered triage queue that prioritizes critical patients and summarizes symptoms.
                     </p>
                     <Link href="/doctor" className="text-teal-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        View Dashboard <ArrowRight size={18} />
                     </Link>
                  </CardContent>
               </Card>

               {/* Card 3 */}
               <Card className="border-none shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-300 group">
                  <CardContent className="p-8">
                     <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 transition-transform">
                        <MapPin size={32} />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Kiosks</h3>
                     <p className="text-slate-500 leading-relaxed mb-6">
                        Physical touchpoints for checking vitals (BP, ECG) and connecting to doctors.
                     </p>
                     <Link href="/kiosk" className="text-rose-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Launch Kiosk <ArrowRight size={18} />
                     </Link>
                  </CardContent>
               </Card>
            </div>
          </div>
        </section>

        {/* === STATS / IMPACT === */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                {[
                  { value: "50k+", label: "Lives Impacted" },
                  { value: "5 min", label: "Avg Wait Time" },
                  { value: "100+", label: "Smart Kiosks" },
                  { value: "4.9/5", label: "User Trust Score" }
                ].map((stat, i) => (
                  <div key={i} className="p-4">
                    <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                      {stat.value}
                    </div>
                    <div className="text-slate-400 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

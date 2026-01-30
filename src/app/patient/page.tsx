'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Calendar, Clock, Video, ChevronRight, Activity, 
  Thermometer, Heart, Droplets, Plus, Sun, FileText, 
  Stethoscope, Pill 
} from 'lucide-react';
import { Button } from '@/components/ui';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// Enhanced Mock Data for Multi-Metric Graph
const healthData = [
  { date: 'Mon', bp: 118, heartRate: 72, activity: 40 },
  { date: 'Tue', bp: 120, heartRate: 75, activity: 65 },
  { date: 'Wed', bp: 119, heartRate: 70, activity: 55 },
  { date: 'Thu', bp: 122, heartRate: 78, activity: 80 },
  { date: 'Fri', bp: 121, heartRate: 74, activity: 70 },
  { date: 'Sat', bp: 123, heartRate: 76, activity: 90 },
  { date: 'Sun', bp: 120, heartRate: 73, activity: 60 },
];

export default function PatientDashboard() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto font-sans relative">
      
       {/* Background Mesh (Matches Landing Page) */}
       <div className="absolute inset-x-[-50vw] inset-y-[-50vh] -z-10 bg-slate-50 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute top-[20%] right-[20%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[100px]"></div>
       </div>

      {/* Header Banner - Glassmorphism style */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-700 rounded-[2rem] p-8 md:p-10 shadow-xl shadow-blue-500/20 text-white">
        <div className="absolute top-0 right-0 p-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 p-32 bg-teal-400/20 rounded-full blur-3xl -ml-12 -mb-12 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-6">
             <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-inner border border-white/10 hidden sm:block">
               <Sun size={32} className="text-amber-300 drop-shadow-md" />
             </div>
             <div>
               <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Namaste, Rahul! 🙏</h1>
               <p className="text-blue-100 font-medium text-lg opacity-90">Your vitals are looking stable. Keep up the good work!</p>
             </div>
          </div>
          <Link href="/patient/symptom-checker">
            <Button className="h-14 px-8 rounded-xl bg-white text-blue-700 font-bold shadow-lg hover:bg-blue-50 hover:scale-105 transition-all flex items-center gap-2">
              <Plus size={20} />
              Check Symptoms
            </Button>
          </Link>
        </div>
      </div>

      {/* Vitals Grid - Bento Style */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xl font-bold text-slate-900">Health Overview</h2>
          <span className="text-sm font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">Updated: Just now</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { label: 'Heart Rate', value: '72', unit: 'bpm', icon: Heart, color: 'text-rose-500', bg: 'bg-rose-50', border: 'border-rose-100' },
            { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', icon: Activity, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' },
            { label: 'Temperature', value: '98.6', unit: '°F', icon: Thermometer, color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100' },
            { label: 'Oxygen Level', value: '98', unit: '%', icon: Droplets, color: 'text-teal-500', bg: 'bg-teal-50', border: 'border-teal-100' }
          ].map((stat, i) => (
            <div key={i} className={`bg-white rounded-[1.5rem] p-6 shadow-sm border ${stat.border} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3.5 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                  <stat.icon size={24} />
                </div>
                {i === 0 && <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                </span>}
              </div>
              <div>
                 <p className="text-slate-500 text-sm font-semibold mb-1 tracking-wide">{stat.label}</p>
                 <div className="flex items-baseline gap-1.5">
                   <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</h3>
                   <span className="text-sm text-slate-400 font-bold">{stat.unit}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Column */}
        <div className="xl:col-span-2 space-y-8">
          
          {/* Upcoming Appointment Card - Premium Layout */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 px-1">Upcoming Consultation</h2>
            <div className="bg-white rounded-[2rem] p-1 shadow-md shadow-slate-200/50 border border-slate-100">
               <div className="bg-gradient-to-br from-slate-50 to-white rounded-[1.8rem] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                  
                  {/* Decorative background vibe */}
                  <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                  <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
                     <div className="relative shrink-0">
                        <div className="w-20 h-20 rounded-[1.2rem] bg-indigo-100 border-4 border-white shadow-xl overflow-hidden">
                           <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200" alt="Dr. Anjali" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-slate-900">Dr. Anjali Gupta</h3>
                        <p className="text-indigo-600 font-bold text-sm mb-2">Senior Cardiologist • MBBS, MD</p>
                        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
                           <span className="bg-white px-3 py-1 rounded-full border border-slate-200 flex items-center gap-1.5 shadow-sm">
                             <Calendar size={14} className="text-blue-500" /> Today, 8 Feb
                           </span>
                           <span className="bg-white px-3 py-1 rounded-full border border-slate-200 flex items-center gap-1.5 shadow-sm">
                             <Clock size={14} className="text-orange-500" /> 04:30 PM
                           </span>
                        </div>
                     </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 w-full md:w-auto relative z-10">
                     <Link href="/patient/consultations/video-123" className="w-full">
                        <Button className="w-full md:w-auto h-12 px-8 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                           <Video size={18} /> Join Video Call
                        </Button>
                     </Link>
                     <p className="text-center text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 animate-pulse">
                        Confirmed • On Time
                     </p>
                  </div>
               </div>
            </div>
          </section>

          {/* KPI Chart - Rich Visuals */}
          <section>
             <div className="flex items-center justify-between mb-4 px-1">
                <h2 className="text-xl font-bold text-slate-900">Health Trends & Analysis</h2>
                <div className="flex gap-2">
                   <select className="text-sm font-semibold bg-white border border-slate-200 rounded-xl px-4 py-2 text-slate-600 outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer hover:border-blue-300 transition-colors shadow-sm">
                      <option>Last 7 Days</option>
                      <option>Last 30 Days</option>
                   </select>
                </div>
             </div>
             <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 h-[400px] relative">
                {/* Subtle grid in background */}
                <div className="absolute inset-x-6 inset-y-6 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] -z-10 rounded-xl"></div>
                
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Vitals vs Activity</h3>

                <ResponsiveContainer width="100%" height="85%">
                   <AreaChart data={healthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                         <linearGradient id="colorBp" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                         </linearGradient>
                         <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                         </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748B', fontWeight: 600}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748B'}} />
                      <Tooltip 
                         contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', padding: '12px 16px' }}
                         cursor={{ stroke: '#E2E8F0', strokeWidth: 2, strokeDasharray: '4 4' }}
                         labelStyle={{ color: '#64748B', fontWeight: 600, marginBottom: '8px' }}
                      />
                      <Area type="monotone" dataKey="bp" name="Blood Pressure" stroke="#3B82F6" strokeWidth={4} fillOpacity={1} fill="url(#colorBp)" />
                      <Area type="monotone" dataKey="activity" name="Activity Score" stroke="#10B981" strokeWidth={4} fillOpacity={1} fill="url(#colorActivity)" />
                   </AreaChart>
                </ResponsiveContainer>
             </div>
          </section>
        </div>

        {/* Right Sidebar Column */}
        <div className="space-y-8">
          
          {/* Daily Tip - Vibrant Card */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-500 to-teal-700 text-white p-8 shadow-xl shadow-teal-500/20 group">
             {/* Abstract Shapes */}
             <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/20 transition-colors duration-500"></div>
             
             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/20 mb-5">
                   <Sun size={12} className="text-yellow-300" /> Daily Wellness
                </div>
                <h3 className="text-2xl font-bold mb-3">Ayurvedic Tip</h3>
                <p className="text-teal-50 text-sm leading-relaxed mb-6 font-medium">
                   "Drinking warm water with lemon & honey in the morning boosts digestion."
                </p>
                <button className="w-full py-3.5 bg-white text-teal-700 font-bold rounded-xl hover:bg-slate-50 transition-colors text-sm shadow-lg">
                   Read More Tips
                </button>
             </div>
          </div>

          {/* Recent Activity - Clean List */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
             <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                <h3 className="font-bold text-slate-900 text-lg">Recent Updates</h3>
                <Link href="#" className="text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-2 py-1 rounded-lg">View All</Link>
             </div>
             <div className="divide-y divide-slate-50">
                {[
                   { title: 'Viral Fever Check', subtitle: 'Self-diagnosis via AI', date: '2 days ago', icon: Stethoscope, bg: 'bg-rose-50', color: 'text-rose-600' },
                   { title: 'Dr. Ravi Kumar', subtitle: 'Prescription for Paracetamol', date: '2 days ago', icon: Pill, bg: 'bg-blue-50', color: 'text-blue-600' },
                   { title: 'Apollo Diagnostics', subtitle: 'Blood Test Report Ready', date: '5 days ago', icon: FileText, bg: 'bg-amber-50', color: 'text-amber-600' },
                ].map((item, i) => (
                   <div key={i} className="p-5 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className={`p-3.5 rounded-2xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
                         <item.icon size={20} />
                      </div>
                      <div className="flex-1">
                         <p className="text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors mb-0.5">{item.title}</p>
                         <p className="text-xs text-slate-500 font-medium">{item.subtitle}</p>
                      </div>
                      <div className="text-right">
                         <p className="text-[10px] font-bold text-slate-400 mb-1">{item.date}</p>
                         <ChevronRight size={16} className="text-slate-300 ml-auto group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

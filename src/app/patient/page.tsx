'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Calendar, Clock, Video, ChevronRight, Activity, 
  Thermometer, Heart, Droplets, ArrowUp, Plus, Sun, FileText
} from 'lucide-react';
import { Button, Card, CardContent, CardHeader, CardTitle, Badge } from '@/components/ui';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Mock Data
const vitalsData = [
  { date: 'Mon', bp: 120 },
  { date: 'Tue', bp: 118 },
  { date: 'Wed', bp: 122 },
  { date: 'Thu', bp: 121 },
  { date: 'Fri', bp: 119 },
  { date: 'Sat', bp: 123 },
  { date: 'Sun', bp: 120 },
];

export default function PatientDashboard() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-4">
           <div className="bg-orange-50 p-3 rounded-full text-orange-500">
             <Sun size={24} />
           </div>
           <div>
             <h1 className="text-2xl font-bold text-slate-900">Good Morning, John</h1>
             <p className="text-slate-500">You have 1 appointment scheduled for today.</p>
           </div>
        </div>
        <Link href="/patient/symptom-checker">
          <Button className="rounded-full h-12 px-6 shadow-lg shadow-blue-500/20 bg-gradient-to-r from-blue-600 to-cyan-500 border-none hover:scale-105 transition-transform">
            <Plus size={18} />
            Check New Symptoms
          </Button>
        </Link>
      </div>

      {/* Vitals Grid */}
      <h2 className="text-lg font-bold text-slate-800 px-1">Your Vitals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Heart Rate', value: '72', unit: 'bpm', icon: Heart, color: 'text-rose-500', bg: 'bg-rose-50' },
          { label: 'Blood Pressure', value: '120/80', unit: '', icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { label: 'Temperature', value: '98.6', unit: '°F', icon: Thermometer, color: 'text-amber-500', bg: 'bg-amber-50' },
          { label: 'Glucose', value: '95', unit: 'mg/dL', icon: Droplets, color: 'text-blue-500', bg: 'bg-blue-50' }
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={22} />
              </div>
              <span className="text-xs font-semibold px-2 py-1 rounded bg-slate-50 text-slate-500">Today</span>
            </div>
            <div>
               <p className="text-slate-500 text-sm font-medium mb-1">{stat.label}</p>
               <div className="flex items-baseline gap-1">
                 <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
                 <span className="text-sm text-slate-400 font-medium">{stat.unit}</span>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Column */}
        <div className="xl:col-span-2 space-y-8">
          {/* Upcoming Appointment */}
          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-4 px-1">Next Appointment</h2>
            <div className="bg-white rounded-3xl p-1 shadow-sm border border-slate-100">
               <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[20px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                     <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-blue-200 border-4 border-white shadow-md overflow-hidden">
                           <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200" alt="Doctor" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900">Dr. Sarah Johnson</h3>
                        <p className="text-blue-600 font-medium">General Physician</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                           <span className="flex items-center gap-1.5"><Calendar size={14}/> Today, 8 Feb</span>
                           <span className="flex items-center gap-1.5"><Clock size={14}/> 10:30 AM</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col gap-3 w-full md:w-auto">
                     <Link href="/patient/consultations/video-123">
                        <Button className="w-full md:w-auto h-12 px-8 rounded-xl shadow-lg shadow-blue-500/20">
                           <Video size={18} /> Join Video Call
                        </Button>
                     </Link>
                     <p className="text-center text-xs font-semibold text-emerald-600 animate-pulse">
                        Starts in 15 mins
                     </p>
                  </div>
               </div>
            </div>
          </section>

          {/* Activity Chart */}
          <section>
             <div className="flex items-center justify-between mb-4 px-1">
                <h2 className="text-lg font-bold text-slate-800">Health Trends</h2>
                <select className="text-sm bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-600 outline-none focus:ring-2 focus:ring-blue-100">
                   <option>Blood Pressure</option>
                   <option>Heart Rate</option>
                </select>
             </div>
             <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-80">
                <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={vitalsData}>
                      <defs>
                         <linearGradient id="colorBp" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0284C7" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#0284C7" stopOpacity={0}/>
                         </linearGradient>
                      </defs>
                      <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94A3B8'}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94A3B8'}} domain={[100, 140]} />
                      <Tooltip 
                         contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                         cursor={{ stroke: '#E2E8F0', strokeWidth: 2 }}
                      />
                      <Area type="monotone" dataKey="bp" stroke="#0284C7" strokeWidth={3} fillOpacity={1} fill="url(#colorBp)" />
                   </AreaChart>
                </ResponsiveContainer>
             </div>
          </section>
        </div>

        {/* Right Sidebar Column */}
        <div className="space-y-8">
          {/* Daily Tip */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 shadow-xl shadow-blue-500/20">
             <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
             
             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold border border-white/10 mb-4">
                   <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Daily Tip
                </div>
                <h3 className="text-xl font-bold mb-3">Stay Hydrated</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6 opacity-90">
                   Drinking 8 glasses of water daily boosts energy and skin health.
                </p>
                <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors text-sm">
                   Read Full Article
                </button>
             </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
             <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                <h3 className="font-bold text-slate-800">Recent Activity</h3>
                <Link href="#" className="text-xs font-bold text-blue-600 hover:text-blue-700">View All</Link>
             </div>
             <div className="divide-y divide-slate-50">
                {[
                   { title: 'Viral Fever Diagnosis', date: '2 days ago', icon: Activity, bg: 'bg-rose-100', color: 'text-rose-600' },
                   { title: 'Prescription Added', date: '2 days ago', icon: Droplets, bg: 'bg-blue-100', color: 'text-blue-600' },
                   { title: 'Lab Report: Blood Test', date: '5 days ago', icon: FileText, bg: 'bg-amber-100', color: 'text-amber-600' },
                ].map((item, i) => (
                   <div key={i} className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className={`p-3 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                         <item.icon size={18} />
                      </div>
                      <div className="flex-1">
                         <p className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{item.title}</p>
                         <p className="text-xs text-slate-400">{item.date}</p>
                      </div>
                      <ChevronRight size={16} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

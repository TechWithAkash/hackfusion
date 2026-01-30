'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Calendar, Clock, Video, ChevronRight, Activity, 
  Thermometer, Heart, Droplets, Plus, Sun, FileText, 
  Stethoscope, Pill, TrendingUp, Zap, ArrowUpRight,
  Sparkles, Bell, Settings
} from 'lucide-react';
import { Button } from '@/components/ui';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line } from 'recharts';
import { useTranslate } from '@/context/LanguageContext';

// Health Data
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
  const t = useTranslate();
  
  return (
    <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
      {/* Top Bar - Minimal & Clean */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-1">
            {t('Namaste')}, Rahul! 👋
          </h1>
          <p className="text-[var(--text-secondary)] font-medium">
            {t('Your vitals are looking stable. Keep up the good work!')}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-11 h-11 rounded-xl bg-white border border-[var(--border-default)] flex items-center justify-center hover:bg-[var(--gray-50)] transition-colors relative">
            <Bell size={20} className="text-[var(--text-secondary)]" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="w-11 h-11 rounded-xl bg-white border border-[var(--border-default)] flex items-center justify-center hover:bg-[var(--gray-50)] transition-colors">
            <Settings size={20} className="text-[var(--text-secondary)]" />
          </button>
          <Link href="/patient/symptom-checker">
            <Button className="h-11 px-6 rounded-xl bg-[var(--text-primary)] text-white hover:bg-[var(--gray-800)] shadow-md hover:shadow-lg transition-all flex items-center gap-2 font-semibold">
              <Plus size={18} />
              Check Symptoms
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - 2/3 width */}
        <div className="lg:col-span-2 space-y-6">
          {/* Vitals Cards - Compact Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Heart Rate', value: '72', unit: 'bpm', icon: Heart, color: '#EF4444', bg: '#FEF2F2', status: 'Normal', trend: '+2' },
              { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', icon: Activity, color: '#3B82F6', bg: '#EFF6FF', status: 'Normal', trend: '0' },
              { label: 'Temperature', value: '98.6', unit: '°F', icon: Thermometer, color: '#F59E0B', bg: '#FFFBEB', status: 'Normal', trend: '0' },
              { label: 'Oxygen', value: '98', unit: '%', icon: Droplets, color: '#14B8A6', bg: '#F0FDFA', status: 'Normal', trend: '+1' }
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-[var(--border-default)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(135deg, ${stat.color}05 0%, transparent 100%)` }}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl" style={{ backgroundColor: stat.bg }}>
                      <stat.icon size={20} style={{ color: stat.color }} />
                    </div>
                    {i === 0 && (
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[var(--text-tertiary)] font-medium mb-1">{stat.label}</p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">{stat.value}</h3>
                    <span className="text-xs text-[var(--text-tertiary)] font-semibold">{stat.unit}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: stat.bg, color: stat.color }}>
                      {stat.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Consultation - Redesigned */}
          <div className="bg-white rounded-3xl p-6 border border-[var(--border-default)] shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-[var(--text-primary)]">{t('Upcoming Consultation')}</h2>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                {t('Confirmed')}
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Doctor Info */}
              <div className="flex items-center gap-4 flex-1">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200" 
                      alt="Dr. Anjali" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-0.5">Dr. Anjali Gupta</h3>
                  <p className="text-sm text-[var(--primary)] font-semibold mb-2">Senior Cardiologist</p>
                  <div className="flex items-center gap-3 text-xs font-medium text-[var(--text-tertiary)]">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-[var(--primary)]" /> Today, 8 Feb
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-orange-500" /> 04:30 PM
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Action */}
              <Link href="/patient/consultations/video-123">
                <Button className="h-11 px-6 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold shadow-md transition-all flex items-center gap-2">
                  <Video size={18} /> {t('Join Call')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Health Trends Chart - Redesigned */}
          <div className="bg-white rounded-3xl p-6 border border-[var(--border-default)] shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-[var(--text-primary)] mb-1">{t('Health Trends')}</h2>
                <p className="text-sm text-[var(--text-tertiary)]">Last 7 days overview</p>
              </div>
              <select className="text-sm font-medium bg-[var(--gray-50)] border border-[var(--border-default)] rounded-xl px-4 py-2 text-[var(--text-secondary)] outline-none focus:ring-2 focus:ring-[var(--primary)]/20 cursor-pointer transition-colors">
                <option>{t('Last 7 Days')}</option>
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
              </select>
            </div>
            
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={healthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorBp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorHeart" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F4F4F5" />
                  <XAxis 
                    dataKey="date" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 12, fill: '#A1A1AA', fontWeight: 500}} 
                    dy={10} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 12, fill: '#A1A1AA'}} 
                  />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '12px', 
                      border: 'none', 
                      boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', 
                      padding: '12px 16px',
                      backgroundColor: 'white'
                    }}
                    cursor={{ stroke: '#E4E4E7', strokeWidth: 2 }}
                    labelStyle={{ color: '#52525B', fontWeight: 600, marginBottom: '8px' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="bp" 
                    name="Blood Pressure" 
                    stroke="#3B82F6" 
                    strokeWidth={3} 
                    dot={{ fill: '#3B82F6', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="heartRate" 
                    name="Heart Rate" 
                    stroke="#EF4444" 
                    strokeWidth={3} 
                    dot={{ fill: '#EF4444', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-[var(--border-light)]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
                <span className="text-sm font-medium text-[var(--text-secondary)]">Blood Pressure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                <span className="text-sm font-medium text-[var(--text-secondary)]">Heart Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - 1/3 width */}
        <div className="space-y-6">
          {/* Daily Wellness Tip - Redesigned */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--secondary)] via-[var(--secondary)] to-[var(--secondary-dark)] text-white p-6 shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold border border-white/20 mb-4">
                <Sparkles size={12} className="text-yellow-300" /> {t('Daily Wellness')}
              </div>
              <h3 className="text-xl font-bold mb-3">{t('Ayurvedic Tip')}</h3>
              <p className="text-teal-50 text-sm leading-relaxed mb-5 font-medium">
                "Drinking warm water with lemon & honey in the morning boosts digestion and immunity."
              </p>
              <button className="w-full py-2.5 bg-white text-[var(--secondary)] font-semibold rounded-xl hover:bg-gray-50 transition-colors text-sm shadow-md flex items-center justify-center gap-2">
                {t('Read More Tips')}
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-3xl p-6 border border-[var(--border-default)] shadow-sm">
            <h3 className="font-bold text-[var(--text-primary)] text-base mb-4">Quick Actions</h3>
            <div className="space-y-2">
              {[
                { icon: Stethoscope, label: 'Book Appointment', color: '#3B82F6', bg: '#EFF6FF', href: '/patient/consultations' },
                { icon: FileText, label: 'View Records', color: '#10B981', bg: '#F0FDF4', href: '/patient/records' },
                { icon: Pill, label: 'Medications', color: '#F59E0B', bg: '#FFFBEB', href: '/patient/medications' },
              ].map((action, i) => (
                <Link key={i} href={action.href}>
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--gray-50)] transition-colors group">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: action.bg }}>
                      <action.icon size={18} style={{ color: action.color }} />
                    </div>
                    <span className="flex-1 text-left text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                      {action.label}
                    </span>
                    <ChevronRight size={16} className="text-[var(--gray-300)] group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all" />
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Activity - Redesigned */}
          <div className="bg-white rounded-3xl border border-[var(--border-default)] shadow-sm overflow-hidden">
            <div className="p-6 pb-4 flex justify-between items-center">
              <h3 className="font-bold text-[var(--text-primary)] text-base">Recent Activity</h3>
              <Link href="#" className="text-xs font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)] flex items-center gap-1">
                View All <ArrowUpRight size={12} />
              </Link>
            </div>
            <div className="divide-y divide-[var(--border-light)]">
              {[
                { title: 'Viral Fever Check', subtitle: 'AI Diagnosis', date: '2d ago', icon: Stethoscope, bg: '#FEF2F2', color: '#EF4444' },
                { title: 'Prescription', subtitle: 'Dr. Ravi Kumar', date: '2d ago', icon: Pill, bg: '#EFF6FF', color: '#3B82F6' },
                { title: 'Blood Test', subtitle: 'Report Ready', date: '5d ago', icon: FileText, bg: '#FFFBEB', color: '#F59E0B' },
              ].map((item, i) => (
                <div key={i} className="px-6 py-4 hover:bg-[var(--gray-50)] transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl group-hover:scale-110 transition-transform" style={{ backgroundColor: item.bg }}>
                      <item.icon size={16} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors truncate">
                        {item.title}
                      </p>
                      <p className="text-xs text-[var(--text-tertiary)] font-medium">{item.subtitle}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-medium text-[var(--text-tertiary)]">{item.date}</p>
                    </div>
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

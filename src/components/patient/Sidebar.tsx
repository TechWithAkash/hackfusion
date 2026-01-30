'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Stethoscope, Video, FileText, 
  BookOpen, User, LogOut, Activity, ChevronRight 
} from 'lucide-react';

import { LanguageSelector } from '../shared/LanguageSelector';

export const PatientSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/patient' },
    { icon: Stethoscope, label: 'Symptom Checker', href: '/patient/symptom-checker' },
    { icon: Video, label: 'My Consultations', href: '/patient/consultations' },
    { icon: FileText, label: 'Health Records', href: '/patient/records' },
    { icon: BookOpen, label: 'Education Hub', href: '/patient/education' },
    { icon: User, label: 'My Profile', href: '/patient/profile' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div className="hidden lg:flex flex-col w-72 h-screen p-4 fixed left-0 top-0 z-50">
      {/* Glass Container */}
      <div className="flex-1 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl flex flex-col overflow-hidden">
        
        {/* Brand Header */}
        <div className="h-20 flex items-center px-6 border-b border-gray-100/50">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-blue-600 to-cyan-500 text-white p-2 rounded-xl shadow-lg shadow-blue-500/30">
              <Activity size={24} />
            </div>
            <div>
              <span className="font-bold text-lg text-slate-800 leading-tight block">HealthBridge</span>
              <span className="text-xs text-slate-500 font-medium tracking-wide">PATIENT PORTAL</span>
            </div>
          </Link>
        </div>

        {/* User Card */}
        <div className="mx-4 mt-6 p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-blue-100/50 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shadow-inner ring-2 ring-white">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-slate-800 truncate">Rahul Sharma</p>
            <p className="text-xs text-slate-500 truncate">Standard Plan</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
        </div>

        {/* Navigation Tabs */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1.5 scrollbar-hide">
          <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Menu</p>
          {menuItems.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            
            return (
              <Link key={item.href} href={item.href} className="block group">
                <div
                  className={`
                    relative flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 ease-out
                    ${active 
                      ? 'text-white shadow-lg shadow-blue-500/25 scale-[1.02]' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }
                  `}
                >
                  {/* Active Gradient Background */}
                  {active && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 -z-10" />
                  )}
                  
                  <Icon size={20} className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`} />
                  <span className="font-medium tracking-tight">{item.label}</span>
                  
                  {active && (
                    <ChevronRight size={16} className="ml-auto opacity-75" />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-gray-100/50 space-y-3">
          <div className="px-1">
             <LanguageSelector />
          </div>
          <Link href="/">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all font-medium text-sm group">
              <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
              Sign Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

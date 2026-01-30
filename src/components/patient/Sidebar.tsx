'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Stethoscope, Video, FileText, 
  BookOpen, User, LogOut, Activity, Settings
} from 'lucide-react';

import { LanguageSelector } from '../shared/LanguageSelector';
import { useTranslate } from '@/context/LanguageContext';

export const PatientSidebar = () => {
  const pathname = usePathname();
  const t = useTranslate();

  const menuItems = [
    { icon: LayoutDashboard, label: t('Dashboard'), href: '/patient' },
    { icon: Stethoscope, label: t('Symptom Checker'), href: '/patient/symptom-checker' },
    { icon: Video, label: t('My Consultations'), href: '/patient/consultations' },
    { icon: FileText, label: t('Health Records'), href: '/patient/records' },
    { icon: BookOpen, label: t('Education Hub'), href: '/patient/education' },
    { icon: User, label: t('My Profile'), href: '/patient/profile' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 z-50 bg-[#1E293B] text-white">
      {/* Brand Header */}
      <div className="h-20 flex items-center px-6 border-b border-white/10">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white p-2 rounded-xl shadow-lg">
            <Activity size={20} />
          </div>
          <div>
            <span className="font-bold text-base text-white leading-tight block">HealthBridge</span>
            <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Patient Portal</span>
          </div>
        </Link>
      </div>

      {/* User Card */}
      <div className="mx-4 mt-6 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-sm shadow-lg">
          RS
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-white truncate">Rahul Sharma</p>
          <p className="text-xs text-gray-400 truncate">Standard Plan</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1 scrollbar-hide">
        <p className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">Menu</p>
        {menuItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          
          return (
            <Link key={item.href} href={item.href} className="block">
              <div
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all
                  ${active 
                    ? 'bg-[var(--primary)] text-white shadow-md' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }
                `}
              >
                <Icon size={18} />
                <span className="font-medium text-sm">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-white/10 space-y-2">
        <Link href="/patient/settings">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all text-sm font-medium">
            <Settings size={18} />
            Settings
          </button>
        </Link>
        
        <Link href="/">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all text-sm font-medium">
            <LogOut size={18} />
            {t('Sign Out')}
          </button>
        </Link>
        
        <div className="pt-2 border-t border-white/10">
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, HeartPulse, Video, FileText, BookOpen, Home, LogOut } from 'lucide-react';

export function KioskSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: Home, label: 'Home', href: '/kiosk' },
    { icon: HeartPulse, label: 'Check Vitals', href: '/kiosk/vitals' },
    { icon: Video, label: 'Talk to Doctor', href: '/kiosk/telemedicine' },
    { icon: FileText, label: 'My Records', href: '/kiosk/records' },
    { icon: BookOpen, label: 'Health Tips', href: '/kiosk/education' },
  ];

  const isActive = (href: string) => {
    if (href === '/kiosk') {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <div className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-64 bg-slate-800 border-r border-slate-700 z-50">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <Link href="/kiosk" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
            <Activity size={24} className="text-white" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="font-bold text-white text-lg">HealthBridge</h1>
            <p className="text-xs text-slate-400">Kiosk Station</p>
          </div>
        </Link>
      </div>

      {/* User Card */}
      <div className="mx-4 mt-6 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-sm shadow-lg text-white">
          K1
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-white truncate">Kiosk Station #1</p>
          <p className="text-xs text-gray-400 truncate">Ground Floor</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                active
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon size={20} strokeWidth={2} />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <Link
          href="/login"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all"
        >
          <LogOut size={20} strokeWidth={2} />
          <span className="font-medium text-sm">Exit Kiosk</span>
        </Link>
      </div>
    </div>
  );
}

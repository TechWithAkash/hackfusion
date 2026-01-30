'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, Activity, LayoutGrid, Users, Calendar, 
  CreditCard, Settings, LogOut, Bell 
} from 'lucide-react';
import { Button } from '@/components/ui';

// === Doctor Sidebar Component ===
const DoctorSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { icon: LayoutGrid, label: 'Dashboard', href: '/doctor' },
    { icon: Users, label: 'My Patients', href: '/doctor/patients' },
    { icon: Calendar, label: 'Appointments', href: '/doctor/appointments' },
    { icon: CreditCard, label: 'Earnings', href: '/doctor/earnings' },
    { icon: Settings, label: 'Settings', href: '/doctor/settings' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div className="w-64 bg-slate-900 text-white h-screen flex flex-col fixed left-0 top-0 hidden lg:flex z-50">
      {/* Brand */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-[var(--primary)] text-white p-1 rounded-md">
             <Activity size={20} />
          </div>
          <span className="font-bold text-lg">HealthBridge</span>
        </Link>
      </div>

      {/* Doctor Profile */}
      <div className="p-4 border-b border-slate-800 bg-slate-800/50">
        <div className="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
            alt="Dr. Sarah" 
            className="w-10 h-10 rounded-full object-cover border-2 border-[var(--primary)]"
          />
          <div>
            <p className="text-sm font-semibold text-white">Dr. Sarah J.</p>
            <p className="text-xs text-slate-400">Cardiologist</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {menuItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors
                  ${active 
                    ? 'bg-[var(--primary)] text-white font-medium shadow-lg shadow-blue-900/50' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }
                `}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-800">
        <Link href="/">
          <Button variant="ghost" className="w-full justify-start gap-3 text-red-400 hover:text-red-300 hover:bg-red-900/20">
            <LogOut size={20} />
            Sign Out
          </Button>
        </Link>
      </div>
    </div>
  );
};

// === Doctor Layout Component ===
export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-[var(--gray-50)]">
      {/* Desktop Sidebar */}
      <DoctorSidebar />

      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-40 bg-slate-900 text-white border-b border-slate-800 px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <Activity className="text-[var(--primary)]" size={20}/>
           <span className="font-bold text-lg">HealthBridge Dr.</span>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-300">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 p-4 sm:p-6 lg:p-8">
        {children}
      </div>
    </div>
  );
}

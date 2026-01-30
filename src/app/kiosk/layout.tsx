'use client';

import React from 'react';
import Link from 'next/link';
import { Activity, ArrowLeft, LogOut, Globe } from 'lucide-react';
import { Button } from '@/components/ui';

export default function KioskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
      {/* Kiosk Header */}
      <header className="bg-white border-b border-[var(--border-color)] h-20 px-6 flex items-center justify-between shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-4">
           {/* Logo */}
           <div className="bg-[var(--primary)] text-white p-2 rounded-xl">
             <Activity size={32} />
           </div>
           <div>
             <h1 className="text-2xl font-bold text-[var(--gray-900)] leading-none">HealthBridge</h1>
             <p className="text-sm text-[var(--gray-500)]">Community Health Center #24</p>
           </div>
        </div>

        <div className="flex items-center gap-4">
           {/* Language Toggle (Mock) */}
           <Button variant="outline" size="lg" className="rounded-xl gap-2 border-[var(--gray-300)]">
             <Globe size={20} />
             English / हिंदी
           </Button>

           {/* Emergency Exit */}
           <Link href="/">
             <Button variant="ghost" size="lg" className="text-gray-400 hover:text-red-500">
               <LogOut size={24} />
             </Button>
           </Link>
        </div>
      </header>

      {/* Main Kiosk Area */}
      <main className="container mx-auto p-6 max-w-5xl">
        {children}
      </main>
    </div>
  );
}

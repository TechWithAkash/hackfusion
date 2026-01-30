'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Activity, Home, HeartPulse, Video, FileText, BookOpen, LogOut } from 'lucide-react';
import { KioskSidebar } from '@/components/kiosk/Sidebar';
import { Button } from '@/components/ui';

export default function KioskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  // Mobile Menu Items (same as sidebar)
  const menuItems = [
    { icon: Home, label: 'Home', href: '/kiosk' },
    { icon: HeartPulse, label: 'Check Vitals', href: '/kiosk/vitals' },
    { icon: Video, label: 'Talk to Doctor', href: '/kiosk/telemedicine' },
    { icon: FileText, label: 'My Records', href: '/kiosk/records' },
    { icon: BookOpen, label: 'Health Tips', href: '/kiosk/education' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Desktop Sidebar */}
      <KioskSidebar />

      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b border-[var(--border-default)] px-4 h-16 flex items-center justify-between shadow-sm">
        <Link href="/kiosk" className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white p-1.5 rounded-lg">
            <Activity size={18} />
          </div>
          <span className="font-bold text-base">HealthBridge Kiosk</span>
        </Link>
        <button onClick={toggleMenu} className="p-2 text-[var(--text-secondary)] hover:bg-[var(--gray-50)] rounded-lg transition-colors">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={closeMenu}>
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-[var(--border-default)] flex items-center justify-between">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={closeMenu} className="p-2 hover:bg-[var(--gray-50)] rounded-lg transition-colors">
                <X size={24} />
              </button>
            </div>
            <nav className="p-4 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || (item.href !== '/kiosk' && pathname?.startsWith(item.href));
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-[var(--primary-light)] text-[var(--primary)]'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--gray-50)]'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
              <Link
                href="/login"
                onClick={closeMenu}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all mt-4"
              >
                <LogOut size={20} />
                <span className="font-medium">Exit Kiosk</span>
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="lg:ml-64">
        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

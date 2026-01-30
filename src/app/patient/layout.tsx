'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Activity, LayoutDashboard, Stethoscope, Video, FileText, BookOpen, User, LogOut } from 'lucide-react';
import { PatientSidebar } from '@/components/patient/Sidebar';
import { Button } from '@/components/ui';

export default function PatientLayout({
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
    { icon: LayoutDashboard, label: 'Dashboard', href: '/patient' },
    { icon: Stethoscope, label: 'Symptom Checker', href: '/patient/symptom-checker' },
    { icon: Video, label: 'My Consultations', href: '/patient/consultations' },
    { icon: FileText, label: 'Health Records', href: '/patient/records' },
    { icon: BookOpen, label: 'Health Education', href: '/patient/education' },
    { icon: User, label: 'My Profile', href: '/patient/profile' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Desktop Sidebar */}
      <PatientSidebar />

      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b border-[var(--border-default)] px-4 h-16 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white p-1.5 rounded-lg">
            <Activity size={18} />
          </div>
          <span className="font-bold text-base">HealthBridge</span>
        </Link>
        <button onClick={toggleMenu} className="p-2 text-[var(--text-secondary)] hover:bg-[var(--gray-50)] rounded-lg transition-colors">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-white pt-16 animate-fadeIn">
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} onClick={closeMenu}>
                  <div
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium
                      ${active 
                        ? 'bg-[var(--primary)] text-white shadow-md' 
                        : 'text-[var(--text-secondary)] hover:bg-[var(--gray-50)]'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </div>
                </Link>
              );
            })}
            <div className="border-t border-[var(--border-default)] my-4 pt-4">
              <Link href="/" onClick={closeMenu}>
                <div className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-medium">
                  <LogOut size={20} />
                  <span>Sign Out</span>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Main Content Area */}
      <div className="lg:ml-64 min-h-screen">
        {children}
      </div>
    </div>
  );
}

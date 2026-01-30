'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Activity, User, Stethoscope, TabletSmartphone } from 'lucide-react';
import { Button } from '@/components/ui';
import { LanguageSelector } from '@/components/shared/LanguageSelector';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Helper to check if link is active
  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-[var(--border-default)] shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" onClick={closeMenu}>
            <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white p-2 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
              <Activity size={20} />
            </div>
            <span className="text-xl font-bold text-[var(--text-primary)]">
              HealthBridge AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/" 
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
                isActive('/') && pathname === '/' 
                  ? 'text-[var(--primary)] bg-[var(--primary-light)]' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--gray-50)]'
              }`}
            >
              Home
            </Link>
            
            <Link href="/login">
              <Button 
                variant="primary"
                size="sm" 
                className="rounded-xl font-semibold shadow-md hover:shadow-lg"
              >
                Login
              </Button>
            </Link>
            
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none rounded-lg hover:bg-[var(--gray-50)] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-[var(--border-default)] shadow-xl animate-fadeIn">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link 
              href="/" 
              className={`block px-4 py-3 rounded-xl font-semibold transition-colors ${
                isActive('/') && pathname === '/' 
                  ? 'bg-[var(--primary-light)] text-[var(--primary)]' 
                  : 'text-[var(--text-secondary)] hover:bg-[var(--gray-50)]'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            
            <Link href="/patient" onClick={closeMenu}>
              <div className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors ${
                isActive('/patient') 
                  ? 'bg-[var(--primary-light)] text-[var(--primary)]' 
                  : 'text-[var(--text-secondary)] hover:bg-[var(--gray-50)]'
              }`}>
                <User size={20} />
                <span>Patient Portal</span>
              </div>
            </Link>
            
            <Link href="/doctor" onClick={closeMenu}>
              <div className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors ${
                isActive('/doctor') 
                  ? 'bg-[var(--primary-light)] text-[var(--primary)]' 
                  : 'text-[var(--text-secondary)] hover:bg-[var(--gray-50)]'
              }`}>
                <Stethoscope size={20} />
                <span>Doctor Dashboard</span>
              </div>
            </Link>
            
            <Link href="/kiosk" onClick={closeMenu}>
              <div className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors ${
                isActive('/kiosk') 
                  ? 'bg-[var(--primary-light)] text-[var(--primary)]' 
                  : 'text-[var(--text-secondary)] hover:bg-[var(--gray-50)]'
              }`}>
                <TabletSmartphone size={20} />
                <span>Kiosk Mode</span>
              </div>
            </Link>

            <div className="pt-4 border-t border-[var(--border-default)]">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

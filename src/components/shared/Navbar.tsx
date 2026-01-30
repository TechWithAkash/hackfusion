'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Activity, User, Stethoscope, TabletSmartphone } from 'lucide-react';
import { Button } from '@/components/ui';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Helper to check if link is active
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-[var(--z-sticky)] w-full bg-white/80 backdrop-blur-md border-b border-[var(--border-color)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="bg-[var(--primary)] text-white p-1.5 rounded-lg">
              <Activity size={24} />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
              HealthBridge AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors hover:text-[var(--primary)] ${isActive('/') ? 'text-[var(--primary)]' : 'text-[var(--gray-600)]'}`}
            >
              Home
            </Link>
            
            <div className="flex items-center gap-4">
              <Link href="/patient">
                <Button variant={isActive('/patient') ? 'primary' : 'ghost'} size="sm" className="gap-2">
                  <User size={16} />
                  Patient Portal
                </Button>
              </Link>
              
              <Link href="/doctor">
                <Button variant={isActive('/doctor') ? 'primary' : 'ghost'} size="sm" className="gap-2">
                  <Stethoscope size={16} />
                  Doctor Link
                </Button>
              </Link>
              
              <Link href="/kiosk">
                <Button variant={isActive('/kiosk') ? 'primary' : 'ghost'} size="sm" className="gap-2">
                  <TabletSmartphone size={16} />
                  Kiosk Mode
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-[var(--gray-600)] hover:text-[var(--primary)] focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-[var(--border-color)] shadow-lg animate-fadeIn p-4 flex flex-col gap-4">
          <Link 
            href="/" 
            className={`px-4 py-2 rounded-lg ${isActive('/') ? 'bg-[var(--primary-light)] text-[var(--primary)]' : 'text-[var(--gray-700)] hover:bg-[var(--gray-50)]'}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          
          <Link href="/patient" onClick={closeMenu}>
            <div className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--gray-50)] rounded-lg">
              <User size={18} className="text-[var(--primary)]" />
              <span>Patient Portal</span>
            </div>
          </Link>
          
          <Link href="/doctor" onClick={closeMenu}>
            <div className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--gray-50)] rounded-lg">
              <Stethoscope size={18} className="text-[var(--primary)]" />
              <span>Doctor Dashboard</span>
            </div>
          </Link>
          
          <Link href="/kiosk" onClick={closeMenu}>
            <div className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--gray-50)] rounded-lg">
              <TabletSmartphone size={18} className="text-[var(--primary)]" />
              <span>Kiosk Mode</span>
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};

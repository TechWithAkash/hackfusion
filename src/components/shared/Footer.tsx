import React from 'react';
import Link from 'next/link';
import { Activity, Heart, Shield, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[var(--gray-900)] text-white pt-16 pb-8 border-t border-[var(--gray-800)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white p-2 rounded-xl shadow-lg">
                <Activity size={20} />
              </div>
              <span className="text-xl font-bold">HealthBridge AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bridging the healthcare gap in underserved communities through 
              AI-powered telemedicine, smart kiosks, and blockchain technology.
            </p>
            <div className="flex gap-3 pt-2">
              <div className="bg-[var(--gray-800)] p-2.5 rounded-xl hover:bg-[var(--primary)] transition-colors cursor-pointer">
                <Heart size={18} />
              </div>
              <div className="bg-[var(--gray-800)] p-2.5 rounded-xl hover:bg-[var(--primary)] transition-colors cursor-pointer">
                <Shield size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4 text-white">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/patient" className="text-gray-400 hover:text-[var(--primary)] transition-colors text-sm font-medium">
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link href="/doctor" className="text-gray-400 hover:text-[var(--primary)] transition-colors text-sm font-medium">
                  Doctor Dashboard
                </Link>
              </li>
              <li>
                <Link href="/kiosk" className="text-gray-400 hover:text-[var(--primary)] transition-colors text-sm font-medium">
                  Kiosk Interface
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[var(--primary)] transition-colors text-sm font-medium">
                  About the Project
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-400 hover:text-[var(--primary)] transition-colors text-sm font-medium">
                  Impact Metrics
                </Link>
              </li>
              <li>
                <Link href="/sdg" className="text-gray-400 hover:text-[var(--primary)] transition-colors text-sm font-medium">
                  SDG 3 Goals
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="mt-0.5 text-[var(--primary)] shrink-0" />
                <span>HackFusion 2026 InnovationHub<br />Mumbai, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-[var(--primary)] shrink-0" />
                <span>team@healthbridge.ai</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-[var(--primary)] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--gray-800)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} HealthBridge AI. Built for HackFusion 2026.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-white cursor-pointer transition-colors font-medium">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors font-medium">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

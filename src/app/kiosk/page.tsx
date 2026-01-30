'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity, Video, FileText, HeartPulse, ChevronRight, Stethoscope } from 'lucide-react';
import { Card } from '@/components/ui';

export default function KioskHome() {
  const actions = [
    { 
      label: 'Check My Health', 
      sub: 'BP, Pulse, Temperature', 
      icon: HeartPulse, 
      href: '/kiosk/vitals',
      color: '#EF4444',
      bg: '#FEF2F2'
    },
    { 
      label: 'Talk to Doctor', 
      sub: 'Video Consultation', 
      icon: Video, 
      href: '/kiosk/telemedicine',
      color: '#3B82F6',
      bg: '#EFF6FF'
    },
    { 
      label: 'My Records', 
      sub: 'View & Print', 
      icon: FileText, 
      href: '/kiosk/records',
      color: '#10B981',
      bg: '#F0FDF4'
    },
    { 
      label: 'Health Tips', 
      sub: 'Learn & Educate', 
      icon: Activity, 
      href: '/kiosk/education',
      color: '#F59E0B',
      bg: '#FFFBEB'
    },
  ];

  return (
    <div className="py-8">
      {/* Background */}
      <div className="fixed inset-0 -z-10 gradient-mesh opacity-40"></div>

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
          How can we help today?
        </h2>
        <p className="text-xl text-[var(--text-secondary)] font-medium">
          Touch an option below to start
        </p>
      </div>

      {/* Action Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {actions.map((item, i) => (
          <Link key={i} href={item.href}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-full"
            >
              <div style={{ borderColor: item.color + '20' }} className="rounded-3xl border-2">
                <Card 
                  className="h-56 flex items-center p-8 shadow-sm hover:shadow-xl transition-all cursor-pointer rounded-3xl bg-white border-0"
                >
                  <div 
                    className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-sm mr-8"
                    style={{ backgroundColor: item.bg }}
                  >
                    <item.icon size={48} style={{ color: item.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                      {item.label}
                    </h3>
                    <p className="text-xl text-[var(--text-secondary)] font-medium">
                      {item.sub}
                    </p>
                  </div>
                  <ChevronRight size={32} className="text-[var(--gray-300)]" />
                </Card>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Footer Info */}
      <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
            <Stethoscope size={28} />
          </div>
          <div>
            <p className="font-bold text-xl mb-1">Next Doctor Available</p>
            <p className="text-blue-100 font-medium">Dr. Sarah • General Physician</p>
          </div>
        </div>
        <div className="text-3xl font-bold">5 min wait</div>
      </div>
    </div>
  );
}

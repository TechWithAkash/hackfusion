'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity, Video, FileText, HeartPulse, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui';

export default function KioskHome() {
  const actions = [
    { 
      label: 'Check My Health', 
      sub: 'BP, Pulse, Fever', 
      icon: HeartPulse, 
      href: '/kiosk/vitals',
      color: 'bg-red-50 text-red-600 border-red-200'
    },
    { 
      label: 'Talk to Doctor', 
      sub: 'Video Call', 
      icon: Video, 
      href: '/kiosk/telemedicine',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    { 
      label: 'My Records', 
      sub: 'Print or View', 
      icon: FileText, 
      href: '/kiosk/records',
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    { 
      label: 'Health Tips', 
      sub: 'Education', 
      icon: Activity, 
      href: '/kiosk/education',
      color: 'bg-orange-50 text-orange-600 border-orange-200'
    },
  ];

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[var(--gray-900)] mb-4">How can we help today?</h2>
        <p className="text-xl text-[var(--gray-500)]">Touch an option below to start</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {actions.map((item, i) => (
          <Link key={i} href={item.href}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-full"
            >
              <Card className={`h-48 flex items-center p-8 border-2 ${item.color} shadow-sm hover:shadow-xl transition-all cursor-pointer rounded-3xl`}>
                <div className={`w-24 h-24 rounded-full flex items-center justify-center bg-white shadow-sm mr-8`}>
                  <item.icon size={48} />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-[var(--gray-900)] mb-2">{item.label}</h3>
                  <p className="text-xl text-[var(--gray-600)]">{item.sub}</p>
                </div>
                <ChevronRight size={32} className="text-[var(--gray-400)] opacity-50" />
              </Card>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-16 bg-blue-600 text-white rounded-2xl p-6 flex items-center justify-between shadow-lg">
         <div className="flex items-center gap-4">
           <div className="bg-white/20 p-3 rounded-lg">
              <Activity size={24} />
           </div>
           <div>
              <p className="font-bold text-lg">Next Doctor Available</p>
              <p className="text-blue-100">Dr. Sarah • General Physician</p>
           </div>
         </div>
         <div className="text-2xl font-bold">5 min wait</div>
      </div>
    </div>
  );
}

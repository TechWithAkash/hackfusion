'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity, Video, FileText, HeartPulse, Stethoscope, Clock, PhoneCall, MapPin, ArrowRight, Users, Shield } from 'lucide-react';
import { Card } from '@/components/ui';

export default function KioskHome() {
  const actions = [
    { 
      title: 'Check My Health', 
      description: 'Measure BP, Pulse & Temperature', 
      icon: HeartPulse, 
      href: '/kiosk/vitals',
      gradient: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50',
      iconColor: 'text-rose-600'
    },
    { 
      title: 'Talk to Doctor', 
      description: 'Instant Video Consultation', 
      icon: Video, 
      href: '/kiosk/telemedicine',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    { 
      title: 'My Records', 
      description: 'View & Print Health Records', 
      icon: FileText, 
      href: '/kiosk/records',
      gradient: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    { 
      title: 'Health Tips', 
      description: 'Learn & Stay Healthy', 
      icon: Activity, 
      href: '/kiosk/education',
      gradient: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-2">
          Welcome to HealthBridge Kiosk
        </h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Touch any option below to get started with your health journey
        </p>
      </div>

      {/* Action Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actions.map((item, i) => (
          <Link key={i} href={item.href}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Card className="p-8 hover:shadow-xl transition-all cursor-pointer border-2 border-[var(--border-default)] hover:border-[var(--primary)] bg-white">
                <div className="flex items-center gap-6">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
                    <item.icon size={40} className={item.iconColor} strokeWidth={2} />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-base text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="w-12 h-12 rounded-full bg-[var(--gray-100)] group-hover:bg-[var(--primary)] flex items-center justify-center transition-colors">
                    <ArrowRight size={24} className="text-[var(--text-tertiary)] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </Card>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Info Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Doctor Available */}
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
              <Stethoscope size={28} className="text-blue-600" />
            </div>
            <div>
              <p className="font-bold text-[var(--text-primary)] text-lg">Doctor Available</p>
              <p className="text-sm text-[var(--text-secondary)]">Dr. Sarah Johnson</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/80 rounded-lg px-4 py-3">
            <Clock size={20} className="text-blue-600" />
            <span className="text-lg font-semibold text-[var(--text-primary)]">~5 min wait</span>
          </div>
        </Card>

        {/* Emergency Contact */}
        <Card className="p-6 bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-rose-100 flex items-center justify-center">
              <PhoneCall size={28} className="text-rose-600" />
            </div>
            <div>
              <p className="font-bold text-[var(--text-primary)] text-lg">Emergency</p>
              <p className="text-sm text-[var(--text-secondary)]">24/7 Support</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/80 rounded-lg px-4 py-3">
            <span className="text-3xl font-bold text-[var(--text-primary)]">108</span>
          </div>
        </Card>

        {/* Location */}
        <Card className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center">
              <MapPin size={28} className="text-emerald-600" />
            </div>
            <div>
              <p className="font-bold text-[var(--text-primary)] text-lg">Location</p>
              <p className="text-sm text-[var(--text-secondary)]">Main Building</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/80 rounded-lg px-4 py-3">
            <span className="text-lg font-semibold text-[var(--text-primary)]">Ground Floor</span>
          </div>
        </Card>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-2 border-[var(--border-default)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Users size={24} className="text-blue-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-[var(--text-primary)]">127</p>
              <p className="text-sm text-[var(--text-secondary)]">Patients Today</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-2 border-[var(--border-default)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <Stethoscope size={24} className="text-green-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-[var(--text-primary)]">8</p>
              <p className="text-sm text-[var(--text-secondary)]">Doctors Available</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-2 border-[var(--border-default)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <Shield size={24} className="text-purple-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-[var(--text-primary)]">100%</p>
              <p className="text-sm text-[var(--text-secondary)]">Safety Rating</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Help Banner */}
      <Card className="p-8 border-2 border-[var(--border-default)] bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="text-center">
          <p className="text-lg text-[var(--text-secondary)] mb-6">
            <span className="font-bold text-[var(--text-primary)]">Need assistance?</span> Our staff is here to help you navigate the kiosk system
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-xl border-2 border-[var(--border-default)] shadow-sm">
              <span className="text-2xl">🇮🇳</span>
              <span className="font-semibold text-[var(--text-primary)]">12+ Languages</span>
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-xl border-2 border-[var(--border-default)] shadow-sm">
              <span className="text-2xl">♿</span>
              <span className="font-semibold text-[var(--text-primary)]">Accessible</span>
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-xl border-2 border-[var(--border-default)] shadow-sm">
              <span className="text-2xl">🔊</span>
              <span className="font-semibold text-[var(--text-primary)]">Voice Support</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

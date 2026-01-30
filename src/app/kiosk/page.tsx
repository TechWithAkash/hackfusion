'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity, Video, FileText, HeartPulse, Stethoscope, Clock, PhoneCall, MapPin, ArrowRight } from 'lucide-react';

export default function KioskHome() {
  const actions = [
    { 
      title: 'Check My Health', 
      description: 'Measure BP, Pulse & Temperature', 
      icon: HeartPulse, 
      href: '/kiosk/vitals',
      color: 'rose',
      bgGradient: 'from-rose-50 to-pink-50',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600',
      borderColor: 'border-rose-200'
    },
    { 
      title: 'Talk to Doctor', 
      description: 'Instant Video Consultation', 
      icon: Video, 
      href: '/kiosk/telemedicine',
      color: 'blue',
      bgGradient: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    { 
      title: 'My Records', 
      description: 'View & Print Health Records', 
      icon: FileText, 
      href: '/kiosk/records',
      color: 'emerald',
      bgGradient: 'from-emerald-50 to-green-50',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-200'
    },
    { 
      title: 'Health Tips', 
      description: 'Learn & Stay Healthy', 
      icon: Activity, 
      href: '/kiosk/education',
      color: 'amber',
      bgGradient: 'from-amber-50 to-orange-50',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      borderColor: 'border-amber-200'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 -z-10 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
              <Activity size={32} className="text-white" strokeWidth={2} />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-semibold text-gray-900">HealthBridge</h1>
              <p className="text-sm text-gray-500">Community Health Center #24</p>
            </div>
          </motion.div>

          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-4">
              How can we help you today?
            </h2>
            <p className="text-xl text-gray-600">
              Touch any option below to get started
            </p>
          </motion.div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {actions.map((item, i) => (
            <Link key={i} href={item.href}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                {/* Card */}
                <div className={`relative bg-gradient-to-br ${item.bgGradient} rounded-2xl p-8 border-2 ${item.borderColor} hover:shadow-xl transition-all h-full min-h-[180px]`}>
                  {/* Content */}
                  <div className="flex items-center gap-6">
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-xl ${item.iconBg} flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm`}>
                      <item.icon size={40} className={item.iconColor} strokeWidth={2} />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-base text-gray-600">
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center group-hover:bg-gray-900 transition-colors shadow-sm">
                      <ArrowRight size={24} className="text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {/* Doctor Available */}
          <div className="bg-white rounded-xl p-6 border-2 border-blue-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Stethoscope size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Doctor Available</p>
                <p className="text-sm text-gray-500">Dr. Sarah Johnson</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-4 py-2">
              <Clock size={18} className="text-blue-600" />
              <span className="text-lg font-medium text-gray-900">~5 min wait</span>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-white rounded-xl p-6 border-2 border-rose-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-rose-100 flex items-center justify-center">
                <PhoneCall size={24} className="text-rose-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Emergency</p>
                <p className="text-sm text-gray-500">24/7 Support</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-rose-50 rounded-lg px-4 py-2">
              <span className="text-2xl font-semibold text-gray-900">108</span>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-xl p-6 border-2 border-emerald-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                <MapPin size={24} className="text-emerald-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Location</p>
                <p className="text-sm text-gray-500">Main Building</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 rounded-lg px-4 py-2">
              <span className="text-lg font-medium text-gray-900">Ground Floor</span>
            </div>
          </div>
        </motion.div>

        {/* Help Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center shadow-sm"
        >
          <p className="text-lg text-gray-600 mb-6">
            <span className="font-semibold text-gray-900">Need assistance?</span> Our staff is here to help you navigate the kiosk
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-xl">🇮🇳</span>
              <span className="font-medium text-gray-700">12+ Languages</span>
            </div>
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-xl">♿</span>
              <span className="font-medium text-gray-700">Accessible</span>
            </div>
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-xl">🔊</span>
              <span className="font-medium text-gray-700">Voice Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

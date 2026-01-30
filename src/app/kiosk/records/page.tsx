'use client';

import React from 'react';
import { FileText, Download, Eye, Calendar, ArrowLeft, Printer } from 'lucide-react';
import { Button } from '@/components/ui';
import Link from 'next/link';

export default function RecordsPage() {
  const records = [
    {
      title: 'Blood Test Report',
      type: 'Lab Report',
      date: '25 Jan, 2026',
      doctor: 'Dr. Sarah Johnson',
      color: 'red'
    },
    {
      title: 'Prescription - Fever',
      type: 'Prescription',
      date: '20 Jan, 2026',
      doctor: 'Dr. Rajesh Kumar',
      color: 'blue'
    },
    {
      title: 'X-Ray Chest',
      type: 'Radiology',
      date: '15 Jan, 2026',
      doctor: 'Dr. Priya Sharma',
      color: 'purple'
    },
    {
      title: 'Health Checkup Summary',
      type: 'General',
      date: '10 Jan, 2026',
      doctor: 'Dr. Sarah Johnson',
      color: 'green'
    },
    {
      title: 'Vaccination Record',
      type: 'Immunization',
      date: '5 Jan, 2026',
      doctor: 'Dr. Rajesh Kumar',
      color: 'orange'
    },
    {
      title: 'ECG Report',
      type: 'Cardiology',
      date: '1 Jan, 2026',
      doctor: 'Dr. Priya Sharma',
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; icon: string }> = {
      red: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-600' },
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600' },
      green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'text-orange-600' },
      pink: { bg: 'bg-pink-50', border: 'border-pink-200', icon: 'text-pink-600' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back Button */}
        <Link href="/kiosk">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft size={20} />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6 shadow-lg">
            <FileText size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-semibold text-gray-900 mb-4">
            My Health Records
          </h1>
          <p className="text-xl text-gray-600">
            View and print your medical documents
          </p>
        </div>

        {/* Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {records.map((record, i) => {
            const colors = getColorClasses(record.color);
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl p-6 border-2 ${colors.border} hover:shadow-xl transition-all`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg ${colors.bg} flex items-center justify-center mb-4`}>
                  <FileText size={28} className={colors.icon} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {record.title}
                </h3>
                <div className="space-y-1 mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Type:</span> {record.type}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <Calendar size={14} />
                    {record.date}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">By:</span> {record.doctor}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 h-10 rounded-lg border-gray-300 hover:bg-gray-50 gap-2"
                  >
                    <Eye size={16} />
                    View
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 h-10 rounded-lg border-gray-300 hover:bg-gray-50 gap-2"
                  >
                    <Printer size={16} />
                    Print
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Text */}
        <div className="mt-12 bg-white border-2 border-gray-200 rounded-xl p-6 text-center">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">Need a copy?</span> You can print any record using the Print button or ask our staff for assistance.
          </p>
        </div>
      </div>
    </div>
  );
}

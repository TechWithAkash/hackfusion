'use client';

import React from 'react';
import { FileText, Eye, Calendar, Printer } from 'lucide-react';
import { Button, Card } from '@/components/ui';

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
      red: { bg: 'bg-red-50/30', border: 'border-red-200', icon: 'text-red-600' },
      blue: { bg: 'bg-blue-50/30', border: 'border-blue-200', icon: 'text-blue-600' },
      purple: { bg: 'bg-purple-50/30', border: 'border-purple-200', icon: 'text-purple-600' },
      green: { bg: 'bg-green-50/30', border: 'border-green-200', icon: 'text-green-600' },
      orange: { bg: 'bg-orange-50/30', border: 'border-orange-200', icon: 'text-orange-600' },
      pink: { bg: 'bg-pink-50/30', border: 'border-pink-200', icon: 'text-pink-600' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-2">
          My Health Records
        </h1>
        <p className="text-lg text-[var(--text-secondary)]">
          View and print your medical documents
        </p>
      </div>

      {/* Records Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {records.map((record, i) => {
          const colors = getColorClasses(record.color);
          return (
            <Card
              key={i}
              className={`p-6 border-2 ${colors.border} ${colors.bg} hover:shadow-lg transition-all`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm`}>
                <FileText size={28} className={colors.icon} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                {record.title}
              </h3>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-[var(--text-secondary)]">
                  <span className="font-semibold">Type:</span> {record.type}
                </p>
                <p className="text-sm text-[var(--text-secondary)] flex items-center gap-1">
                  <Calendar size={14} />
                  {record.date}
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  <span className="font-semibold">By:</span> {record.doctor}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 h-10 rounded-lg border-[var(--border-default)] hover:bg-white gap-2"
                >
                  <Eye size={16} />
                  View
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-10 rounded-lg border-[var(--border-default)] hover:bg-white gap-2"
                >
                  <Printer size={16} />
                  Print
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Help Text */}
      <Card className="p-6 border-2 border-[var(--border-default)] bg-gradient-to-r from-blue-50/30 to-cyan-50/30 text-center">
        <p className="text-[var(--text-secondary)]">
          <span className="font-bold text-[var(--text-primary)]">Need a copy?</span> You can print any record using the Print button or ask our staff for assistance.
        </p>
      </Card>
    </div>
  );
}

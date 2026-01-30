'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Users, Clock, DollarSign, Star, Video, 
  MoreVertical, FileText, AlertCircle, Phone, Settings,
  TrendingUp, Calendar, Activity
} from 'lucide-react';
import { Button, Card, CardContent, CardHeader, CardTitle, Badge, SeverityBadge } from '@/components/ui';

// Mock Patient Queue Data (Unsorted)
const rawQueue = [
  { id: '1', name: 'Ravi Kumar', age: 45, symptom: 'Severe Chest Pain', severity: 'high', waitTime: '5m', village: 'Rampur' },
  { id: '2', name: 'Sunita Devi', age: 29, symptom: 'High Fever & Chills', severity: 'medium', waitTime: '12m', village: 'Kishanpur' },
  { id: '3', name: 'Amit Singh', age: 12, symptom: 'Skin Rash', severity: 'low', waitTime: '20m', village: 'Rampur' },
  { id: '4', name: 'Priya Sharma', age: 65, symptom: 'Breathing Difficulty', severity: 'critical', waitTime: '2m', village: 'Belapur' },
  { id: '5', name: 'Rahul Verma', age: 34, symptom: 'Headache', severity: 'low', waitTime: '15m', village: 'Kishanpur' },
];

// Sort Queue by Severity Priority (Critical > High > Medium > Low)
const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
const patientQueue = rawQueue.sort((a, b) => 
  severityOrder[a.severity as keyof typeof severityOrder] - severityOrder[b.severity as keyof typeof severityOrder]
);

export default function DoctorDashboard() {
  return (
    <div className="space-y-8">
      {/* Background */}
      <div className="fixed inset-0 -z-10 gradient-mesh opacity-40"></div>

      {/* Header */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-[var(--border-default)]">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Welcome back, Dr. Sarah</h1>
            <p className="text-[var(--text-secondary)] font-medium">
              You have <span className="font-bold text-[var(--primary)]">{patientQueue.length} patients</span> waiting in triage.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-xl text-sm font-semibold border border-green-100">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Online
            </span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Consultations Today', value: '12', icon: Video, color: '#3B82F6', bg: '#EFF6FF', trend: '+3' },
          { label: 'Patients Served', value: '1,240', icon: Users, color: '#A855F7', bg: '#FAF5FF', trend: '+24' },
          { label: 'Avg Rating', value: '4.9', icon: Star, color: '#F59E0B', bg: '#FFFBEB', trend: '+0.1' },
          { label: 'Earnings', value: '₹4,500', icon: DollarSign, color: '#10B981', bg: '#F0FDF4', trend: '+₹850' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--border-default)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl" style={{ backgroundColor: stat.bg }}>
                <stat.icon size={20} style={{ color: stat.color }} />
              </div>
              <div className="text-xs font-semibold text-green-600 flex items-center gap-1">
                <TrendingUp size={12} />
                {stat.trend}
              </div>
            </div>
            <div>
              <p className="text-sm text-[var(--text-tertiary)] font-medium mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold text-[var(--text-primary)]">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content: Triage Queue */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Users size={20} className="text-[var(--primary)]"/> Patient Queue
            </h2>
            <Badge variant="info">AI Triaged</Badge>
          </div>
          
          <div className="space-y-3">
            {patientQueue.map((patient) => {
              const severityColors = {
                critical: { border: '#EF4444', bg: '#FEF2F2', text: '#991B1B' },
                high: { border: '#F97316', bg: '#FFF7ED', text: '#9A3412' },
                medium: { border: '#F59E0B', bg: '#FFFBEB', text: '#92400E' },
                low: { border: '#10B981', bg: '#F0FDF4', text: '#065F46' }
              };
              const colors = severityColors[patient.severity as keyof typeof severityColors];

              return (
                <div 
                  key={patient.id} 
                  className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--border-default)] hover:shadow-md transition-all duration-300 group"
                  style={{ borderLeft: `4px solid ${colors.border}` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Left: Patient Info */}
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 rounded-xl bg-[var(--gray-100)] flex items-center justify-center font-bold text-[var(--text-secondary)] text-lg shrink-0">
                        {patient.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[var(--text-primary)] mb-1">
                          {patient.name} <span className="text-sm font-normal text-[var(--text-tertiary)]">({patient.age}y)</span>
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] mb-3">
                          <span className="flex items-center gap-1">
                            <Clock size={12}/> Wait: {patient.waitTime}
                          </span>
                          <span>•</span>
                          <span>{patient.village}</span>
                        </div>
                        
                        {/* AI Insights */}
                        <div className="rounded-xl p-3 border" style={{ backgroundColor: colors.bg, borderColor: colors.border + '40' }}>
                          <p className="text-xs font-semibold uppercase mb-1" style={{ color: colors.text }}>
                            AI Detected Symptom
                          </p>
                          <p className="text-sm font-semibold text-[var(--text-primary)]">{patient.symptom}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                      <SeverityBadge severity={patient.severity as any} />
                      <Link href={`/doctor/consultation/${patient.id}`}>
                        <Button size="sm" className="gap-2 h-10 px-5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold shadow-md transition-all">
                          <Video size={16} /> Start
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Sidebar: Schedule */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">Today's Schedule</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-[var(--border-default)] overflow-hidden">
            <div className="p-6 border-b border-[var(--border-light)]">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-[var(--text-primary)]">Today, 8 Feb</span>
                <Settings size={16} className="text-[var(--text-tertiary)] cursor-pointer hover:text-[var(--text-primary)] transition-colors" />
              </div>
              
              <div className="space-y-3">
                {['09:00 AM', '09:30 AM', '10:00 AM'].map((time) => (
                  <div key={time} className="flex items-center gap-3 py-2 text-sm text-[var(--text-tertiary)]">
                    <div className="w-2 h-2 bg-green-400 rounded-full"/>
                    <span className="line-through flex-1">{time}</span>
                    <span className="text-xs bg-[var(--gray-100)] px-2 py-0.5 rounded-lg font-medium">Completed</span>
                  </div>
                ))}
                
                <div className="flex items-center gap-3 py-2 text-sm font-semibold text-[var(--primary)]">
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"/>
                  <span className="flex-1">10:30 AM</span>
                  <span className="text-xs bg-blue-50 text-[var(--primary)] px-2 py-0.5 rounded-lg">Current</span>
                </div>
                
                {['11:00 AM', '11:30 AM', '12:00 PM'].map((time) => (
                  <div key={time} className="flex items-center gap-3 py-2 text-sm text-[var(--text-secondary)]">
                    <div className="w-2 h-2 bg-[var(--gray-300)] rounded-full"/>
                    <span className="flex-1">{time}</span>
                    <span className="text-xs bg-[var(--gray-100)] px-2 py-0.5 rounded-lg font-medium">Open</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-[var(--gray-50)]">
              <Button variant="outline" size="sm" className="w-full rounded-xl font-semibold">
                Manage Availability
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Activity size={20} />
              <h3 className="font-bold text-lg">This Week</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-blue-100 text-sm">Total Consultations</span>
                <span className="text-2xl font-bold">48</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-100 text-sm">Avg Duration</span>
                <span className="text-2xl font-bold">12m</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-100 text-sm">Patient Satisfaction</span>
                <span className="text-2xl font-bold">98%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

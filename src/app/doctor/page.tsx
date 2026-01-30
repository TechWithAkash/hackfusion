'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Users, Clock, DollarSign, Star, Video, 
  MoreVertical, FileText, AlertCircle, Phone, Settings 
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
      {/* Header & Stats */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
           <h1 className="text-2xl font-bold text-[var(--gray-900)]">Welcome back, Dr. Sarah</h1>
           <p className="text-[var(--gray-600)]">You have <span className="font-bold text-[var(--primary)]">{patientQueue.length} patients</span> waiting in triage.</p>
        </div>
        <div className="flex items-center gap-3">
           <span className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Online
           </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Consultations Today', value: '12', icon: Video, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Patients Served', value: '1,240', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Avg Rating', value: '4.9', icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-50' },
          { label: 'Earnings', value: '₹4,500', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-50' },
        ].map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-4 flex items-center justify-between">
               <div>
                  <p className="text-sm text-[var(--gray-500)] mb-1">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-[var(--gray-900)]">{stat.value}</h3>
               </div>
               <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                  <stat.icon size={20} />
               </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content: Triage Queue */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-[var(--gray-900)] flex items-center gap-2">
                 <Users size={20} className="text-[var(--primary)]"/> Patient Queue
              </h2>
              <Badge variant="info">AI Triaged</Badge>
           </div>
           
           <div className="space-y-3">
              {patientQueue.map((patient) => (
                <Card key={patient.id} hover className="group border-l-4 border-l-transparent data-[severity=critical]:border-l-red-500 data-[severity=high]:border-l-red-500 data-[severity=medium]:border-l-orange-500" data-severity={patient.severity}>
                   <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Left: Patient Info */}
                      <div className="flex items-start gap-4">
                         <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500">
                           {patient.name.charAt(0)}
                         </div>
                         <div>
                            <h4 className="font-bold text-[var(--gray-900)]">{patient.name} <span className="text-sm font-normal text-gray-500">({patient.age}y)</span></h4>
                            <div className="flex items-center gap-2 text-sm text-[var(--gray-500)] mt-1">
                               <span className="flex items-center gap-1"><Clock size={12}/> Wait: {patient.waitTime}</span>
                               <span>•</span>
                               <span>{patient.village}</span>
                            </div>
                         </div>
                      </div>

                      {/* Middle: AI Insights */}
                      <div className="flex-1 sm:px-4">
                         <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                            <p className="text-xs text-gray-400 font-medium uppercase mb-1">AI Detected Symptom</p>
                            <p className="text-sm font-medium text-gray-800">{patient.symptom}</p>
                         </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-3">
                         <SeverityBadge severity={patient.severity as any} />
                         <Link href={`/doctor/consultation/${patient.id}`}>
                            <Button size="sm" className="gap-2">
                               <Video size={16} /> Start
                            </Button>
                         </Link>
                      </div>
                   </CardContent>
                </Card>
              ))}
           </div>
        </div>

        {/* Right Sidebar: Quick Schedule */}
        <div className="space-y-6">
           <h2 className="text-lg font-bold text-[var(--gray-900)]">Schedule</h2>
           <Card>
              <CardContent className="p-0">
                 <div className="p-4 border-b border-[var(--border-color)]">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium text-gray-900">Today, 8 Feb</span>
                      <Settings size={16} className="text-gray-400 cursor-pointer" />
                    </div>
                    {['09:00 AM', '09:30 AM', '10:00 AM'].map((time) => (
                       <div key={time} className="flex items-center gap-3 py-2 text-sm text-gray-500">
                          <div className="w-2 h-2 bg-green-400 rounded-full"/>
                          <span className="line-through">{time}</span>
                          <span className="ml-auto text-xs bg-gray-100 px-2 py-0.5 rounded">Completed</span>
                       </div>
                    ))}
                    <div className="flex items-center gap-3 py-2 text-sm font-medium text-blue-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"/>
                        <span>10:30 AM</span>
                        <span className="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Current</span>
                    </div>
                    {['11:00 AM', '11:30 AM'].map((time) => (
                       <div key={time} className="flex items-center gap-3 py-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gray-300 rounded-full"/>
                          <span>{time}</span>
                          <span className="ml-auto text-xs bg-gray-100 px-2 py-0.5 rounded">Open</span>
                       </div>
                    ))}
                 </div>
                 <div className="p-4 bg-gray-50 text-center">
                    <Button variant="outline" size="sm" className="w-full">Manage Availability</Button>
                 </div>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}

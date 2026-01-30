'use client';

import React from 'react';
import { FileText, Download, Share2, Filter, Upload, Search, Eye, Trash2 } from 'lucide-react';
import { Button, Card, CardContent } from '@/components/ui';
import { useTranslate } from '@/context/LanguageContext';

export default function RecordsPage() {
  const t = useTranslate();
  
  const records = [
    { title: 'Blood Test Report', type: 'Lab Report', date: '5 Feb, 2026', size: '2.4 MB', color: 'bg-red-50 text-red-600', icon: FileText },
    { title: 'Viral Fever Prescription', type: 'Prescription', date: '2 Feb, 2026', size: '1.1 MB', color: 'bg-blue-50 text-blue-600', icon: FileText },
    { title: 'MRI Scan - Knee', type: 'Radiology', date: '15 Jan, 2026', size: '14 MB', color: 'bg-purple-50 text-purple-600', icon: FileText },
    { title: 'Annual Checkup Summary', type: 'General', date: '10 Dec, 2025', size: '4.2 MB', color: 'bg-green-50 text-green-600', icon: FileText },
    { title: 'X-Ray Chest', type: 'Radiology', date: '28 Nov, 2025', size: '8.5 MB', color: 'bg-orange-50 text-orange-600', icon: FileText },
    { title: 'Dental Checkup', type: 'General', date: '15 Nov, 2025', size: '1.8 MB', color: 'bg-teal-50 text-teal-600', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/20 py-8">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-grid-pattern opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-1">Health Records</h1>
            <p className="text-[var(--text-secondary)] font-medium">Access and manage your medical documents</p>
          </div>
          <Button className="h-11 px-6 rounded-xl bg-[var(--text-primary)] text-white font-semibold hover:bg-[var(--gray-800)] shadow-md flex items-center gap-2">
            <Upload size={18} /> Upload Record
          </Button>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" size={18} />
            <input 
              type="text" 
              placeholder="Search records..." 
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-[var(--border-default)] bg-white focus:ring-2 focus:ring-[var(--primary)]/20 outline-none text-sm font-medium text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]"
            />
          </div>
          <Button variant="outline" className="h-11 px-5 rounded-xl border-[var(--border-default)] font-semibold flex items-center gap-2">
            <Filter size={18} /> Filter
          </Button>
        </div>

        {/* Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {records.map((doc, i) => (
            <Card key={i} className="group bg-white hover:shadow-lg transition-all border-[var(--border-default)] rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3.5 rounded-xl ${doc.color} group-hover:scale-110 transition-transform`}>
                    <doc.icon size={24} />
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-[var(--gray-100)] rounded-lg text-[var(--text-tertiary)] hover:text-[var(--primary)] transition-colors">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 hover:bg-[var(--gray-100)] rounded-lg text-[var(--text-tertiary)] hover:text-[var(--primary)] transition-colors">
                      <Download size={16} />
                    </button>
                    <button className="p-2 hover:bg-[var(--gray-100)] rounded-lg text-[var(--text-tertiary)] hover:text-[var(--primary)] transition-colors">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
                
                <div>
                  <div className="inline-block px-2.5 py-1 bg-[var(--gray-50)] rounded-lg text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">
                    {doc.type}
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] leading-tight mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-[var(--text-tertiary)] font-medium">{doc.date} • {doc.size}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center md:text-left">
              <p className="text-green-100 font-medium text-sm mb-1">Total Records</p>
              <p className="text-4xl font-bold">{records.length}</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-green-100 font-medium text-sm mb-1">Storage Used</p>
              <p className="text-4xl font-bold">32.5 MB</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-green-100 font-medium text-sm mb-1">Last Upload</p>
              <p className="text-4xl font-bold">5 Feb</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

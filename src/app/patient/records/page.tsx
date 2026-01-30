'use client';

import React from 'react';
import { FileText, Download, Share2, Filter, Upload, Search } from 'lucide-react';
import { Button, Card, CardContent } from '@/components/ui';
import { useTranslate } from '@/context/LanguageContext';

export default function RecordsPage() {
  const tTitle = useTranslate('Health Records');
  const tUpload = useTranslate('Upload Record');
  
  const records = [
    { title: 'Blood Test Report', type: 'Lab Report', date: '5 Feb, 2026', size: '2.4 MB', color: 'bg-rose-50 text-rose-600' },
    { title: 'Viral Fever Prescription', type: 'Prescription', date: '2 Feb, 2026', size: '1.1 MB', color: 'bg-blue-50 text-blue-600' },
    { title: 'MRI Scan - Knee', type: 'Radiology', date: '15 Jan, 2026', size: '14 MB', color: 'bg-purple-50 text-purple-600' },
    { title: 'Annual Checkup Summary', type: 'General', date: '10 Dec, 2025', size: '4.2 MB', color: 'bg-emerald-50 text-emerald-600' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900">{tTitle}</h1>
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
             <input 
                type="text" 
                placeholder="Search records..." 
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-100 outline-none text-sm"
             />
          </div>
          <Button className="rounded-xl gap-2">
            <Upload size={18} /> <span className="hidden sm:inline">{tUpload}</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {records.map((doc, i) => (
          <Card key={i} className="group hover:shadow-lg transition-all duration-300 border-slate-100">
            <CardContent className="p-6">
               <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl ${doc.color} group-hover:scale-110 transition-transform`}>
                     <FileText size={28} />
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                     <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-500"><Share2 size={18} /></button>
                     <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-500"><Download size={18} /></button>
                  </div>
               </div>
               
               <div>
                  <div className="inline-block px-2 py-1 bg-slate-50 rounded text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {doc.type}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-slate-400">{doc.date} • {doc.size}</p>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

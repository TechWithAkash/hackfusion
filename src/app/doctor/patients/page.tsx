'use client';

import React from 'react';
import { Search, Filter, MoreHorizontal, MessageSquare, Video, FileText } from 'lucide-react';
import { Button, Card } from '@/components/ui';

export default function DoctorPatientsPage() {
  const patients = [
    { name: 'John Doe', age: 45, gender: 'Male', condition: 'Hypertension', status: 'Follow-up', lastVisit: '2 days ago', image: '' },
    { name: 'Sita Devi', age: 32, gender: 'Female', condition: 'Prenatal Care', status: 'Critical', lastVisit: 'Today', image: '' },
    { name: 'Ramesh Kumar', age: 58, gender: 'Male', condition: 'Type 2 Diabetes', status: 'Stable', lastVisit: '1 week ago', image: '' },
    { name: 'Anita Singh', age: 24, gender: 'Female', condition: 'Viral Fever', status: 'Recovering', lastVisit: '3 days ago', image: '' },
    { name: 'Vijay Patil', age: 12, gender: 'Male', condition: 'Fracture', status: 'Treatment', lastVisit: 'Yesterday', image: '' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
           <h1 className="text-2xl font-bold text-slate-900">My Patients</h1>
           <p className="text-slate-500">Total 1,248 patients managed</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
             <input 
                type="text" 
                placeholder="Search patient name, ID..." 
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-100 outline-none text-sm"
             />
          </div>
          <Button variant="outline" className="rounded-xl border-slate-200">
             <Filter size={18} />
          </Button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
         <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase text-xs">
               <tr>
                  <th className="p-4 pl-6">Patient</th>
                  <th className="p-4 hidden md:table-cell">Diagnosis</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 hidden sm:table-cell">Last Visit</th>
                  <th className="p-4 text-right pr-6">Actions</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
               {patients.map((p, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                     <td className="p-4 pl-6">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                              {p.name.charAt(0)}
                           </div>
                           <div>
                              <p className="font-bold text-slate-900">{p.name}</p>
                              <p className="text-xs text-slate-500">{p.gender}, {p.age} yrs</p>
                           </div>
                        </div>
                     </td>
                     <td className="p-4 hidden md:table-cell font-medium text-slate-700">{p.condition}</td>
                     <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold 
                           ${p.status === 'Critical' ? 'bg-red-50 text-red-600' : 
                             p.status === 'Stable' ? 'bg-green-50 text-green-600' : 
                             'bg-blue-50 text-blue-600'}`}>
                           {p.status}
                        </span>
                     </td>
                     <td className="p-4 hidden sm:table-cell text-slate-500">{p.lastVisit}</td>
                     <td className="p-4 text-right pr-6">
                        <div className="flex items-center justify-end gap-2">
                           <button className="p-2 hover:bg-slate-100 text-slate-400 hover:text-blue-600 rounded-lg transition-colors" title="Message">
                              <MessageSquare size={18} />
                           </button>
                           <button className="p-2 hover:bg-slate-100 text-slate-400 hover:text-emerald-600 rounded-lg transition-colors" title="Records">
                              <FileText size={18} />
                           </button>
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  );
}

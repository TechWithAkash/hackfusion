'use client';

import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, User, Check, X } from 'lucide-react';
import { Button, Card } from '@/components/ui';

export default function DoctorAppointmentsPage() {
  const appointments = [
    { patient: 'Ramesh Kumar', time: '09:00 AM', type: 'Video Consult', status: 'Upcoming', image: '' },
    { patient: 'Sita Devi', time: '10:30 AM', type: 'In-Clinic', status: 'Upcoming', image: '' },
    { patient: 'John Doe', time: '11:45 AM', type: 'Video Consult', status: 'Pending', image: '' },
    { patient: 'Anita Singh', time: '02:00 PM', type: 'Video Consult', status: 'Upcoming', image: '' },
    { patient: 'Vijay Patil', time: '04:15 PM', type: 'In-Clinic', status: 'Confirmed', image: '' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Today's Schedule</h1>
        <div className="flex gap-2">
           <Button variant="outline" className="border-slate-200">
             <CalendarIcon size={16} className="mr-2" /> Select Date
           </Button>
           <Button>+ Add Slot</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Calendar Column (Abstract) */}
         <div className="lg:col-span-1">
            <Card className="p-4 border-slate-200">
               <div className="bg-slate-50 rounded-xl h-64 flex items-center justify-center text-slate-400">
                  Interactive Calendar Component
               </div>
            </Card>
         </div>

         {/* List Column */}
         <div className="lg:col-span-2 space-y-4">
           {appointments.map((apt, i) => (
             <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
               <div className="flex items-center gap-4 w-full sm:w-auto">
                 <div className="w-2 h-16 bg-blue-500 rounded-full hidden sm:block"></div>
                 <div>
                    <h3 className="font-bold text-slate-900">{apt.time}</h3>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{apt.type}</p>
                 </div>
                 <div className="h-10 w-[1px] bg-slate-100 hidden sm:block"></div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                       <User size={20} />
                    </div>
                    <div>
                       <p className="font-bold text-slate-800">{apt.patient}</p>
                       <p className="text-xs text-blue-600 font-medium">View Profile</p>
                    </div>
                 </div>
               </div>
               
               <div className="flex gap-2 w-full sm:w-auto justify-end">
                  {apt.status === 'Pending' ? (
                    <>
                      <Button size="sm" className="bg-green-50 text-green-600 hover:bg-green-100 border-none"><Check size={16} /> Accept</Button>
                      <Button size="sm" className="bg-red-50 text-red-600 hover:bg-red-100 border-none"><X size={16} /> Decline</Button>
                    </>
                  ) : (
                    <Button size="sm" className="bg-blue-50 text-blue-600 hover:bg-blue-100 border-none w-full sm:w-auto">Join Call</Button>
                  )}
               </div>
             </div>
           ))}
         </div>
      </div>
    </div>
  );
}

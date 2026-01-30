'use client';

import React from 'react';
import { Video, Calendar, Clock, FileText, ChevronRight, User } from 'lucide-react';
import { Button, Card, CardContent, Badge } from '@/components/ui';
import { useTranslate } from '@/context/LanguageContext';

export default function ConsultationsPage() {
  const tTitle = useTranslate('My Consultations');
  const tUpcoming = useTranslate('Upcoming Appointments');
  const tPast = useTranslate('Past History');
  const tJoin = useTranslate('Join Call');
  const tSummary = useTranslate('View Summary');

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">{tTitle}</h1>
        <Button className="rounded-full gap-2">
          <Calendar size={18} /> Book New
        </Button>
      </div>

      {/* Upcoming Section */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-700">{tUpcoming}</h2>
        <Card className="border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                 <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200" alt="Dr. Sarah" />
                 </div>
                 <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-900">Dr. Sarah Johnson</h3>
                <p className="text-slate-500 font-medium">General Physician</p>
                <div className="flex items-center justify-center md:justify-start gap-4 mt-2 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><Calendar size={14}/> Today, 8 Feb</span>
                  <span className="flex items-center gap-1"><Clock size={14}/> 10:30 AM</span>
                </div>
              </div>

              <div className="w-full md:w-auto">
                <Button className="w-full md:w-auto h-12 px-8 rounded-xl shadow-lg shadow-blue-500/20 gap-2">
                  <Video size={18} /> {tJoin}
                </Button>
                <p className="text-center text-xs text-green-600 mt-2 font-medium animate-pulse">Starts in 15 mins</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Past Section */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-700">{tPast}</h2>
        <div className="grid gap-4">
          {[
            { doctor: 'Dr. Emily Chen', spec: 'Dermatologist', date: '5 Feb, 2026', time: '02:00 PM', status: 'Completed' },
            { doctor: 'Dr. Raj Patel', spec: 'Cardiologist', date: '28 Jan, 2026', time: '11:00 AM', status: 'Completed' },
          ].map((appt, i) => (
            <Card key={i} hover>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{appt.doctor}</h4>
                    <p className="text-xs text-slate-500">{appt.spec} • {appt.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                   <Badge variant="success" className="bg-green-50 text-green-700 border-green-100">{appt.status}</Badge>
                   <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                     {tSummary}
                   </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

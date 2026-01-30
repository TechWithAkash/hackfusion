'use client';

import React from 'react';
import { Video, Calendar, Clock, FileText, ChevronRight, User, Phone, MessageSquare, Star, MapPin } from 'lucide-react';
import { Button, Card, CardContent, Badge } from '@/components/ui';
import { useTranslate } from '@/context/LanguageContext';

export default function ConsultationsPage() {
  const tTitle = useTranslate('My Consultations');
  const tUpcoming = useTranslate('Upcoming Appointments');
  const tPast = useTranslate('Past History');
  const tJoin = useTranslate('Join Call');
  const tSummary = useTranslate('View Summary');

  return (
    <div className="max-w-6xl mx-auto space-y-10 font-sans relative pb-20">
       {/* Background Mesh */}
       <div className="absolute inset-x-[-50vw] inset-y-[-50vh] -z-10 bg-slate-50 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px]"></div>
       </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{tTitle}</h1>
           <p className="text-slate-500 font-medium mt-1">Manage your appointments and history</p>
        </div>
        <Button className="h-12 px-6 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 shadow-lg shadow-slate-900/20 gap-2">
          <Calendar size={18} /> Book New Appointment
        </Button>
      </div>

      {/* Upcoming Section - Hero Card style */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span> {tUpcoming}
        </h2>
        
        <div className="bg-white rounded-[2.5rem] p-1 shadow-xl shadow-blue-900/5 border border-white">
           <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-[2.3rem] p-8 md:p-10 relative overflow-hidden">
               {/* Decorative */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mt-16 -mr-16"></div>

               <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
                  <div className="flex flex-col md:flex-row items-center gap-8 w-full lg:w-auto">
                     <div className="relative group">
                        <div className="w-28 h-28 rounded-3xl bg-blue-200 border-4 border-white shadow-2xl overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-500">
                           <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300" alt="Dr. Anjali" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full border-4 border-white shadow-sm flex items-center gap-1">
                           <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> ONLINE
                        </div>
                     </div>
                     
                     <div className="text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
                           <h3 className="text-3xl font-bold text-slate-900">Dr. Anjali Gupta</h3>
                           <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-200">
                              Top Rated
                           </span>
                        </div>
                        <p className="text-slate-500 font-medium mb-4 flex items-center justify-center md:justify-start gap-2">
                           <Stethoscope size={16} className="text-blue-500"/> Senior Cardiologist • Apollo Hospital
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                           <span className="bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2 text-sm font-bold text-slate-600">
                              <Calendar size={16} className="text-blue-500" /> Today, 8 Feb
                           </span>
                           <span className="bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2 text-sm font-bold text-slate-600">
                              <Clock size={16} className="text-orange-500" /> 04:30 PM
                           </span>
                        </div>
                     </div>
                  </div>

                  <div className="flex flex-col gap-3 w-full lg:w-auto min-w-[200px]">
                     <Button className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                        <Video size={20} /> Join Now
                     </Button>
                     <div className="flex gap-3">
                        <Button variant="outline" className="flex-1 h-12 rounded-xl border-slate-200 hover:bg-slate-50 text-slate-600 font-bold">
                           <MessageSquare size={18} />
                        </Button>
                        <Button variant="outline" className="flex-1 h-12 rounded-xl border-slate-200 hover:bg-slate-50 text-slate-600 font-bold">
                           <Phone size={18} />
                        </Button>
                     </div>
                     <p className="text-center text-xs font-bold text-emerald-600 bg-emerald-50 py-2 rounded-lg border border-emerald-100">
                        Appointment Confirmed
                     </p>
                  </div>
               </div>
           </div>
        </div>
      </section>

      {/* Past Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900">{tPast}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { doctor: 'Dr. Vikram Singh', spec: 'Dermatologist', date: '5 Feb, 2026', time: '02:00 PM', status: 'Completed', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200', rating: 5 },
            { doctor: 'Dr. Priya Patel', spec: 'General Physician', date: '28 Jan, 2026', time: '11:00 AM', status: 'Completed', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200', rating: 4 },
            { doctor: 'Dr. Rajesh Kumar', spec: 'Orthopedist', date: '15 Jan, 2026', time: '10:00 AM', status: 'Completed', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200', rating: 5 },
          ].map((appt, i) => (
            <div key={i} className="group bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                   <div className="w-16 h-16 rounded-2xl bg-slate-100 overflow-hidden shadow-inner">
                      <img src={appt.img} alt={appt.doctor} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">{appt.doctor}</h4>
                     <p className="text-sm text-slate-400 font-medium">{appt.spec}</p>
                     <div className="flex items-center gap-1 mt-1">
                        {[...Array(appt.rating)].map((_, r) => (
                           <Star key={r} size={12} className="fill-amber-400 text-amber-400" />
                        ))}
                     </div>
                   </div>
                </div>
                <Badge className="bg-emerald-50 text-emerald-700 border-emerald-100 px-3 py-1 rounded-lg">
                   {appt.status}
                </Badge>
              </div>

              <div className="flex items-center gap-4 mb-6 text-sm font-medium text-slate-500 bg-slate-50 p-4 rounded-xl">
                 <span className="flex items-center gap-2"><Calendar size={16} className="text-slate-400"/> {appt.date}</span>
                 <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                 <span className="flex items-center gap-2"><Clock size={16} className="text-slate-400"/> {appt.time}</span>
              </div>

              <div className="flex items-center gap-3">
                 <Button className="flex-1 h-11 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 shadow-lg shadow-slate-900/10">
                   Book Again
                 </Button>
                 <Button variant="outline" className="flex-1 h-11 rounded-xl border-slate-200 text-slate-600 font-bold hover:bg-slate-50 hover:text-blue-600">
                   {tSummary}
                 </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Help Banner */}
       <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden shadow-xl shadow-purple-500/20">
          <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
             <div>
                <h3 className="text-2xl font-bold mb-2">Need Help Booking?</h3>
                <p className="text-purple-100 font-medium opacity-90">Our support team is available 24/7 to assist you with appointments.</p>
             </div>
             <Button className="h-12 px-8 rounded-xl bg-white text-purple-600 font-bold hover:bg-purple-50 hover:scale-105 transition-all shadow-lg">
                Call Support
             </Button>
          </div>
       </div>

    </div>
  );
}

// Helper icons
function Stethoscope(props: any) {
   return (
      <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
   )
}

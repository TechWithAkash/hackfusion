'use client';

import React from 'react';
import { Video, Calendar, Clock, FileText, ChevronRight, User, Phone, MessageSquare, Star, MapPin, Plus, Stethoscope } from 'lucide-react';
import { Button, Card, CardContent, Badge } from '@/components/ui';
import { useTranslate } from '@/context/LanguageContext';
import Link from 'next/link';

export default function ConsultationsPage() {
  const t = useTranslate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/20 py-8">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-grid-pattern opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-1">My Consultations</h1>
            <p className="text-[var(--text-secondary)] font-medium">Manage your appointments and history</p>
          </div>
          <Link href="/patient/consultations/book">
            <Button className="h-11 px-6 rounded-xl bg-[var(--text-primary)] text-white font-semibold hover:bg-[var(--gray-800)] shadow-md flex items-center gap-2">
              <Plus size={18} /> Book Appointment
            </Button>
          </Link>
        </div>

        {/* Upcoming Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span> Upcoming Appointments
          </h2>
          
          <div className="bg-white rounded-3xl p-8 border border-[var(--border-default)] shadow-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Doctor Info */}
              <div className="flex flex-col md:flex-row items-center gap-6 flex-1">
                <div className="relative shrink-0">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300" 
                      alt="Dr. Anjali" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                
                <div className="text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">Dr. Anjali Gupta</h3>
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">
                      Top Rated
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] font-medium mb-4 flex items-center justify-center md:justify-start gap-2">
                    <Stethoscope size={16} className="text-blue-500"/> Senior Cardiologist • Apollo Hospital
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <span className="bg-[var(--gray-50)] px-4 py-2 rounded-xl border border-[var(--border-default)] flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)]">
                      <Calendar size={16} className="text-blue-500" /> Today, 8 Feb
                    </span>
                    <span className="bg-[var(--gray-50)] px-4 py-2 rounded-xl border border-[var(--border-default)] flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)]">
                      <Clock size={16} className="text-orange-500" /> 04:30 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 w-full lg:w-auto min-w-[200px]">
                <Button className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg flex items-center justify-center gap-2">
                  <Video size={20} /> Join Now
                </Button>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 h-10 rounded-xl border-[var(--border-default)] hover:bg-[var(--gray-50)] text-[var(--text-secondary)] font-semibold">
                    <MessageSquare size={18} />
                  </Button>
                  <Button variant="outline" className="flex-1 h-10 rounded-xl border-[var(--border-default)] hover:bg-[var(--gray-50)] text-[var(--text-secondary)] font-semibold">
                    <Phone size={18} />
                  </Button>
                </div>
                <p className="text-center text-xs font-bold text-green-600 bg-green-50 py-2 rounded-lg border border-green-100">
                  Appointment Confirmed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Past Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">Past History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { 
                doctor: 'Dr. Vikram Singh', 
                spec: 'Dermatologist', 
                date: '5 Feb, 2026', 
                time: '02:00 PM', 
                status: 'Completed', 
                img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200', 
                rating: 5,
                diagnosis: 'Skin Allergy',
                prescription: 'Antihistamine cream, 2x daily'
              },
              { 
                doctor: 'Dr. Priya Patel', 
                spec: 'General Physician', 
                date: '28 Jan, 2026', 
                time: '11:00 AM', 
                status: 'Completed', 
                img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200', 
                rating: 4,
                diagnosis: 'Viral Fever',
                prescription: 'Paracetamol 500mg, Rest'
              },
              { 
                doctor: 'Dr. Rajesh Kumar', 
                spec: 'Orthopedist', 
                date: '15 Jan, 2026', 
                time: '10:00 AM', 
                status: 'Completed', 
                img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200', 
                rating: 5,
                diagnosis: 'Knee Pain',
                prescription: 'Physiotherapy, Pain relief gel'
              },
              { 
                doctor: 'Dr. Meera Shah', 
                spec: 'Pediatrician', 
                date: '10 Jan, 2026', 
                time: '03:00 PM', 
                status: 'Completed', 
                img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200', 
                rating: 5,
                diagnosis: 'Routine Checkup',
                prescription: 'Vitamin D supplements'
              },
              { 
                doctor: 'Dr. Amit Verma', 
                spec: 'Cardiologist', 
                date: '5 Jan, 2026', 
                time: '09:00 AM', 
                status: 'Completed', 
                img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200', 
                rating: 5,
                diagnosis: 'Blood Pressure Monitoring',
                prescription: 'Continue current medication'
              },
              { 
                doctor: 'Dr. Sneha Reddy', 
                spec: 'Nutritionist', 
                date: '28 Dec, 2025', 
                time: '04:00 PM', 
                status: 'Completed', 
                img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200', 
                rating: 4,
                diagnosis: 'Diet Consultation',
                prescription: 'Low-carb diet plan'
              },
            ].map((appt, i) => (
              <div key={i} className="group bg-white rounded-2xl p-5 border border-[var(--border-default)] hover:shadow-lg transition-all">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-[var(--gray-100)] overflow-hidden shrink-0">
                      <img src={appt.img} alt={appt.doctor} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-base text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors truncate">{appt.doctor}</h4>
                      <p className="text-sm text-[var(--text-secondary)] font-medium">{appt.spec}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(appt.rating)].map((_, r) => (
                          <Star key={r} size={12} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-green-50 text-green-600 border-green-100 px-3 py-1 rounded-lg text-xs font-semibold shrink-0">
                    {appt.status}
                  </Badge>
                </div>

                {/* Diagnosis & Prescription */}
                <div className="mb-4 p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-xs font-bold text-blue-900 mb-1">Diagnosis</p>
                  <p className="text-sm font-semibold text-blue-700">{appt.diagnosis}</p>
                  <p className="text-xs text-blue-600 mt-2">{appt.prescription}</p>
                </div>

                <div className="flex items-center gap-3 mb-4 text-xs font-medium text-[var(--text-tertiary)] bg-[var(--gray-50)] p-3 rounded-xl">
                  <span className="flex items-center gap-2"><Calendar size={14}/> {appt.date}</span>
                  <span className="w-1 h-1 bg-[var(--gray-300)] rounded-full"></span>
                  <span className="flex items-center gap-2"><Clock size={14}/> {appt.time}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Button className="flex-1 h-10 rounded-xl bg-[var(--text-primary)] text-white font-semibold hover:bg-[var(--gray-800)] text-sm">
                    Book Again
                  </Button>
                  <Button variant="outline" className="flex-1 h-10 rounded-xl border-[var(--border-default)] text-[var(--text-secondary)] font-semibold hover:bg-[var(--gray-50)] text-sm">
                    View Summary
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Help Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need Help Booking?</h3>
              <p className="text-purple-100 font-medium">Our support team is available 24/7 to assist you.</p>
            </div>
            <Button className="h-11 px-6 rounded-xl bg-white text-purple-600 font-bold hover:bg-purple-50 shadow-lg">
              Call Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

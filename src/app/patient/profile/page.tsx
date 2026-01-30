'use client';

import React from 'react';
import { User, Mail, Phone, MapPin, Shield, Edit3, Camera } from 'lucide-react';
import { Button, Card, CardContent, CardHeader, CardTitle, Badge } from '@/components/ui';
import { useTranslate } from '@/context/LanguageContext';

export default function ProfilePage() {
  const tProfile = useTranslate('My Profile');
  const tEdit = useTranslate('Edit Profile');
  const tEmergency = useTranslate('Emergency Contacts');

  return (
    <div className="max-w-4xl mx-auto space-y-6">
       {/* Header Card */}
       <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-600 to-cyan-500" />
          
          <div className="relative pt-12 flex flex-col md:flex-row items-end md:items-center gap-6">
             <div className="relative group">
                <div className="w-32 h-32 rounded-full border-4 border-white bg-slate-200 shadow-lg overflow-hidden flex items-center justify-center text-4xl font-bold text-slate-400">
                   JD
                </div>
                <button className="absolute bottom-1 right-1 p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors">
                   <Camera size={16} />
                </button>
             </div>
             
             <div className="flex-1 mb-2">
                <h1 className="text-2xl font-bold text-slate-900">John Doe</h1>
                <p className="text-slate-500">Patient ID: #HB-2026-8832</p>
             </div>
             
             <div className="mb-2">
                <Button variant="outline" className="rounded-full gap-2 border-slate-200">
                   <Edit3 size={16} /> {tEdit}
                </Button>
             </div>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Info */}
          <Card className="md:col-span-2 border-slate-100">
             <CardHeader>
                <CardTitle className="text-lg">Personal Information</CardTitle>
             </CardHeader>
             <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-400 uppercase">Email Address</label>
                      <div className="flex items-center gap-3 text-slate-700 font-medium p-3 bg-slate-50 rounded-lg">
                         <Mail size={18} className="text-slate-400" /> john.doe@example.com
                      </div>
                   </div>
                   <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-400 uppercase">Phone Number</label>
                      <div className="flex items-center gap-3 text-slate-700 font-medium p-3 bg-slate-50 rounded-lg">
                         <Phone size={18} className="text-slate-400" /> +91 98765 43210
                      </div>
                   </div>
                   <div className="space-y-1 md:col-span-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase">Address</label>
                      <div className="flex items-center gap-3 text-slate-700 font-medium p-3 bg-slate-50 rounded-lg">
                         <MapPin size={18} className="text-slate-400" /> 123, Gandhi Road, Davanagere, Karnataka - 577002
                      </div>
                   </div>
                </div>
             </CardContent>
          </Card>

          {/* Sidebar Info */}
          <div className="space-y-6">
             <Card className="border-slate-100 bg-red-50/50">
                <CardHeader>
                   <CardTitle className="text-lg text-red-700">{tEmergency}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                         <Phone size={20} />
                      </div>
                      <div>
                         <p className="font-bold text-slate-900">Jane Doe (Wife)</p>
                         <p className="text-xs text-slate-500">+91 98765 43211</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                         <Shield size={20} />
                      </div>
                      <div>
                         <p className="font-bold text-slate-900">Ambulance</p>
                         <p className="text-xs text-slate-500">108</p>
                      </div>
                   </div>
                </CardContent>
             </Card>

             <Card className="border-slate-100">
                <CardContent className="p-6">
                   <div className="mb-4">
                      <h4 className="font-bold text-slate-800 mb-1">Insurance status</h4>
                      <Badge variant="success" className="bg-emerald-100 text-emerald-700 border-emerald-200">Active</Badge>
                   </div>
                   <p className="text-sm text-slate-500">Provider: Pradhan Mantri Jan Arogya Yojana (PMJAY)</p>
                   <p className="text-sm text-slate-500">ID: PMJAY-8832-22</p>
                </CardContent>
             </Card>
          </div>
       </div>
    </div>
  );
}

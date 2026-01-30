'use client';

import React from 'react';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

export default function DoctorSettingsPage() {
  return (
    <div className="max-w-3xl space-y-6">
       <h1 className="text-2xl font-bold text-slate-900">Account Settings</h1>
       
       <Card>
          <CardHeader>
             <CardTitle className="text-lg">Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-700">Full Name</label>
                   <input type="text" defaultValue="Dr. Sarah Johnson" className="w-full p-2 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-700">Specialization</label>
                   <input type="text" defaultValue="Cardiologist" className="w-full p-2 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-700">Email</label>
                   <input type="email" defaultValue="sarah.j@healthbridge.com" className="w-full p-2 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-700">Phone</label>
                   <input type="tel" defaultValue="+91 98765 43210" className="w-full p-2 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
             </div>
             <Button className="mt-4">Save Changes</Button>
          </CardContent>
       </Card>

       <Card>
          <CardHeader>
             <CardTitle className="text-lg">Availability & Pricing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div>
                   <p className="font-bold text-slate-900">Video Consultation Fee</p>
                   <p className="text-xs text-slate-500">Set your pricing per 15 min slot</p>
                </div>
                <div className="flex items-center gap-2">
                   <span className="font-bold text-slate-500">₹</span>
                   <input type="number" defaultValue="500" className="w-20 p-2 border border-slate-200 rounded-lg text-right font-bold text-slate-900" />
                </div>
             </div>
          </CardContent>
       </Card>
    </div>
  );
}

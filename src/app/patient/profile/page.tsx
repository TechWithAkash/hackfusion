'use client';

import React from 'react';
import { User, Mail, Phone, MapPin, Shield, Edit3, Camera, Calendar, Heart, Activity } from 'lucide-react';
import { Button, Card, CardContent, CardHeader, CardTitle, Badge } from '@/components/ui';
import { useTranslate } from '@/context/LanguageContext';

export default function ProfilePage() {
  const t = useTranslate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/20 py-8">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-grid-pattern opacity-20"></div>
      
      <div className="max-w-5xl mx-auto px-6 space-y-6">
        {/* Header Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-[var(--border-default)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-r from-blue-600 to-indigo-600" />
          
          <div className="relative pt-12 px-8 pb-8 flex flex-col md:flex-row items-end md:items-center gap-6">
            <div className="relative group">
              <div className="w-28 h-28 rounded-2xl border-4 border-white bg-gradient-to-br from-blue-100 to-indigo-100 shadow-lg overflow-hidden flex items-center justify-center text-3xl font-bold text-blue-600">
                RS
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-colors">
                <Camera size={16} />
              </button>
            </div>
            
            <div className="flex-1 mb-2 text-center md:text-left">
              <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-1">Rahul Sharma</h1>
              <p className="text-[var(--text-secondary)] font-medium">Patient ID: #HB-2026-8832</p>
            </div>
            
            <div className="mb-2">
              <Button variant="outline" className="rounded-xl gap-2 border-[var(--border-default)] h-11 px-5 font-semibold">
                <Edit3 size={16} /> Edit Profile
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-[var(--border-default)] rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-[var(--text-primary)]">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-wide">Email Address</label>
                    <div className="flex items-center gap-3 text-[var(--text-primary)] font-medium p-3 bg-[var(--gray-50)] rounded-xl border border-[var(--border-light)]">
                      <Mail size={18} className="text-[var(--text-tertiary)]" /> rahul.sharma@example.com
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-wide">Phone Number</label>
                    <div className="flex items-center gap-3 text-[var(--text-primary)] font-medium p-3 bg-[var(--gray-50)] rounded-xl border border-[var(--border-light)]">
                      <Phone size={18} className="text-[var(--text-tertiary)]" /> +91 98765 43210
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-wide">Date of Birth</label>
                    <div className="flex items-center gap-3 text-[var(--text-primary)] font-medium p-3 bg-[var(--gray-50)] rounded-xl border border-[var(--border-light)]">
                      <Calendar size={18} className="text-[var(--text-tertiary)]" /> 15 March, 1990
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-wide">Blood Group</label>
                    <div className="flex items-center gap-3 text-[var(--text-primary)] font-medium p-3 bg-[var(--gray-50)] rounded-xl border border-[var(--border-light)]">
                      <Activity size={18} className="text-[var(--text-tertiary)]" /> O+
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-wide">Address</label>
                    <div className="flex items-center gap-3 text-[var(--text-primary)] font-medium p-3 bg-[var(--gray-50)] rounded-xl border border-[var(--border-light)]">
                      <MapPin size={18} className="text-[var(--text-tertiary)] shrink-0" /> 123, Gandhi Road, Davanagere, Karnataka - 577002
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medical Info */}
            <Card className="border-[var(--border-default)] rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-[var(--text-primary)]">Medical Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-wide">Allergies</label>
                    <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                      <p className="text-sm font-semibold text-red-700">Penicillin, Peanuts</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-wide">Chronic Conditions</label>
                    <div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
                      <p className="text-sm font-semibold text-orange-700">Hypertension</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Contacts */}
            <Card className="border-red-200 bg-red-50/50 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-base font-bold text-red-700 flex items-center gap-2">
                  <Shield size={18} /> Emergency Contacts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-sm text-[var(--text-primary)] truncate">Priya Sharma (Wife)</p>
                    <p className="text-xs text-[var(--text-tertiary)] font-medium">+91 98765 43211</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <Shield size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-sm text-[var(--text-primary)]">Ambulance</p>
                    <p className="text-xs text-[var(--text-tertiary)] font-medium">108</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Insurance */}
            <Card className="border-[var(--border-default)] rounded-2xl">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h4 className="font-bold text-[var(--text-primary)] mb-2 text-base">Insurance Status</h4>
                  <Badge className="bg-green-100 text-green-700 border-green-200 px-3 py-1 rounded-lg font-semibold">Active</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-[var(--text-secondary)] font-medium">
                    <span className="text-[var(--text-tertiary)]">Provider:</span> Pradhan Mantri Jan Arogya Yojana
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] font-medium">
                    <span className="text-[var(--text-tertiary)]">ID:</span> PMJAY-8832-22
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-[var(--border-default)] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-6">
                <h4 className="font-bold text-[var(--text-primary)] mb-4 text-base">Account Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--text-secondary)] font-medium">Consultations</span>
                    <span className="text-lg font-bold text-[var(--text-primary)]">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--text-secondary)] font-medium">Records</span>
                    <span className="text-lg font-bold text-[var(--text-primary)]">6</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--text-secondary)] font-medium">Member Since</span>
                    <span className="text-lg font-bold text-[var(--text-primary)]">2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

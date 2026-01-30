'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Activity, Mail, Lock, User, Stethoscope, Building2, ArrowRight, Eye, EyeOff, Sparkles, Heart, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<'patient' | 'doctor' | 'kiosk'>('patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const roles = {
    patient: {
      title: 'Patient',
      icon: User,
      color: 'from-blue-500 to-cyan-500',
      email: 'rahul@patient.com',
      password: 'demo123',
      route: '/patient'
    },
    doctor: {
      title: 'Doctor',
      icon: Stethoscope,
      color: 'from-green-500 to-emerald-500',
      email: 'dr.sarah@doctor.com',
      password: 'demo123',
      route: '/doctor'
    },
    kiosk: {
      title: 'Kiosk',
      icon: Building2,
      color: 'from-purple-500 to-pink-500',
      email: 'kiosk@station.com',
      password: 'demo123',
      route: '/kiosk'
    }
  };

  const currentRole = roles[selectedRole];

  // Auto-fill credentials when role changes
  useEffect(() => {
    setEmail(currentRole.email);
    setPassword(currentRole.password);
  }, [selectedRole, currentRole.email, currentRole.password]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(currentRole.route);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Beautiful Minimalist Design */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full p-16 text-white">
          {/* Logo */}
          <div className="mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 blur-xl rounded-full"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <Activity size={56} className="text-white" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold mb-4 text-center tracking-tight">
            HealthBridge AI
          </h1>
          <p className="text-xl text-center text-white/80 mb-16 max-w-md font-medium">
            Intelligent Healthcare for Everyone
          </p>

          {/* Minimalist Feature Cards */}
          <div className="grid grid-cols-1 gap-4 max-w-md w-full">
            {[
              { icon: Heart, text: 'AI-Powered Diagnostics', desc: 'Smart symptom analysis' },
              { icon: Shield, text: 'Secure & Private', desc: 'Your data is protected' },
              { icon: Clock, text: '24/7 Availability', desc: 'Healthcare anytime' }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon size={24} className="text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-white text-base">{feature.text}</p>
                  <p className="text-sm text-white/60">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-white">10K+</p>
              <p className="text-sm text-white/60 font-medium">Patients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-white/60 font-medium">Doctors</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-sm text-white/60 font-medium">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="lg:hidden mb-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-3 rounded-2xl shadow-lg">
                <Activity size={32} />
                <span className="text-2xl font-bold">HealthBridge</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
              Welcome Back
            </h2>
            <p className="text-[var(--text-secondary)] font-medium">
              Select your role to auto-fill credentials
            </p>
          </div>

          {/* Role Selector */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-[var(--text-primary)] mb-3">
              Select Your Role
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(Object.keys(roles) as Array<keyof typeof roles>).map((role) => {
                const RoleIcon = roles[role].icon;
                const isActive = selectedRole === role;
                return (
                  <button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      isActive
                        ? 'border-[var(--primary)] bg-blue-50 shadow-md scale-105'
                        : 'border-[var(--border-default)] bg-white hover:border-[var(--primary)]/50 hover:scale-105'
                    }`}
                  >
                    <RoleIcon 
                      size={28} 
                      className={`mx-auto mb-2 ${isActive ? 'text-[var(--primary)]' : 'text-[var(--text-tertiary)]'}`} 
                    />
                    <p className={`text-sm font-bold ${isActive ? 'text-[var(--primary)]' : 'text-[var(--text-secondary)]'}`}>
                      {roles[role].title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Auto-fill Notice */}
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2">
            <Sparkles size={16} className="text-green-600" />
            <p className="text-xs font-semibold text-green-700">
              Credentials auto-filled for {currentRole.title}! Click "Sign In" to continue.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-[var(--text-primary)] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[var(--border-default)] focus:border-[var(--primary)] outline-none transition-colors text-[var(--text-primary)] font-medium bg-white"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold text-[var(--text-primary)] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl border-2 border-[var(--border-default)] focus:border-[var(--primary)] outline-none transition-colors text-[var(--text-primary)] font-medium bg-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-2 border-[var(--border-default)] text-[var(--primary)]" />
                <span className="text-sm text-[var(--text-secondary)] font-medium">Remember me</span>
              </label>
              <Link href="#" className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-4 rounded-xl bg-gradient-to-r ${currentRole.color} text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02]`}
            >
              Sign In as {currentRole.title}
              <ArrowRight size={20} />
            </button>
          </form>

          {/* Demo Info */}
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-xs font-bold text-blue-900 mb-2 flex items-center gap-2">
              <Sparkles size={14} className="text-blue-600" />
              Demo Mode Active
            </p>
            <p className="text-xs text-blue-700">
              Switch roles above to test different user experiences. All credentials are pre-filled!
            </p>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-[var(--text-secondary)] font-medium text-sm">
              Don't have an account?{' '}
              <Link href="/signup" className="text-[var(--primary)] font-bold hover:text-[var(--primary-dark)]">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

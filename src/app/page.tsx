'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, Activity, CheckCircle, Heart, Brain, Shield, 
  Zap, Globe, Clock, Users, Sparkles, ChevronRight, Star,
  TrendingUp, Award, Target, Smartphone, Video, MessageSquare,
  Stethoscope
} from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Button } from '@/components/ui';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        {/* === HERO SECTION === */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          {/* Animated Background */}
          <div className="absolute inset-0">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
            
            {/* Gradient Orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 py-24 md:py-32 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column - Content */}
                <div className="space-y-8">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                    </span>
                    <span className="text-sm font-semibold text-white">Live in 50+ Villages Across India</span>
                  </div>

                  {/* Headline */}
                  <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                      Healthcare for the{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient">
                        Next Billion
                      </span>
                    </h1>
                    <p className="text-xl text-blue-100 leading-relaxed">
                      AI-powered telemedicine platform designed for rural India. Instant triage in 12+ languages. Works offline, connects everyone.
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/login">
                      <Button className="h-14 px-8 rounded-xl bg-white text-blue-900 hover:bg-blue-50 shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center gap-2 font-bold text-base group">
                        Get Started Free
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="#demo">
                      <Button className="h-14 px-8 rounded-xl bg-white/10 backdrop-blur-md text-white border-2 border-white/20 hover:bg-white/20 transition-all flex items-center gap-2 font-bold text-base">
                        <Video size={20} />
                        Watch Demo
                      </Button>
                    </Link>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex items-center gap-6 pt-4">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-slate-900"></div>
                        ))}
                      </div>
                      <span className="text-sm text-blue-200 font-medium">50,000+ patients</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-blue-200 font-medium ml-1">4.9/5</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Visual */}
                <div className="relative">
                  {/* Floating Cards */}
                  <div className="relative">
                    {/* Main Card */}
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                              <Activity size={24} className="text-white" />
                            </div>
                            <div>
                              <p className="text-white font-bold">AI Health Assistant</p>
                              <p className="text-blue-200 text-sm">Always Available</p>
                            </div>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { icon: Users, value: '50K+', label: 'Patients' },
                            { icon: Clock, value: '5 min', label: 'Response' },
                            { icon: Globe, value: '12+', label: 'Languages' }
                          ].map((stat, i) => (
                            <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                              <stat.icon size={20} className="text-cyan-400 mb-2" />
                              <p className="text-2xl font-bold text-white">{stat.value}</p>
                              <p className="text-xs text-blue-200">{stat.label}</p>
                            </div>
                          ))}
                        </div>

                        {/* Features */}
                        <div className="space-y-3">
                          {[
                            'AI-Powered Symptom Analysis',
                            'Multi-language Support',
                            'Offline Mode Available'
                          ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                              <CheckCircle size={18} className="text-green-400" />
                              <span className="text-white text-sm font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Floating Badge 1 */}
                    <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-4 shadow-2xl animate-float">
                      <div className="flex items-center gap-2">
                        <Award size={24} className="text-white" />
                        <div>
                          <p className="text-white font-bold text-sm">98%</p>
                          <p className="text-green-100 text-xs">Satisfaction</p>
                        </div>
                      </div>
                    </div>

                    {/* Floating Badge 2 */}
                    <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-4 shadow-2xl animate-float" style={{ animationDelay: '0.5s' }}>
                      <div className="flex items-center gap-2">
                        <TrendingUp size={24} className="text-white" />
                        <div>
                          <p className="text-white font-bold text-sm">24/7</p>
                          <p className="text-purple-100 text-xs">Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* === FEATURES SECTION === */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
                  <Sparkles size={16} className="text-blue-600" />
                  <span className="text-sm font-semibold text-blue-700">Powerful Features</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Everything you need for better healthcare
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Comprehensive features designed for accessibility, efficiency, and better health outcomes
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Brain,
                    title: 'AI Symptom Analysis',
                    description: 'Advanced AI analyzes symptoms and provides instant, accurate triage recommendations',
                    color: 'from-blue-500 to-cyan-500',
                    bgColor: 'bg-blue-50'
                  },
                  {
                    icon: Globe,
                    title: 'Multi-language Support',
                    description: 'Available in 12+ Indian languages for seamless communication with patients',
                    color: 'from-green-500 to-emerald-500',
                    bgColor: 'bg-green-50'
                  },
                  {
                    icon: Shield,
                    title: 'Secure & Private',
                    description: 'End-to-end encryption ensures your health data stays protected and confidential',
                    color: 'from-purple-500 to-pink-500',
                    bgColor: 'bg-purple-50'
                  },
                  {
                    icon: Zap,
                    title: 'Offline Mode',
                    description: 'Works without internet connection, perfect for remote and rural areas',
                    color: 'from-orange-500 to-red-500',
                    bgColor: 'bg-orange-50'
                  },
                  {
                    icon: Clock,
                    title: '24/7 Availability',
                    description: 'Access healthcare services anytime, anywhere, day or night',
                    color: 'from-cyan-500 to-blue-500',
                    bgColor: 'bg-cyan-50'
                  },
                  {
                    icon: Heart,
                    title: 'Affordable Care',
                    description: 'Quality healthcare at prices everyone can afford, no hidden costs',
                    color: 'from-pink-500 to-rose-500',
                    bgColor: 'bg-pink-50'
                  }
                ].map((feature, i) => (
                  <div 
                    key={i}
                    className="group relative p-8 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all bg-white overflow-hidden"
                  >
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                    
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                        <feature.icon size={28} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === HOW IT WORKS === */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-4 shadow-sm">
                  <Target size={16} className="text-blue-600" />
                  <span className="text-sm font-semibold text-gray-700">Simple Process</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Get healthcare in 3 simple steps
                </h2>
                <p className="text-xl text-gray-600">
                  Fast, efficient, and designed for everyone
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Describe Symptoms',
                    description: 'Tell us what you\'re experiencing in your preferred language using voice or text',
                    icon: MessageSquare,
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    step: '02',
                    title: 'AI Analysis',
                    description: 'Our advanced AI analyzes your symptoms and provides instant, accurate triage',
                    icon: Brain,
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    step: '03',
                    title: 'Get Care',
                    description: 'Connect with doctors via video call or receive personalized self-care recommendations',
                    icon: Video,
                    color: 'from-green-500 to-emerald-500'
                  }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    {/* Connector Line */}
                    {i < 2 && (
                      <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-200 to-transparent"></div>
                    )}
                    
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                      {/* Step Number */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} text-white font-bold text-xl mb-6 shadow-lg`}>
                        {item.step}
                      </div>
                      
                      {/* Icon */}
                      <div className="mb-4">
                        <item.icon size={32} className="text-gray-400" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === STATS SECTION === */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: '50,000+', label: 'Patients Served', icon: Users, color: 'from-blue-500 to-cyan-500' },
                  { value: '500+', label: 'Healthcare Providers', icon: Stethoscope, color: 'from-green-500 to-emerald-500' },
                  { value: '98%', label: 'Satisfaction Rate', icon: Star, color: 'from-purple-500 to-pink-500' },
                  { value: '5 min', label: 'Avg Response Time', icon: Clock, color: 'from-orange-500 to-red-500' }
                ].map((stat, i) => (
                  <div key={i} className="text-center group">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <stat.icon size={32} className="text-white" />
                    </div>
                    <div className="text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === CTA SECTION === */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to transform healthcare?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join thousands of patients and healthcare providers using HealthBridge AI to deliver better care
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/login">
                  <Button className="h-16 px-10 rounded-xl bg-white text-blue-600 hover:bg-blue-50 shadow-2xl hover:shadow-white/50 transition-all font-bold text-lg group">
                    Get Started Now
                    <ArrowRight size={24} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button className="h-16 px-10 rounded-xl bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 transition-all font-bold text-lg">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

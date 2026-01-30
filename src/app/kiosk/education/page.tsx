'use client';

import React from 'react';
import { Activity, Heart, Brain, Apple, Droplet, Moon, ArrowLeft, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui';
import Link from 'next/link';

export default function EducationPage() {
  const healthTips = [
    {
      title: 'Healthy Heart',
      description: 'Tips for maintaining cardiovascular health',
      icon: Heart,
      color: 'red',
      duration: '5 min read',
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Mental Wellness',
      description: 'Managing stress and anxiety effectively',
      icon: Brain,
      color: 'purple',
      duration: '7 min read',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Balanced Diet',
      description: 'Nutrition guide for healthy living',
      icon: Apple,
      color: 'green',
      duration: '6 min read',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Stay Hydrated',
      description: 'Importance of drinking enough water',
      icon: Droplet,
      color: 'blue',
      duration: '4 min read',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Better Sleep',
      description: 'Tips for improving sleep quality',
      icon: Moon,
      color: 'indigo',
      duration: '5 min read',
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Stay Active',
      description: 'Simple exercises for daily routine',
      icon: Activity,
      color: 'orange',
      duration: '8 min read',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
      red: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-600', badge: 'bg-red-100 text-red-700' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', badge: 'bg-purple-100 text-purple-700' },
      green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600', badge: 'bg-green-100 text-green-700' },
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
      indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', icon: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-700' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'text-orange-600', badge: 'bg-orange-100 text-orange-700' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back Button */}
        <Link href="/kiosk">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft size={20} />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 mb-6 shadow-lg">
            <Activity size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-semibold text-gray-900 mb-4">
            Health Tips & Education
          </h1>
          <p className="text-xl text-gray-600">
            Learn how to stay healthy and improve your wellbeing
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthTips.map((tip, i) => {
            const colors = getColorClasses(tip.color);
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
                      {tip.duration}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-4`}>
                    <tip.icon size={24} className={colors.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {tip.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full h-10 rounded-lg border-gray-300 hover:bg-gray-50 gap-2"
                  >
                    <PlayCircle size={16} />
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Text */}
        <div className="mt-12 bg-white border-2 border-gray-200 rounded-xl p-6 text-center">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">Want personalized tips?</span> Talk to our doctors for customized health advice based on your needs.
          </p>
        </div>
      </div>
    </div>
  );
}

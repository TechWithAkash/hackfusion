'use client';

import React from 'react';
import { PlayCircle, BookOpen, Heart, ArrowRight, Video, FileText, Headphones } from 'lucide-react';
import { Button, Badge } from '@/components/ui';
import { useTranslate } from '@/context/LanguageContext';

export default function EducationPage() {
  const t = useTranslate();

  const articles = [
    { 
      category: 'Nutrition', 
      title: 'Balanced Diet for Iron Deficiency', 
      desc: 'Learn about local foods rich in iron to fight anemia.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400',
      type: 'Article',
      duration: '5 min read'
    },
    { 
      category: 'Maternal Care', 
      title: 'Warning Signs in Pregnancy', 
      desc: 'Critical symptoms every expecting mother should know.',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=400',
      type: 'Video',
      duration: '8 min'
    },
    { 
      category: 'Hygiene', 
      title: 'Proper Handwashing Techniques', 
      desc: 'Protect your family from viruses with these simple steps.',
      image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=400',
      type: 'Video',
      duration: '3 min'
    },
    { 
      category: 'Diabetes', 
      title: 'Managing Blood Sugar Naturally', 
      desc: 'Simple lifestyle changes to control diabetes effectively.',
      image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=400',
      type: 'Article',
      duration: '7 min read'
    },
    { 
      category: 'Mental Health', 
      title: 'Stress Management Techniques', 
      desc: 'Practical tips to reduce stress and improve mental wellbeing.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400',
      type: 'Audio',
      duration: '10 min'
    },
    { 
      category: 'Exercise', 
      title: 'Home Workouts for Beginners', 
      desc: 'Easy exercises you can do at home without equipment.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400',
      type: 'Video',
      duration: '12 min'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50/20 py-8">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-grid-pattern opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold border border-white/20 mb-4">
              <BookOpen size={14} /> Daily Learning
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Health Education Hub</h1>
            <p className="text-teal-50 text-lg mb-6 font-medium">Access world-class health knowledge in your language. Stay informed, stay healthy.</p>
            <Button className="bg-white text-teal-700 hover:bg-teal-50 rounded-xl px-6 h-11 font-bold shadow-lg">
              Explore Library
            </Button>
          </div>
        </div>

        {/* Featured Section */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
            <Heart className="text-red-500 fill-red-500" size={22} /> Featured for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((item, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-[var(--border-default)] overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-lg text-[var(--text-primary)] shadow-md flex items-center gap-1.5">
                    {item.type === 'Video' && <Video size={12} />}
                    {item.type === 'Article' && <FileText size={12} />}
                    {item.type === 'Audio' && <Headphones size={12} />}
                    {item.type}
                  </div>
                  
                  {/* Play Icon for Video/Audio */}
                  {(item.type === 'Video' || item.type === 'Audio') && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <PlayCircle className="text-white drop-shadow-lg group-hover:scale-125 transition-transform" size={56} />
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wide">{item.category}</span>
                    <span className="text-xs text-[var(--text-tertiary)] font-medium">{item.duration}</span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 leading-tight group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4 font-medium">
                    {item.desc}
                  </p>
                  <button className="flex items-center gap-2 text-sm font-bold text-[var(--text-primary)] group-hover:text-teal-600 group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-3xl p-8 border border-[var(--border-default)] shadow-sm">
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Browse by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Nutrition', 'Exercise', 'Mental Health', 'Maternal Care', 'Chronic Diseases', 'First Aid', 'Hygiene', 'Preventive Care'].map((cat, i) => (
              <button key={i} className="p-4 rounded-xl border border-[var(--border-default)] hover:border-teal-500 hover:bg-teal-50 transition-all text-center group">
                <p className="font-semibold text-[var(--text-primary)] group-hover:text-teal-600 transition-colors">{cat}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { PlayCircle, BookOpen, Heart, ArrowRight } from 'lucide-react';
import { Button, Badge } from '@/components/ui';
import { useTranslate } from '@/context/LanguageContext';

export default function EducationPage() {
  const tTitle = useTranslate('Health Education Hub');
  const tFeatured = useTranslate('Featured for You');

  const articles = [
    { 
      category: 'Nutrition', 
      title: 'Balanced Diet for Iron Deficiency', 
      desc: 'Learn about local foods rich in iron to fight anemia.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400',
      type: 'Article'
    },
    { 
      category: 'Maternal Care', 
      title: 'Warning Signs in Pregnancy', 
      desc: 'Critical symptoms every expecting mother should know.',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=400',
      type: 'Video' 
    },
    { 
      category: 'Hygiene', 
      title: 'Proper Handwashing Techniques', 
      desc: 'Protect your family from viruses with these simple steps.',
      image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=400',
      type: 'Video' 
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
       <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
          <div className="relative z-10 max-w-2xl">
             <Badge className="bg-white/20 text-white hover:bg-white/30 border-none mb-4">Daily Tip</Badge>
             <h1 className="text-3xl sm:text-4xl font-bold mb-4">{tTitle}</h1>
             <p className="text-teal-100 text-lg mb-8">Access world-class health knowledge in your local language. Stay informed, stay healthy.</p>
             <Button className="bg-white text-teal-700 hover:bg-teal-50 border-none rounded-full px-8">
               Explore Library
             </Button>
          </div>
       </div>

       <div>
         <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
           <Heart className="text-red-500 fill-red-500" size={20} /> {tFeatured}
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((item, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                 <div className="relative h-48 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-slate-700 shadow-sm">
                       {item.type}
                    </div>
                    {item.type === 'Video' && (
                       <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                          <PlayCircle className="text-white drop-shadow-md group-hover:scale-125 transition-transform" size={48} />
                       </div>
                    )}
                 </div>
                 <div className="p-5">
                    <div className="text-xs font-bold text-teal-600 uppercase tracking-wide mb-2">{item.category}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-teal-700 transition-colors">
                       {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                       {item.desc}
                    </p>
                    <button className="flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:gap-3 transition-all">
                       Read More <ArrowRight size={16} className="text-teal-500" />
                    </button>
                 </div>
              </div>
            ))}
         </div>
       </div>
    </div>
  );
}

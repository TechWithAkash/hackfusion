'use client';

import React, { useState } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage, languages } from '@/context/LanguageContext';

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 transition-all text-sm font-medium text-slate-700 shadow-sm hover:shadow-md hover:border-slate-300 group"
      >
        <Globe size={18} className="text-blue-600 group-hover:text-blue-700 transition-colors" />
        <span className="hidden sm:inline">{currentLang.native}</span>
        <ChevronDown 
          size={16} 
          className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-200 py-2 z-50 animate-fadeIn overflow-hidden">
            <div className="px-4 py-2 border-b border-slate-100 bg-slate-50">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Select Language</p>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as any);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-blue-50 flex items-center justify-between group transition-colors ${
                    language === lang.code ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${
                      language === lang.code ? 'bg-blue-100' : 'bg-slate-100 group-hover:bg-blue-100'
                    }`}>
                      {lang.native.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className={`font-semibold ${
                        language === lang.code ? 'text-blue-700' : 'text-slate-800'
                      }`}>
                        {lang.native}
                      </span>
                      <span className="text-xs text-slate-400">{lang.name}</span>
                    </div>
                  </div>
                  {language === lang.code && (
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

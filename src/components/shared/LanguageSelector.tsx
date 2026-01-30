'use client';

import React, { useState } from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage, languages } from '@/context/LanguageContext';

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 hover:bg-white border border-slate-200 transition-all text-sm font-medium text-slate-700 shadow-sm"
      >
        <Globe size={16} className="text-blue-600" />
        <span>{currentLang.native}</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 py-1 z-50 animate-fadeIn">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as any);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 flex items-center justify-between group"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-slate-800">{lang.native}</span>
                  <span className="text-xs text-slate-400">{lang.name}</span>
                </div>
                {language === lang.code && <Check size={14} className="text-blue-600" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getTranslation } from '@/lib/translations';

type Language = 'en' | 'hi' | 'es' | 'kn' | 'ta' | 'fr' | 'de' | 'zh-CN' | 'te' | 'mr' | 'bn' | 'ml'; 

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'es', name: 'Spanish', native: 'Español' },
  { code: 'fr', name: 'French', native: 'Français' },
  { code: 'de', name: 'German', native: 'Deutsch' },
  { code: 'zh-CN', name: 'Chinese', native: '中文' },
];

// Cache for API translations
const translationCache: Record<string, Record<string, string>> = {};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('healthbridge-language');
    if (savedLang && languages.some(l => l.code === savedLang)) {
      setLanguageState(savedLang as Language);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('healthbridge-language', lang);
  };

  // Translation function - uses dictionary first, then falls back to API
  const t = (text: string): string => {
    if (language === 'en') return text;
    
    // First try the local dictionary
    const dictionaryTranslation = getTranslation(text, language);
    if (dictionaryTranslation !== text) {
      return dictionaryTranslation;
    }
    
    // If not in dictionary, check cache
    const cacheKey = `${language}:${text}`;
    if (translationCache[language]?.[text]) {
      return translationCache[language][text];
    }
    
    // For text not in dictionary or cache, use API in background
    // Return original text immediately to avoid blocking UI
    translateViaAPI(text, language);
    return text;
  };

  // Async function to translate via API and update cache
  const translateViaAPI = async (text: string, targetLang: Language) => {
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, targetLang }),
      });
      
      const data = await response.json();
      if (data.translatedText) {
        if (!translationCache[targetLang]) {
          translationCache[targetLang] = {};
        }
        translationCache[targetLang][text] = data.translatedText;
      }
    } catch (error) {
      console.error('Translation API error:', error);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

// Hook for translating text
export const useTranslate = () => {
  const { t } = useLanguage();
  return t;
};

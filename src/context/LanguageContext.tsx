'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'hi' | 'es' | 'kn' | 'ta'; // English, Hindi, Spanish, Kannada, Tamil

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (text: string) => string;
  translateDynamic: (text: string) => Promise<string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'es', name: 'Spanish', native: 'Español' },
];

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [cache, setCache] = useState<Record<string, string>>({});

  // Real-time translation function
  const translateDynamic = async (text: string): Promise<string> => {
    if (language === 'en') return text;
    
    const cacheKey = `${language}:${text}`;
    if (cache[cacheKey]) return cache[cacheKey];

    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, targetLang: language }),
      });
      const data = await res.json();
      
      const translated = data.translatedText || text;
      setCache(prev => ({ ...prev, [cacheKey]: translated }));
      return translated;
    } catch (err) {
      console.error(err);
      return text;
    }
  };

  // Synchronous fallback (placeholder until async loads)
  const t = (text: string) => {
    // For specific static strings, we could implement a dictionary here
    // For now, we return English and rely on components to call translateDynamic for heavy lifting
    return text; 
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translateDynamic }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

// --- CUSTOM HOOK FOR COMPONENT TRANSLATION ---
export const useTranslate = (text: string) => {
  const { language, translateDynamic } = useLanguage();
  const [translated, setTranslated] = useState(text);

  useEffect(() => {
    let isMounted = true;
    if (language === 'en') {
      setTranslated(text);
    } else {
      translateDynamic(text).then(res => {
        if (isMounted) setTranslated(res);
      });
    }
    return () => { isMounted = false; };
  }, [text, language]);

  return translated;
};

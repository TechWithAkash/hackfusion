'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export const GoogleTranslate = () => {
  useEffect(() => {
    // Define the initialization function
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            // Include all languages defined in LanguageContext + extras
            includedLanguages: 'en,hi,es,kn,ta,fr,de,zh-CN,te,mr,bn,ml', 
            autoDisplay: false,
            // Inline layout is cleaner but we hide it anyway
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      }
    };

    // Load the script if not already loaded
    // Check if script exists to avoid duplicates
    const existingScript = document.querySelector('script[src*="translate.google.com"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else {
        // If script is already there, check if we need to manually trigger init 
        // (sometimes needed if component re-mounts but script was already there)
        if (window.google && window.google.translate && window.google.translate.TranslateElement) {
           // Wait a tick then init
           setTimeout(window.googleTranslateElementInit, 100);
        }
    }
  }, []);

  return (
    <div className="hidden">
      <div id="google_translate_element"></div>
    </div>
  );
};

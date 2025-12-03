import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.dir = lng === 'fa' ? 'rtl' : 'ltr';
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fa', label: 'دری' },
  ];

  return (
    <div className="flex gap-2 bg-card-dark p-1 rounded-lg border border-border-dark">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`relative px-3 py-1 rounded text-sm font-medium transition-colors z-10 ${
            i18n.language === lang.code ? 'text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          {i18n.language === lang.code && (
            <motion.div
              layoutId="activeLanguage"
              className="absolute inset-0 bg-primary rounded"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ zIndex: -1 }}
            />
          )}
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

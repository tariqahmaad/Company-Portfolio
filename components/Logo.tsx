import React from 'react';
import { useTranslation } from 'react-i18next';

const Logo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-4">
      <img src="/TALC-Logo.png" alt="TALC Logo" className="h-16 w-auto object-contain" />
      <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">{t('brand.name')}</h2>
    </div>
  );
};

export default Logo;
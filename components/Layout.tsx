import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-white font-display overflow-x-hidden">
      <Header />
      <main className="flex-grow flex flex-col overflow-x-hidden min-h-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
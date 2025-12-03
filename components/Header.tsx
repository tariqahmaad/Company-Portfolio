import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLandingPage = location.pathname === '/';
  const isTransparent = isLandingPage && !isScrolled;

  const getNavClass = (path: string, isMobile: boolean = false) => {
    const isActive = location.pathname === path;
    
    if (isMobile) {
      return `block py-2 text-base font-medium transition-colors ${
        isActive ? 'text-primary font-bold' : 'text-white/60 hover:text-white'
      }`;
    }

    return `text-sm font-medium leading-normal transition-colors ${
      isActive ? 'text-primary font-bold' : isTransparent ? 'text-white/80 hover:text-white' : 'text-white/60 hover:text-white'
    }`;
  };

  return (
    <header 
      className={`top-0 z-50 w-full transition-all duration-300 ${
        isLandingPage ? 'fixed' : 'sticky'
      } ${
        isTransparent 
          ? 'bg-transparent border-transparent' 
          : 'bg-background-dark/80 backdrop-blur-sm border-b border-border-dark'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" onClick={closeMobileMenu}>
            <Logo />
          </Link>
          
          <nav className="hidden items-center gap-8 md:flex">
            <Link to="/" className={getNavClass('/')}>{t('nav.home')}</Link>
            <Link to="/services" className={getNavClass('/services')}>{t('nav.services')}</Link>
            <Link to="/projects" className={getNavClass('/projects')}>{t('nav.projects')}</Link>
            <Link to="/about" className={getNavClass('/about')}>{t('nav.about')}</Link>
            <Link to="/contact" className={getNavClass('/contact')}>{t('nav.contact')}</Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <button className="hidden min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary hover:bg-primary-hover transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] sm:flex">
              <span className="truncate">{t('nav.quote')}</span>
            </button>
            <button 
              onClick={toggleMobileMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#292e38] md:hidden hover:bg-gray-700 transition-colors"
            >
              <span className="material-symbols-outlined text-white">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background-dark border-b border-border-dark p-4 shadow-xl">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className={getNavClass('/', true)} onClick={closeMobileMenu}>{t('nav.home')}</Link>
            <Link to="/services" className={getNavClass('/services', true)} onClick={closeMobileMenu}>{t('nav.services')}</Link>
            <Link to="/projects" className={getNavClass('/projects', true)} onClick={closeMobileMenu}>{t('nav.projects')}</Link>
            <Link to="/about" className={getNavClass('/about', true)} onClick={closeMobileMenu}>{t('nav.about')}</Link>
            <Link to="/contact" className={getNavClass('/contact', true)} onClick={closeMobileMenu}>{t('nav.contact')}</Link>
            
            <div className="py-2 flex items-center justify-between border-t border-border-dark mt-2 pt-4">
              <span className="text-slate-400 text-sm">Language</span>
              <LanguageSwitcher onLanguageChange={closeMobileMenu} />
            </div>

            <button className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] flex">
              <span className="truncate">{t('nav.quote')}</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
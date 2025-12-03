import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-background-dark border-t border-[#292e38] mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <img src="/TALC-Logo.jpeg" alt="TALC Logo" className="h-12 w-auto object-contain" />
              <h2 className="text-white text-base font-bold">{t('footer.company_name')}</h2>
            </div>
            <p className="mt-4 text-sm text-slate-400">{t('footer.tagline')}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{t('footer.company')}</h3>
            <ul className="mt-4 space-y-3">
              <li><Link className="text-sm text-slate-400 hover:text-white transition-colors" to="/about">{t('footer.about')}</Link></li>
              <li><Link className="text-sm text-slate-400 hover:text-white transition-colors" to="#">{t('footer.careers')}</Link></li>
              <li><Link className="text-sm text-slate-400 hover:text-white transition-colors" to="#">{t('footer.press')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{t('footer.services')}</h3>
            <ul className="mt-4 space-y-3">
              <li><Link className="text-sm text-slate-400 hover:text-white transition-colors" to="/services">{t('footer.air')}</Link></li>
              <li><Link className="text-sm text-slate-400 hover:text-white transition-colors" to="/services">{t('footer.ocean')}</Link></li>
              <li><Link className="text-sm text-slate-400 hover:text-white transition-colors" to="/services">{t('footer.ground')}</Link></li>
              <li><Link className="text-sm text-slate-400 hover:text-white transition-colors" to="/services">{t('footer.warehousing')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{t('footer.resources')}</h3>
            <ul className="mt-4 space-y-3">
              <li><Link className="text-sm text-slate-400 hover:text-white transition-colors" to="#">{t('footer.blog')}</Link></li>
              <li><Link className="text-sm text-slate-400 hover:text-white transition-colors" to="#">{t('footer.case_studies')}</Link></li>
              <li><Link className="text-sm text-slate-400 hover:text-white transition-colors" to="/contact">{t('footer.contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{t('footer.legal')}</h3>
            <ul className="mt-4 space-y-3">
              <li><Link className="text-sm text-slate-400 hover:text-white transition-colors" to="#">{t('footer.privacy')}</Link></li>
              <li><Link className="text-sm text-slate-400 hover:text-white transition-colors" to="#">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-[#292e38] pt-8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm text-slate-500">{t('footer.copyright')}</p>
          <div className="flex items-center space-x-4">
            <a className="text-slate-500 hover:text-white transition-colors" href="#">
              <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg>
            </a>
            <a className="text-slate-500 hover:text-white transition-colors" href="#">
              <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IMAGES } from '../constants';
import FadeIn from '../components/animations/FadeIn';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formState);
    alert("Message sent (simulated). We will contact you shortly!");
    setFormState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="flex flex-1 flex-col gap-12 mt-12 pb-20 px-4 md:px-20 lg:px-40">
      <div className="flex flex-col items-center text-center gap-4">
        <FadeIn direction="down">
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl text-white">
            {t('contact.title')}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <p className="max-w-2xl text-slate-300 text-base font-normal leading-normal">
            {t('contact.subtitle')}
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Details & Map */}
        <FadeIn direction="right" className="lg:col-span-1 h-full">
          <div className="bg-card-dark rounded-xl p-6 lg:p-8 flex flex-col gap-8 border border-border-dark h-full">
            <h2 className="text-2xl font-bold text-white">{t('contact.details.title')}</h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="font-bold text-white">{t('contact.details.jalalabad.title')}</h3>
                      <p className="text-text-muted-dark text-sm whitespace-pre-line">
                        {t('contact.details.jalalabad.address')}
                      </p>
                      <p className="text-text-muted-dark text-sm mt-1">
                        <span className="text-primary">{t('contact.details.mobile')}</span> +93(0) 702862700<br/>
                        <span className="text-primary">{t('contact.details.email')}</span> tawhidalmas.logisticservice@gmail.com
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{t('contact.details.kabul.title')}</h3>
                      <p className="text-text-muted-dark text-sm whitespace-pre-line">
                        {t('contact.details.kabul.address')}
                      </p>
                      <p className="text-text-muted-dark text-sm mt-1">
                        <span className="text-primary">{t('contact.details.mobile')}</span> +93 (0) 788896222<br/>
                        <span className="text-primary">{t('contact.details.email')}</span> tawhidalmas@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            <div className="border-t border-border-dark pt-8 mt-auto">
              <h3 className="text-lg font-bold mb-4 text-white">{t('contact.map')}</h3>
              <div className="w-full h-64 rounded-lg overflow-hidden border border-border-dark">
                <iframe 
                  src="https://maps.google.com/maps?q=34.54150246127755,69.1614482168265(Main%20Office)&z=15&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kabul Map"
                ></iframe>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Contact Form */}
        <FadeIn direction="left" delay={0.2} className="lg:col-span-2 h-full">
          <div className="bg-card-dark rounded-xl p-6 lg:p-8 border border-border-dark h-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-white">{t('contact.form.title')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-300" htmlFor="firstName">{t('contact.form.firstName')}</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder={t('contact.form.placeholders.firstName')}
                    value={formState.firstName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border-dark bg-background-dark text-white placeholder:text-text-muted-dark focus:border-primary focus:ring-primary h-12 px-4"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-300" htmlFor="lastName">{t('contact.form.lastName')}</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder={t('contact.form.placeholders.lastName')}
                    value={formState.lastName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border-dark bg-background-dark text-white placeholder:text-text-muted-dark focus:border-primary focus:ring-primary h-12 px-4"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300" htmlFor="email">{t('contact.form.email')}</label>
                <input
                  id="email"
                  type="email"
                  placeholder={t('contact.form.placeholders.email')}
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border-dark bg-background-dark text-white placeholder:text-text-muted-dark focus:border-primary focus:ring-primary h-12 px-4"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300" htmlFor="subject">{t('contact.form.subject')}</label>
                <input
                  id="subject"
                  type="text"
                  placeholder={t('contact.form.placeholders.subject')}
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border-dark bg-background-dark text-white placeholder:text-text-muted-dark focus:border-primary focus:ring-primary h-12 px-4"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300" htmlFor="message">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder={t('contact.form.placeholders.message')}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border-dark bg-background-dark text-white placeholder:text-text-muted-dark focus:border-primary focus:ring-primary p-4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex min-w-[84px] w-full sm:w-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary hover:bg-primary-hover transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] self-start"
              >
                <span className="truncate">{t('contact.form.submit')}</span>
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Contact;
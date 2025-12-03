import React from 'react';
import { useTranslation } from 'react-i18next';
import { IMAGES } from '../constants';
import FadeIn from '../components/animations/FadeIn';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-16 md:gap-24 mt-8 pb-20">
      <div className="flex flex-col gap-8 text-center items-center px-4">
        <FadeIn direction="down">
          <div className="flex flex-col gap-2">
            <p className="text-primary text-sm font-bold">{t('about.journey.label')}</p>
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
              {t('about.journey.title')}
            </h1>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <p className="text-slate-300 text-base max-w-3xl">
            {t('about.journey.desc')}
          </p>
        </FadeIn>
      </div>
      
      <div className="px-4 md:px-20 lg:px-40">
        <FadeIn direction="up">
          <img
            alt="Logistics hub view"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg border border-border-dark"
            src={IMAGES.ABOUT_HERO}
          />
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20 lg:px-40">
        {[
          { title: t('about.mission.title'), icon: "rocket_launch", desc: t('about.mission.desc') },
          { title: t('about.vision.title'), icon: "visibility", desc: t('about.vision.desc') },
          { title: t('about.values.title'), icon: "verified", desc: t('about.values.desc') }
        ].map((item, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} direction="up" className="h-full">
            <div className="flex flex-col gap-3 h-full">
              <div className="flex items-center justify-center bg-card-dark rounded-xl size-12 border border-border-dark">
                <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-white text-xl font-bold mt-2">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="flex flex-col gap-8 px-4 md:px-20 lg:px-40">
        <div className="flex flex-col gap-2 text-center items-center">
          <FadeIn direction="up">
            <p className="text-primary text-sm font-bold">{t('about.leadership.label')}</p>
            <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] md:text-4xl">
              {t('about.leadership.title')}
            </h2>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { name: t('about.leadership.names.ahmad'), role: t('about.leadership.president'), image: IMAGES.TEAM_CEO },
            { name: t('about.leadership.names.jaffar'), role: t('about.leadership.vp'), image: IMAGES.TEAM_COO }
          ].map((member, idx) => (
            <FadeIn key={idx} delay={idx * 0.2} direction="up">
              <div className="flex flex-col items-center text-center group">
                <div className="overflow-hidden rounded-xl w-full h-80 border border-border-dark">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={member.image}
                  />
                </div>
                <h4 className="text-white text-lg font-bold mt-4">{member.name}</h4>
                <p className="text-primary text-sm font-medium">{member.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn direction="up">
        <div className="flex flex-col md:flex-row gap-8 items-center bg-card-dark p-8 md:p-12 rounded-xl mx-4 md:mx-20 lg:mx-40 border border-border-dark">
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">{t('about.join.title')}</h2>
            <p className="text-slate-300 text-base">
              {t('about.join.desc')}
            </p>
            <button className="flex min-w-[84px] max-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary hover:bg-primary-hover transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] mt-4">
              <span className="truncate">{t('about.join.button')}</span>
            </button>
          </div>
          <div className="flex-1 w-full">
            <img
              alt="Office collaboration"
              className="w-full h-64 object-cover rounded-xl border border-border-dark"
              src={IMAGES.JOIN_JOURNEY}
            />
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default About;
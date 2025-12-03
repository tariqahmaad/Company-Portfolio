import React from 'react';
import { useTranslation } from 'react-i18next';
import { IMAGES } from '../constants';
import FadeIn from '../components/animations/FadeIn';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.ocean.title'),
      icon: "directions_boat",
      image: IMAGES.SERVICE_OCEAN,
      desc: t('services.ocean.desc'),
    },
    {
      title: t('services.air.title'),
      icon: "flight_takeoff",
      image: IMAGES.SERVICE_AIR,
      desc: t('services.air.desc'),
    },
    {
      title: t('services.ground.title'),
      icon: "local_shipping",
      image: IMAGES.SERVICE_GROUND,
      desc: t('services.ground.desc'),
    },
    {
      title: t('services.warehousing.title'),
      icon: "warehouse",
      image: IMAGES.SERVICE_WAREHOUSING,
      desc: t('services.warehousing.desc'),
    }
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-10 md:px-20 lg:px-40 overflow-x-hidden">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <FadeIn direction="down">
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl md:text-6xl text-white">
            {t('services.title')}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <p className="mt-4 text-base font-normal leading-normal text-slate-300 sm:text-lg">
            {t('services.subtitle')}
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {services.map((service, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} direction="up">
            <div className="group relative flex min-h-[480px] flex-col justify-end overflow-hidden rounded-xl bg-card-dark p-8 border border-border-dark">
              <img
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={service.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="relative z-10">
                <span className="material-symbols-outlined mb-4 text-4xl text-primary">{service.icon}</span>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-slate-200">{service.desc}</p>
                <a className="mt-4 inline-flex items-center font-bold text-primary hover:text-white transition-colors" href="#">
                  {t('services.cta.learn_more')} <span className="material-symbols-outlined ml-1 text-base">arrow_forward</span>
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4} direction="up">
        <div className="mt-24 rounded-xl bg-card-dark p-8 md:p-12 lg:flex lg:items-center lg:justify-between border border-border-dark">
          <div className="lg:mr-12">
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] sm:text-4xl text-white">
              {t('services.cta.title')}
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              {t('services.cta.desc')}
            </p>
          </div>
          <div className="mt-8 flex-shrink-0 lg:mt-0">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary hover:bg-primary-hover transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] w-full sm:w-auto">
              <span className="truncate">{t('services.cta.button')}</span>
            </button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Services;
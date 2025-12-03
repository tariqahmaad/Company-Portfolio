import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IMAGES } from '../constants';
import FadeIn from '../components/animations/FadeIn';
import AnimatedArrow from '../components/animations/AnimatedArrow';
import { AnimatePresence, motion } from 'framer-motion';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col w-full max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Global network connections"
            className="h-full w-full object-cover"
            src={IMAGES.HOME_HERO}
          />
          <div className="absolute inset-0 bg-background-dark/70"></div>
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.1} direction="down">
              <h1 className="text-4xl font-black tracking-tighter text-white sm:text-6xl lg:text-7xl">
                {t('home.hero.title')}
              </h1>
            </FadeIn>
            <FadeIn delay={0.3} direction="up">
              <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
                {t('home.hero.subtitle')}
              </p>
            </FadeIn>
            <FadeIn delay={0.5} direction="up">
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/services" className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary hover:bg-primary-hover transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] sm:w-auto">
                  <span className="truncate">{t('home.hero.explore')}</span>
                </Link>
                <Link to="/contact" className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#1c1f26] hover:bg-[#2a2e38] transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] sm:w-auto">
                  <span className="truncate">{t('home.hero.contact')}</span>
                </Link>
              </div>
            </FadeIn>
          </div>
          <AnimatePresence>
            {!hasScrolled && (
              <div className="absolute bottom-10 left-0 right-0 flex justify-center pointer-events-none">
                <motion.div
                  key="scroll-arrow"
                  className="pointer-events-auto"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20, transition: { duration: 0.5, ease: "easeInOut" } }}
                  transition={{ delay: 0.8 }}
                >
                  <AnimatedArrow
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    ariaLabel={t('home.hero.scroll_down')}
                  />
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Core Services Summary */}
      <section id="services" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('home.services.title')}</h2>
              <p className="mt-4 text-lg text-slate-400">{t('home.services.subtitle')}</p>
            </FadeIn>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: t('home.services.air.title'), icon: "flight", desc: t('home.services.air.desc') },
              { title: t('home.services.ocean.title'), icon: "directions_boat", desc: t('home.services.ocean.desc') },
              { title: t('home.services.ground.title'), icon: "local_shipping", desc: t('home.services.ground.desc') }
            ].map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up" className="h-full">
                <div className="flex flex-col gap-4 rounded-xl bg-card-dark p-8 border border-border-dark hover:border-primary/50 transition-colors h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <span className="material-symbols-outlined text-white text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-slate-300">{service.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="bg-card-dark py-16 sm:py-24 border-y border-border-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('home.innovation.title')}</h2>
                <p className="mt-4 text-lg text-slate-300">
                  {t('home.innovation.desc')}
                </p>
                <ul className="mt-8 space-y-4">
                  {(t('home.innovation.points', { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div>
                <img
                  alt="Stylized world map with glowing points"
                  className="w-full rounded-xl object-cover shadow-2xl"
                  src={IMAGES.HOME_MAP}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
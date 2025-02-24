import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/ComingSoon.css';

const ComingSoon = () => {
  const { t } = useTranslation();
  return (
    <main className="coming-soon-container" role="main" aria-label="Coming soon announcement">
      <section className="coming-soon" aria-labelledby="coming-soon-heading">
        <img src="/images/cone.svg" alt="Icon indicating coming soon" className="coming-soon-image" />
        <h1 id="coming-soon-heading">{t('comingSoon')}</h1>
        <p>{t('comingSoonDescription')}</p>
      </section>
    </main>
  );
};

export default ComingSoon;


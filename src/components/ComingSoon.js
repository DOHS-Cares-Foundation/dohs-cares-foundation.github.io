import React from 'react';
import '../styles/ComingSoon.css';

const ComingSoon = () => {
  return (
    <main className="coming-soon-container" role="main" aria-label="Coming soon announcement">
      <section className="coming-soon" aria-labelledby="coming-soon-heading">
        <img src="/images/cone.svg" alt="Icon indicating coming soon" className="coming-soon-image" />
        <h1 id="coming-soon-heading">Coming Soon</h1>
        <p>
          PreFem is a web app designed by feminists of the DOHS Femicide Research Hub to combat femicide in Nigeria.
        </p>
      </section>
    </main>
  );
};

export default ComingSoon;


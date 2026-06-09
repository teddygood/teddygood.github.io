import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

import styles from './documentRedirect.module.css';

const PDF_PATH = '/files/ChanhoLee-portfolio.pdf';
const REDIRECT_DELAY_MS = 700;
const SiteLayout = Layout as unknown as (props: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => React.ReactElement;

export default function Portfolio(): React.ReactElement {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.replace(PDF_PATH);
    }, REDIRECT_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <SiteLayout title="Portfolio" description="Chanho Lee portfolio PDF">
      <main className={styles.page}>
        <p className={styles.status}>Opening portfolio...</p>
        <noscript>
          <a href={PDF_PATH}>Open portfolio PDF</a>
        </noscript>
      </main>
    </SiteLayout>
  );
}

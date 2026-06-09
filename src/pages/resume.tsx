import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

import styles from './documentRedirect.module.css';

const PDF_PATH = '/files/ChanhoLee-resume.pdf';
const REDIRECT_DELAY_MS = 700;
const SiteLayout = Layout as unknown as (props: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => React.ReactElement;

export default function Resume(): React.ReactElement {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.replace(PDF_PATH);
    }, REDIRECT_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <SiteLayout title="Resume" description="Chanho Lee resume PDF">
      <main className={styles.page}>
        <p className={styles.status}>Opening resume...</p>
        <noscript>
          <a href={PDF_PATH}>Open resume PDF</a>
        </noscript>
      </main>
    </SiteLayout>
  );
}

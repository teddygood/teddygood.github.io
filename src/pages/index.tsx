import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const HomepageFeatures = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.profile}>
      <div className="container">
        <p className={styles.intro}>✍️ 하는 것을 좋아하는 개발자</p>
        <div className={styles.intro}>
          <img src="img/main.jpg" alt="Main image"/>
          <figcaption>
          Built with Image Creator from Microsoft Bing
          </figcaption>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={siteConfig.tagline}>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

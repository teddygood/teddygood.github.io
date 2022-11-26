import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Typewriter from 'typewriter-effect';

import styles from './index.module.css';

const HomepageFeatures = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
      <h2 className={styles.intro}>
        안녕하세요.
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('다양한 분야에 관심이 많은')
              .pauseFor(2000)
              .deleteAll()
              .typeString('기록의 힘을 믿는')
              .pauseFor(2000)
              .deleteAll()
              .typeString('능동적으로 살아가는')
              .pauseFor(2000)
              .start();
          }}
        />
        개발자 <strong>이찬호</strong>입니다.
      </h2>
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

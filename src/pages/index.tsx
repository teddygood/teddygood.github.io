import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import blogPostList from '@generated/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json';

type Highlight = {
  title: string;
  description: string;
  href: string;
};

type BlogPostModule = {
  title: string;
  description?: string;
  permalink: string;
  date: string;
};

// Korean summary lines
const summaryLines = [
  '매일 배우고 기록하며 기본기를 다지는 데 집중합니다.',
  '오픈소스와 사이드 프로젝트를 통해 새로운 기술을 공부하는 것을 좋아합니다.',
  '배운 모든 것을 공유하며 팀, 커뮤니티와 함께 성장하는 것을 목표로 합니다.',
];

// ... (blog post modules logic remains same)

// eslint-disable-next-line @typescript-eslint/no-var-requires
const blogPostModulesContext = (require as any).context(
  '@generated/docusaurus-plugin-content-blog/default',
  false,
  /site-blog-.*\.json$/,
);

const blogPostModules = blogPostModulesContext
  .keys()
  .map((key: string) => blogPostModulesContext(key) as BlogPostModule);

const blogPostMap = new Map(blogPostModules.map((post) => [post.permalink, post]));

const recentPosts: Highlight[] = (blogPostList.items ?? []).slice(0, 3).map((item) => {
  const details = blogPostMap.get(item.permalink);
  return {
    title: details?.title ?? item.title,
    description:
      details?.description ??
      `Published on ${new Date(item.date).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}`,
    href: item.permalink,
  };
});

function HighlightCard({ item, delay }: { item: Highlight; delay: string }) {
  return (
    <Link
      className={clsx(styles.card, styles.cardReveal)}
      style={{ animationDelay: delay }}
      to={item.href}>
      <div className={styles.cardTitle}>{item.title} ↗</div>
      <p className={styles.cardDesc}>{item.description}</p>
    </Link>
  );
}

function HomepageHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={clsx(styles.heroContent, styles.slideUp)}>
        {/* <p className={styles.kicker}>Hi, I&apos;m {siteConfig.title}</p> */}
        <h1 className={styles.title}>안녕하세요, 이찬호입니다.</h1>
        <p className={styles.lead}>소프트웨어 엔지니어입니다.</p>
        <ul className={styles.summary}>
          {summaryLines.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
        <div className={styles.actions}>
          <Link className="button button--primary button--lg" to="/blog">
            블로그 읽기
          </Link>
          <Link className={styles.ghostButton} to="/wiki/introduction">
            위키 둘러보기
          </Link>
        </div>
      </div>
      <div
        className={clsx(styles.heroImage, styles.slideUp)}
        style={{ animationDelay: '0.15s' }}>
        <img src="img/profile.jpg" alt="Chanho Lee avatar" />
        <span className={styles.caption}>Amazon Web Services(AWS) 근무 중 촬영</span>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <main className={styles.page}>
        <HomepageHero />
        <section className={styles.section}>
          <div className={clsx(styles.sectionHeader, styles.slideUp)}>
            <h2 className={styles.sectionTitle}>Recent Posts</h2>
          </div>
          <div className={styles.list}>
            {recentPosts.map((item, idx) => (
              <HighlightCard item={item} key={item.title} delay={`${0.05 * idx}s`} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

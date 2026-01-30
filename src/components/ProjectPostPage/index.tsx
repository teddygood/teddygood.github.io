import React from 'react';
import ProjectLayout from '@site/src/components/ProjectLayout';
import Layout from '@theme/Layout';
import type {Props} from '@theme/BlogPostPage';

export default function ProjectPostPage(props: Props & { toc?: any }): JSX.Element {
  const {content: BlogPostContent} = props;
  const toc = props.toc || BlogPostContent.toc;
  const {frontMatter} = BlogPostContent;

  return (
    <Layout title={frontMatter.title} description={frontMatter.description}>
      <ProjectLayout
        title={frontMatter.title}
        role={frontMatter.role || 'Project Lead'} // Default if missing
        timeline={frontMatter.timeline || ''}
        stack={frontMatter.stack || frontMatter.skills || frontMatter.tags || []} // Fallback to tags if stack is missing
        toc={!frontMatter.hide_table_of_contents && toc}
      >
        <BlogPostContent />
      </ProjectLayout>
    </Layout>
  );
}

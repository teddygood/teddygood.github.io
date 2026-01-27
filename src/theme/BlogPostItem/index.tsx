import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import type { WrapperProps } from '@docusaurus/types';
import Giscus from '@site/src/components/Giscus';
import {useLocation} from '@docusaurus/router'

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): JSX.Element {
  const location = useLocation();

  // Blog post detail pages (not the list page)
  const isBlogPostPage = location.pathname.startsWith('/blog/') && location.pathname.length > '/blog/'.length;

  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && <Giscus />}
    </>
  );
}

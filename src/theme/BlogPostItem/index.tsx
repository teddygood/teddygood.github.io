import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import type { WrapperProps } from '@docusaurus/types';
import Giscus from '@site/src/components/Giscus';
import {useLocation} from '@docusaurus/router'

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): JSX.Element {
  // const url = window.location.href;
  // const [_, detailSlug] = url.split('/blog');
  const location = useLocation();

  // Separate your blog's main page from its subpages
  const isBlogPage = location.pathname === '/blog';
  const isBlogPostPage = location.pathname.startsWith('/blog/') && location.pathname.length > '/blog/'.length;

  return (
    <>
      <BlogPostItem {...props} />
      {/*{detailSlug && <Giscus />}*/}
      {isBlogPostPage && <Giscus />}
    </>
  );
}

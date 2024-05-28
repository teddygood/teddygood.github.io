import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import type { WrapperProps } from '@docusaurus/types';
import Giscus from '@site/src/components/Giscus';

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): JSX.Element {
  const url = window.location.href;
  const [_, detailSlug] = url.split('/blog');

  return (
    <>
      <BlogPostItem {...props} />
      {detailSlug && <Giscus />}
    </>
  );
}

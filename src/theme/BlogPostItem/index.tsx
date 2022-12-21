import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import type {WrapperProps} from '@docusaurus/types';
import Giscus from '@site/src/components/Giscus';
// @ts-ignore
import {useBlogPost} from '@docusaurus/theme-common/internal';
import { useLocation } from '@docusaurus/router';

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): JSX.Element {
  const { metadata } = useBlogPost()
  const location = useLocation();
  
  const { frontMatter, slug, title } = metadata
  const { comments = true } = frontMatter;

  const { pathname } = location;
  const showComments = comments && pathname !== "/blog";

  return (
    <>
      <BlogPostItem {...props} />
      {showComments && (
        <Giscus />
      )}
    </>
  );
}

import React from 'react';
import Img from '@theme-original/MDXComponents/Img';
import type ImgType from '@theme/MDXComponents/Img';
import type {WrapperProps} from '@docusaurus/types';

import styles from './index.module.css';

type Props = WrapperProps<typeof ImgType>;

export default function ImgWrapper(props: Props): JSX.Element {
  return (
    <>
      <Img {...props} className={styles.centered} />
    </>
  );
}

import React from 'react';
import DocItem from '@theme-original/DocItem';
import type DocItemType from '@theme/DocItem';
import type {WrapperProps} from '@docusaurus/types';
import Giscus from '@site/src/components/Giscus';

type Props = WrapperProps<typeof DocItemType>;

export default function DocItemWrapper(props: Props): JSX.Element {

    return (
    <>
      <DocItem {...props} />
      {/* <Giscus /> */}
    </>
  );
}

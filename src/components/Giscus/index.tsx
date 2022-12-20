import React from 'react'
import Giscus from '@giscus/react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

const index = () => {
  const { i18n } = useDocusaurusContext()

  return (
      <Giscus
        id="teddygood/blog-comments"
        repo="teddygood/blog-comments"
        repoId="MDEwOlJlcG9zaXRvcnkzNzg4NDE2NjY="
        category="General"
        categoryId="DIC_kwDOFpSqQs4CTKSg"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        strict="0"
        theme="preferred_color_scheme"
        lang={i18n.currentLocale}
      />
  )
}

export default index
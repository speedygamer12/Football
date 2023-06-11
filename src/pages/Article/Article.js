import React from 'react';
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import RelatedPreviews from '../../components/ArticleItem/RelatedPreviews'
import GeneralLayout from '../../layouts/GeneralLayout'

const Article = () => {
  return (
    <div>
        <GeneralLayout >
          <ArticleItem/>
          <RelatedPreviews/>
        </GeneralLayout>
    </div>
  )
}

export default Article
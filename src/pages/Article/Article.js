import React from 'react';
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import GeneralLayout from '../../layouts/GeneralLayout'

const Article = () => {
  return (
    <div>
        <GeneralLayout >
          <ArticleItem/>
        </GeneralLayout>
    </div>
  )
}

export default Article
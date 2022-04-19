import React, { useState } from 'react';
import {ArticleForm} from './ArticleForm';
import {Article} from './Article';
import '../style/ArticleList.css';
import { useLocalStorage } from './useLocalStorage';

export function ArticleList() {

  const [articles, setArticles] = useLocalStorage('articles',[]);

  const addArticle = article => {
    
    const articlesUpdated = [article, ...articles];
    setArticles(articlesUpdated);
    console.log('articles', articles)
  }

  const eraseArticle = id => {
    const articlesUpdated = articles.filter(article => article.id !== id);
    setArticles(articlesUpdated);
  }

  
  
  return (
    <>
      <ArticleForm onSubmit={addArticle} />
      <div className='list-container'>
        {
          articles.map((article) =>
            <Article
              key={article.id}
              id={article.id} 
              img='book'
              name={article.name}
              detail={article.detail}
              text={article.text}
              eraseArticle={eraseArticle}
            />
          ) 
        }
      </div>
    </>
  );    
}


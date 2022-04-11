import React, { useState } from 'react';
import {ArticleForm} from './ArticleForm';
import {Article} from './Article';
import '../style/ArticleList.css';

export function ArticleList() {

  const [articles, setArticles] = useState([]);

  const addArticle = article => {
    
    // article.text = article.text.trim() ? article.text.trim() : article.text;
    // article.name = article.name.trim() ? article.name.trim() : article.name;
    // article.detail = article.detail.trim() ? article.detail.trim() : article.detail; 
    
    const articlesUpdated = [article, ...articles];
    setArticles(articlesUpdated);
  }

  const eraseArticle = id => {
    const articlesUpdated = articles.filter(article => article.id !== id);
    setArticles(articlesUpdated);
  }

  
  
  return (
    <>
      <ArticleForm onSubmit={addArticle} />
      <div className='article-container'>
        {
          articles.map((article) =>
            <Article
              key={article.id}
              id={article.id} 
              img='book'
              name={article.name}
              detail={article.detail}
              text={article.text}
            //   eliminarTarea={eraseArticle} 
            />
          ) 
        }
      </div>
    </>
  );    
}


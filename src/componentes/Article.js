import React from 'react';
import '../style/Article.css';
export function Article(props){
  return(
    <div className='article-container'>
      
      <div className='img-container'>
        <img 
        className='img-article'
        src={require(`../imagenes/${props.img}.jpg`)}
        alt={props.img}
        />
      </div>
      <div className='article-info'>
        <button className='close-button' onClick={() => props.eraseArticle(props.id)}>x</button>
        <p className='article-name'>{props.name}</p>
        <p className='article-detail'>{props.detail}</p>
        <p className='article-text'>{props.text}</p>
      </div>

    </div>
  );
}



import './App.css';
import {Article}  from './componentes/Article';
import {Button}  from './componentes/Button';
import {useState} from 'react';
import {ArticleList} from './componentes/ArticleList';



function App() {

  const [numArticles, setnumArticles] = useState([]);


  const removeArticle = ()=>{

  }

  return (
    <div className="App">
      <div className='main-container'>
        <h1 className='title'>Bienvenidos</h1>

        

        <Button
          typeButton='primary-button'
          text='Agregar contenido'
          // handleClick={createArticle}
        />

        <Article 
          name='Francisco Castro'
          img='book'
          detail='Programador'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt nisi nibh, eget ullamcorper diam malesuada at. Donec auctor blandit diam. Quisque nisi nisl, mollis in dapibus non, maximus mollis eros. Sed dignissim blandit tortor nec fringilla. Nulla ac turpis ultrices, mattis odio at, gravida leo. Suspendisse sit amet erat. '
        />

        <Article 
          name='Sobre mi'
          img='united'
          detail='Programador'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt nisi nibh, eget ullamcorper diam malesuada at. Donec auctor blandit diam. Quisque nisi nisl, mollis in dapibus non, maximus mollis eros. Sed dignissim blandit tortor nec fringilla. Nulla ac turpis ultrices, mattis odio at, gravida leo. Suspendisse sit amet erat. '
        />
        <Article 
          name='Experiencia'
          img='writing'
          detail='Programador'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt nisi nibh, eget ullamcorper diam malesuada at. Donec auctor blandit diam. Quisque nisi nisl, mollis in dapibus non, maximus mollis eros. Sed dignissim blandit tortor nec fringilla. Nulla ac turpis ultrices, mattis odio at, gravida leo. Suspendisse sit amet erat. '
        />
      </div>

      <ArticleList/>

    </div>
  );
}

export default App;

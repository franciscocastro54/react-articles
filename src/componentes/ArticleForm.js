import React, { useState } from "react";
import "../style/ArticleForm.css";
import { v4 as uuidv4 } from "uuid";
import { validate } from "uuid";

export function ArticleForm(props) {

  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [text, setText] = useState('');



  const handleSend = (e) => {
    e.preventDefault();
    const newArticle = {
      id: uuidv4(),
      img: "book",
      name: name,
      detail: detail,
      text: text
    };
    console.log('newArticle', newArticle);
    props.onSubmit(newArticle);
  };

  const validate = (nameInput,detailInput,textInput) =>{
    const validateName = (nameInput.length > 0)? false : true;
    const validateDetail = (detailInput.length > 0)? false : true;
    const validateText = (textInput.length > 0 && textInput.length <= 400)? false : true;
    
    return (validateName || validateDetail || validateText);

  }

  return (
    <form className="article-form" onSubmit={handleSend}>
      <h3 className="title" >Ingresar nuevo articulo </h3>
      <div className="article-inputs">
        <label className="label">Asunto:</label>
        <input
          className="text-input"
          type="text"
          value={name}
          onChange={ev=> setName(ev.target.value)}
          placeholder="Escribir asunto"
          name="name"
        />

        <label className="label">Nombre:</label>
        <input
          className="text-input"
          type="text"
          value={detail}
          onChange={ev=> setDetail(ev.target.value)}
          placeholder="Jhon Doe"
          name="detail"
        />

        <label className="label">Contenido:<br></br>({400 - text.length})</label>
        <textarea
          className="text-input-xl"
          type="text"
          value={text}
          onChange={ev=> setText(ev.target.value)}
          placeholder="Escribe contenido..."
          name="text"
          maxLength={400}
        />
      </div>
      <button 
        className="primary-button"
        disabled={validate(name,detail,text)}
      >Agregar articulo</button>
    </form>
  );
}


import React, { useState } from "react";
import "../style/ArticleForm.css";
import { v4 as uuidv4 } from "uuid";

export function ArticleForm(props) {

  const handleSend = (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const detail = document.getElementById("detail").value;
    const text = document.getElementById("text").value;
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

  return (
    <form className="article-form" onSubmit={handleSend}>
      <h3 className="title">Ingresar nuevo articulo</h3>
      <div className="article-inputs">
        <label className="label">Asunto:</label>
        <input
          className="text-input"
          type="text"
          placeholder="Jhon Doe"
          name="name"
          id="name"
        />

        <label className="label">Nombre:</label>
        <input
          className="text-input"
          type="text"
          placeholder="Escribe una Tarea"
          name="detail"
          id="detail"
        />

        <label className="label">Contenido:</label>
        <textarea
          className="text-input-xl"
          type="text"
          placeholder="Escribe contenido..."
          name="text"
          id="text"
          maxLength={400}
        />
      </div>
      <button className="primary-button">Agregar articulo</button>
    </form>
  );
}


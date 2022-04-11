import React, { useState } from "react";
import "../style/ArticleForm.css";
import { v4 as uuidv4 } from "uuid";

export function ArticleForm(props) {
  const [inputName, setInputName] = useState("");
  const [inputText, setInputText] = useState("");
  const [inputDetail, setInputDetail] = useState("");

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleDetailChange = (e) => {
    setInputDetail(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const newArticle = {
      id: uuidv4(),
      img: "book",
      name: {inputName},
      detail: {inputDetail},
      text: {inputText}
    };
    props.onSubmit(newArticle);
  };

  return (
    <form className="article-form" onSubmit={handleSend}>
      <label className="label">Asunto:</label>
      <input
        className="text-input"
        type="text"
        placeholder="Jhon Doe"
        name="name"
        onChange={handleNameChange}
      />

      <label className="label">Nombre:</label>
      <input
        className="text-input"
        type="text"
        placeholder="Escribe una Tarea"
        name="detail"
        onChange={handleDetailChange}
      />

      <label className="label">Contenido:</label>
      <input
        className="text-input-xl"
        type="text"
        placeholder="Escribe contenido..."
        name="text"
        onChange={handleTextChange}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}


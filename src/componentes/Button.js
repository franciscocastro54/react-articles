import React from "react";
import '../style/Button.css';

export function Button({text, typeButton, handleClick}){
    return (
        <button
            className={typeButton}
            onClick={handleClick}
        >{text}
        </button>
    )
}


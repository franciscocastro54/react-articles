import React from 'react';
import '../style/Advice.css';



export function Advice(props){

    return(
    <div className={props.type + ' advice-container'} >

        <div className='title-container'>
            <p className='advice-title'>{props.title}</p>
            <button onClick={() => props.eraseAdvice(props.id)}>x</button>
        </div>
        
        <div className='info-container'>
            <p className='advice-info'>{props.info}</p>  
        </div>

    </div>
  );
}


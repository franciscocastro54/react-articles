import React, { useState } from 'react';
import { Advice } from './Advice';
import '../style/AdviceList.css';


export function AdviceList() {

    const eraseAdvice = (id) => {
        const advicesUpdated = advices.filter(advice => advice.id !== id);
        setAdvices(advicesUpdated);
    }

    const [advices, setAdvices] = useState([{id:"test", type:"error",title:"titulo",info:"success","eraseAdvice":eraseAdvice}, {id:"test2",type:"success" ,title:"titulo",info:"success2","eraseAdvice":eraseAdvice}]);

    const addAdvice = advice => {

        const advicesUpdated = [advice, ...advices];
        setAdvices(advicesUpdated);
    }


    




    return (
        <>
            <div className='advice-container'>


                {
                    advices.map((advice) =>

                        <Advice
                            key={advice.id}
                            id={advice.id}
                            type={advice.type}
                            title={advice.title}
                            info={advice.info}
                            eraseAdvice={eraseAdvice}
                        />
                    )
                }


            </div>
        </>
    );
}

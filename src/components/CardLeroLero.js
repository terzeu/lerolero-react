import React from 'react';


function CardLeroLero({dados}){
    return (
        <div className="card">
            <div className="card-header">
                <h3>{dados.title}</h3>
            </div>
            <div className="card-description">
                <p>{dados.body}</p>
            </div>
        </div>
    )
}

export default CardLeroLero;

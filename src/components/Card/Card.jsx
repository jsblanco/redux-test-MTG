import React from 'react'


export default function Card({card}) {
    return (
        <span className="d-inline" style={{height: "310px", width:"223px"}}>
            <img src={!!card.imageUrl?card.imageUrl: "./cardBack.jpg"} alt={card.name}/>
            {!card.imageUrl && <p className="text-center d-inline">{card.name}</p>}
        </span>
    )
}

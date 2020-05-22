import React from 'react'


export default function Card({card}) {
    return (
        <span className="d-inline" >
            <img style={{height: "310px", width:"223px"}} src={!!card.image_uris?card.image_uris.normal: "./cardBack.jpg"} alt={card.name}/>
            {!card.image_uris && <p className="text-center d-inline">{card.name}</p>}
        </span>
    )
}

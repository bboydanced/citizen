import React from 'react'

export default function DetailsThumnail({images, setIndex}) {
    return (
        <div className="thumnail-detail">
            {
                images.map((img, index) => (
                    <img src={img} alt={img} key={index} onClick={() => setIndex(index)} />
                ))
            }
        </div> 
    )
}

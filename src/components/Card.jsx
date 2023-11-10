import React, { useState } from 'react'
import '../style/card.css'


export const Card = ({ image, title, description, price,handleAdd,handleQuit,handleIncrease,handleDecrease }) => {

    const [added, setAdded] = useState(false)

    const clickAdd = () => {
        handleAdd()
        setAdded(true);
    };

    const clickQuit = () => {
        handleQuit()
        setAdded(false);
    };




    return (
        <div className='tarjeta'>
            <img src={image} alt={title} className='tarjeta-imagen' />
            <div className='tarjeta-contenido'>
                <h3 className='tarjeta-titulo'>{title}</h3>
                <p className='tarjeta-descripcion'>{description}</p>
                <p className='tarjeta-precio'> ${price}</p>


                {added
                    ? <button 
                    type='button'
                     className='boton-quitar'
                      onClick={clickQuit}>
                        Remove from cart
                        </button> :
                    <button 
                    type='button' 
                    className='boton-agregar' 
                    onClick={clickAdd}>
                        Add to cart
                        </button>
                }
            </div>

        </div>
    )
}

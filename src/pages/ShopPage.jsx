import { Title } from '@mui/icons-material'
import { Card } from '../components/Card'
import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { CartContext } from '../context/CartContext'

export const ShopPage = () => {
  const { addPurchase, deletePurchase } = useContext(CartContext)

  const { product } = useContext(ProductContext)

  const handleAdd=(purchase)=>{
    addPurchase(purchase)
  }
  const handleQuit=()=>{
    deletePurchase(id)
  }

  return (
    <>
      <h1>Purchases:</h1>
      <hr />

      {product.map((prod) => (
        <Card
          key={prod.id} // Añade una clave única para cada producto
          image={prod.image}
          title={prod.title}
          description={prod.description}
          price={prod.price}
          handleAdd={()=>{handleAdd(prod)}}
          handleQuit={()=>{handleQuit(prod.id)}}
        >
        </Card>))
      }
    </>
  )
}

import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CartPage = () => {
  const { buyList, addPurchase, incrementQuantity, decreaseQuantity, deletePurchase } = useContext(CartContext)

  const calculateTotal = ()=>{
    return buyList.reduce((total,item)=>total+item.price*item.quantity,0).toFixed(2)
  }

const handlePrint=()=>{
  print()
}

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            buyList.map((it) => 
               (
                <tr key={it.id}>
                  <th scope="row">{it.title}</th>
                  <td>{it.price}</td>
                  <td>
                    <button className='btn btn-ouline-primary'
                    onClick={()=>decreaseQuantity(it.id)}>-</button>
                    <button className='btn btn-primary'>{it.quantity}</button>
                    <button className='btn btn-ouline-primary'
                    onClick={()=>incrementQuantity(it.id)}>+</button>
                  </td>
                  <td><button
                    className='btn btn-danger'
                    onClick={() => { deletePurchase(it.id) }}>delete</button></td>
                </tr>

              )
            )
          }
          <tr>
          <th><b>TOTAL:</b></th>
          <td></td>
          <td></td>
          <td>${calculateTotal()}</td>
          </tr>

        </tbody>
      </table>

      <div className='d-grid gap-2'>
        <button className='btn btn-primary'
        onClick={handlePrint}
        disabled={buyList<1}>Buy now</button>
      </div>

    </>
  )
}

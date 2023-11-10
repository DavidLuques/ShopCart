import { useEffect, useState } from 'react'
import { ProductContext } from './ProductContext'


export const ProductProvider = ({ children }) => {

    const [product, setProduct] = useState([])

    const fetchProduct = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
        setProduct(data)
    }

    useEffect(() => {
        fetchProduct()

    }, [])

    return (
        <ProductContext.Provider value={{product}}>
            {children}
        </ProductContext.Provider>
    )
}
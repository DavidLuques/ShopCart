import { useReducer } from 'react'
import { CartContext } from './CartContext'

    const initialState = []

export const CartProvider = ({ children }) => {

    const purchaseReducer = (state = initialState, action = {}) => {

        switch (action.type) {
            case '[CART] add purchase':
                return [...state, action.payload]

            case '[CART] increment purchase':
                return state.map(item => {
                    const cant = item.quantity + 1
                    if (item.id === action.payload) return { ...item, quantity: cant }
                    return item
                })

            case '[CART] decrease purchase':
                return state.map(item => {
                    const cant = item.quantity - 1
                    if (item.id === action.payload && item.quantity > 1) return { ...item, quantity: cant }
                    return item
                })

            case '[CART] delete purchase':
                return state.filter(purchase => purchase.id !== action.payload)

            default:
                return state
        }
    }

    const [buyList, dispatch] = useReducer(purchaseReducer, initialState)


    const addPurchase = (purchase) => {
        purchase.quantity = 1
        const action = {
            type: '[CART] add purchase',
            payload: purchase
        }
        dispatch(action)
    }
    const incrementQuantity = (id) => {
        const action = {
            type: '[CART] increment purchase',
            payload: id
        }
        dispatch(action)
    }
    const decreaseQuantity = (id) => {
        const action = {
            type: '[CART] decrease purchase',
            payload: id
        }
        dispatch(action)
    }
    const deletePurchase = (id) => {
        const action = {
            type: '[CART] delete purchase',
            payload: id
        }
        dispatch(action)
    }


    return (

        <CartContext.Provider value={{ buyList, addPurchase, incrementQuantity, decreaseQuantity, deletePurchase }}>
            {children}
        </CartContext.Provider>
    )
}

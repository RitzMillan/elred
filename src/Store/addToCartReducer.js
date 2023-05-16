import { ADD_TO_CART } from "./constants"

export const addToCartData = (data = [], action) => {
    if(action.type === ADD_TO_CART) {
        console.warn('add to cart reducer', action.payload)
        return [...action.payload]
    }
    else {
        return data
    }
}
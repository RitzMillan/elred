import { ADD_TO_CART } from "./constants"

export const addToCart = (data) => {
    console.warn('add to cart Action')
    return {
        type: ADD_TO_CART,
        payload: data
    }
}
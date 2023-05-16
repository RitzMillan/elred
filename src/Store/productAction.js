import { ALL_PRODUCTS } from "./constants"

export const getAllProducts = (data) => {
    console.warn('product action called')
    return {
        type: ALL_PRODUCTS,
        payload: data
    }
}
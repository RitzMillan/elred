import { SET_ALL_PRODUCTS } from "./constants"


export const productData = (data = [], action) => {
    switch(action.type) {
        case SET_ALL_PRODUCTS:
            console.warn('product reducer called', action.payload);
            return [...action.payload]
        default:
            return data
    }
}
import {SET_SUB_CATEGORY} from './constants'

export const subcategoryData = (data = [], action) => {
    switch (action.type) {
        case SET_SUB_CATEGORY: 
            console.warn('subcategory reducer called', action.payload);
            return [...action.payload]
        default:
            return data
    }
}
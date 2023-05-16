import {SUB_CATEGORY} from './constants'

export const getAllSubcategory = (data) => {
    console.warn('subcategory action called');
    return {
        type: SUB_CATEGORY,
        payload: data 
    }
}
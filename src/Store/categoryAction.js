import {ALL_CATEGORY} from './constants'

export const getAllCategory = () => {
    console.warn('category action called');
    return {
        type: ALL_CATEGORY,
    }
}
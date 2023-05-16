import {ALL_CATEGORY, SET_ALL_CATEGORY} from './constants'

export const categoryData = (data = [], action) => {
    switch (action.type) {
        case SET_ALL_CATEGORY:
            console.warn('category reducer called',action.data)
            return [...action.data]
        default:
            return data
    }
}
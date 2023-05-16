import {POPUP} from './constants'

export const popup = (data) => {
    console.warn('popup action called')
    return {
        type: POPUP,
        payload: data
    }
}
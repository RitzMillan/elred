import {POPUP} from './constants'

export const popupData = (data=false, action) => {
    if(action.type === POPUP){
        console.warn('popup reducer called', action.payload)
        return action.payload
    }
    else {
        return data
    }
}
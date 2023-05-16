import { HEIGHT } from "./constants";

export const heightData = (data=false, action) => {
    switch (action.type) {
        case HEIGHT:
            console.warn('height reducer called', action.payload)
            return action.payload
        default:
            return data
    }
}
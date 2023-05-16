import { HEIGHT } from "./constants";

export const height = (data) => {
    console.warn('height action called');
    return {
        type: HEIGHT,
        payload: data
    }
}
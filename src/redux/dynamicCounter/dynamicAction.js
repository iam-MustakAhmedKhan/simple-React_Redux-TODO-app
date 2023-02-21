import { DECREMENT, INCREMENT } from "./DynamicActionTypes";

export const increment = (value) => {
    return {
        type: INCREMENT,
        payload:value
    };
};
export const decrement = (value) => {
    return {
        type: DECREMENT,
        payload:value
    };
};
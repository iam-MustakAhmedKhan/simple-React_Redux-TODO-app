import { DECREMENT, INCREMENT } from "./DynamicActionTypes";

const initial = {
    value: 0
};
const dynamicCounterReducer = (state = initial, action) => {

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + action.payload
            };
        case DECREMENT:
            return {
                ...state,
                value: state.value - action.payload
            };
        default:
            return state;
    }

};

export default dynamicCounterReducer;
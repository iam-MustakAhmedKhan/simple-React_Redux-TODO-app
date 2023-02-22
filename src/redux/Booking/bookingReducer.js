import { ADD, DELETE } from "./bookingActionTypes";

const initial = [];
const bookingReducer = (state = initial, action) => {

    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case DELETE:
            const updatedState = state.filter(v=>v.id!==action.payload.id)
            return [...updatedState];
        default:
            return state;
    }


};

export default bookingReducer;
import { CHANGE } from "./formActionTypes";

const initial = {
    id:'',
    from: '',
    to: '',
    date: '',
    guests: '',
    ticketClass: ''
}
const formReducer = (state=initial,action) => {
    switch (action.type) {
        case CHANGE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
};

export default formReducer
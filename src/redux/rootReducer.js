import { combineReducers } from "redux";
import bookingReducer from "./Booking/bookingReducer";
import formReducer from "./formField/formReducer";

const rootReducers = combineReducers({
    formField: formReducer,
    bookingReducer:bookingReducer
});

export default rootReducers
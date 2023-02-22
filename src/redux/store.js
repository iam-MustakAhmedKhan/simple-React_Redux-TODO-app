import { legacy_createStore as createStore } from "redux";
import bookingReducer from "./Booking/bookingReducer";

const store = createStore(bookingReducer);


export default store
import { legacy_createStore as createStore } from "redux";
import combineReducer from "./rootStore";

const store = createStore(combineReducer);

export default store
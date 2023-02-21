import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";

const combineReducer = combineReducers({
    counter: counterReducer,
    dynamicCounter:dynamicCounterReducer
});

export default combineReducer
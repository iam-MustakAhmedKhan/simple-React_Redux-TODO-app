import { ADDED, ALLCLEAR, ALLCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./todosActionTypes";
import { v4 as uuid } from "uuid";

const initialState = [{
    id:1,
    text: 'love javascript',
    completed: true,
    color:'yellow'
}]

const todoReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: uuid(),
                    text:action.payload
                }
            ]
        case TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                }
                return {
                    ...todo,
                    completed:!todo.completed
                }
            })
        case COLORSELECTED:

            const { todoId, color } = action.payload
            
            return state.map(todo => {
                if (todo.id !== todoId) {
                    return todo
                }

                return {
                    ...todo,
                    color:color
                }
            })
        case DELETED:
            return state.filter(todo => todo.id !== action.payload)
        case ALLCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed:true
                }
            })
        case ALLCLEAR:
            return state.filter(todo=>!todo.completed)
    
        default:
            return state;
    }
};

export default todoReducer
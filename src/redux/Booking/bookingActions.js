import {ADD,DELETE} from './bookingActionTypes'


export const add = (booking) => {
    return {
        type: ADD,
        payload:booking
    }
}
export const deleteBooking = (id) => {
    return {
        type: DELETE,
        payload: {
            id
        }
        
    }
}
import { CHANGE } from "./formActionTypes";

const change = (name,value) => {
    return {
        type: CHANGE,
        payload: {
            [name]:value
        }
    }
};

export default change
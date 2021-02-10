  
import {
    ADD,
    SUBTRACT,
} from '../actions/types.js';

export const mathsReducer = (state = 0, action) => {
    switch(action.type) {
        case ADD:
            return state + action.payload;
        case SUBTRACT:
            return state + action.payload;
        default:
            return state;
    }
}

import { combineReducers } from 'redux'
import { mathsReducer } from './mathsReducer';

export const allReducer = combineReducers({
    maths: mathsReducer
})

export default allReducer
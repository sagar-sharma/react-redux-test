import { combineReducers } from 'redux';
import { UPDATE_AGE } from './actions';

const initialState = {age:25}

const ageReducer = (state=initialState, action) => {
    switch(action.type) {
        case UPDATE_AGE: 
            return {
                ...state, age: action.payload
            };
        default:
            return state;

    }
}

export default combineReducers({
    ageReducer
});
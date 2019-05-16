export const UPDATE_AGE = 'UPDATE_AGE';

export default function(age) {
    return function(dispatch) {
        dispatch({
            type: UPDATE_AGE,
            payload: age
        })
    }
}
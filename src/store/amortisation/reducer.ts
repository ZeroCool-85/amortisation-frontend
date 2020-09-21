import { initialState } from './selectors';
import {
    FETCH_AMORTISATION_ERROR,
    FETCH_AMORTISATION_REQUEST,
    SET_AMORTISATION
} from './constants';

export default (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_AMORTISATION_REQUEST:
            return {
                ...state,
                loading: action.loading
            };
        case FETCH_AMORTISATION_ERROR:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        case SET_AMORTISATION:
            return {
                ...state,
                error: initialState.error,
                amortisation: action.amortisation,
            };
        default:
            return state;
    }
};

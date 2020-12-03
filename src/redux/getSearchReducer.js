import { GET_SEARCH } from './types';

export const getSearchReducer = (state = [], action) => {
    switch (action.type) {
        case GET_SEARCH:
            return action.payload;
        default:
            return state;
    }
};

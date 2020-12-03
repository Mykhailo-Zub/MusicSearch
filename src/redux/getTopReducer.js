import { GET_TOP } from './types';

export const getTopReducer = (state = [], action) => {
    switch (action.type) {
        case GET_TOP:
            return action.payload;
        default:
            return state;
    }
};

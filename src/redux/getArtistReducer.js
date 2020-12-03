import { GET_ARTIST } from './types';

export const getArtistReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ARTIST:
            return action.payload;
        default:
            return state;
    }
};

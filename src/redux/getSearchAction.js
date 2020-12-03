import axios from 'axios';
import { GET_SEARCH } from './types';

const getSearch = (songs) => {
    return {
        type: GET_SEARCH,
        payload: songs,
    };
};

const getSearchSongs = (url) => (dispatch) =>
    axios.get(url).then(({ data }) => dispatch(getSearch(data)));

export default getSearchSongs;

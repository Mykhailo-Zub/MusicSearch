import axios from 'axios';
import { GET_TOP } from './types';

const getTop = (songs) => {
    return {
        type: GET_TOP,
        payload: songs,
    };
};

const getTopSongs = (url) => (dispatch) =>
    axios.get(url).then(({ data }) => dispatch(getTop(data)));

export default getTopSongs;

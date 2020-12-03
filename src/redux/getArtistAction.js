import axios from 'axios';
import { GET_ARTIST } from './types';

const getArtist = (info) => {
    return {
        type: GET_ARTIST,
        payload: info,
    };
};

const getArtistInfo = (url) => (dispatch) =>
    axios.get(url).then(({ data }) => dispatch(getArtist(data)));

export default getArtistInfo;

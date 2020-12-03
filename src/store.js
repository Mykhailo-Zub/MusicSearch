import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getTopReducer } from './redux/getTopReducer';
import { getSearchReducer } from './redux/getSearchReducer';
import { getArtistReducer } from './redux/getArtistReducer';

const store = createStore(
    combineReducers({
        getTopReducer,
        getSearchReducer,
        getArtistReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;

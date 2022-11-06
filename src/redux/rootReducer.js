import { combineReducers } from 'redux';

import postsReducer from '../reducers/reducer';

const rootReducer = combineReducers({
    posts: postsReducer,
});

export default rootReducer;
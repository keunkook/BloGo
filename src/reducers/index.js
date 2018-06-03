import { combineReducers } from 'redux';
import ItemsReducer from './reducer_items';
import PostsReducer from './reducer_posts';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  items: ItemsReducer,
  posts: PostsReducer,
  form: formReducer,
});

export default rootReducer;
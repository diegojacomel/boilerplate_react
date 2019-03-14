
  
/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import exampleReducer from './example/reducer';

// all the reducers are in one place
const rootReducers = combineReducers({
    example: exampleReducer
})

export default rootReducers;
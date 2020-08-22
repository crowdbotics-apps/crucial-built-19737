import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn1193240Reducer from '../features/SignIn1193240/redux/reducers'
import Dashboard2393238Reducer from '../features/Dashboard2393238/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn1193240: SignIn1193240Reducer,
Dashboard2393238: Dashboard2393238Reducer,

});
import { combineReducers } from 'redux'
import HeadlineReducers from './HeadlineReducers'
import searchReducer from './SearchReducer'
import categoryReducers from './CategoryReducers'

export default combineReducers({
    HeadlineReducers,
    searchReducer,
    categoryReducers,
})
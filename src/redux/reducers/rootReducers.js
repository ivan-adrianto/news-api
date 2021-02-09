import { combineReducers } from 'redux'

export default combineReducers({
    headline: require('./HeadlineReducers').reducer,
    search: require('./SearchReducer').reducer,
    category: require('./CategoryReducers').categoryReducer
})
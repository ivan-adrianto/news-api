import { createReducer } from 'reduxsauce'
import HeadlinesTypes from '../actions/HeadlinesTypes'

const initialState = {
    isLoading: false,
    isError: false,
    errorData: '',
    data: [],
}

const request = (state = initialState, action) => {
    return {
        ...state,
        isLoading: true,
    }
}

const success = (state = initialState, action) => {
    return {
        ...state,
        isLoading: false,
        data: action.payload
    }
}

const failed = (state = initialState, action) => {
    return {
        ...state,
        isLoading: false,
        errorData: action.error,
        isError: true
    }
}

const handlers = {
    [HeadlinesTypes.HEADLINE_REQUEST]: request,
    [HeadlinesTypes.HEADLINE_SUCCESS]: success,
    [HeadlinesTypes.HEADLINE_FAILED]: failed,
}

export default createReducer(initialState, handlers)

// const HeadlineReducers = (state = initialState, action) => {
//     switch (action.type){
//         case HeadlineTypes.HEADLINE_REQUEST: {
//             return {
//                 ...state,
//                 isLoading: true
//             }
//         }
//         case HeadlineTypes.HEADLINE_SUCCESS: {
//             return {
//                 ...state,
//                 isLoading: false,
//                 data: action.payload
//             }
//         }
//         case HeadlineTypes.HEADLINE_FAILED:{
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true,
//                 errorData: action.error
//             }
//         }
//         default:
//             return {
//                 ...state
//             }
//     }
// }
 
// export default HeadlineReducers;
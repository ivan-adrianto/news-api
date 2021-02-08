import { createReducer } from "reduxsauce"
import searchTypes from "../actions/SearchTypes"

const initialState = {
    isLoading: false,
    data: [],
    isError: false
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
        isError: true
    }
}

const handler = {
    [searchTypes.SEARCH_REQUEST]: request,
    [searchTypes.SEARCH_SUCCESS]: success,
    [searchTypes.SEARCH_FAILED]: failed,
}

export default createReducer(initialState, handler)

// const searchReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case searchTypes.SEARCH_REQUEST: {
//             return {
//                 ...state,
//                 isLoading: true,
//             }
//         }
//         case searchTypes.SEARCH_SUCCESS: {
//             return {
//                 ...state,
//                 isLoading: false,
//                 data: action.payload
//             }
//         }
//         case searchTypes.SEARCH_FAILED: {
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true
//             }
//         }
//         default:
//             return {
//                 ...state
//             }
//     }
// }

// export default searchReducer
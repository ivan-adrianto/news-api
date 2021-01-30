import { categoryTypes } from "../actions/CategoryTypes"

const initialState = {
    isLoading: false,
    isError: false,
    data: [],
}

const categoryReducers = (state = initialState, action) => {
    switch (action.type) {
        case categoryTypes.CATEGORY_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case categoryTypes.CATEGORY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        }
        case categoryTypes.CATEGORY_FAILED: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default categoryReducers
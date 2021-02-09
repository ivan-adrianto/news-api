import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
  searchRequest: ["keyword"],
  searchSuccess: ["data"],
  searchFailed: ["error"],
});

export default Creators
export const searchTypes = Types

const initialState = {
  isLoading: false,
  data: [],
  isError: false,
};

const request = (state = initialState, action) => {
  return {
    ...state,
    isLoading: true,
  };
};

const success = (state = initialState, action) => {
  return {
    ...state,
    isLoading: false,
    data: action.payload,
  };
};

const failed = (state = initialState, action) => {
  return {
    ...state,
    isLoading: false,
    isError: true,
  };
};

export const reducer =  createReducer(initialState, 
    {
        [searchTypes.SEARCH_REQUEST]: request,
        [searchTypes.SEARCH_SUCCESS]: success,
        [searchTypes.SEARCH_FAILED]: failed
    });
import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
    headlineRequest: ['data'],
    headlineSuccess: ['data'],
    headlineFailed: ['error']
})

export default Creators
export const headline = Types

const initialState = {
  isLoading: false,
  isError: false,
  errorData: "",
  data: [],
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
    errorData: action.error,
    isError: true,
  };
};

export const reducer = createReducer(initialState, {
  [Types.HEADLINE_REQUEST]: request,
  [Types.HEADLINE_SUCCESS]: success,
  [Types.HEADLINE_FAILED]: failed,
});

import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
  categoryRequest: ["category"],
  categorySuccess: ["data"],
  categoryFailed: ["error"],
});

export const categoryTypes = Types;
export default Creators;

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  data: [],
};

const request = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: true,
  };
};

const success = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
    data: action.payload,
  };
};

const failed = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
    isError: true,
  };
};

export const categoryReducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORY_REQUEST]: request,
  [Types.CATEGORY_SUCCESS]: success,
  [Types.CATEGORY_FAILED]: failed,
});

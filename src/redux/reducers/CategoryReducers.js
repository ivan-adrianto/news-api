import { createReducer } from "reduxsauce";
import categoryTypes from "../actions/CategoryTypes";

const initialState = {
  isLoading: false,
  isError: false,
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
    isError: true,
  };
};

const handlers = {
    [categoryTypes.CATEGORY_REQUEST]: request,
    [categoryTypes.CATEGORY_SUCCESS]: success,
    [categoryTypes.CATEGORY_FAILED]: failed,
}

export default createReducer(initialState, handlers)

// const categoryReducers = (state = initialState, action) => {
//   switch (action.type) {
//     case categoryTypes.CATEGORY_REQUEST: {
//       return {
//         ...state,
//         isLoading: true,
//       };
//     }
//     case categoryTypes.CATEGORY_SUCCESS: {
//       return {
//         ...state,
//         isLoading: false,
//         data: action.payload,
//       };
//     }
//     case categoryTypes.CATEGORY_FAILED: {
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//       };
//     }
//     default:
//       return {
//         ...state,
//       };
//   }
// };

// export default categoryReducers;

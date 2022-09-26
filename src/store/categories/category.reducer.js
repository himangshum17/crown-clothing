import { CATEGORIES_ACTION_TYPES } from './category.actionTypes';

const CATEGORIES_INITIAL_VALUE = {
  categories: [],
  isLoading: false,
  isError: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_VALUE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        isError: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

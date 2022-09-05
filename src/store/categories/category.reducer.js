import { CATEGORIES_ACTION_TYPES } from './category.actionTypes';

const CATEGORIES_INITIAL_VALUE = {
  categoriesMap: {},
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_VALUE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };

    default:
      return state;
  }
};

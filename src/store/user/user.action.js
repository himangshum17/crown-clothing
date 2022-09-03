import { createAction } from '../../utils/reducer/reducer.util';
import { USER_ACTION_TYPES } from './user.actionTypes';

export const setCurrentUser = user => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

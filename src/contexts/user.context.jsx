import { createContext, useEffect, useReducer } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListner,
} from '../utils/firebase/firebase.utils';
import { createAction } from '../utils/reducer/reducer.util';

// default value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Invalid action type ${type} inside userReducer`);
  }
};

const INITIAL_VALUE = {
  currentUser: null,
};

export const UserContextProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_VALUE);

  const setCurrentUser = user => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner(user => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const contextValue = {
    currentUser,
    setCurrentUser,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

import React, { useReducer, useContext, createContext, Dispatch } from 'react';

export type State = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  token: string;
  reftoken: string;
};

type Action =
  | { type: 'SET_NAME'; name: string }
  | { type: 'SET_EMAIL'; email: string }
  | { type: 'SET_PASSWORD'; password: string }
  | { type: 'SET_PASSWORDCONFIRM'; passwordConfirm: string }
  | { type: 'SET_TOKEN'; token: string }
  | { type: 'SET_REFTOKEN'; reftoken: string };

type UserDispatch = Dispatch<Action>;

const UserStateContext = createContext<State | null>(null);
const UserDispatchContext = createContext<UserDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name,
      };
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.email,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.password,
      };
    case 'SET_PASSWORDCONFIRM':
      return {
        ...state,
        passwordConfirm: action.passwordConfirm,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_REFTOKEN':
      return {
        ...state,
        reftoken: action.reftoken,
      };
    default:
      throw new Error('Unhandled action');
  }
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    token: '',
    reftoken: '',
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

export function useUserState() {
  const state = useContext(UserStateContext);
  if (!state) throw new Error('Cannot find UserContext');
  return state;
}

export function useUserDispatch() {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) throw new Error('Cannot find UserContext');
  return dispatch;
}

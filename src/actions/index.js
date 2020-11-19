export const SET_USER = 'SET_USER';
export const SET_ERROR = 'SET_ERROR';

export const setUser = user => (
  {
    user,
    type: SET_USER,
  }
);

export const setError = error => (
  {
    error,
    type: SET_ERROR,
  }
);
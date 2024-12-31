export const signIn = userData => async dispatch => {
  dispatch({type: 'SIGN_IN', payload: userData});
};

export const signOut = () => dispatch => {
  dispatch({type: 'SIGN_OUT'});
};

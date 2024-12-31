const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {...state, user: action.payload};
    case 'UPDATE_PROFILE_IMAGE':
      return {
        ...state,
        user: {...state.user, img: action.img},
      };
    case 'UPDATE_PROFILE_NAME':
      return {
        ...state,
        user: {...state.user, name: action.name},
      };
    case 'UPDATE_LANGUAGE':
      return {
        ...state,
        user: {...state.user, language: action.language},
      };
    case 'SIGN_OUT':
      return {...state, user: null};

    default:
      return state;
  }
};

export default authReducer;

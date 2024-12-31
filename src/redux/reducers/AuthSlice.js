import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
    signOut: state => {
      state.user = null;
    },
    logOut: state => {
      state.user = null;
    },
    updateProfileImage: (state, action) => {
      if (state.user) {
        state.user.img = action.payload;
      }
    },
    updateProfileName: (state, action) => {
      if (state.user) {
        state.user.name = action.payload;
      }
    },
    updateLanguage: (state, action) => {
      if (state.user) {
        state.user.language = action.payload;
      }
    },
  },
});

export const {
  signIn,
  signOut,
  logOut,
  updateProfileImage,
  updateProfileName,
  updateLanguage,
} = AuthSlice.actions;

export default AuthSlice.reducer;

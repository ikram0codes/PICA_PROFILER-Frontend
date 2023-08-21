import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const userReducer = createReducer(initialState, {
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  RegisterRequest: (state) => {
    state.loading = true;
  },
  RegisterSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  RegisterFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  LoadUserRequest: (state) => {
    state.loading = true;
    state.CreatPostShow = false;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.CreatPostShow = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoadUserFailure: (state) => {
    state.loading = false;
    state.CreatPostShow = false;
    state.isAuthenticated = false;
  },
  LoadUserCreate: (state) => {
    state.CreatPostShow = true;
  },
  LoadUserCreateFalse: (state) => {
    state.CreatPostShow = false;
  },
  LogoutUserRequest: (state) => {
    state.loading = true;
  },
  LogoutUserSuccess: (state) => {
    state.loading = false;
    state.user = null;
    state.isAuthenticated = false;
  },
  LogoutUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = true;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

export const profilePosts = createReducer(initialState, {
  profilePostsRequest: (state) => {
    state.loading = true;
  },
  profilePostsSuccess: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  profilePostsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});
export const profileReducer = createReducer(initialState, {
  ProfileRequest: (state) => {
    state.loading = true;
  },
  ProfileSuccess: (state, action) => {
    state.loading = false;
    state.profile = action.payload;
  },
  ProfileFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

export const userPostsReducer = createReducer(initialState, {
  userPostsRequest: (state) => {
    state.loading = true;
  },
  userPostsSuccess: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  userPostsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

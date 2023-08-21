import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const likeReducer = createReducer(initialState, {
  likeRequest: (state) => {
    state.loading = true;
  },
  likeSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  likeFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  showLikesSuccess: (state) => {
    state.loading = true;
    state.showLikes = true;
  },

  showLikesFailure: (state) => {
    state.loading = true;
    state.showLikes = true;
  },

  deletePostRequest: (state) => {
    state.loading = true;
  },
  deletePostSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  deletePostFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export const createPost = createReducer(initialState, {
  createPostRequest: (state) => {
    state.createPostShow = true;
    state.loading = true;
  },
  createPostSuccess: (state, action) => {
    state.createPostShow = false;
    state.message = action.payload;
    state.loading = false;
  },

  createPostFailure: (state, action) => {
    state.createPostShow = false;
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

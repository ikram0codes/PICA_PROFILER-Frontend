import { configureStore } from "@reduxjs/toolkit";
import {
  profilePosts,
  profileReducer,
  userPostsReducer,
  userReducer,
} from "./Reducers/user";
import { createPost, likeReducer } from "./Reducers/Post";
const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    profilePosts: profilePosts,
    userPost: userPostsReducer,
    createPost: createPost,
    like: likeReducer,
  },
});
export default store;

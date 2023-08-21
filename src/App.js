import React, { useEffect } from "react";
import "./App.css";

//Importing Modules
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
//Importing Components and Pages
import Sidebar from "./Components/Sidebar.jsx";
import Navbar from "./Components/Navbar.jsx";
import RightBar from "./Components/RightBar.jsx";
import Home from "./Pages/Home.jsx";
import CreatePost from "./Pages/CreatePost";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import UserProfile from "./Pages/UserProfile.jsx";
import { getFeed, getProfile, loadUser, profilePosts } from "./Actions/User.js";
import Protected from "./Components/Protected.jsx";
import MainLoader from "./Components/MainLoader";
import AutoLogin from "./autoLogin";
import axios from "axios";
const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const { createPostShow } = useSelector((state) => state.createPost);
  const { error } = useSelector((state) => state.userPost);
  const errorA = useSelector((state) => state.profile.error);
  const loading = AutoLogin();
  useEffect(() => {
    dispatch(getFeed());
    dispatch(getProfile());
    if (error || errorA) {
      dispatch({
        type: "clearErrors",
      });
    }
  }, []);
  return loading ? (
    <MainLoader />
  ) : (
    <div className="app">
      <BrowserRouter>
        <Box>
          <Box>
            {isAuthenticated && (
              <Box>
                {" "}
                <Navbar />
                <div className="divider"></div>
              </Box>
            )}
            {createPostShow ? <CreatePost /> : null}
          </Box>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Protected isAuththenticated={isAuthenticated}>
                  <Box>
                    <Stack
                      direction={"row"}
                      justifyContent="space-between"
                      spacing={1.1}
                    >
                      <Sidebar />
                      <Home />
                      <RightBar />
                    </Stack>
                  </Box>
                </Protected>
              }
            />
            <Route
              path="/post/create"
              exact
              element={
                <Protected isAuththenticated={isAuthenticated}>
                  <CreatePost />
                </Protected>
              }
            />
            <Route
              path="/login"
              exact
              element={
                <Box>
                  <Login />
                </Box>
              }
            />
            <Route
              path="/register"
              exact
              element={
                <Box>
                  <Register />
                </Box>
              }
            />{" "}
            <Route
              path="/user/:username"
              exact
              element={
                <Protected isAuththenticated={isAuthenticated}>
                  <Box>
                    <UserProfile />
                  </Box>
                </Protected>
              }
            />
            <Route
              path="*"
              element={
                <Box>
                  <MainLoader />
                </Box>
              }
            />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
};

export default App;

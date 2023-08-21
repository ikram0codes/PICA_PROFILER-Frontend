import React, { useEffect, useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import MainLoader from "../Components/MainLoader";
import { getFeed } from "../Actions/User";
import Post from "../Components/Post";
import { toast } from "react-hot-toast";
const Home = () => {
  const dispatch = useDispatch();
  const feed = useSelector((state) => state.userPost.posts);
  const loading = useSelector((state) => state.userPost.loading);
  const profile = useSelector((state) => state.profile);
  const profileObj = { ...profile };
  const likePost = async (id) => {
    try {
      dispatch({
        type: "likeRequest",
      });
      const response = await axios.put(
        `https://pica-backend.vercel.app//post/like`,
        {
          id: id,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: "likeSuccess",
        payload: response.data.message,
      });
    } catch (error) {
      dispatch({
        type: "likeSuccess",
        payload: error.response.data.message,
      });
    }
  };

  return loading ? (
    <MainLoader />
  ) : (
    <Box
      bgcolor={"black"}
      flex={4.5}
      color="beige"
      display={"flex"}
      justifyContent="flex-start"
      alignItems={"center"}
      flexDirection="column"
      padding="20px 0px"
      height={"max-content"}
    >
      {feed && feed.length !== 0 ? (
        feed.map((feed) => {
          return (
            <Post
              _id={feed._id}
              username={feed.username}
              createdAt={feed.createdAt}
              photoPath={feed.photoPath}
              caption={feed.caption}
              numOfLikes={feed.numOfLikes}
              likes={feed.likes}
              key={feed._id}
            />
          );
        })
      ) : (
        <Typography variant="h1">No Posts Yet</Typography>
      )}
    </Box>
  );
};

export default Home;

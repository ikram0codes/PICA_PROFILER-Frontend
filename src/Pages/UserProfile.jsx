import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { profilePosts } from "../Actions/User";
import MainLoader from "../Components/MainLoader";
import ProfilePosts from "../Components/ProfilePosts";

const UserProfile = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { posts, loading } = useSelector((state) => state.profilePosts);
  useEffect(() => {
    dispatch(profilePosts(params.username));
  }, [dispatch, params.username]);
  return loading ? (
    <MainLoader />
  ) : (
    <Box>
      <div className="divider"></div>
      <Box
        sx={{ width: "maxContent", height: "max-content", overflowY: "scroll" }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <ProfilePosts
                key={post._id}
                _id={post._id}
                caption={post.caption}
                photoPath={post.photoPath}
              />
            ))
          ) : (
            <Typography variant="h6">User has not made any post</Typography>
          )}
        </ImageList>
      </Box>
    </Box>
  );
};

export default UserProfile;

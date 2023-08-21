import { ImageListItem } from "@mui/material";
import React from "react";

const ProfilePosts = ({ _id, photoPath, caption }) => {
  return (
    <ImageListItem>
      <img
        src={`${photoPath}?w=248&fit=crop&auto=format`}
        srcSet={`${photoPath}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={caption}
        loading="lazy"
      />
    </ImageListItem>
  );
};

export default ProfilePosts;

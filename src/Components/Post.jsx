import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../Actions/User";
const Post = ({
  _id,
  username,
  createdAt,
  photoPath,
  caption,
  numOfLikes,
  likes,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const user = useSelector((state) => state.user.user);
  const likePost = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "likeRequest",
      });
      const response = await axios.put(
        `https://pica-backend.vercel.app/post/like`,
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
      toast.success(response.data.message, {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    } catch (error) {
      dispatch({
        type: "likeSuccess",
        payload: error.response.data.message,
      });
    }
  };
  const handleLike = () => {
    dispatch(likePost(_id));
    setLiked(!liked);
  };

  useEffect(() => {
    likes.forEach((like) => {
      if (like.userId == user._id) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    });
  }, [likes]);
  return (
    <div>
      <Card
        sx={{
          maxWidth: 450,
          backgroundColor: "#101418",
          border: "2px solid black",
          color: "beige",
          height: "maxContent",
        }}
        key={_id}
      >
        <Box>
          {" "}
          <CardHeader
            color="beige"
            avatar={
              <IconButton
                onClick={() => {
                  navigate(`/user/${username}`);
                }}
              >
                {" "}
                <Avatar
                  sx={{ bgcolor: "red"[500], width: "50px", height: "50px" }}
                  aria-label="recipe"
                  src={user.photoPath}
                />
              </IconButton>
            }
            action={
              username === user.username ? (
                <Button
                  sx={{ backgroundColor: "gold" }}
                  onClick={() => {
                    dispatch(deletePost(_id));
                  }}
                >
                  Delete
                </Button>
              ) : null
            }
            title={<Typography variant="h6">{username}</Typography>}
            subheader={
              <Typography
                variant="p"
                component={"p"}
                sx={{ fontSize: "13px", color: "darkgray" }}
              >
                {createdAt}
              </Typography>
            }
          />{" "}
        </Box>
        <CardMedia
          sx={{ minWidth: { sm: 500, xs: 200 }, cursor: "pointer" }}
          component="img"
          height={"maxContent"}
          image={photoPath}
          alt={username}
        />
        <CardContent>
          <Typography variant="body2" color="beige">
            {caption}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="add to favorites" onClick={handleLike}>
            {liked ? (
              <Favorite
                sx={{
                  color: "red",
                  fontSize: "35px",
                  transition: "500ms ease-in-out",
                  transform: "scale(1)",
                  "&:hover": {
                    transform: "scale(1.3)",
                  },
                }}
              />
            ) : (
              <FavoriteBorder
                sx={{
                  color: "beige",
                  fontSize: "35px",
                  transition: "500ms ease-in-out",
                  transform: "scale(1)",
                  "&:hover": {
                    transform: "scale(1.3)",
                  },
                }}
              />
            )}{" "}
            <Typography variant="p" component={"p"} color="beige">
              {likes.length}
            </Typography>
          </Button>
          <IconButton aria-label="share">
            <Share sx={{ color: "beige", fontSize: "35px" }} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;

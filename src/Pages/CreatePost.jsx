import styled from "@emotion/styled";
import { Close, UploadFileOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost, getFeed, getProfile } from "../Actions/User";
const CreatePost = () => {
  const CreatPostShow = useSelector((state) => state.user.CreatPostShow);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [caption, setCaption] = useState("");
  const [photo, setPhoto] = useState("");
  const getPhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
  };

  const StyledButton = styled(Button)({
    backgroundColor: "gold",
    "&:hover": { backgroundColor: "#d8ba20" },
    width: "7rem",
    height: "2.7rem",
    fontSize: "20px",
  });

  return (
    <div>
      {" "}
      <Box
        sx={{
          position: "fixed",
          top: { sm: "10%", xs: "15%" },
          left: { xs: "0px", sm: "15vmax", md: "10vmax", lg: "15vmax" },
          backgroundColor: "#23262a",
          width: { sm: "70vmax", xs: "100%" },
          height: { xs: "80vh", sm: "80vh" },
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "10px",
          zIndex: 10,
        }}
      >
        <Button
          sx={{
            color: "black",
            position: "absolute",
            top: "0px",
            left: { xs: "85%", sm: "92%" },
            fontSize: "40px",
          }}
          onClick={() => {
            dispatch({
              type: "createPostFailure",
            });
          }}
        >
          <Close />
        </Button>
        <form
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: { sm: "50vmax", xs: "40vmax" },
              height: { sm: "60vh", xs: "50vmax" },
              borderRadius: "10px",
              border: "2px dashed beige",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "500ms ease-in-out",
              margin: "10px 0px",
              "&:hover": {
                backgroundColor: "black",
              },
            }}
            onClick={() => {
              document.querySelector(".file-input").click();
            }}
          >
            {photo !== "" ? (
              <img src={photo} className="createImg" />
            ) : (
              <UploadFileOutlined
                sx={{ color: "royalBlue", fontSize: "100px" }}
              />
            )}{" "}
            <input
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              hidden
              className="file-input"
              name="photo"
              style={{ borderRadius: "10px" }}
              onChange={(e) => {
                getPhoto(e);
              }}
            />
          </Box>
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
            width="80%"
          >
            {" "}
            <input
              type="text"
              name="caption"
              className="input"
              placeholder="Caption Goes Here..."
              onChange={(e) => {
                setCaption(e.target.value);
              }}
            />
            <StyledButton
              onClick={() => {
                dispatch(createPost(caption, photo));
              }}
            >
              Post
            </StyledButton>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default CreatePost;

import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";

import {
  AddPhotoAlternate,
  Explore,
  NotificationsOutlined,
  PeopleAltRounded,
  Search,
} from "@mui/icons-material";
import logo from "../Assets/logo.png";
import ikram from "../Assets/ikram.jpg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../Actions/User";

const Navbar = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const profilleObj = { ...profile };
  const [navAccount, showNavAccount] = useState(false);
  const { CreatPostShow } = useSelector((state) => state.createPost);
  const handleLogout = () => {
    dispatch(LogoutUser());
  };
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    height: "100px",
  });
  const StyledLogoBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const Icons = styled(Box)({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginLeft: "30px",
  });
  const StyledNotBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
    width: "10vmax",
  });

  const StyledButton = styled(Button)({
    backgroundColor: "gold",
    "&:hover": { backgroundColor: "#d8ba20" },
    width: "6rem",
    height: "2.3rem",
  });

  return (
    <AppBar
      sx={{
        position: "static",
        backgroundColor: "black",
        height: "100px",
      }}
    >
      <StyledToolBar>
        <StyledLogoBox>
          <Box sx={{ display: { sm: "none", sx: "block" } }}>
            {" "}
            <img src={logo} alt="PICA_PROFILER" width={"50px"} />
          </Box>
          <NavLink to={"/"}>
            <Typography
              component={"h1"}
              variant="h3"
              fontSize={"30px"}
              fontFamily={"Lucida handwriting"}
              color="rgb(255, 217, 5)"
              p="3px"
              pt="10px"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              PICA PROFILER
            </Typography>
          </NavLink>
        </StyledLogoBox>
        <Icons sx={{ width: { xs: "25vmax", sm: "20vmax" } }}>
          <NavLink
            onClick={() => {
              dispatch({
                type: "createPostRequest",
              });
            }}
            className={({ isActive }) => (isActive ? "isActive" : "notActive")}
          >
            <AddPhotoAlternate />
          </NavLink>
          <NavLink
            to={"/feed"}
            className={({ isActive }) => (isActive ? "isActive" : "notActive")}
          >
            <Explore />
          </NavLink>
          <NavLink
            to={"/friends/all"}
            className={({ isActive }) => (isActive ? "isActive" : "notActive")}
          >
            <PeopleAltRounded />
          </NavLink>
          <NavLink
            to={"/search"}
            className={({ isActive }) => (isActive ? "isActive" : "notActive")}
          >
            <Search />
          </NavLink>
        </Icons>
        <Box>
          <StyledButton
            onClick={() => {
              dispatch(LogoutUser());
            }}
          >
            Logout
          </StyledButton>
        </Box>
      </StyledToolBar>
      <div className="divider"></div>
    </AppBar>
  );
};

export default Navbar;

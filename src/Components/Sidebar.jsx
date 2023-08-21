import React, { useState } from "react";
import logo from "../Assets/logo.png";
import {
  ArrowLeft,
  ArrowRight,
  Explore,
  Home,
  Notifications,
  NotificationsActiveRounded,
  NotificationsOutlined,
  NotificationsRounded,
  PeopleAltOutlined,
  SavedSearch,
  Settings,
  UploadFileOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const profile = useSelector((state) => state.user.profile);
  const profilleObj = { ...profile };
  const user = useSelector((state) => state.user.user);
  const userObj = { ...user };
  const [sideBar, showSideBar] = useState(false);

  return (
    <>
      <Box
        position="sticky"
        bgcolor={"black"}
        color="beige"
        height={"maxContent"}
        paddingTop={"20px"}
        paddingRight="5px"
        zIndex={2}
        borderRight="1px solid yellow"
      >
        <nav aria-label="main mailbox folders">
          <List
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <ListItem disablePadding>
              <NavLink to={"/"}>
                <ListItemButton>
                  <ListItemIcon>
                    <Box>
                      <img src={logo} alt="PICA PROFILER" width={"50px"} />
                    </Box>
                  </ListItemIcon>
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "isactive" : "notactive"
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <Home sx={{ color: "beige" }} />
                  </ListItemIcon>
                  <ListItemText primary={sideBar && "Home"} />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink
                to={"/friends"}
                className={({ isActive }) =>
                  isActive ? "isactive" : "notactive"
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <PeopleAltOutlined sx={{ color: "beige" }} />
                  </ListItemIcon>
                  <ListItemText primary={sideBar && "Friends"} />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink
                to={"/friends"}
                className={({ isActive }) =>
                  isActive ? "isactive" : "notactive"
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <Explore sx={{ color: "beige" }} />
                  </ListItemIcon>
                  <ListItemText primary={sideBar && "Feed"} />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink
                to={"/saved"}
                className={({ isActive }) =>
                  isActive ? "isactive" : "notactive"
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SavedSearch sx={{ color: "beige" }} />
                  </ListItemIcon>
                  <ListItemText primary={sideBar && "Saved"} />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink
                to={"/saved"}
                className={({ isActive }) =>
                  isActive ? "isactive" : "notactive"
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <Settings sx={{ color: "beige" }} />
                  </ListItemIcon>
                  <ListItemText primary={sideBar && "Setting"} />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon className="notificationP">
                  {1 === 1 ? (
                    <NotificationsRounded />
                  ) : (
                    <NotificationsOutlined />
                  )}
                </ListItemIcon>
                <ListItemText primary={sideBar && "Notifications"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon className="notificationP">
                  <Avatar src={profilleObj.photoPath} />
                </ListItemIcon>
                <ListItemText primary={sideBar && userObj.username} />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <List>
          <ListItem
            disablePadding
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {sideBar ? (
              <button
                className="closeBtn"
                onClick={(e) => {
                  showSideBar(false);
                }}
              >
                <ArrowLeft />
              </button>
            ) : (
              <button
                className="openBtn"
                onClick={(e) => {
                  showSideBar(true);
                }}
              >
                <ArrowRight />
              </button>
            )}
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default Sidebar;

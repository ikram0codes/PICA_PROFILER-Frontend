import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../Assets/logo.png";
const MainLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: { sm: "40vmax", xs: "70vmax" },
          width: "20rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <img src={logo} alt="PICA PROFILER" width={"120px"} />
          {/* <Typography
            component={"h1"}
            variant={"h4"}
            fontFamily="Lucida handwriting"
          >
            PICA PROFILER
          </Typography> */}
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems="center">
          <Typography variant="p" component={"p"} color="yellow">
            &copy; A PRODUCTION BY IKRAM KHAN
          </Typography>{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLoader;

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import background from "../Assets/background.jpg";
import logo from "../Assets/logo.png";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Actions/User";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error2, setError] = useState("");
  const { isAuthenticated, loading } = useSelector(
    (state) => state.user.isAuthenticated
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      return setError("Please fill the credentials");
    }

    dispatch(loginUser(username, password, navigate, setError));
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: { xs: "105vh", sm: "130vh", md: "100vh", lg: "100vh" },
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction={{
            sm: "column-reverse",
            xs: "column-reverse",
            md: "row",
            lg: "row",
          }}
          justifyContent="space-around"
          alignItems="center"
        >
          <Box
            sx={{
              width: { sm: "500px", xs: "350px" },
              height: { sm: "500px", xs: "400px" },
              backgroundColor: "#23262a",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              display="flex"
              justifyContent={"center"}
              alignItems="center"
              flexDirection={"column"}
            >
              <img src={logo} alt="PICA PROFILER" width={"80px"} />
              <Typography
                variant="h4"
                component={"h1"}
                color="#FFD924"
                margin={"5px"}
                fontFamily="Lucida handwriting"
              >
                PICA PROFILER
              </Typography>
            </Box>
            <Box width={"300px"}>
              <Typography component={"p"} color="beige">
                PICA PROFILER Is Social Media App Founded By{" "}
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#5942FF",
                  }}
                >
                  IKRAM KHAN
                </span>
                . It is a portfolio project independet of any earning purposes.{" "}
                <br />
                Try out this app and give your remarks about it on my instagram.
                Thanks
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "350px", sm: "500px", md: "2px", lg: "2px" },
              height: { sm: "2px", xs: "2px", md: "500px", lg: "500px" },
              backgroundColor: "yellow",
            }}
          ></Box>
          <Box
            sx={{
              width: { sm: "500px", xs: "350px" },
              height: { sm: "500px", xs: "400px" },
              backgroundColor: "#23262a",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <form>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  flexDirection: "column",
                  width: {
                    lg: "400px",
                    md: "400px",
                    sm: "300px",
                    xs: "300px",
                  },
                  height: {
                    lg: "400px",
                    md: "400px",
                    sm: "300px",
                    xs: "300px",
                  },
                  padding: { lg: "50px", sm: "20px" },
                }}
              >
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  className="input"
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError("");
                  }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                />
                <p className="errorMessage">{error2}</p>
                <Button
                  sx={{
                    backgroundColor: "#FFD924",
                    width: "6rem",
                    height: "2.5rem",
                  }}
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  disabled={loading === true}
                >
                  Login
                </Button>
              </Box>
            </form>
            <p style={{ color: "beige" }}>
              Don't have an account{" "}
              <Button
                onClick={() => {
                  navigate("/register");
                }}
              >
                Sign Up
              </Button>
            </p>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
export default Login;

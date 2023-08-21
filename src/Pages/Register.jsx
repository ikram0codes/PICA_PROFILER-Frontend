import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import background from "../Assets/background.jpg";
import logo from "../Assets/logo.png";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../Actions/User";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const error = useSelector((state) => state.user.error);
  const [error2, setError2] = useState("");
  const { isAuthenticated, loading } = useSelector((state) => state.user);

  const handleSubmit = () => {
    if (
      username === "" ||
      password === "" ||
      name === "" ||
      email === "" ||
      confirmPassword === ""
    ) {
      return setError2("Please fill the credentials");
    }
    if (password !== confirmPassword) {
      return setError2("Passwords Don't Match");
    }

    dispatch(
      RegisterUser(name, username, email, password, confirmPassword, navigate)
    );
    setError2(error);
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
                Welcome To PICA PROFILER It is Social Media App Founded By{" "}
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
                    lg: "480px",
                    md: "480px",
                    sm: "400px",
                    xs: "300px",
                  },
                  height: {
                    lg: "450px",
                    md: "450px",
                    sm: "400px",
                    xs: "360px",
                  },
                }}
              >
                <input
                  type="text"
                  required
                  placeholder="Name"
                  name="name"
                  onChange={(e) => {
                    setName(e.target.value);
                    setError2("");
                  }}
                  className="inputR"
                />
                <input
                  type="text"
                  required
                  placeholder="Username"
                  name="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError2("");
                  }}
                  className="inputR"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  name="email"
                  className="inputR"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError2("");
                  }}
                />
                <input
                  type="password"
                  required
                  placeholder="Password"
                  name="password"
                  className="inputR"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError2("");
                  }}
                />
                <input
                  type="password"
                  required
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  className="inputR"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setError2("");
                  }}
                />
                <p className="errorMessage">{error2}</p>
                <Button
                  sx={{
                    backgroundColor: "#FFD924",
                    width: "6rem",
                    height: "2.5rem",
                  }}
                  onClick={() => {
                    handleSubmit();
                  }}
                  disabled={loading === true}
                >
                  Sign Up
                </Button>
              </Box>
            </form>
            <p style={{ color: "beige" }}>
              Already have an account{" "}
              <Button
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            </p>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
export default Login;

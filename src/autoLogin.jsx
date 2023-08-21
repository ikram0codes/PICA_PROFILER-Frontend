import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getFeed, getProfile } from "./Actions/User";
import { Navigate } from "react-router-dom";

function AutoLogin() {
  const { error } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    // IIFE
    (async function autoLoginApiCall() {
      try {
        dispatch({
          type: "LoadUserRequest",
        });
        const response = await axios.get(`http://localhost:4000/user/refresh`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        dispatch({
          type: "LoadUserSuccess",
          payload: response.data.user,
        });
      } catch (error) {
        dispatch({
          type: "LoadUserFailure",
        });
      } finally {
        setLoading(false);
      }
    })();

    if (error) {
      dispatch({
        type: "clearErrors",
      });
      return <Navigate to={"/login"} />;
    }
  }, []);

  return loading;
}

export default AutoLogin;

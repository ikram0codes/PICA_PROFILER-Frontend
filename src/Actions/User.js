import { Dialpad } from "@mui/icons-material";
import axios from "axios";
import { toast } from "react-hot-toast";
const BACKEND_SERVER_PATH = "https://pica-backend.vercel.app";
export const loginUser =
  (username, password, navigate, setError) => async (dispatch) => {
    try {
      dispatch({
        type: "LoginRequest",
      });

      const response = await axios.post(
        `${BACKEND_SERVER_PATH}/user/login`,
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({
        type: "LoginSuccess",
        payload: response.data.user,
      });
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
      dispatch({
        type: "LoginFailure",
        payload: error.response.data.message,
      });
    }
  };

export const RegisterUser =
  (name, username, email, password, confirmPassword, navigate) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "RegisterRequest",
      });

      await axios
        .post(
          `${BACKEND_SERVER_PATH}/user/Register`,
          {
            name: name,
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          dispatch({
            type: "RegisterSuccess",
            payload: res.data.user,
          });
          navigate("/");
        })
        .catch((err) => {
          dispatch({
            type: "RegisterSuccess",
            payload: err.response.data.user,
          });
          navigate("/");
        });
    } catch (error) {
      return error;
    }
  };

export const LogoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutUserRequest",
    });
    axios.get(`${BACKEND_SERVER_PATH}/user/logout`, {
      withCredentials: true,
    });
    dispatch({
      type: "LogoutUserSuccess",
    });
  } catch (error) {
    dispatch({
      type: "LogoutUserFailure",
      payload: error.response.data.message,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: "ProfileRequest",
    });
    const response = await axios.get("https://pica-backend.vercel.app/t/me", {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: "ProfileSuccess",
      payload: response.data.profile,
    });
  } catch (error) {
    dispatch({
      type: "ProfileFailure",
      payload: error,
    });
  }
};

export const getFeed = () => async (dispatch) => {
  try {
    dispatch({
      type: "userPostsRequest",
    });

    const response = await axios.get(`https://pica-backend.vercel.app/feed`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: "userPostsSuccess",
      payload: response.data.feed,
    });
  } catch (error) {
    dispatch({
      type: "userPostsFailure",
      payload: error.response.data.message,
    });
    if (error) {
      dispatch({
        type: "clearErrors",
      });
    }
  }
};
export const profilePosts = (username) => async (dispatch) => {
  try {
    dispatch({
      type: "profilePostsRequest",
    });
    const response = await axios.get(
      `${BACKEND_SERVER_PATH}/post/${username}`,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "profilePostsSuccess",
      payload: response.data.posts,
    });
  } catch (error) {
    dispatch({
      type: "profilePostsFailure",
      payload: error.response.data.message,
    });
  }
};

export const createPost = (caption, photo) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${BACKEND_SERVER_PATH}/post/create`,
      {
        photo,
        caption,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
    dispatch({
      type: "createPostSuccess",
      paylaod: response.data.message,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: "createPostFailure",
      paylaod: error,
    });
  }
};

// export const deletePost = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "deletePostRequest",
//     });

//     const response = await axios.delete(
//       `${BACKEND_SERVER_PATH}post/delete/${id}`
//     );

//     // dispatch({
//     //   type: "deletePostSuccess",
//     //   payload: response.message,
//     // });
//     console.log(response);
//     // toast.success(response.data.message, {
//     //   style: {
//     //     border: "1px solid #713200",
//     //     padding: "16px",
//     //     color: "#713200",
//     //   },
//     //   iconTheme: {
//     //     primary: "#713200",
//     //     secondary: "#FFFAEE",
//     //   },
//     // });
//   } catch (error) {
//     // dispatch({
//     //   type: "deletePostFailure",
//     //   payload: error.response.data.message,
//     // });
//     // toast.error(error.response.data.message);
//     console.log(error);
//   }
// };

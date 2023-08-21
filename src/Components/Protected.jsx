import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ isAuththenticated, children }) {
  if (isAuththenticated) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default Protected;

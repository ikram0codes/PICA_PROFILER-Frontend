import { Box } from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      bgcolor={"black"}
      flex={1.8}
      color="beige"
      sx={{ display: { sm: "block", xs: "none" } }}
    >
      RightBar
    </Box>
  );
};

export default RightBar;

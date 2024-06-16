import React, { useState } from "react";
import "./sideBarProducts.css";
import { Box, useMediaQuery } from "@mui/material";
import SideBar from "../sideBarComponents/sideBar";
import Products from "../productComponent/products";

function SideBarProducts(props) {
  const mobile = useMediaQuery("(max-width:768px)");

  return (
    <Box className="sideProductMainBox">
      {props.showSideBar || (!mobile && <SideBar />)}
      <Products />
    </Box>
  );
}

export default SideBarProducts;

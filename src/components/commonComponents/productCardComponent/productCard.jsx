import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import "./productCard.css";

function ProductCard(props) {
  const mobile = useMediaQuery("(max-width:600px)");
  const smallM = useMediaQuery("(max-width:425px)");

  return (
    <Box className="cardMainBox">
      <img src={props.item.image} className="cardImage" alt="Product" />
      <Typography
        className="productTitleText"
        sx={{
          fontSize: smallM ? "14px" : mobile ? "16px" : "18px",
          fontFamily: "SimplonNorm",
          fontWeight: 700,
        }}
      >
        {props.item.title}
      </Typography>
      <Typography
        className="productSubText"
        sx={{
          fontSize: smallM ? "12px" : mobile ? "13px" : "14px",
          fontFamily: "SimplonNorm",
          fontWeight: 400,
        }}
      >
        {props.item.description}
      </Typography>
    </Box>
  );
}

export default ProductCard;

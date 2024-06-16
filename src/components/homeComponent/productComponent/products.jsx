import { Box } from "@mui/material";
import React, { Fragment } from "react";
import ProductCard from "../../commonComponents/productCardComponent/productCard";
import "./products.css";

function Products(props) {
  return (
    <Box className="productsMainBox">
      {props.cardData?.map((item) => {
        return (
          <Fragment key={item.id}>
            <ProductCard item={item} />
          </Fragment>
        );
      })}
    </Box>
  );
}

export default Products;

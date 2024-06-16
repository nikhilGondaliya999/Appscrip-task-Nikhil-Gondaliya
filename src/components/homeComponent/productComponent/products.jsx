import { Box } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "../../commonComponents/productCardComponent/productCard";
import "./products.css";

function Products() {
  const [cardData, setCardData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setCardData(json));
  }, []);

  return (
    <Box className="productsMainBox">
      {cardData?.map((item) => {
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

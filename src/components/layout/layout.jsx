import React from "react";
import "./layout.css";
import { Box, Link, Typography } from "@mui/material";
import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import Breadcrumbs from "@mui/material/Breadcrumbs";
function Layout({ children }) {
  const data = [
    { label: "Lorem ipsum dolor", id: 1 },
    { label: "Lorem ipsum dolor", id: 2 },
    { label: "Lorem ipsum dolor", id: 3 },
  ];

  const mobile = useMediaQuery("(max-width:768px)");

  return (
    <Box>
      <Box className="pageTopLineBox">
        {mobile ? (
          <Box className="topIconTextBox">
            <img
              src={require("../../assets/icons/topLineIcon.png")}
              className="topLineIcon"
              alt="topLineIcon"
            />
            <Typography
              className="topLineText"
              sx={{ fontFamily: "InterExtraLight", fontSize: "12px" }}
            >
              Lorem ipsum dolor
            </Typography>
          </Box>
        ) : (
          <>
            {data.map((item) => {
              return (
                <Box className="topIconTextBox" key={item.id}>
                  <img
                    src={require("../../assets/icons/topLineIcon.png")}
                    className="topLineIcon"
                    alt="topLineIcon"
                  />
                  <Typography
                    className="topLineText"
                    sx={{ fontFamily: "InterExtraLight", fontSize: "12px" }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              );
            })}
          </>
        )}
      </Box>
      <Header />
      {mobile && (
        <Box className="breadLinkBox">
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={
              <Typography
                sx={{
                  fontFamily: "SimplonNorm",
                  color: "#BFC8CD",
                }}
              >
                |
              </Typography>
            }
          >
            <Link
              underline="hover"
              color="inherit"
              href=""
              sx={{
                fontSize: "12px",
                fontFamily: "SimplonNorm",
                color: "#BFC8CD",
              }}
            >
              HOME
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href=""
              sx={{
                fontSize: "12px",
                fontFamily: "SimplonNorm",
              }}
            >
              SHOP
            </Link>
          </Breadcrumbs>
        </Box>
      )}
      <Box className="childrenLayout">{children}</Box>
      <Footer />
    </Box>
  );
}

export default Layout;

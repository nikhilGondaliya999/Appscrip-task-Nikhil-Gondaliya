import { Box, MenuItem, Typography } from "@mui/material";
import React from "react";
import "./header.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";

function Header() {
  const [age, setAge] = React.useState(10);
  const table = useMediaQuery("(max-width:1000px)");
  const mobile = useMediaQuery("(max-width:768px)");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box className="headerMainBox">
      <Box className="headerSubBox">
        {mobile && (
          <img
            src={require("../../assets/icons/menu.png")}
            alt="header icon"
            className="mobileIcon"
          />
        )}
        <img
          src={require("../../assets/icons/headerIcon.png")}
          alt="header icon"
          className="headerIcon"
        />
        <Typography
          className="headerLogoText"
          sx={{
            fontSize: mobile ? "22px" : table ? "29px" : "35px",
            fontFamily: "InterExtraBold",
          }}
        >
          LOGO
        </Typography>
        <Box className="headerSideIconBox">
          <img
            src={require("../../assets/icons/search-normal.png")}
            alt="search icon"
            className="headerSideIcon"
          />
          <img
            src={require("../../assets/icons/heart.png")}
            alt="heart icon"
            className="headerSideIcon"
          />
          <img
            src={require("../../assets/icons/shopping-bag.png")}
            alt="shopping bag icon"
            className="headerSideIcon"
          />
          {!mobile && (
            <img
              src={require("../../assets/icons/profile.png")}
              alt="profile icon"
              className="headerSideIcon"
            />
          )}

          {!mobile && (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              IconComponent={ExpandMoreIcon}
              sx={{
                fontFamily: "InterExtraBold",
                fontSize: table ? "13px" : "16px",
                boxShadow: "none",
                padding: 0,
                height: table ? "20px" : "25px",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                ".MuiSelect-select": {
                  padding: 0,
                  height: table ? "15px" : "20px",
                },
              }}
            >
              <MenuItem value={10}>ENG</MenuItem>
              <MenuItem value={20}>HINDI</MenuItem>
            </Select>
          )}
        </Box>
      </Box>
      {!mobile && (
        <Box className="headerPageListBox">
          {["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"].map((title) => (
            <Typography
              key={title}
              sx={{
                fontSize: table ? "17px" : "20px",
                fontFamily: "SimplonNorm",
                fontWeight: "bold",
              }}
              className="headerTitles"
            >
              {title}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Header;

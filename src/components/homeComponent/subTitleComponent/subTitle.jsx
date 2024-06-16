import React, { useState } from "react";
import "./subTitle.css";
import { Box, Button, MenuItem, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Select from "@mui/material/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import CheckIcon from "@mui/icons-material/Check";
function SubTitle(props) {
  const [select, setSelect] = useState("");
  const tablet = useMediaQuery("(max-width:1000px)");
  const mobile = useMediaQuery("(max-width:768px)");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  console.log(select);

  const selectOptions = [
    { id: "", label: "RECOMMENDED" },
    { id: 10, label: "NEWEST FIRST " },
    { id: 20, label: "POPULAR" },
    { id: 30, label: "PRICE : HIGH TO LOW" },
    { id: 40, label: "PRICE : LOW TO HIGH" },
  ];
  return (
    <Box className="subTitMainBox">
      {mobile ? (
        <Box className="subTitSubBox">
          <Typography
            sx={{
              fontSize: mobile ? "13px" : "15px",
              fontFamily: "SimplonNorm",
              fontWeight: 700,
            }}
          >
            FILTER
          </Typography>
        </Box>
      ) : (
        <>
          <Box className="subTitSubBox">
            <Typography
              sx={{
                fontSize: tablet ? "15" : "18px",
                fontFamily: "SimplonNorm",
                fontWeight: 700,
              }}
            >
              {props.cardData?.length} Items
            </Typography>
            <Button
              onClick={props.handleSideBar}
              variant="text"
              disableRipple
              startIcon={
                props.showSideBar ? <ChevronLeftIcon /> : <ChevronRightIcon />
              }
              className="hideShowBtn"
              sx={{
                fontSize: tablet ? "14px" : "16px",
                fontFamily: "SimplonNorm",
                fontWeight: 400,
                lineHeight: "13px",
              }}
            >
              <span className="hideShowText">
                {props.showSideBar ? "HIDE FILTER" : "SHOW FILTER"}
              </span>
            </Button>
          </Box>
        </>
      )}
      <Box className="recommendedBox">
        <Select
          value={select}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          IconComponent={ExpandMoreIcon}
          sx={{
            fontFamily: "InterExtraBold",
            fontSize: mobile ? "13px" : tablet ? "14px" : "16px",
            boxShadow: "none",
            padding: 0,
            height: "25px",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              border: 0,
            },
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: 0,
              },
            ".MuiSelect-select": {
              padding: 0,
              height: "20px",
            },
          }}
        >
          {selectOptions.map((item) => {
            return (
              <MenuItem
                key={item.id}
                value={item.id}
                sx={{
                  fontFamily: "SimplonNorm",
                  fontWeight: select === item.id ? 700 : 400,
                  width: "210px",
                  display: "flex",
                  gap: "15px",
                  justifyContent: "end",
                }}
              >
                {select === item.id && <CheckIcon />}
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
    </Box>
  );
}

export default SubTitle;

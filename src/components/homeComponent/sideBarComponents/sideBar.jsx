import { Box, Typography } from "@mui/material";
import React from "react";
import "./sideBar.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SliderOptions from "../../commonComponents/sideBarOptionComponent/sliderOptions";

function SideBar(props) {
  return (
    <Box className="sideMainBox">
      <FormControlLabel
        className="customizbleBox"
        control={<Checkbox />}
        label={
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "SimplonNorm",
              fontWeight: 700,
            }}
          >
            CUSTOMIZBLE
          </Typography>
        }
      />

      <SliderOptions title="IDEAL FOR" subtitle="ALL" />
      <SliderOptions title="OCCASION" subtitle="ALL" />
      <SliderOptions title="WORK" subtitle="ALL" />
      <SliderOptions title="FABRIC" subtitle="ALL" />
      <SliderOptions title="SEGMENT" subtitle="ALL" />
      <SliderOptions title="SUITABLE FOR" subtitle="ALL" />
      <SliderOptions title="RAW MATERIALS" subtitle="ALL" />
      <SliderOptions title="PATTERN" subtitle="ALL" />
    </Box>
  );
}

export default SideBar;

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./sliderOption.css";
import { Box, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function SliderOptions(props) {
  return (
    <Accordion
      sx={{
        borderLeft: "none",
        borderRight: "none",
        boxShadow: "none",
        padding: "0px",
        width: "100%",
        borderRadius: "0px",
        borderTop: "1px solid #BFC8CD",
        "&.Mui-expanded": {
          borderLeft: "none",
          borderRight: "none",
          borderTop: "1px solid #BFC8CD",
          borderRadius: "0px",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "SimplonNorm",
              fontWeight: 700,
            }}
          >
            {props.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "SimplonNorm",
              fontWeight: 400,
            }}
          >
            {props.subtitle}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          className="unSelect"
          sx={{
            fontSize: "16px",
            fontFamily: "SimplonNorm",
            fontWeight: 400,
            lineHeight: "15px",
          }}
        >
          Unselect
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 400,
                }}
              >
                Men
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 400,
                }}
              >
                Women
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 400,
                }}
              >
                Baby & Kids
              </Typography>
            }
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
}

export default SliderOptions;

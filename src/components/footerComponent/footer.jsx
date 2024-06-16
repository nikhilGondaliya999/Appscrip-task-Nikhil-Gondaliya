import React from "react";
import "./footer.css";
import {
  Accordion,
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import StopIcon from "@mui/icons-material/Stop";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Footer() {
  const mobile = useMediaQuery("(max-width:768px)");

  return (
    <Box className="footerMainBox">
      <Box className="footerBoxOne">
        <Box className="subscribeMainBox">
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "SimplonNorm",
              fontWeight: 700,
              color: "white",
            }}
          >
            BE THE FIRST TO KNOW
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: "SimplonNorm",
              fontWeight: 400,
              color: "white",
            }}
          >
            {mobile
              ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text."
              : "Sign up for updates from mettā muse."}
          </Typography>
          <Box className="inputSubBox">
            <TextField
              size="small"
              placeholder="Enter your e-mail..."
              className="inputFiled"
            />
            <Button
              sx={{
                paddingLeft: "20px",
                paddingRight: "20px",
                border: "1px solid",
                fontSize: "16px",
                fontFamily: "SimplonNorm",
                fontWeight: 400,
                color: "white",
                borderColor: "white",
              }}
              variant="outlined"
            >
              Subscribe
            </Button>
          </Box>
        </Box>
        <Box className="contactUsBox">
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "SimplonNorm",
                fontWeight: 700,
                color: "white",
                marginTop: "-7px",
              }}
            >
              {mobile ? "CALL US" : "CONTACT US"}
            </Typography>
            <Box className="contactNumberBox">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 400,
                  color: "white",
                  display: "flex",
                  gap: "10px",
                  justifyContent1: "center",
                  alignItems: "center",
                  marginTop: "12px",
                }}
              >
                +44 221 133 5360
                {mobile && (
                  <StopIcon className="stopIcon" sx={{ fontSize: "10px" }} />
                )}
                {mobile && "customercare@mettamuse.com"}
              </Typography>
            </Box>
          </Box>

          {!mobile && (
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: "SimplonNorm",
                fontWeight: 400,
                color: "white",
              }}
            >
              customercare@mettamuse.com
            </Typography>
          )}
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "SimplonNorm",
              fontWeight: 700,
              color: "white",
              marginTop: "10px",
            }}
          >
            CURRENCY
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: "SimplonNorm",
              fontWeight: 700,
              color: "white",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginTop: mobile ? "5px" : "",
              marginBottom: mobile ? "-11px" : "",
            }}
          >
            <img
              src={require("../../assets/images/usaIcon.png")}
              className="usaLogo"
              alt="usaLogo"
            />
            <StopIcon className="stopIcon" sx={{ fontSize: "10px" }} />
            USD
          </Typography>
          {!mobile && (
            <Typography
              sx={{
                fontSize: "12px",
                fontFamily: "SimplonNorm",
                fontWeight: 400,
                color: "white",
              }}
            >
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </Typography>
          )}
        </Box>
      </Box>
      <Box className="footerBoxTwo">
        <Box className="mettaBox">
          {mobile ? (
            <Accordion
              sx={{
                borderLeft: "none",
                borderRight: "none",
                boxShadow: "none",
                padding: "0px",
                width: "100%",
                borderRadius: "0px",
                bgcolor: "black",
                color: "white",
                "&.Mui-expanded": {
                  borderLeft: "none",
                  borderRight: "none",
                  borderRadius: "0px",
                  bgcolor: "black",
                  color: "white",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                mettā muse
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "SimplonNorm",
                    fontWeight: 400,
                    color: "white",
                  }}
                >
                  About Us
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "SimplonNorm",
                    fontWeight: 400,
                    color: "white",
                  }}
                >
                  Stories
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "SimplonNorm",
                    fontWeight: 400,
                    color: "white",
                  }}
                >
                  Artisans
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "SimplonNorm",
                    fontWeight: 400,
                    color: "white",
                  }}
                >
                  Boutiques
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "SimplonNorm",
                    fontWeight: 400,
                    color: "white",
                  }}
                >
                  Contact Us
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "SimplonNorm",
                    fontWeight: 400,
                    color: "white",
                  }}
                >
                  EU Compliances Docs
                </Typography>
              </AccordionDetails>
            </Accordion>
          ) : (
            <>
              {" "}
              <Typography
                sx={{
                  fontSize: "24px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: "5px",
                }}
              >
                mettā muse
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                About Us
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                Stories
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                Artisans
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                Boutiques
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                Contact Us
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                EU Compliances Docs
              </Typography>
            </>
          )}
        </Box>
        <Box className={mobile ? "mettaBox2" : "mettaBox"}>
          {mobile ? (
            <Accordion
              sx={{
                borderLeft: "none",
                borderRight: "none",
                boxShadow: "none",
                padding: "0px",
                width: "100%",
                borderRadius: "0px",
                bgcolor: "black",
                color: "white",
                paddingTop: "-10px",
                "&.Mui-expanded": {
                  borderLeft: "none",
                  borderRight: "none",
                  borderRadius: "0px",
                  bgcolor: "black",
                  color: "white",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                QUICK LINKS
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "SimplonNorm",
                    fontWeight: 400,
                    color: "white",
                  }}
                >
                  Orders & Shipping
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "SimplonNorm",
                    fontWeight: 400,
                    color: "white",
                  }}
                >
                  Join/Login as a Seller
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "SimplonNorm",
                    fontWeight: 400,
                    color: "white",
                  }}
                >
                  Payment & Pricing
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "SimplonNorm",
                    fontWeight: 400,
                    color: "white",
                  }}
                >
                  Return & Refunds
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "SimplonNorm",
                    fontWeight: 400,
                    color: "white",
                  }}
                >
                  FAQs
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "SimplonNorm",
                    fontWeight: 400,
                    color: "white",
                  }}
                >
                  Privacy Policy
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "SimplonNorm",
                    fontWeight: 400,
                    color: "white",
                  }}
                >
                  Terms & Conditions
                </Typography>
              </AccordionDetails>
            </Accordion>
          ) : (
            <>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: "5px",
                }}
              >
                QUICK LINKS
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                Orders & Shipping
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                Join/Login as a Seller
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                Payment & Pricing
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                Return & Refunds
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                FAQs
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                Terms & Conditions
              </Typography>
            </>
          )}
        </Box>
        <Box className="mettaBox3">
          {mobile ? (
            <Accordion
              sx={{
                borderLeft: "none",
                borderRight: "none",
                boxShadow: "none",
                padding: "0px",
                width: "100%",
                borderRadius: "0px",
                bgcolor: "black",
                color: "white",
                paddingTop: "-10px",
                "&.Mui-expanded": {
                  borderLeft: "none",
                  borderRight: "none",
                  borderRadius: "0px",
                  bgcolor: "black",
                  color: "white",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Follow Us
              </AccordionSummary>
              <AccordionDetails>
                <Box className="instaLinkBox">
                  <img
                    src={require("../../assets/icons/linkdin.png")}
                    className="linkInstaIcon"
                    alt="linkdin"
                  />
                  <img
                    src={require("../../assets/icons/Insta.png")}
                    className="linkInstaIcon"
                    alt="insta"
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
          ) : (
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "SimplonNorm",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: "5px",
                }}
              >
                Follow Us
              </Typography>
              <Box className="instaLinkBox">
                <img
                  src={require("../../assets/icons/linkdin.png")}
                  className="linkInstaIcon"
                  alt="linkdin"
                />
                <img
                  src={require("../../assets/icons/Insta.png")}
                  className="linkInstaIcon"
                  alt="insta"
                />
              </Box>
            </Box>
          )}
          <Box className="paymentInfoBox">
            <Typography
              sx={{
                fontSize: "18px",
                fontFamily: "SimplonNorm",
                fontWeight: 400,
                color: "white",
              }}
            >
              mettā muse Accepts
            </Typography>
            <img
              src={require("../../assets/images/frame.png")}
              className="paymentIcons"
              alt="paymentIcons"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

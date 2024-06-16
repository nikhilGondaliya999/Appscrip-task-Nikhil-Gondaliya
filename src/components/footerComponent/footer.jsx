import React from "react";
import "./footer.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import StopIcon from "@mui/icons-material/Stop";
function Footer() {
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
            Sign up for updates from mettā muse.
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
                border: "1px soild",
                fontSize: "16px",
                fontFamily: "SimplonNorm",
                fontWeight: 400,
                color: "white",
                borderColor: "white",
              }}
              variant="outlined"
            >
              subscribe
            </Button>
          </Box>
        </Box>
        <Box className="contactUsBox">
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "SimplonNorm",
              fontWeight: 700,
              color: "white",
            }}
          >
            CONTACT US
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: "SimplonNorm",
              fontWeight: 400,
              color: "white",
            }}
          >
            +44 221 133 5360
          </Typography>
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
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "SimplonNorm",
              fontWeight: 700,
              color: "white",
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
              gap: "8px",
              alignItems: "center",
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
          <Typography
            sx={{
              fontSize: "12px",
              fontFamily: "SimplonNorm",
              fontWeight: 400,
              color: "white",
            }}
          >
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </Typography>
        </Box>
      </Box>
      <Box className="footerBoxTwo">
        <Box className="mettaBox">
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
        </Box>
        <Box className="mettaBox">
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
        </Box>
        <Box className="mettaBox">
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
                alt="insta"
              />
              <img
                src={require("../../assets/icons/Insta.png")}
                className="linkInstaIcon"
                alt="linkdi"
              />
            </Box>
          </Box>

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

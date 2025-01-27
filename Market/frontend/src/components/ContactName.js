/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { alpha, useTheme } from "@mui/material/styles";

const ContactName = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        "&::after": {
          position: "absolute",
          content: '""',
          width: "40%",
          height: "100%",
          zIndex: 1,
          top: 0,
          right: 0,
          backgroundSize: "18px 18px",
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box position={"relative"} zIndex={2}>
        <Box>
          <Box marginBottom={1}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
              }}
              style={{ color: "white" }}
            >
              Get in touch
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color={"white"}>
              Our headquaters are proudly located in Orlando, FL
            </Typography>
          </Box>
        </Box>
        <Box marginY={3}>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Orlando&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{
              minHeight: 300,
              borderRadius: 8,
              filter:
                theme.palette.mode === "dark"
                  ? "grayscale(0.5) opacity(0.7)"
                  : "none",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactName;

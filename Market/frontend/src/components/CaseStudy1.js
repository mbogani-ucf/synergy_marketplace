/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import { colors } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const CaseStudy1 = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box
      padding={{ xs: 2, sm: 4 }}
      borderRadius={2}
      style={{ backgroundColor: "#45A2D9" }}
      data-aos={"fade-up"}
    >
      <Grid
        container
        spacing={isMd ? 4 : 2}
        flexDirection={{ xs: "column-reverse", md: "row" }}
      >
        <Grid item xs={12} md={8}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid
              item
              xs={12}
              sx={{
                "& .lazy-load-image-background.lazy-load-image-loaded": {
                  width: "100%",
                  height: "100%",
                },
              }}
            >
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                src={
                  "https://images.pexels.com/photos/6120182/pexels-photo-6120182.jpeg?cs=srgb&dl=pexels-nataliya-vaitkevich-6120182.jpg&fm=jpg"
                }
                alt="..."
                effect="blur"
                borderRadius={2}
                maxWidth={1}
                maxHeight={400}
                sx={{
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant={"h6"}
                fontWeight={700}
                gutterBottom
                style={{ color: "white" }}
              >
                Diligently moderated
              </Typography>
              <Typography style={{ color: "white" }} component={"p"}>
                We are aware of bots and manipulations, thus we have always-on algorithyms and set parameters for pattern detection
                that violates our terms of service.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant={"h6"}
                style={{ color: "white" }}
                fontWeight={700}
                gutterBottom
              >
                Modern design
              </Typography>
              <Typography style={{ color: "white" }} component={"p"}>
              We aim to keep everything simple, customizable, scalable, and flexible.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={{ xs: "flex-start", md: "space-between" }}
            height={1}
          >
            <Box>
              <Typography
                variant={"h4"}
                style={{ color: "white" }}
                fontWeight={700}
                gutterBottom
              >
                The Economy
              </Typography>
              <Typography style={{ color: "white" }}>
                Time and time again we have seen the market make uncertain trajectories foreseen by a select few.
                We aim to bring everyone together while and give everyone the ability to vote for the best
              
              </Typography>
            </Box>
            <Box
              component={Card}
              marginTop={{ xs: 2, md: 0 }}
              boxShadow={0}
              borderRadius={2}
            >
              <CardContent sx={{ padding: { xs: 2, sm: 4 } }}>
                <Box
                  component="img"
                  height={1}
                  width={1}
                  src={
                    "https://assets.maccarianagency.com/svg/logos/paypal-original.svg"
                  }
                  alt="..."
                  maxWidth={80}
                  marginBottom={2}
                  sx={{
                    filter:
                      theme.palette.mode === "dark"
                        ? "brightness(0) invert(0.7)"
                        : "none",
                  }}
                />
                <Typography component={"p"}>
                  Backed by trustworthy payment processors, membership fees can be easily managed.
                </Typography>
              </CardContent>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CaseStudy1;

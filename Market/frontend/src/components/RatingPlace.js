/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import Container from "../screens/Container";

const RatingPlace = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box bgcolor={"#347CAA"}>
      <Container paddingY={{ xs: 4, sm: 6, md: "0 !important" }}>
        <Grid container spacing={isMd ? 0 : 2}>
          <Grid
            item
            container
            alignItems={"center"}
            xs={12}
            md={6}
            data-aos="fade-up"
          >
            <Container paddingLeft={"0 !important"}>
              <Box>
                <Box marginBottom={2}>
                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: "medium",
                      color: "common.white",
                    }}
                  >
                    INFORMATION AT YOUR FINGERTIPS
                  </Typography>
                </Box>
                <Box marginBottom={2}>
                  <Typography
                    component={"span"}
                    variant="h4"
                    sx={{ fontWeight: 700, color: "common.white" }}
                  >
                    See only what you need to see
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ color: "common.white" }}
                >
                  Our tools and settings let you Keep track of all the communities, companies or sectors you want to track. Likewise, you can keep track of your favorite users.
                  <br />                 
                </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              width={1}
              data-aos={"fade-up"}
              component={Card}
              style={{ backgroundColor: "#2F739E" }}
              display={"flex"}
              flexDirection={"column"}
              borderRadius={0}
              sx={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box marginBottom={1}>
                  <Box display={"flex"} justifyContent={"flex-start"}>
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Box key={item} color={theme.palette.warning.main}>
                        <svg
                          width={18}
                          height={18}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Typography color="white">
                Josh explained and showed us why our group should focus on a specific sector and was both
                friendly and helpful, his group is invaluable! A+
                </Typography>
              </CardContent>
              <CardActions sx={{ paddingBottom: 2 }}>
                <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                  <ListItemAvatar>
                    <Avatar
                      src={
                        "https://assets.maccarianagency.com/avatars/img1.jpg"
                      }
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ margin: 0 }}
                    style={{ color: "white" }}
                    primary={"Clara Bertoletti"}
                  />
                </ListItem>
              </CardActions>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RatingPlace;

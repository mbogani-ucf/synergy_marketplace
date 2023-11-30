import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ListItemText from "@mui/material/ListItemText";
import CardMedia from "@mui/material/CardMedia";
import { Divider } from "../../node_modules/@mui/material/index";
import Avatar from "@mui/material/Avatar";
const MeetTeam = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"black"}
          align={"center"}
        >
          Our team
        </Typography>
        <Typography fontWeight={700} variant={"h4"} align={"center"}>
          Trust the professionals
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            name: "Marco Bogani",
            title: "Founder and CEO",
            avatar: "/dist/img/avatar3.png",
          },
          {
            name: "Sulaiman Karmali",
            title: "CTO",
            avatar: "/dist/img/avatar4.png",
          },
          {
            name: "Daman Sawhney",
            title: "CFO",
            avatar: "/dist/img/avatar5.png",
          },
          {
            name: "William Harris",
            title: "President & VP",
            avatar: "/dist/img/avatar2.png",
          },
        ].map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={i}
            data-aos={"fade-up"}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Card
              sx={{
                boxShadow: 0,
                background: "transparent",
                backgroundImage: "none",
              }}
            >
              <Box
                component={CardMedia}
                borderRadius={2}
                width={1}
                height={1}
                minHeight={320}
                image={item.avatar}
              />
              <Box
                component={CardContent}
                bgcolor={"transparent"}
                marginTop={-5}
              >
                <Box component={Card} style={{ backgroundColor: "#2673C9" }}>
                  <CardContent>
                    <ListItemText
                      style={{ color: "white" }}
                      primary={item.name}
                      secondary={item.title}
                    />
                  </CardContent>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MeetTeam;

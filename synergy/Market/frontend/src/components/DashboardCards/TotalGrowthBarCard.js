import { useState } from "react";

// material-ui
import { Grid, MenuItem, TextField, Typography } from "@mui/material";
import OrderList from "./OrderList";
import Table from "@mui/joy/Table";
// project imports
import MainCard from "./MainCard";
import SkeletonTotalGrowthBarChart from "./SkeletonTotalGrowthBarChart";

// types
import PropTypes from "prop-types";

const status = [
  {
    value: "today",
    label: "Today",
  },
  {
    value: "month",
    label: "This Month",
  },
  {
    value: "year",
    label: "This Year",
  },
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART CARD ||============================== //

const TotalGrowthBarCard = ({ isLoading }) => {
  const [value, setValue] = useState("today");

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Total Growth</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">$2,324.00</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-select-currency"
                    select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <OrderList />
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

TotalGrowthBarCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default TotalGrowthBarCard;

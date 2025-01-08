import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2"; // Import Grid2
import { Card, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CountUp from "react-countup";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { useState, useEffect } from "react";
import { CustomPieChart } from "../Utilities/CustomPieChart";
import { Circle } from "../Utilities/Circle";
import { CustomLineChart } from "../Utilities/CustomLineChart";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: 3,
  borderRadius: "1rem",
  padding: "1rem",
  minHeight: "28vh",
}));

export default function Stat() {
  const [positive, setPositive] = useState(true);
  let x = -5;
  useEffect(() => {
    if (x < 0) {
      setPositive(false);
    }
  }, [x]);
  return (
    <>
      <Box>
        <Grid container spacing={2} columns={12}>
          <Grid size={{ xs: 6, md: 3 }}>
            <StyledCard
              sx={{
                display: "grid",
                placeItems: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                Files Counts
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  backgroundColor: (theme) => theme.palette.background.paper,
                  padding: ".5rem 2rem",
                  borderRadius: ".5rem",
                }}
              >
                <CountUp start={0} end={100} duration={3} />
              </Typography>
            </StyledCard>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <StyledCard
              sx={{
                display: "grid",
                placeItems: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                Most Used Type
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  backgroundColor: (theme) => theme.palette.background.paper,
                  padding: ".5rem 2rem",
                  borderRadius: ".5rem",
                }}
              >
                TP
              </Typography>
            </StyledCard>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <StyledCard
              sx={{
                display: "grid",
                placeItems: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                Download Rate
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: positive ? "#52E764" : "#ec0000",
                  backgroundColor: (theme) =>
                    positive
                      ? theme.palette.button.up
                      : theme.palette.button.down,
                  padding: ".5rem 2rem ",
                  borderRadius: ".5rem",
                  position: "relative",
                  display: "center",
                }}
              >
                {positive ? (
                  <TrendingUpIcon
                    fontSize="large"
                    sx={{ position: "absolute", right: "-3rem", top: ".5rem" }}
                  />
                ) : (
                  <TrendingDownIcon
                    fontSize="large"
                    sx={{ position: "absolute", right: "-3rem", top: ".5rem" }}
                  />
                )}
                {x}%
              </Typography>
            </StyledCard>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <StyledCard
              sx={{
                display: "grid",
                placeItems: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                Users Counts
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  backgroundColor: (theme) => theme.palette.background.paper,
                  padding: ".5rem 2rem",
                  borderRadius: ".5rem",
                }}
              >
                <CountUp start={0} end={57} duration={3} />
              </Typography>
            </StyledCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <StyledCard
              sx={{
                display: "grid",
                placeItems: "center",
                height: "59vh",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                Files Type
              </Typography>
              <CustomPieChart />
            </StyledCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <StyledCard
              sx={{
                display: "grid",
                placeItems: "center",
                height: "59vh",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                Monthly Activity
              </Typography>
              <CustomLineChart />
            </StyledCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <StyledCard
              sx={{
                display: "grid",
                placeItems: "center",
                height: "59vh",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                Files Type
              </Typography>
              <Circle />
            </StyledCard>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2"; // Import Grid2
import { Card } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: 3,
  borderRadius: "1rem",
  padding: "1rem",
  height: "28vh",
}));

export default function Stat() {
  return (
    <>
      <Box>
        <Grid container spacing={2} columns={12}>
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledCard>1</StyledCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledCard>2</StyledCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledCard>3</StyledCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledCard>4</StyledCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledCard>5</StyledCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledCard>6</StyledCard>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

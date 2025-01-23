import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function FilePreview() {
  const theme = useTheme();
  return (
    <>
      <Container>
        <Grid container spacing={2} columns={12} mt={"8rem"}>
          <Grid size={{ xs: 12, md: 9 }}>
            <Box
              sx={{
                width: "100%",
                minHeight: "80vh",
                border: `2px solid ${theme.palette.background.accent}`,
                borderRadius: ".5rem",
                overflow: "hidden",
                position: "relative",
                height: "100%",
              }}
            >
              <Grid
                container
                direction="column"
                sx={{
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <Grid
                  item
                  sx={{
                    width: "100%",
                    height: "15%", // 15% of the parent height
                    backgroundColor: (theme) => theme.palette.background.accent,
                    color: (theme) => theme.palette.text.accent,
                  }}
                >
                  <Typography variant="h3">File Title</Typography>
                </Grid>
                <Grid
                  item
                  sx={{
                    width: "100%",
                    height: "75%",
                    backgroundColor: "blue",
                  }}
                >
                  <iframe
                    src="https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    title="PDF Viewer"
                  ></iframe>
                </Grid>
                <Grid
                  item
                  sx={{
                    width: "100%",
                    height: "10%", // 15% of the parent height
                    backgroundColor: "green",
                  }}
                >
                  <Typography variant="h2">Buttons</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                width: "100",
                height: { xs: "60vh", md: "80vh" },
                backgroundColor: "#ccc",
                border: `2px solid ${theme.palette.background.accent}`,
                borderRadius: ".5rem",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

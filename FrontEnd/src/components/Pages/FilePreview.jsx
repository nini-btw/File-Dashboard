import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  TextField,
  IconButton,
  Divider,
  Chip,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";
import ReportIcon from "@mui/icons-material/Report";

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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
                  sx={{
                    width: "100%",
                    height: "10%",
                    backgroundColor: "transparent",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      width: "50%",
                      height: "100%",
                      textAlign: "center",
                      color: "#fff",
                      backgroundColor: "#4CAF50",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        backgroundColor: "#45A049",
                      },
                    }}
                  >
                    <Typography variant="body">Download</Typography>
                    <DownloadIcon />
                  </Box>
                  <Box
                    sx={{
                      width: "50%",
                      height: "100%",
                      textAlign: "center",
                      color: "#fff",
                      backgroundColor: "#F44336",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        backgroundColor: "#D32F2F",
                      },
                    }}
                  >
                    <Typography variant="body">Report</Typography>
                    <ReportIcon />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "60vh", md: "80vh" },
                backgroundColor: (theme) => theme.palette.background.default,
                border: `2px solid ${theme.palette.background.accent}`,
                borderRadius: ".5rem",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  height: "80%",
                  width: "100%",
                  overflow: "hidden",
                  pt: "1rem",
                }}
              >
                <Box
                  sx={{
                    p: ".5rem",
                    mt: ".5rem",
                    backgroundColor: "#eee",
                    color: (theme) => theme.palette.background.accent,
                    width: "80%",
                    borderRadius: "0 .5rem .5rem 0",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eligendi repudiandae repellendus fugit dicta delectus
                    perspiciatis placeat nesciunt, reprehenderit voluptatem
                    perferendis velit, dolorem praesentium atque! Blanditiis
                    eaque architecto exercitationem vitae nesciunt.
                  </Typography>
                </Box>
              </Box>
              <Divider variant="middle" flexItem>
                <Chip label="Chat" size="medium" />
              </Divider>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <TextField
                  id="standard-multiline-static"
                  multiline
                  rows={4}
                  defaultValue={"Message"}
                  variant="standard"
                />
                <IconButton
                  sx={{ color: (theme) => theme.palette.background.accent }}
                >
                  <SendIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

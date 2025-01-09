import { Box, Container, Typography, useTheme } from "@mui/material";
import { useState } from "react";

export default function Landing() {
  const [isMoved, setIsMoved] = useState(false);
  const [isBoxVisible, setIsBoxVisible] = useState(false); // State to control red box visibility
  const theme = useTheme(); // Access the Material-UI theme

  const handleClick = () => {
    setIsMoved((prev) => !prev); // Toggle the first box movement
    setIsBoxVisible((prev) => !prev); // Toggle red box visibility
  };

  return (
    <>
      <Box sx={{ mt: "10rem" }}>
        <Container>
          <Typography variant="h4" sx={{ textAlign: "center", mb: "10rem" }}>
            Welcome To File Bank
          </Typography>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              onClick={handleClick}
              sx={{
                width: "10rem",
                height: "10rem",
                color: (theme) => theme.palette.text.primary,
                backgroundColor: (theme) => theme.palette.background.accent,
                borderRadius: "50%",
                position: "relative",
                transition: "transform 0.5s ease-in-out",
                transform: isMoved ? "translateY(-10rem)" : "translateY(0)",
                cursor: "pointer",
                "&:hover": {
                  transform: isMoved ? "translateY(-10rem)" : "translateY(0)",
                  animation: "pulse 1.5s infinite",
                },
                "@keyframes pulse": {
                  "0%": {
                    boxShadow: `0 0 10px 2px ${theme.palette.background.accent}`,
                  },
                  "50%": {
                    boxShadow: `0 0 20px 4px ${theme.palette.background.accent}`,
                  },
                  "100%": {
                    boxShadow: `0 0 10px 2px ${theme.palette.background.accent}`,
                  },
                },
              }}
            >
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                TD
              </Typography>
            </Box>
            {isBoxVisible && (
              <Box
                sx={{
                  width: "20vw",
                  height: "50vh",
                  backgroundColor: "red",
                  position: "absolute",
                  top: "18rem",
                  zIndex: "-1",
                }}
              ></Box>
            )}
            <Box
              onClick={handleClick}
              sx={{
                width: "10rem",
                height: "10rem",
                color: (theme) => theme.palette.text.primary,
                backgroundColor: (theme) => theme.palette.background.accent,
                borderRadius: "50%",
                position: "relative",
                transition: "transform 0.5s ease-in-out",
                transform: isMoved ? "translateY(-10rem)" : "translateY(0)",
                cursor: "pointer",
                "&:hover": {
                  transform: isMoved ? "translateY(-10rem)" : "translateY(0)",
                  animation: "pulse 1.5s infinite",
                },
                "@keyframes pulse": {
                  "0%": {
                    boxShadow: `0 0 10px 2px ${theme.palette.background.accent}`,
                  },
                  "50%": {
                    boxShadow: `0 0 20px 4px ${theme.palette.background.accent}`,
                  },
                  "100%": {
                    boxShadow: `0 0 10px 2px ${theme.palette.background.accent}`,
                  },
                },
              }}
            >
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                TD
              </Typography>
            </Box>
            {isBoxVisible && (
              <Box
                sx={{
                  width: "20vw",
                  height: "50vh",
                  backgroundColor: "red",
                  position: "absolute",
                  top: "18rem",
                  zIndex: "-1",
                }}
              ></Box>
            )}
            <Box
              onClick={handleClick}
              sx={{
                width: "10rem",
                height: "10rem",
                color: (theme) => theme.palette.text.primary,
                backgroundColor: (theme) => theme.palette.background.accent,
                borderRadius: "50%",
                position: "relative",
                transition: "transform 0.5s ease-in-out",
                transform: isMoved ? "translateY(-10rem)" : "translateY(0)",
                cursor: "pointer",
                "&:hover": {
                  transform: isMoved ? "translateY(-10rem)" : "translateY(0)",
                  animation: "pulse 1.5s infinite",
                },
                "@keyframes pulse": {
                  "0%": {
                    boxShadow: `0 0 10px 2px ${theme.palette.background.accent}`,
                  },
                  "50%": {
                    boxShadow: `0 0 20px 4px ${theme.palette.background.accent}`,
                  },
                  "100%": {
                    boxShadow: `0 0 10px 2px ${theme.palette.background.accent}`,
                  },
                },
              }}
            >
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                TD
              </Typography>
            </Box>
            {isBoxVisible && (
              <Box
                sx={{
                  width: "20vw",
                  height: "50vh",
                  backgroundColor: "red",
                  position: "absolute",
                  top: "18rem",
                  zIndex: "-1",
                }}
              ></Box>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
}

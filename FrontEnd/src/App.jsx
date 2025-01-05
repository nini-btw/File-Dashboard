import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./theme";
import DashBoard from "./components/DashBoard";
import "./main.sass";
import ContrastIcon from "@mui/icons-material/Contrast";
import { Box } from "@mui/material";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {/* Basic Rules */}
      <CssBaseline /> {/* Add the GlobalStyles component here */}
      <Box
        onClick={toggleTheme}
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          backgroundColor: "transparent",
          color: "inherit",
          zIndex: "1003",
          cursor: "pointer",
        }}
      >
        <ContrastIcon />
      </Box>
      {/* Main Components */}
      <DashBoard />
    </ThemeProvider>
  );
};

export default App;

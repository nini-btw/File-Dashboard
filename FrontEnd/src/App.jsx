import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./theme";
import "./main.sass";
import ContrastIcon from "@mui/icons-material/Contrast";
import { Box } from "@mui/material";
import UserInterface from "./components/Main/UserInterface";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/DashBoard";
import File from "./components/Sub/DashBoard/File";
import Stat from "./components/Sub/DashBoard/Stat";
import User from "./components/Sub/DashBoard/User";
import FilePreview from "./components/Main/FilePreview";
import Landing from "./components/Sub/Utilities/Landing";

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
          top: ".5rem",
          right: ".5rem",
          backgroundColor: "transparent",
          color: "inherit",
          zIndex: "1003",
          cursor: "pointer",
        }}
      >
        <ContrastIcon />
      </Box>
      {/* Main Components */}
      <Routes>
        <Route path="/" element={<UserInterface />}>
          <Route path="" element={<Landing />}></Route>
          <Route path="file" element={<FilePreview />}></Route>
        </Route>
        <Route path="/signIn" element={<Login />} />
        <Route path="/signUp" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Stat />} />
          <Route path="files" element={<File />} />
          <Route path="users" element={<User />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;

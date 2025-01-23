import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";
import ContrastIcon from "@mui/icons-material/Contrast";
import { Box } from "@mui/material";
import "./main.sass";

//components
import UserInterface from "./components/Pages/UserInterface";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Dashboard from "./components/Pages/DashBoard";
import FilePreview from "./components/Pages/FilePreview";

import Landing from "./components/Main/Landing";
import File from "./components/Main/File";
import Stat from "./components/Main/Stat";
import User from "./components/Main/User";

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

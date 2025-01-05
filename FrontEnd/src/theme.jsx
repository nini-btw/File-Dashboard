// theme.js
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#fff", // Primary light background
      paper: "#f8f9fa", // Secondary light background
      accent: "#212529",
    },
    text: {
      primary: "#212529", // Primary light text
      secondary: "#393d3f", // Secondary light text
      accent: "#fdfdff",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#212529", // Primary dark background
      paper: "#393d3f", // Secondary dark background
      accent: "#fff",
    },
    text: {
      primary: "#fdfdff", // Primary dark text
      secondary: "#f8f9fa", // Secondary dark text
      accent: "#212529",
    },
  },
});

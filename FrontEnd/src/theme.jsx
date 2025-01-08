// theme.js
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#fff", // Primary light background
      paper: "#f8f9fa", // Secondary light background
      accent: "#212529",
      extra: "#eee",
    },
    text: {
      primary: "#212529", // Primary light text
      secondary: "#393d3f", // Secondary light text
      accent: "#fdfdff",
    },
    button: {
      up: "#c1f6d2",
      down: "#f78395",
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
      extra: "#000",
    },
    text: {
      primary: "#fdfdff", // Primary dark text
      secondary: "#f8f9fa", // Secondary dark text
      accent: "#212529",
    },
    button: {
      up: "#0b240a",
      down: "#411515",
    },
  },
});

import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./main.sass";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline /> {/* Add the GlobalStyles component here */}
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Welcome to My App</h1>
        <button onClick={toggleTheme}>
          Switch to {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

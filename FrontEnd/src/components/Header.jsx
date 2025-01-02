import { useState } from "react";
import "../styles/components/header.sass";

const Header = () => {
  const [theme, setTheme] = useState("light"); // Default theme

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Update the root element's class to apply the theme
    document.documentElement.className = `${newTheme}-theme`;
  };

  return (
    <header className="header">
      <h1>Theme Toggle Example</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
};

export default Header;

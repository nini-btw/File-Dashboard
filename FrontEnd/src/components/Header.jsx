import { Typography, AppBar, Toolbar } from "@mui/material";

const Header = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="h6" color="text.primary">
        My Application
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;

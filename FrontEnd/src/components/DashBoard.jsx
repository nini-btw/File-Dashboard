import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PersonIcon from "@mui/icons-material/Person";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BarChartIcon from "@mui/icons-material/BarChart";
import HomeIcon from "@mui/icons-material/Home";

import Home from "./Sub/DashBoard/Home";
import File from "./Sub/DashBoard/File";
import Profile from "./Sub/DashBoard/Profile";
import Stat from "./Sub/DashBoard/Stat";
import User from "./Sub/DashBoard/User";
const drawerWidth = 150;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  backgroundColor: theme.palette.background.default,
  border: "none",
  color: theme.palette.text.primary,
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  backgroundColor: theme.palette.background.default,
  border: "none",
  color: theme.palette.text.primary,
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
export default function DashBoard() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState(<Home />);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [active, setActive] = useState("Home");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // List items configuration
  const listItems = [
    { text: "Home", icon: <HomeIcon />, component: <Home /> },
    { text: "Profile", icon: <PersonIcon />, component: <Profile /> },
    { text: "Stats", icon: <BarChartIcon />, component: <Stat /> },
    { text: "Files", icon: <InsertDriveFileIcon />, component: <File /> },
    { text: "Users", icon: <EngineeringIcon />, component: <User /> },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant={isSmallScreen ? "temporary" : "permanent"} open={open}>
        <DrawerHeader>
          {!open && (
            <IconButton color="inherit" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          )}
          {open && (
            <IconButton color="inherit" onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          )}
        </DrawerHeader>
        <List
          sx={{
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {listItems.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                display: "block",
                marginLeft: ".5rem",
              }}
              onClick={() => {
                setActiveComponent(item.component);
                setActive(item.text);
              }}
            >
              <ListItemButton
                sx={{
                  borderRadius: "1rem 0 0 1rem",
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  backgroundColor:
                    active === item.text
                      ? theme.palette.background.accent
                      : "transparent",
                  color:
                    active === item.text
                      ? theme.palette.text.accent
                      : theme.palette.text.primary,
                  "&:hover": {
                    backgroundColor: theme.palette.background.accent,
                    color: theme.palette.primary.contrastText,
                    svg: {
                      color: theme.palette.text.accent,
                    },
                  },
                }}
                disableRipple
                disableTouchRipple
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color:
                      active === item.text
                        ? theme.palette.text.accent
                        : theme.palette.text.primary,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          height: "95vh",
          width: "50rem",
          margin: "1rem 2rem 0 0",
          flexGrow: 1,
          p: 3,
          backgroundColor: theme.palette.background.accent,
          color: theme.palette.text.accent,
          borderRadius: "1.5rem",
        }}
      >
        {activeComponent}
      </Box>
    </Box>
  );
}

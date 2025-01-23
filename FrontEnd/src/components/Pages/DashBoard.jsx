import { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  CssBaseline,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const drawerWidth = 170;
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

function DashBoard() {
  let location = useLocation().pathname.split("/").pop().toString();
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [active, setActive] = useState(location);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // List items configuration
  const listItems = [
    { text: "dashboard", icon: <HomeIcon />, route: "/dashboard" },
    { text: "files", icon: <InsertDriveFileIcon />, route: "/dashboard/files" },
    { text: "users", icon: <EngineeringIcon />, route: "/dashboard/users" },
    { text: "home", icon: <ArrowBackIcon />, route: "/" },
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
                setActive(item.text);
                navigate(item.route); // Navigate to the route
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
          minHeight: "95vh",
          width: "50rem",
          margin: "1rem 2rem 0 0",
          flexGrow: 1,
          p: 3,
          backgroundColor: theme.palette.background.accent,
          color: theme.palette.text.accent,
          borderRadius: "1.5rem",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default function App() {
  return <DashBoard />;
}

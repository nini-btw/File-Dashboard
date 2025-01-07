import { Box } from "@mui/material";
import CustomTable from "../Utilities/CustomTable";

function createData(id, user, userRole, email) {
  return {
    id,
    user,
    userRole,
    email,
  };
}

const rows = [
  createData(1, "Mohammed", "Admin", "mohammed@example.com"),
  createData(2, "Alice", "Editor", "alice@example.com"),
  createData(3, "John", "Viewer", "john@example.com"),
];

const headCells = [
  { id: "id", numeric: false, disablePadding: true, label: "ID" },
  { id: "user", numeric: false, disablePadding: false, label: "User" },
  { id: "userRole", numeric: false, disablePadding: false, label: "User Role" },
  { id: "email", numeric: false, disablePadding: false, label: "Email" },
  { id: "actions", numeric: false, disablePadding: false, label: "Actions" },
];

function User() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Users Management </h1>
        <CustomTable rows={rows} headCells={headCells} />
      </Box>
    </>
  );
}
export default User;

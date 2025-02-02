import { Box } from "@mui/material";
import CustomTable from "../Sub/DashBoard//CustomTable";
import { useEffect, useState } from "react";

function createData(id, user, userRole, email) {
  return {
    id,
    user,
    userRole,
    email,
  };
}

const headCells = [
  { id: "id", numeric: false, disablePadding: true, label: "ID" },
  { id: "user", numeric: false, disablePadding: false, label: "User" },
  { id: "userRole", numeric: false, disablePadding: false, label: "User Role" },
  { id: "email", numeric: false, disablePadding: false, label: "Email" },
  { id: "actions", numeric: false, disablePadding: false, label: "Actions" },
];

function User() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:5000/api/users")
      .then((response) => response.json())
      .then((json) => {
        // Transform the fetched data into the desired format
        const transformedData = json.data.users.map((user, key) =>
          createData(key + 1, user.fullName, user.role, user.email)
        );
        // Update the rows state with the transformed data
        setRows(transformedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Log the rows for debugging
  console.log(rows);

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

import { Box } from "@mui/material";
import CustomTable from "../Sub/DashBoard/CustomTable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for redirection

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
  const navigate = useNavigate(); // To redirect the user if not authorized

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Redirect to login if no token is found
      navigate("/login");
      return;
    }

    // Fetch data from the API with Authorization header
    fetch("http://localhost:5000/api/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Add the Bearer token to the Authorization header
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unauthorized access");
        }
        return response.json();
      })
      .then((json) => {
        const transformedData = json.data.users.map((user, key) =>
          createData(key + 1, user.fullName, user.role, user.email)
        );
        setRows(transformedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Redirect to login page if token is invalid or expired
        navigate("/login");
      });
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Users Management</h1>
      <CustomTable rows={rows} headCells={headCells} />
    </Box>
  );
}

export default User;

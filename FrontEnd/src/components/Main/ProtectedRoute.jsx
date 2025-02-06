import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

// ProtectedRoute component to protect routes
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/signIn" replace />;
  }
  console.log(token);
  return children;
};

// PropTypes validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a valid React node
};

export default ProtectedRoute;

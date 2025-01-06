import { Box } from "@mui/material";
import CustomTable from "../Utilities/CustomTable";

function File() {
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
        <h1>Files Management </h1>
        <CustomTable />
      </Box>
    </>
  );
}
export default File;

import { Box } from "@mui/material";
import CustomTable from "../Utilities/CustomTable";

function createData(id, fileName, uploadDate, by, viewCounts) {
  return {
    id,
    fileName,
    uploadDate,
    by,
    viewCounts,
  };
}

const rows = [
  createData(1, "File_1", "01_11_2002", "admin_1", 67),
  createData(2, "File_2", "02_22_2002", "admin_2", 45),
  createData(3, "File_3", "03_33_2002", "admin_3", 74),
  createData(4, "File_4", "04_4_2002", "admin_4", 47),
  createData(5, "File_5", "05_51_2002", "admin51", 61),
  createData(6, "File_6", "06_61_2002", "admin61", 71),
  createData(7, "File_7", "07_71_2002", "admin71", 9),
  createData(8, "File_8", "08_81_2002", "admin81", 34),
  createData(9, "File_9", "09_91_2002", "admin91", 43),
  createData(10, "File_10", "010_101_2002", "admin_51", 90),
  createData(11, "File_11", "01_111_12002", "admin_91", 33),
  createData(19, "File_1", "01_11_2002", "admin_1", 67),
  createData(29, "File_2", "02_22_2002", "admin_2", 45),
  createData(39, "File_3", "03_33_2002", "admin_3", 74),
  createData(49, "File_4", "04_4_2002", "admin_4", 47),
  createData(59, "File_5", "05_51_2002", "admin51", 61),
  createData(69, "File_6", "06_61_2002", "admin61", 71),
  createData(79, "File_7", "07_71_2002", "admin71", 9),
  createData(89, "File_8", "08_81_2002", "admin81", 34),
  createData(99, "File_9", "09_91_2002", "admin91", 43),
  createData(109, "File_10", "010_101_2002", "admin_51", 90),
  createData(119, "File_11", "01_111_12002", "admin_91", 33),
];

const headCells = [
  { id: "id", numeric: false, disablePadding: true, label: "ID" },
  { id: "fileName", numeric: false, disablePadding: false, label: "File Name" },
  {
    id: "uploadDate",
    numeric: false,
    disablePadding: false,
    label: "Upload Date",
  },
  { id: "by", numeric: false, disablePadding: false, label: "Uploaded By" },
  {
    id: "viewCounts",
    numeric: true,
    disablePadding: false,
    label: "View Counts",
  },
  {
    id: "actions",
    numeric: false,
    disablePadding: false,
    label: "Actions",
  },
];

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
        <CustomTable rows={rows} headCells={headCells} />
      </Box>
    </>
  );
}
export default File;

const HeadCells = [
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

export default HeadCells;

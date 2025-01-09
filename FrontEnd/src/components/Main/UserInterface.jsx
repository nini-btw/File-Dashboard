import CustomNavBar from "../Sub/Utilities/CustomNavBar";
import Landing from "../Sub/Utilities/Landing";
import FilePreview from "./FilePreview";
import { Route, Routes } from "react-router-dom";

export default function UserInterface() {
  return (
    <>
      <CustomNavBar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/file" element={<FilePreview />}></Route>
      </Routes>
    </>
  );
}

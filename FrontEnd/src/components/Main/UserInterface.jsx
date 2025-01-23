import CustomNavBar from "../Sub/Utilities/CustomNavBar";
import { Outlet } from "react-router-dom";

export default function UserInterface() {
  return (
    <>
      <CustomNavBar />
      <Outlet />
    </>
  );
}

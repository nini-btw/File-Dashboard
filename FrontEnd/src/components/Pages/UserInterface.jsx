import CustomNavBar from "../Main/CustomNavBar";
import { Outlet } from "react-router-dom";

export default function UserInterface() {
  return (
    <>
      <CustomNavBar />
      <Outlet />
    </>
  );
}

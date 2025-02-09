import "../../styles/components/popUpOverlay.sass";
import { useDispatch } from "react-redux";
import { setDisplay } from "../../rtk/slice/overlaySlice";
import { Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";

export default function Add() {
  const dispatch = useDispatch();
  const handleDisplay = () => {
    dispatch(setDisplay(false));
  };
  return (
    <>
      {
        <Box className="overlay">
          <Box className="overlay-content">
            <IconButton onClick={handleDisplay}>
              <CancelIcon />
            </IconButton>
          </Box>
        </Box>
      }
    </>
  );
}

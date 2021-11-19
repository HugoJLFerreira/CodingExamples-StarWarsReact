import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    width: "450px",
  },
}));

export default function PlanetDialog(props) {
  const { open, handleClose, selectedPlanet } = props;

  return (
    <BootstrapDialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="planet-dialog-slide-description"
    >
      <DialogTitle className="Planet-dialog-title">
        {selectedPlanet.planet}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="planet-dialog-slide-description">
          <b>Diameter:</b>
          {selectedPlanet.diameter}
          <br />
          <b>Climate:</b>
          {selectedPlanet.climate}
          <br />
          <b>Population:</b>
          {selectedPlanet.population}
          <br />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </BootstrapDialog>
  );
}

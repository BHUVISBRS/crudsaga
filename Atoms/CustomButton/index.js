import React from "react";
import { Button } from "@mui/material";
import "./Button.css";

const CustomButton = (props) => {
  return (
    <div
      className={`btnWrpr ${props.btnClass} ${
        props.btnType === "secondary" ? "secButton" : "primButton"
      }`}
    >
      <Button
        className={`${props.size}`}
        variant={props.btnType === "secondary" ? "outlined" : "contained"}
        onClick={props.onClick}
        type={props.type}
        size={props.size}
        disabled={props.disabled}
      >
        {props.label}
      </Button>
    </div>
  );
};

export default CustomButton;

import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const CustomCheckBox = (props) => {
  return (
    <div className="cstmChkBox">
      <FormControlLabel
        control={
          <Checkbox
            name={props.name}
            checked={props.checked}
            disabled={props.disabled}
            value={props.value}
            onChange={props.onChange}
            onClick={props.onClick}
          />
        }
        label={props.label}
      />
    </div>
  );
};

export default CustomCheckBox;

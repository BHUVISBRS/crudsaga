import React from "react";
import TextField from "@mui/material/TextField";
import "./CustomInput.css";
import { InputLabel } from "@mui/material";

const CustomInput = (props) => {
  return (
    <div className="customInputWrpr">
      {props.upperLabel ? (
        <>
          <InputLabel>{props.label}</InputLabel>
          {props.multiline ? (
            <TextField
              variant="outlined"
              name={props.name}
              type={props.type ? props.type : "text"}
              value={props.value}
              onBlur={props.onBlur}
              placeholder={props.placeholder}
              onChange={props.onChange}
              multiline
              rows={props.rows}
              inputProps={{ readOnly: props.readOnly }}
              InputLabelProps={{ shrink: props.shrink }}
            />
          ) : (
            <TextField
              variant="outlined"
              name={props.name}
              type={props.type ? props.type : "text"}
              value={props.value}
              onBlur={props.onBlur}
              placeholder={props.placeholder}
              onChange={props.onChange}
              size="small"
              inputProps={{ readOnly: props.readOnly }}
              InputLabelProps={{ shrink: props.shrink }}
            />
          )}
        </>
      ) : (
        <>
          {props.multiline ? (
            <TextField
              label={props.label}
              variant="outlined"
              name={props.name}
              type={props.type ? props.type : "text"}
              value={props.value}
              onBlur={props.onBlur}
              placeholder={props.placeholder}
              onChange={props.onChange}
              multiline
              rows={props.rows}
              InputLabelProps={{ shrink: props.shrink }}
              InputProps={{
                startAdornment: props.startAdornment,
                endAdornment: props.endAdornment,
                readOnly: props.readOnly,
              }}
            />
          ) : (
            <TextField
              label={props.label}
              variant="outlined"
              name={props.name}
              type={props.type ? props.type : "text"}
              value={props.value}
              onBlur={props.onBlur}
              placeholder={props.placeholder}
              size="small"
              onChange={props.onChange}
              InputLabelProps={{ shrink: props.shrink }}
              InputProps={{
                startAdornment: props.startAdornment,
                endAdornment: props.endAdornment,
                readOnly: props.readOnly,
              }}
              autoComplete={props.autoComplete}
            />
          )}
        </>
      )}
      {props.formik?.touched[props.name] && props.formik?.errors[props.name] ? (
        <p className="errMsg">{props.formik.errors[props.name]}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomInput;

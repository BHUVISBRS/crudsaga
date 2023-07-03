import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CustomSelect = (props) => {
  return (
    <div className="customInputWrpr">
      {props.label ? (
        <FormControl fullWidth size={props.size}>
          <InputLabel id={`${props.name}-label`}>{props.label}</InputLabel>
          <Select
            labelId={`${props.name}-label`}
            id={`${props.name}-label`}
            name={props.name}
            value={props.value}
            label={props.label != "" ? props.label : null}
            onChange={props.onChange}
            readOnly={props.readOnly}
          >
            {props.options.length ? (
              props.options.map((data, index) => (
                <MenuItem key={index} value={data.value}>
                  {data.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem value="">No options</MenuItem>
            )}
          </Select>
        </FormControl>
      ) : (
        <FormControl fullWidth size={props.size} readOnly={props.readOnly}>
          <Select
            value={props.value}
            onChange={props.onChange}
            name={props.name}
          >
            {props.options.length ? (
              props.options.map((data, index) => (
                <MenuItem key={index} value={data.value}>
                  {data.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem value="">No options</MenuItem>
            )}
          </Select>
        </FormControl>
      )}
      {props.formik?.touched[props.name] && props.formik?.errors[props.name] ? (
        <p className="errMsg">{props.formik.errors[props.name]}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomSelect;

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(option, list, theme) {
  return {
    fontWeight:
      list.indexOf(option.name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelect = (props) => {
  const theme = useTheme();

  return (
    <div className="customInputWrpr">
      <FormControl fullWidth size={props.size}>
        <InputLabel id={`${props.name}-label`}>{props.label}</InputLabel>
        <Select
          labelId={`${props.name}-label`}
          id={`${props.name}-label`}
          multiple
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          input={<OutlinedInput label={props.label} />}
          MenuProps={MenuProps}
        >
          {props?.options?.map((option, index) => (
            <MenuItem
              key={index}
              value={option.value}
              style={getStyles(option.name, props.options, theme)}
            >
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelect;

import { Button } from "@mui/material";
import React from "react";
import "./search.css";
const CustomSearch = ({
  query,
  handleChange,
  handleSubmit,
  inputName,
  containerClasses,
  inputCasses,
  btnClasses,
  disabled,
}) => {
  return (
    <form
      aria-disabled={disabled}
      onSubmit={handleSubmit}
      className={`searchWrapper ${containerClasses}`}
    >
      <input
        className={`${inputCasses}`}
        placeholder="Search"
        onChange={handleChange}
        value={query}
        name={inputName}
      />
      <Button
        disabled={disabled}
        className={`searchBtn ${btnClasses}`}
        type="submit"
      >
        <span className="material-symbols-rounded">search</span>
      </Button>
    </form>
  );
};

export default CustomSearch;

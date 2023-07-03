import React, { useEffect, useState } from "react";
import { CKEditor } from "ckeditor4-react";

const CustomEditor = (props) => {
  return (
    <div className="ckEditorWrpr mb-4">
      <label className="mb-2">{props.label}</label>
      <CKEditor
        config={{ allowedContent: true }}
        initData={props.data}
        onInstanceReady={props.onReady}
        onCustomEvent={props.onChange}
        onChange={props.onChange}
        // onBlur={props.onBlur}
        // onFocus={props.onFocus}
      />
      {props.error && (
        <p style={{ fontSize: "13px" }} className="text-danger">
          {props.error || "Required"}
        </p>
      )}
    </div>
  );
};

export default CustomEditor;

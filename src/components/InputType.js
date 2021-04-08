import React, { useState } from "react";

function InputType(props) {
  const { type, id } = props;
  return (
    <>
      <input type={type} id={id} value="untitled" readOnly="readOnly" />
    </>
  );
}

export default InputType;

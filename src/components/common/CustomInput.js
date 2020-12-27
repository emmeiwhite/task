import React from "react";
import "./CustomInput.scss";

export default function CustomInput(props) {
  console.log(props);
  return <input {...props} />;
}

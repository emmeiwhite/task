import React from "react";
import "./CustomButton.scss";

export default function CustomButton({ text, ...otherProps }) {
  return <button {...otherProps}>{text}</button>;
}

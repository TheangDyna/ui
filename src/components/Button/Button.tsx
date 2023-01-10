import React from "react";
import "../../styles/output.scss";
export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="bg-red-500 px-3 py-2 rounded-lg text-white">{props.label}</button>;
};

export default Button;

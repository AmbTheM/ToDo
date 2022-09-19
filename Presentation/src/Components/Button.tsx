import React from "react";
import ReactDOM from "react-dom";

interface Props {
  onClick: () => void;
  text: string;
}

const Button: React.FC<Props> = ({ onClick, text }: Props) => {
  return (
    <div className="button" onClick={onClick}>
      <h1>{text}</h1>
    </div>
  );
};

export default Button;

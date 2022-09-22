import React from "react";
import ReactDOM from "react-dom";

interface Props {
  onClick: () => void;
  text: string;
  style: any;
}

const Button: React.FC<Props> = ({ onClick, text, style }: Props) => {
  return (
    <div className={style} onClick={onClick}>
      <h1>{text}</h1>
    </div>
  );
};

export default Button;

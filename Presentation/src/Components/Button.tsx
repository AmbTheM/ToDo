import React from "react";
import ReactDOM from "react-dom";

interface Props {
  onClick: () => void;
  text: string;
  style: any;
  type?: any;
}

const Button: React.FC<Props> = ({ onClick, text, style, type }: Props) => {
  return (
    <button className={style} onClick={onClick} type={type}>
      <h1>{text}</h1>
    </button>
  );
};

export default Button;

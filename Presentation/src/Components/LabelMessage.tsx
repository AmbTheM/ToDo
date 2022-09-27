import React from "react";
import ReactDom from "react-dom";

interface props {
  message: string;
  style: any;
}

const LabelMessage: React.FC<props> = ({ message, style }) => {
  return (
    <>
      <div className={style}>{` ${message}`}</div>
    </>
  );
};

export default LabelMessage;

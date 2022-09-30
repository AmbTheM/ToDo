import React from "react";
import ReactDom from "react";

interface props {
  styleError: any;
  styleGood: any;
  type: string;
  text: string;
  time: string;
}

const Message: React.FC<props> = ({
  styleError,
  styleGood,
  type,
  text,
  time,
}) => {
  const style = type === " Error" ? styleError : styleGood;
  return (
    <>
      <div className={style}>
        <h1>{text}</h1>
      </div>
    </>
  );
};

export default Message;

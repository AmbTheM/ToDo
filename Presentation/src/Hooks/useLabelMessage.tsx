import { useState } from "react";
import Style from "../styles/main.less";

const useLabelMessage = () => {
  const styleError = Style.errorLabelMessage;
  const styleHide = Style.hideLabelMessage;
  const styleWarning = Style.warningLabelMessage;
  const [messagestyle, setStyle] = useState<any>(styleHide);
  const [message, setMessage] = useState<string>("");

  const setType = (type: string) => {
    type === "Error" ? setStyle(styleError) : setStyle(styleWarning);
  };

  return [messagestyle, setType, message, setMessage];
};

export default useLabelMessage;

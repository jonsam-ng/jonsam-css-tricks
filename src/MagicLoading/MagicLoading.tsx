import React from "react";
import { MagicLoadingProps } from "./MagicLoading.types";
import "./MagicLoading.scss";

const MagicLoading: React.FC<MagicLoadingProps> = ({
  size,
  tip = "loading",
}) => {
  let realSize: number;
  if (size === "large") {
    realSize = 200;
  } else if (size === "medium") {
    realSize = 100;
  } else if (size === "small") {
    realSize = 50;
  } else if (typeof size === "number") {
    realSize = size;
  } else {
    realSize = 200;
  }

  return (
    <div
      className="magic__loading-container"
      style={{
        width: realSize,
        height: realSize,
      }}
    >
      <span>{tip}</span>
    </div>
  );
};

export default MagicLoading;

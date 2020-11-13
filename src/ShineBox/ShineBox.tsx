import React from "react";
import { ShineBoxProps } from "./ShineBox.types";
import "./ShineBox.scss";

const ShineBox: React.FC<ShineBoxProps> = ({ title, content }) => (
  <div className="shine__box--container">
    <div className="box__wrapper">
      <div className="box__inner--wrapper">
        <div className="box__title--wrapper">{title}</div>
        <div className="box__content--wrapper">{content}</div>
      </div>
    </div>
  </div>
);

export default ShineBox;

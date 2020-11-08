import React from "react";
import { MagicFontProps } from "./MagicFont.types";
import { parsePx } from "../../util/helper/parse";
import "./MagicFont.scss";

const MagicFont: React.FC<MagicFontProps> = ({
  size = "100px",
  text = "秋水共长天一色",
  letterSpace = "20px",
  fontWeight = 900,
  img = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567672853003&di=a7c3ead21dd174f4cb73deb2eadfbe28&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn17%2F600%2Fw1920h1080%2F20180720%2F8b29-hfqtahh7252207.jpg"
}) => {
  const realSize = parsePx(size, "100px");
  const realSpace = parsePx(letterSpace, "20px");

  return (
    <span
      style={{
        fontSize: realSize,
        letterSpacing: realSpace,
        fontWeight,
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
        backgroundPosition: "50% 50%",
      }}
    >
      {text}
    </span>
  );
};

export default MagicFont;

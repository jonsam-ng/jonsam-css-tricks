import React, { useState } from "react";
import { ShareListProps } from "./ShareList.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFax,
  faCoins,
  faUmbrella,
  faAlignLeft,
} from "@fortawesome/fontawesome-free-solid";
import "./ShareList.scss";

const ShareList: React.FC<ShareListProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="share__list--container">
      <div className="icon-nav">
        <div className="icon-container">
          <FontAwesomeIcon
            icon={faUser}
            className="icon"
            onClick={() => setOpen(!open)}
          />
          <div
            className="icon-menu"
            style={{
              display: open ? "block" : "none",
            }}
          >
            <a href="javascript:;">
              <FontAwesomeIcon icon={faFax} className="icon" />
            </a>
            <a href="javascript:;">
              <FontAwesomeIcon icon={faCoins} className="icon" />
            </a>
            <a href="javascript:;">
              <FontAwesomeIcon icon={faUmbrella} className="icon" />
            </a>
            <a href="javascript:;">
              <FontAwesomeIcon icon={faCoins} className="icon" />
            </a>
            <a href="javascript:;">
              <FontAwesomeIcon icon={faAlignLeft} className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareList;

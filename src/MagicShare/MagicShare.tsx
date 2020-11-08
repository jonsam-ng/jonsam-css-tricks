// Generated with util/create-component.js
import React from "react";
import { MagicShareProps } from "./MagicShare.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faDownload,
  faShare,
  faMusic,
  faVideo,
  faAddressCard
} from "@fortawesome/fontawesome-free-solid";
import "./MagicShare.scss";

const MagicShare: React.FC<MagicShareProps> = ({}) => (
  <nav className="magic__share--container">
    <ul>
    <li>
        <a href="#">
          <FontAwesomeIcon icon={faVideo} />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faDownload} />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faAddressCard} />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faMusic} />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faShare} />
        </a>
      </li>
    </ul>
  </nav>
);

export default MagicShare;

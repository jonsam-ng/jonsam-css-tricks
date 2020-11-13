import React from "react";
import { MagicTabProps, ITab } from "./MagicTab.types";
import { NOOP } from "../../util/helper/tools";
import "./MagicTab.scss";

const MagicTab: React.FC<MagicTabProps> = ({ tabs, onTabClick = NOOP }) => (
  // TODO 添加 active等等
  <div className="magic__tab--container">
    <nav>
      <ul>
        {
          tabs.map((tab: ITab) => (
            <li key={tab.key} onClick={onTabClick(tab.key)}>
              <a href="javascript:void(0)">{tab.label}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  </div>
);

export default MagicTab;

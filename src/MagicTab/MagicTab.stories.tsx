import React from "react";
import MagicTab from "./MagicTab";

export default {
    title: "MagicTab"
};

const tabs = [
  {
    label: "首页",
    key: 1,
  },
  {
    label: "关于",
    key: 2,
  },
  {
    label: "服务",
    key: 3,
  },
  {
    label: "团队",
    key: 4,
  },
  {
    label: "图册",
    key: 5,
  },
  {
    label: "联系",
    key: 6,
  },
]

const handleTabClick = (key: number | string) => {
  alert(key);
}

export const magicTab = () => <MagicTab tabs={tabs} onTabClick={handleTabClick} />;

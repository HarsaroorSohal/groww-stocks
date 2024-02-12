"use client";
import { Switch } from "../components/ui/switch";
import { observer } from "mobx-react";

/** WIP: Dark mode switch */
const DarkModeSwitch = () => {
  return (
    <div className="flex items-center space-x-2 text-white">
      <Switch id="airplane-mode" />
      <label htmlFor="airplane-mode">Dark Mode</label>
    </div>
  );
};

export default observer(DarkModeSwitch);

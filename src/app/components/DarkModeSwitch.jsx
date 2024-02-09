"use client";
import { Switch } from "../components/ui/switch";
import AppStoreInstance from "../lib/store";
import { observer } from "mobx-react";

const DarkModeSwitch = () => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <label htmlFor="airplane-mode">Dark Mode</label>
    </div>
  );
};

export default observer(DarkModeSwitch);

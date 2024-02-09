"use client";
import { NAVBAR_SECTIONS } from "../lib/constants";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";

import AppStoreInstance from "../lib/store";
export default function Navbar() {
  return (
    <nav className="font-medium py-2">
      <Tabs
        defaultValue="top_gainers"
        className="w-[600px] py-2 flex flex-row justify-center"
      >
        <TabsList>
          {NAVBAR_SECTIONS.map((section) => {
            return (
              <TabsTrigger
                className={`px-8 my-4 ${
                  section.id === 1 ? "text-green-500" : "text-red-500"
                }`}
                key={section.id}
                onClick={() => AppStoreInstance.setSelectedSection(section.id)}
                value={section.key}
              >
                {section.title}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </nav>
  );
}

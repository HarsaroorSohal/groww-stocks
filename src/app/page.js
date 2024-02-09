"use client";
import Navbar from "./components/Navbar";
import CardsContainer from "./components/CardsContainer";
import AppStoreInstance from "./lib/store";
import { observer } from "mobx-react";
import React from "react";
import { Button } from "./components/ui/button";

const Home = () => {
  const cardsData = AppStoreInstance._topGainersLosers;
  const selectedSection = AppStoreInstance._selectedSection;
  const isDarkMode = AppStoreInstance._isDarkMode;
  return (
    <div className="gap-2 px-48 py-2 flex flex-col justify-center items-center">
      <Navbar></Navbar>
      <CardsContainer
        cardsData={
          selectedSection === 1 ? cardsData.top_gainers : cardsData.top_losers
        }
      ></CardsContainer>
      <Button className="my-4" disabled>
        {" "}
        Load More{" "}
      </Button>
    </div>
  );
};

export default observer(Home);

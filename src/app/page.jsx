"use client";
import Navbar from "./components/Navbar";
import CardsContainer from "./components/CardsContainer";
import AppStoreInstance from "./lib/store";
import { observer } from "mobx-react";
import React, { Suspense } from "react";
import { Button } from "./components/ui/button";

const Home = () => {
  let cardsData = AppStoreInstance._topGainersLosers;
  const selectedSection = AppStoreInstance._selectedSection;
  return (
    <div className="gap-2 px-48 py-2 flex flex-col justify-center items-center">
      <Navbar></Navbar>
      <CardsContainer
        cardsData={
          selectedSection === 1 ? cardsData.top_gainers : cardsData.top_losers
        }
      ></CardsContainer>
      <Button
        className="my-4"
        onClick={() => {
          alert(
            "Error: Can't load more as the API only gives the top 20 gainers and losers"
          );
        }}
      >
        {" "}
        Load More{" "}
      </Button>
    </div>
  );
};

export default observer(Home);

import { API_KEY, TOP_GAINERS_LOSERS_URL } from "./constants";
import {
  DUMMY_TICKER_DETAILS,
  DUMMY_TOP_GAINERS_LOSERS_DATA,
  DUMMY_TIME_SERIES_DATA,
} from "./data";

export const fetchTickerDetails = async (tickerID) => {
  console.log("log: fetching ", tickerID);
  const API_URL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${tickerID}&apikey=${API_KEY}`;
  //   try {
  //     const tickerData = await fetch(API_URL);
  //     const tickerResponse = await tickerData.json();
  //     return tickerResponse;
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  return new Promise((resolve) =>
    setTimeout(resolve(DUMMY_TICKER_DETAILS), 1000)
  );
};

export const fetchTopGainersLosers = async () => {
  // try {
  //   const response = await fetch(TOP_GAINERS_LOSERS_URL);
  //   const jsonData = await response.json();
  //   console.log("log: store", jsonData);
  //   return jsonData;
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  // }
  return new Promise((resolve) =>
    setTimeout(resolve(DUMMY_TOP_GAINERS_LOSERS_DATA), 1000)
  );
};

export const fetchTimeSeriesData = async (timePeriod, symbol) => {
  // console.log("log: in service");
  // const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_${timePeriod.toUpperCase()}&symbol=${symbol}&apikey=${API_KEY}`;
  // try {
  //   const response = await fetch(URL);
  //   const jsonData = await response.json();
  //   console.log("log:", jsonData);
  //   return jsonData;
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  // }

  return new Promise((resolve) =>
    setTimeout(resolve(DUMMY_TIME_SERIES_DATA), 1000)
  );
};

export const fetchSearchResults = async (value) => {
  const URL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${API_KEY}`;
  const searchResponse = await fetch(URL);
  const searchResults = await searchResponse.json();
  return searchResults;
};

import { API_KEY, TOP_GAINERS_LOSERS_URL } from "./constants";
import {
  DUMMY_TICKER_DETAILS,
  DUMMY_TOP_GAINERS_LOSERS_DATA,
  DUMMY_TIME_SERIES_DATA,
  MOCK_SEARCH_RESPONSE_FULL,
} from "./data";

/**
 * Handling all API calls.
 * The try catch block is response for the actual API calls
 * but each function also has a mock API call that returns some dummy Data.
 *
 * All API have time sensitive data, hence disabling cache for most.
 */

export const fetchTickerDetails = async (tickerID) => {
  const API_URL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${tickerID}&apikey=${API_KEY}`;
  try {
    const tickerData = await fetch(API_URL, { cache: "no-store" });
    const tickerResponse = await tickerData.json();
    /** If rate limit if hit, we return the mock data */
    if (tickerResponse.Information) return DUMMY_TICKER_DETAILS;
    return tickerResponse;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  // return new Promise((resolve) =>
  //   setTimeout(resolve(DUMMY_TICKER_DETAILS), 1000)
  // );
};

export const fetchTopGainersLosers = async () => {
  try {
    const response = await fetch(TOP_GAINERS_LOSERS_URL, { cache: "no-store" });
    const jsonData = await response.json();
    if (jsonData.Information) return DUMMY_TOP_GAINERS_LOSERS_DATA;
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  // return new Promise((resolve) =>
  //   setTimeout(resolve(DUMMY_TOP_GAINERS_LOSERS_DATA), 1000)
  // );
};

export const fetchTimeSeriesData = async (timePeriod, symbol) => {
  const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_${timePeriod.toUpperCase()}&symbol=${symbol}&apikey=${API_KEY}`;
  try {
    const response = await fetch(URL, { next: { revalidate: 60 } });
    const jsonData = await response.json();
    if (jsonData.Information) return DUMMY_TIME_SERIES_DATA;
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  // return new Promise((resolve) =>
  //   setTimeout(resolve(DUMMY_TIME_SERIES_DATA), 1000)
  // );
};

export const fetchSearchResults = async (value) => {
  const URL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${API_KEY}`;
  const searchResponse = await fetch(URL);
  const searchResults = await searchResponse.json();
  if (searchResults.Information) return MOCK_SEARCH_RESPONSE_FULL;
  return searchResults;
};

import { makeAutoObservable, observable } from "mobx";
import {
  fetchTickerDetails,
  fetchTopGainersLosers,
  fetchTimeSeriesData,
  fetchSearchResults,
} from "./service";
import {
  DUMMY_TICKER,
  DUMMY_TICKER_DETAILS,
  DUMMY_TIME_SERIES_DATA,
  DUMMY_TOP_GAINERS_LOSERS_DATA,
} from "./data";
import { configure } from "mobx";

/** Mobx store for handling state and data fetching */
class AppStore {
  _tickerData = DUMMY_TICKER_DETAILS;
  _topGainersLosers = DUMMY_TOP_GAINERS_LOSERS_DATA;
  _currentTicker = DUMMY_TICKER;
  _selectedSection = 1;
  _timeSeriesData = DUMMY_TIME_SERIES_DATA;
  _isDarkMode = false;

  constructor() {
    configure({
      enforceActions: "never", // Disable strict actions
    });
    makeAutoObservable(this, {
      _tickerData: observable,
      _topGainersLosers: observable,
      _currentTicker: observable,
      _timeSeriesData: observable,
      _isDarkMode: observable,
    });
    this.fetchData();
  }

  async fetchData() {
    const topGainersLosers = await fetchTopGainersLosers();
    this._topGainersLosers = topGainersLosers;
  }

  setSelectedSection(sectionID) {
    this._selectedSection = sectionID;
  }

  async fetchTickerDetails(tickerID) {
    const tickerDetails = await fetchTickerDetails(tickerID);
    this._tickerData = tickerDetails;
    return tickerDetails;
  }

  async fetchSearchResults(value) {
    const searchResults = await fetchSearchResults(value);
    const convertedSearchResults = searchResults?.bestMatches.map((result) => {
      return { symbol: result["1. symbol"], name: result["2. name"] };
    });

    return convertedSearchResults;
  }

  async fetchTimeSeriesData(timePeriod, symbol) {
    const timeSeriesData = await fetchTimeSeriesData(timePeriod, symbol);
    return timeSeriesData;
  }

  get tickerData() {
    return this._tickerData;
  }

  get topGainersLosers() {
    return this._topGainersLosers;
  }
}

const AppStoreInstance = new AppStore();
export default AppStoreInstance;

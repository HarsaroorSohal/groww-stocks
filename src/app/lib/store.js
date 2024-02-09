import { makeAutoObservable, observable } from "mobx";
import {
  fetchTickerDetails,
  fetchTopGainersLosers,
  fetchTimeSeriesData,
  fetchSearchResults,
} from "./service";
class AppStore {
  _tickerData = [];
  _topGainersLosers = [];
  _currentTicker;
  _selectedSection = 1;
  _timeSeriesData = [];
  _isDarkMode = false;

  constructor() {
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
    // const timeSeriesData = await fetchTimeSeriesData();
    this._topGainersLosers = topGainersLosers;
    // this._timeSeriesData = timeSeriesData;
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
    const convertedSearchResults = searchResults.bestMatches.map((result) => {
      return { symbol: result["1. symbol"], name: result["2. name"] };
    });

    return convertedSearchResults;
  }

  async fetchTimeSeriesData(timePeriod, symbol) {
    console.log("log: in store", timePeriod, symbol);
    const timeSeriesData = await fetchTimeSeriesData(timePeriod, symbol);
    console.log("log: in store", timeSeriesData);
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

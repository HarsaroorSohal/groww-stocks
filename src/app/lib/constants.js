export const API_KEY = "7U2LFBWWPQ1U8H3U";
export const TOP_GAINERS_LOSERS_URL = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`;
export const NAVBAR_SECTIONS = [
  { id: 1, title: "Top Gainers", key: "top_gainers" },
  { id: 2, title: "Top Losers", key: "top_losers" },
];
export const BUTTONS = ["Daily", "Weekly", "Monthly"];
export const TIME_PERIOD_MAPPING = {
  Daily: "Time Series (Daily)",
  Weekly: "Weekly Time Series",
  Monthly: "Monthly Time Series",
};

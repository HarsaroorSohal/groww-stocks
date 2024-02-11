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

export const RATE_LIMIT_RESPONSE =
  "Thank you for using Alpha Vantage! Our standard API rate limit is 25 requests per day. Please subscribe to any of the premium plans at https://www.alphavantage.co/premium/ to instantly remove all daily rate limits.";

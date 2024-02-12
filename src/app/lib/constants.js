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

export const logoArray = ["meta", "apple", "google", "groww", "morty"];

export function TrendingDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}

export function TrendingUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

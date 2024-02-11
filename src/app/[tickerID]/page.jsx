import { AvatarImage, Avatar } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { TrendingDownIcon, TrendingUpIcon } from "../components/Card";
import AppStoreInstance from "../lib/store";
import Chart from "../components/Chart";
import { Progress } from "../components/ui/progress";
import { DUMMY_TICKER, DUMMY_TICKER_DETAILS } from "../lib/data";

const calculatePercentage = (min, current, max) => {
  let range = max - min;
  let position = (current - min) / range;
  return Math.floor(position * 100);
};

const Page = async ({ params }) => {
  /**
   * Decoding to ensure that the symbols are read properly.
   */
  const tickerID = decodeURIComponent(params.tickerID);
  /* If routing from the home page, store will have the _currentTicker data
    Otherwise if directly add the route, we find it in the entire list of gainers and losers.*/
  const tickerData = AppStoreInstance._topGainersLosers;
  let currentTicker =
    AppStoreInstance?._currentTicker ??
    (tickerData.top_gainers.find((t) => t.ticker === tickerID) ||
      tickerData?.top_losers.find((t) => t.ticker === tickerID));
  const isGainer = currentTicker?.change_percentage[0] !== "-";

  let data = await AppStoreInstance.fetchTickerDetails(tickerID);
  /** Adding fallback in case API fails to show case UI*/
  if (!data || !currentTicker) {
    data = DUMMY_TICKER_DETAILS;
    currentTicker = DUMMY_TICKER;
  }
  return (
    <div className="m-12 p-4 flex flex-col gap-8">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-8">
          <Avatar className="w-[100px] h-[100px]">
            <AvatarImage
              alt="Alphabet Inc."
              src="https://github.com/shadcn.png"
            />
          </Avatar>
          <div className="flex flex-col gap-0 p-2 justify-center font-semibold">
            <div> Symbol - {data.Symbol} </div>
            <div> Name - {data.Name} </div>
            <div> Exchange - {data.Exchange} </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <p className="text-lg font-bold">{currentTicker.change_amount}</p>
          <div className="flex items-center">
            {isGainer ? (
              <>
                <TrendingUpIcon className="text-green-500" />
                <p className="text-sm text-green-500 ml-1">
                  {currentTicker.change_percentage}
                </p>
              </>
            ) : (
              <>
                <TrendingDownIcon className="text-red-500" />
                <p className="text-sm text-red-500 ml-1">
                  {currentTicker.change_percentage}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <Chart tickerID={tickerID}></Chart>
      <div className="rounded-[8px] border p-4">
        <h3 className="text-lg font-semibold">About {data.Symbol}</h3>
        <hr className="my-4" />
        <p className="text-sm"> {data.Description} </p>
        <div className="flex flex-row gap-6">
          <Badge className="my-4 w-fit-content h-[40px] text-center flex justify-center">
            Industry : {data.Industry}
          </Badge>
          <Badge className="my-4 w-fit-content h-[40px] text-center flex justify-center">
            Sector : {data.Sector}
          </Badge>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <div className="text-gray-500">52-Week Low</div>
          <div className="font-bold">{`$${data["52WeekLow"]}`}</div>
        </div>
        <div className="w-[60%] items-center flex flex-col">
          <div className="text-gray-500">
            {" "}
            Current price: ${data.AnalystTargetPrice}
          </div>
          <Progress
            className="h-[10px]"
            value={calculatePercentage(
              data["52WeekLow"],
              data["AnalystTargetPrice"],
              data["52WeekHigh"]
            )}
          ></Progress>
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-gray-500">52-Week High</div>
          <div className="font-bold">${data["52WeekHigh"]}</div>
        </div>
      </div>
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col ">
          <div className="text-gray-500">Market Cap</div>
          <div className="font-bold">${data["MarketCapitalization"]}</div>
        </div>
        <div className="flex flex-col ">
          <div className="text-gray-500">P/E Ratio</div>
          <div className="font-bold">{data["PERatio"]}</div>
        </div>
        <div className="flex flex-col ">
          <div className="text-gray-500">Beta</div>
          <div className="font-bold">{data["Beta"]}</div>
        </div>
        <div className="flex flex-col ">
          <div className="text-gray-500">Dividend Yield</div>
          <div className="font-bold">{data["DividendYield"]}%</div>
        </div>
        <div className="flex flex-col ">
          <div className="text-gray-500">Profit Margin</div>
          <div className="font-bold">{data["ProfitMargin"]}</div>
        </div>
      </div>
    </div>
  );
};

export default Page;

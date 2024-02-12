import { AvatarImage, Avatar } from "../components/ui/avatar";
import { CardContent, Card } from "../components/ui/card";
import Link from "next/link";
import AppStoreInstance from "../lib/store";
import { logoArray, TrendingDownIcon, TrendingUpIcon } from "../lib/constants";

export default function CardComponent({ ticker }) {
  const isGainer = ticker.change_percentage[0] !== "-";
  return (
    <Link
      onClick={() => {
        AppStoreInstance._currentTicker = ticker;
      }}
      href={{
        pathname: ticker.ticker.toString(),
      }}
    >
      <div className="w-[250px] rounded-8">
        <Card className="bg-white shadow rounded">
          <CardContent className="hover:bg-gray-100 transition duration-200">
            <div className="flex flex-col gap-6 p-4">
              <div>
                <Avatar className=" my-2">
                  <AvatarImage
                    alt="Ticker img"
                    src={`/${
                      logoArray[Math.floor(Math.random() * logoArray.length)]
                    }.png`}
                  />
                </Avatar>
                <p className="text-md font-semibold">{ticker.ticker}</p>
              </div>
              <div>
                <p className="text-lg font-bold">{`$${ticker.change_amount}`}</p>
                <div className="flex items-center">
                  {isGainer ? (
                    <>
                      <TrendingUpIcon className="text-green-500" />
                      <p className="text-sm text-green-500 ml-1">
                        {ticker.change_percentage}
                      </p>
                    </>
                  ) : (
                    <>
                      <TrendingDownIcon className="text-red-500" />
                      <p className="text-sm text-red-500 ml-1">
                        {ticker.change_percentage}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}

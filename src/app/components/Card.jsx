import { AvatarImage, Avatar } from "../components/ui/avatar";
import { CardContent, Card } from "../components/ui/card";
import Link from "next/link";
import AppStoreInstance from "../lib/store";

const logoArray = ["meta", "apple", "google", "groww", "morty"];

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
                    alt="Alphabet Inc."
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

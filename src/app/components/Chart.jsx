"use client";
import { ResponsiveLine } from "@nivo/line";
import AppStoreInstance from "../lib/store";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { BUTTONS, TIME_PERIOD_MAPPING } from "../lib/constants";

const getChartStockData = (stockData, timePeriod) => {
  const data = [];
  const stockValues = [];
  const timeSeries = TIME_PERIOD_MAPPING[timePeriod];
  for (const key in stockData[timeSeries]) {
    const stockValue = stockData[timeSeries][key]["1. open"];
    data.push({ x: key, y: stockValue });
    stockValues.push(Number(stockValue));
  }
  return { data: data.slice(0, 10), stockValues: stockValues.slice(0, 10) };
};

export default function Chart({ tickerID }) {
  const [timePeriod, setTimePeriod] = useState("Daily");
  const [stockData, setStockData] = useState({});
  useEffect(() => {
    fetchData();
  }, [timePeriod]);

  const fetchData = async () => {
    const timeSeriesData = await AppStoreInstance.fetchTimeSeriesData(
      timePeriod,
      tickerID
    );
    setStockData(timeSeriesData);
  };

  const chartStockData = getChartStockData(stockData, timePeriod);
  if (!stockData) return null;
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
      <TimeseriesChart chartStockData={chartStockData} />
      <Tabs
        defaultValue="Daily"
        className="w-[600px] py-2 flex flex-row justify-center"
      >
        <TabsList>
          {BUTTONS.map((button) => {
            return (
              <TabsTrigger
                className="px-8 my-4"
                key={button}
                onClick={() => setTimePeriod(button)}
                value={button}
              >
                {button}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );
}

function TimeseriesChart({ chartStockData }) {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: chartStockData.data,
          },
        ]}
        margin={{ top: 10, right: 20, bottom: 40, left: 60 }}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          useUTC: false,
          precision: "day",
        }}
        xFormat="time:%Y-%m-%d"
        yScale={{
          type: "linear",
          min: Math.floor(Math.min(...chartStockData.stockValues)),
          max: Math.ceil(Math.max(...chartStockData.stockValues)),
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
          format: "%d",
          tickValues: "every 2 day",
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 10,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

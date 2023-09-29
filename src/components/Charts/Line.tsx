import { Card, Title, LineChart } from "@tremor/react";

const chartdata = [
  {
    day: "Monday",
    Income: 200,
  },
  {
    day: "Tuesday",
    Income: 300,
  },
  {
    day: "Wednesday",
    Income: 100,
  },
  {
    day: "Thursday",
    Income: 1000,
  },
  {
    day: "Friday",
    Income: 600,
  },
  {
    day: "Saturday",
    Income: 750,
  },
  {
    day: "Sunday",
    Income: 300,
  },
];

const dataFormatter = (number: number) => `$${number}`;

const ChartLine = () => (
  <Card
    style={{
      backgroundColor: "#121212",
      outline: "1px solid #121212",
    }}
  >
    <Title>Weekly Income: 24th - 30th Sep</Title>
    <LineChart
      className="mt-6 bg-transparent h-72"
      data={chartdata}
      index="day"
      categories={["Income"]}
      colors={["blue"]}
      valueFormatter={dataFormatter}
      yAxisWidth={40}
    />
  </Card>
);

export default ChartLine;

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

/* const orders = [
  {
    id: "3",
    // other fields...
    status: "pending",
    amount: 50,
    created_at: "2023-10-02T01:11:58.886Z",
    // ...
  },
  {
    id: "4",
    // other fields...
    status: "completed",
    amount: 11,
    created_at: "2023-10-02T02:36:46.489Z",
    // ...
  },
]; */

const ChartLine = ({ orders }: { orders: any }) => {
  const dataFormatter = (number: number) => `$${number}`;

  function getDayName(dateString: any) {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", { weekday: "long" });
  }

  function getLastWeekDates() {
    const result = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      result.push(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
    }
    return result;
  }

  function convertToChartData(orders: any) {
    const lastWeekDates = getLastWeekDates();
    const chartData = lastWeekDates.map((date) => ({
      day: date.toLocaleString("en-US", { weekday: "long" }),
      Income: 0,
    }));

    orders.forEach((order: any) => {
      if (order.status !== "completed") return;

      const orderDate = new Date(order.created_at);
      const orderDayName = getDayName(order.created_at);

      lastWeekDates.forEach((date, index) => {
        if (
          orderDate.getFullYear() === date.getFullYear() &&
          orderDate.getMonth() === date.getMonth() &&
          orderDate.getDate() === date.getDate()
        ) {
          chartData[index].Income += order.amount;
        }
      });
    });

    return chartData;
  }

  const chartdata = convertToChartData(orders);

  return (
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
};

export default ChartLine;

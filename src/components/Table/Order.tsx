import useGetOrders from "@/hooks/useGetOrders";
import { cn } from "@/utils/cn";
import LoadingPage from "../Loading";
import useGetItems from "@/hooks/useGetItems";
import { Badge } from "@mantine/core";
import Link from "next/link";

export type Order = {
  orderId: string;
  items: string[];
  status: "Pending" | "In-Progress" | "Completed";
  amount: number;
  assigned: string;
  timestamp: string;
  address: string;
};

const orders: Order[] = [
  {
    orderId: "1",
    items: ["Pizza", "Burger", "Fries"],
    status: "Pending",
    amount: 100,
    assigned: "Lindsay Walton",
    timestamp: "2021-10-20T11:00:00",
    address: "123, Main Street, New York, USA",
  },
  {
    orderId: "2",
    items: ["Pizza", "Burger", "Fries"],
    status: "Pending",
    amount: 100,
    assigned: "Lindsay Walton",
    timestamp: "2021-10-20T11:00:00",
    address: "123, Main Street, New York, USA",
  },
  {
    orderId: "2",
    items: ["Pizza", "Burger", "Fries"],
    status: "Pending",
    amount: 100,
    assigned: "Lindsay Walton",
    timestamp: "2021-10-20T11:00:00",
    address: "123, Main Street, New York, USA",
  },
  {
    orderId: "2",
    items: ["Pizza", "Burger", "Fries"],
    status: "Pending",
    amount: 100,
    assigned: "Lindsay Walton",
    timestamp: "2021-10-20T11:00:00",
    address: "123, Main Street, New York, USA",
  },
  {
    orderId: "2",
    items: ["Pizza", "Burger", "Fries"],
    status: "Pending",
    amount: 100,
    assigned: "Lindsay Walton",
    timestamp: "2021-10-20T11:00:00",
    address: "123, Main Street, New York, USA",
  },
  {
    orderId: "2",
    items: ["Pizza", "Burger", "Fries"],
    status: "Pending",
    amount: 100,
    assigned: "Lindsay Walton",
    timestamp: "2021-10-20T11:00:00",
    address: "123, Main Street, New York, USA",
  },
  {
    orderId: "2",
    items: ["Pizza", "Burger", "Fries"],
    status: "Pending",
    amount: 100,
    assigned: "Lindsay Walton",
    timestamp: "2021-10-20T11:00:00",
    address: "123, Main Street, New York, USA",
  },
  {
    orderId: "2",
    items: ["Pizza", "Burger", "Fries"],
    status: "Pending",
    amount: 100,
    assigned: "Lindsay Walton",
    timestamp: "2021-10-20T11:00:00",
    address: "123, Main Street, New York, USA",
  },
  {
    orderId: "2",
    items: ["Pizza", "Burger", "Fries"],
    status: "Pending",
    amount: 100,
    assigned: "Lindsay Walton",
    timestamp: "2021-10-20T11:00:00",
    address: "123, Main Street, New York, USA",
  },
  {
    orderId: "2",
    items: ["Pizza", "Burger", "Fries"],
    status: "Pending",
    amount: 100,
    assigned: "Lindsay Walton",
    timestamp: "2021-10-20T11:00:00",
    address: "123, Main Street, New York, USA",
  },
  {
    orderId: "2",
    items: ["Pizza", "Burger", "Fries"],
    status: "Pending",
    amount: 100,
    assigned: "Lindsay Walton",
    timestamp: "2021-10-20T11:00:00",
    address: "123, Main Street, New York, USA",
  },
  {
    orderId: "2",
    items: ["Pizza", "Burger", "Fries"],
    status: "Pending",
    amount: 100,
    assigned: "Lindsay Walton",
    timestamp: "2021-10-20T11:00:00",
    address: "123, Main Street, New York, USA",
  },
  {
    orderId: "2",
    items: ["Pizza", "Burger", "Fries"],
    status: "Pending",
    amount: 100,
    assigned: "Lindsay Walton",
    timestamp: "2021-10-20T11:00:00",
    address: "123, Main Street, New York, USA",
  },
];

const OrderTable = () => {
  const { data, isLoading, isError } = useGetOrders();
  const {
    data: itemdata,
    isLoading: isLoadingItems,
    isError: isErrorItems,
  } = useGetItems();

  if (isLoading || isLoadingItems) return <LoadingPage />;

  const orders = data?.response?.items;
  const items = itemdata?.response?.items;
  const updatedOrders = orders?.map((order: any) => {
    return {
      firstItem: items?.find((item: any) => item.id === order.items[0])?.name,
      ...order,
    };
  });

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-[#121212] ring-opacity-100 sm:rounded-lg">
            <table className="min-w-full divide-y divide-[#121212]">
              <thead className="bg-[#121212]">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-blue-400 sm:pl-6"
                  >
                    Order Id
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-blue-400"
                  >
                    Items
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-blue-400"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-blue-400"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-blue-400"
                  >
                    Assigned
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-blue-400"
                  >
                    Timestamp
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-blue-400"
                  >
                    Address
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#121212] bg-transparent">
                {updatedOrders.map((order: any, index: number) => (
                  <tr
                    className={cn("", {
                      "bg-[#121212] bg-opacity-75": index % 2 !== 0,
                      "bg-[#0D0D0D]": index % 2 !== 0,
                    })}
                    key={order.id}
                  >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-blue-500 sm:pl-6 font-black">
                      <Link href={`/delivery/${order.id}`}>{order.id}</Link>
                    </td>
                    <td className="whitespace-nowrap py-4 pl-3 pr-3 text-sm text-white/40  sm:pl-3">
                      {order.firstItem} + {order.items.length - 1}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-white/40">
                      <Badge
                        variant="light"
                        color={
                          order.status === "pending"
                            ? "gray"
                            : order.status === "in-progress"
                            ? "blue"
                            : "green"
                        }
                      >
                        {order.status.charAt(0).toUpperCase() +
                          order.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-white/40">
                      ${order.amount}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-white/40">
                      {order.assigned}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-white/40">
                      {order.created_at}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-blue-300 underline decoration-blue-600">
                      <Link href={order.map || ""}>
                        {order.customer_address.slice(0, 20).concat("...")}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;

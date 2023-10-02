import PrimaryButton from "@/components/Button/Primary";
import LoadingPage from "@/components/Loading";
import useGetCarriers from "@/hooks/useGetCarriers";
import useGetItems from "@/hooks/useGetItems";
import { List } from "@mantine/core";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DeliveryHome = () => {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState({} as any);

  useEffect(() => {
    if (!id) {
      return;
    }

    const getOrder = async () => {
      const res = await axios.get(
        `https://civilian-blue.cmd.outerbase.io/get-order-by-id?id=${id}`
      );
      setOrder(res.data.response.items[0]);
    };

    getOrder();
  }, [id]);

  const { data, isLoading, isError } = useGetItems();
  const {
    data: carriers,
    isLoading: isLoadingCarriers,
    isError: isErrorCarriers,
  } = useGetCarriers();

  if (isLoading || isLoadingCarriers || !order) return <LoadingPage />;

  console.log(order, carriers, data);

  // count the same items in an array
  const orderItems = order.items?.map((item: string) => {
    const count = order.items.filter((i: string) => i === item).length;
    const name = data.response.items.find((i: any) => i.id === item)?.name;
    return { item: name, count };
  });

  const updateOrder = async (status: string) => {
    const assignedCarrier = carriers.response.items.find(
      (c: any) => c.id === order.assigned
    );
    console.log(assignedCarrier);
    if (status === "pending") {
      await axios({
        method: "post",
        url: "https://civilian-blue.cmd.outerbase.io/update-order",
        data: {
          order_id: order.id,
          order_status: "in-progress",
          carrier_id: assignedCarrier.id,
          carrier_status: "out",
          carrier_completedorder: String(assignedCarrier.completedorders),
        },
      });
    } else if (status === "in-progress") {
      await axios({
        method: "post",
        url: "https://civilian-blue.cmd.outerbase.io/update-order",
        data: {
          order_id: order.id,
          order_status: "completed",
          carrier_id: assignedCarrier.id,
          carrier_status: "available",
          carrier_completedorder: String(assignedCarrier.completedorders + 1),
        },
      });
    }

    router.reload();
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-row justify-center items-center overflow-hidden">
      <section className="flex flex-col items-center justify-start w-96 h-auto py-12 px-6 overflow-y-auto bg-[#121212] rounded-xl">
        <h1 className="font-black text-3xl">Order #{order.id}</h1>
        <div className="w-[10%] h-[1px] bg-white/10 my-2" />
        <div className="w-full flex flex-col justify-start items-start">
          <h3 className="font-semibold text-xl text-blue-400">Order Summary</h3>
          <ol className="list-decimal list-inside w-full divide-y-[1px] divide-slate-800 flex flex-col">
            {orderItems?.map((item: any, index: number) => {
              return (
                <li key={index} className="w-full justify-between flex py-1">
                  {item.item}{" "}
                  <span className="text-right text-white/40">{item.count}</span>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="w-full flex flex-col justify-start items-start py-2">
          <h3 className="font-semibold text-xl text-blue-400 pb-1">
            Contact Info
          </h3>
          <div className="w-full flex flex-col gap-1">
            <p>
              <span className="font-semibold">Name: </span>
              <span className="text-white/40">{order.customer_name}</span>
            </p>
            <p>
              <span className="font-semibold">Email: </span>
              <span className="text-white/40">
                {order.customer_email || "N/A"}
              </span>{" "}
            </p>
            <p>
              <span className="font-semibold">Address: </span>
              <span className="text-white/40">
                {order.customer_address || "N/A"}
              </span>{" "}
            </p>
          </div>
          <div className="w-full flex flex-col justify-start items-start py-2">
            <h3 className="font-semibold text-xl text-blue-400 pb-1">
              Amount: <span className="text-white/40">${order.amount}</span>
            </h3>
          </div>
          {order.status !== "completed" ? (
            <button
              type="button"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 w-full mt-6 mb-3"
              onClick={() => updateOrder(order.status)}
            >
              {order.status === "pending"
                ? "Order Picked Up"
                : "Order Delivered"}
            </button>
          ) : (
            <button
              type="button"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 w-full mt-6 mb-3"
            >
              {"Order Completed"}
            </button>
          )}
          <Link
            href={order.map || ""}
            className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 w-full  mb-1 text-center"
          >
            {"Open Google Map"}
          </Link>
        </div>
      </section>
    </div>
  );
};

// Path: src/pages/delivery/index.tsx
export default DeliveryHome;

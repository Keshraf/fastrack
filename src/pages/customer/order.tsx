import FoodCard, { type Food } from "@/components/Cards/Food";
import LoadingPage from "@/components/Loading";
import useGetItems from "@/hooks/useGetItems";
import { Autocomplete, Modal } from "@mantine/core";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

type Item = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

type Result = {
  value: string;
  id: string;
};

const CustomerOrderPage = () => {
  const [opened, setOpened] = useState(false);
  const { data, isLoading, isError } = useGetItems();
  const [results, setResults] = useState<Result[]>([]);
  const [choice, setChoice] = useState<Result>();
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [items, setItems] = useState<Item[]>([]); // [{id: 1, quantity: 2}, {id: 2, quantity: 3}]

  if (isLoading) return <LoadingPage />;

  const catalog = data?.response?.items.map((item: any) => {
    return {
      buttonText: "Add",
      ...item,
    };
  });

  const searchPlace = async (q: string) => {
    try {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/api/searchPlace?q=${q}`,
      });

      console.log(response.data.predictions);
      setResults(
        response.data.predictions.map((place: any) => {
          return {
            value: place.description,
            id: place.place_id,
          };
        })
      );
    } catch (error) {
      console.error("Error searching for place", error);
    }
  };

  const addItems = (id: number) => {
    console.log(items);
    const item = items.find((item) => item.id === id);
    const info = catalog.find((item: Food) => item.id === id);
    if (item) {
      item.quantity += 1;
      setItems([...items]);
    } else {
      setItems([
        ...items,
        { id, quantity: 1, price: info.price, name: info.name },
      ]);
    }
  };

  const getMap = async (id: string) => {
    try {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/api/getMapLink?q=${id}`,
      });

      console.log(response.data);

      return response.data.result.url;
    } catch (error) {
      console.error("Error searching for place", error);
    }
  };

  const placeOrder = async () => {
    console.log(name, email, items, choice);

    if (!name || !email || !items || !choice) {
      toast.error("Please fill all the fields!");
      return;
    }

    const finalItems: number[] = items
      .map((item) => new Array(item.quantity).fill(item.id))
      .flat();

    const map: string = await getMap(choice.id);

    await axios({
      method: "post",
      url: "https://civilian-blue.cmd.outerbase.io/place-order",
      data: {
        customerName: name,
        customerAddress: choice?.value,
        items: finalItems,
        amount: items.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2),
        customerEmail: email,
        map,
        status: "pending",
      },
    })
      .then((res) => {
        toast.success("Order placed successfully!");
        setOpened(false);
      })
      .catch((err) => {
        toast.error("Error placing order!");
      });
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        withCloseButton={false}
        styles={{
          header: { backgroundColor: "#121212" },
          body: { backgroundColor: "#121212" },
        }}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-white/70"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-[#1e1e1e] text-white/70 px-3"
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-white/70"
          >
            Email Address
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-[#1e1e1e] text-white/70 px-3"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-white/70"
            >
              Address
            </label>
            <div className="mt-2">
              <Autocomplete
                type="text"
                name="address"
                id="address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-[#1e1e1e] text-white/70 px-3"
                placeholder="Search"
                onChange={(value) => {
                  searchPlace(value);
                  setSearch(value);
                }}
                onOptionSubmit={(value) => {
                  setChoice(results.find((result) => result.value === value));
                }}
                data={results.map((result) => result.value)}
                styles={{
                  input: {
                    backgroundColor: "#1e1e1e",
                    color: "white",
                    border: "none",
                  },
                  dropdown: {
                    backgroundColor: "#1e1e1e",
                    color: "white",
                    border: "none",
                  },
                  option: {
                    backgroundColor: "#1e1e1e",
                    color: "white",
                    border: "none",
                  },
                  options: {
                    backgroundColor: "#1e1e1e",
                    color: "white",
                    border: "none",
                  },
                }}
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start mt-6">
            <h3 className="font-semibold text-xl text-blue-400">
              Order Summary
            </h3>
            <ol className="list-decimal list-inside w-full divide-y-[1px] divide-slate-800 flex flex-col">
              {items.map((item) => {
                return (
                  <li
                    className="w-full justify-between flex py-1"
                    key={item.id}
                  >
                    {catalog.find((a: Food) => a.id === item.id).name}{" "}
                    <span className="text-right text-white/40">
                      {item.quantity} X {item.price}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
          <h3 className="font-semibold text-xl text-blue-400 my-2">
            Total Cost: ${items.reduce((a, b) => a + b.price * b.quantity, 0)}
          </h3>
          <button
            type="button"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 w-full mt-6 mb-3"
            onClick={() => {
              placeOrder();
            }}
          >
            {"Place Order"}
          </button>
        </div>
      </Modal>
      <div className="relative flex h-auto min-h-screen w-full flex-col justify-start items-start overflow-hidden p-9">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-black text-3xl w-fit">Place your Order</h1>
          <button
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 w-40 mt-6 mb-3"
            onClick={() => setOpened(true)}
          >
            {"Checkout"}
          </button>
        </div>
        <section className="w-full py-6 grid grid-cols-4 grid-flow-row gap-4">
          {catalog.map((food: Food, index: number) => {
            return <FoodCard key={index} {...food} onClick={addItems} />;
          })}
        </section>
      </div>
    </>
  );
};

export default CustomerOrderPage;

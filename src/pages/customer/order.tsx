import FoodCard, { type Food } from "@/components/Cards/Food";
import { Drawer, Input, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const catalog: Food[] = [
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description:
      "It is a very good burger. It is made using the best ingredients.",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
    buttonText: "Add",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description:
      "It is a very good burger. It is made using the best ingredients.",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
    buttonText: "Add",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description:
      "It is a very good burger. It is made using the best ingredients.",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
    buttonText: "Add",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description:
      "It is a very good burger. It is made using the best ingredients.",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
    buttonText: "Add",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description:
      "It is a very good burger. It is made using the best ingredients.",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
    buttonText: "Add",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description:
      "It is a very good burger. It is made using the best ingredients.",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
    buttonText: "Add",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description:
      "It is a very good burger. It is made using the best ingredients.",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
    buttonText: "Add",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description:
      "It is a very good burger. It is made using the best ingredients.",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
    buttonText: "Add",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description:
      "It is a very good burger. It is made using the best ingredients.",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
    buttonText: "Add",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description:
      "It is a very good burger. It is made using the best ingredients.",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
    buttonText: "Add",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description:
      "It is a very good burger. It is made using the best ingredients.",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
    buttonText: "Add",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description:
      "It is a very good burger. It is made using the best ingredients.",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
    buttonText: "Add",
  },
];

const CustomerOrderPage = () => {
  const [opened, setOpened] = useState(false);

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
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="mobile"
            className="block text-sm font-medium leading-6 text-white/70"
          >
            Phone Number
          </label>
          <div className="mt-2">
            <input
              type="tel"
              name="mobile"
              id="mobile"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-[#1e1e1e] text-white/70 px-3"
              placeholder="+1 123 456 7890"
            />
          </div>
          <div className="w-full flex flex-col justify-start items-start mt-6">
            <h3 className="font-semibold text-xl text-blue-400">
              Order Summary
            </h3>
            <ol className="list-decimal list-inside w-full divide-y-[1px] divide-slate-800 flex flex-col">
              <li className="w-full justify-between flex py-1">
                Pizza <span className="text-right text-white/40">2</span>
              </li>
              <li className="w-full justify-between flex py-1">
                Burger <span className="text-right text-white/40">2</span>
              </li>
              <li className="w-full justify-between flex py-1">
                Fries <span className="text-right text-white/40">2</span>
              </li>
            </ol>
          </div>
          <h3 className="font-semibold text-xl text-blue-400 my-2">
            Total Cost: $123
          </h3>
          <button
            type="button"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 w-full mt-6 mb-3"
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
          {catalog.map((food, index) => {
            return <FoodCard key={index} {...food} />;
          })}
        </section>
      </div>
    </>
  );
};

export default CustomerOrderPage;

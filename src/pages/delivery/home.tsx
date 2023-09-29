import PrimaryButton from "@/components/Button/Primary";
import { List } from "@mantine/core";

const DeliveryHome = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-row justify-center items-center overflow-hidden">
      <section className="flex flex-col items-center justify-start w-96 h-auto py-12 px-6 overflow-y-auto bg-[#121212] rounded-xl">
        <h1 className="font-black text-3xl">Order #123</h1>
        <div className="w-[10%] h-[1px] bg-white/10 my-2" />
        <div className="w-full flex flex-col justify-start items-start">
          <h3 className="font-semibold text-xl text-blue-400">Order Summary</h3>
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
        <div className="w-full flex flex-col justify-start items-start py-2">
          <h3 className="font-semibold text-xl text-blue-400 pb-1">
            Contact Info
          </h3>
          <div className="w-full flex flex-col gap-1">
            <p>
              <span className="font-semibold">Name: </span>
              <span className="text-white/40">John Doe</span>
            </p>
            <p>
              <span className="font-semibold">Phone: </span>
              <span className="text-white/40">+1 1234567890</span>{" "}
            </p>
          </div>
          <button
            type="button"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 w-full mt-6 mb-3"
          >
            {"Order Picked Up"}
          </button>
          <button
            type="button"
            className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 w-full  mb-1"
          >
            {"Open Google Map"}
          </button>
        </div>
      </section>
    </div>
  );
};

// Path: src/pages/delivery/index.tsx
export default DeliveryHome;

import OrderTable from "@/components/Table/Order";

const DashboardOrders = () => {
  return (
    <section className="flex flex-col items-start justify-start w-full h-screen p-9 overflow-y-auto">
      <h1 className="text-3xl font-bold text-center text-white-700">Orders</h1>
      <h3 className="text-md text-center text-white/20">
        {new Date().toDateString().slice(4).slice(0, -5) +
          ` - ` +
          new Date().toTimeString().slice(0, 5)}
      </h3>
      <section className="w-full">
        <OrderTable />
      </section>
    </section>
  );
};

DashboardOrders.sideNav = true;

export default DashboardOrders;

import CarriersTable from "@/components/Table/Carriers";

const DashboardCarriers = () => {
  return (
    <section className="flex flex-col items-start justify-start w-full h-screen p-9 overflow-y-auto">
      <h1 className="text-3xl font-bold text-center text-white-700">
        Carriers
      </h1>
      <h3 className="text-md text-center text-white/20">
        {"256 Employed" + ` - ` + "20 Available"}
      </h3>
      <section className="w-full">
        <CarriersTable />
      </section>
    </section>
  );
};

DashboardCarriers.sideNav = true;

export default DashboardCarriers;

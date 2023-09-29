import CardHeading from "@/components/Cards/Heading";
import Stats, { type Stat } from "@/components/Cards/Stats";
import ChartLine from "@/components/Charts/Line";
import Feed from "@/components/Feed";

const DashboardHome = () => {
  const orderStats: Stat[] = [
    { name: "Pending", value: "405" },
    { name: "In-Progress", value: "365" },
    { name: "Completed", value: "300" },
  ];
  const personnelStats: Stat[] = [
    { name: "Absent", value: "20" },
    { name: "Available", value: "200" },
    { name: "Delivery", value: "500" },
  ];
  return (
    <section className="flex flex-col items-start justify-start w-full h-screen p-9 overflow-y-auto">
      <h1 className="text-3xl font-bold text-center text-white-700">
        Dashboard
      </h1>
      <h3 className="text-md text-center text-white/20">
        {new Date().toDateString().slice(4).slice(0, -5) +
          ` - ` +
          new Date().toTimeString().slice(0, 5)}
      </h3>
      <section className="mt-8 w-full grid auto-rows-auto grid-cols-6 grid-flow-rows gap-4">
        <div className="col-span-3 flex flex-col gap-4">
          <CardHeading text="Order Status" />
          <Stats data={orderStats} />
        </div>
        <div className="col-span-3 flex flex-col gap-4">
          <CardHeading text="Personnel Status" />
          <Stats data={personnelStats} />
        </div>
        <div className="col-span-4 flex flex-col gap-4">
          <CardHeading text="Insights" />
          <ChartLine />
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <CardHeading text="Order Feed" />
          <Feed />
        </div>
      </section>
    </section>
  );
};

DashboardHome.sideNav = true;

export default DashboardHome;

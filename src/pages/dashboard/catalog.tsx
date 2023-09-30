import FoodCard, { Food } from "@/components/Cards/Food";
import LoadingPage from "@/components/Loading";
import useGetItems from "@/hooks/useGetItems";

const DashboardCatalog = () => {
  const { data, isLoading, isError } = useGetItems();

  if (isLoading) return <LoadingPage />;

  const catalog = data?.response?.items;

  return (
    <section className="flex flex-col items-start justify-start w-full h-screen p-9 overflow-y-auto">
      <h1 className="text-3xl font-bold text-center text-white-700">Catalog</h1>
      <h3 className="text-md text-center text-white/20">
        {catalog.length} Items
      </h3>
      <section className="w-full py-6 grid grid-cols-4 grid-flow-row gap-4">
        {catalog.map((food: Food, index: number) => {
          return <FoodCard key={index} {...food} />;
        })}
      </section>
    </section>
  );
};

DashboardCatalog.sideNav = true;

export default DashboardCatalog;

const DashboardCatalog = () => {
  return (
    <section className="flex flex-col items-start justify-start w-full h-screen p-9 overflow-y-auto">
      <h1 className="text-3xl font-bold text-center text-white-700">Catalog</h1>
      <h3 className="text-md text-center text-white/20">{"100 Items"}</h3>
      <section className="w-full"></section>
    </section>
  );
};

DashboardCatalog.sideNav = true;

export default DashboardCatalog;

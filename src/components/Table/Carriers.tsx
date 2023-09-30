import { cn } from "@/utils/cn";

export type Carrier = {
  id: string;
  name: string;
  status: "available" | "out" | "absent";
  completedorders: number;
};

const CarriersTable = ({ carriers }: { carriers: Carrier[] }) => {
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
                    Id
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-blue-400"
                  >
                    Name
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
                    Completed
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-blue-400"
                  >
                    Address
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Select</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#121212] bg-transparent">
                {carriers.map((carrier, index) => (
                  <tr
                    className={cn("", {
                      "bg-[#121212] bg-opacity-75": index % 2 !== 0,
                      "bg-[#0D0D0D]": index % 2 !== 0,
                    })}
                    key={carrier.id}
                  >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white/60 sm:pl-6">
                      {carrier.id}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-3 pr-3 text-sm text-white/40  sm:pl-3">
                      {carrier.name}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-3 pr-3 text-sm text-white/40  sm:pl-3">
                      <span
                        className={cn(
                          "inline-flex items-center rounded-md bg-green-400 px-2 py-1 text-xs font-medium text-green-800 ring-1 ring-inset ring-green-600/20 w-20 h-6 justify-center",
                          {
                            "bg-green-400/70 text-green-800 ring-green-600/20":
                              carrier.status === "available",
                            "bg-orange-400/70 text-orange-800 ring-orange-600/20":
                              carrier.status === "out",
                            "bg-gray-400/70 text-gray-800 ring-gray-600/20":
                              carrier.status === "absent",
                          }
                        )}
                      >
                        {carrier.status.charAt(0).toUpperCase() +
                          carrier.status.slice(1)}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-white/40">
                      {carrier.completedorders}
                    </td>
                    <td
                      className={cn(
                        index === 0 ? "" : "border-t border-transparent",
                        "relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                      )}
                    >
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-blue-500 px-2.5 py-1.5 text-sm font-semibold text-blue-300 shadow-sm ring-1 ring-inset  hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-30"
                        disabled={carrier.status !== "out"}
                      >
                        Track
                        {/* <span className="sr-only">, {plan.name}</span> */}
                      </button>
                      {index !== 0 ? (
                        <div className="absolute -top-px left-0 right-6 h-px bg-[#121212]" />
                      ) : null}
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

export default CarriersTable;

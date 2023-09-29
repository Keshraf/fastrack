export type Stat = {
  name: string;
  value: string;
  unit?: string;
};

type Props = {
  data: Stat[];
};

export default function Stats({ data = [] }: Props) {
  return (
    <div className="overflow-hidden rounded-xl w-full">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((stat) => (
            <div
              key={stat.name}
              className="bg-[#121212] px-4 py-6 sm:px-6 lg:px-8"
            >
              <p className="text-sm font-medium leading-6 text-blue-300">
                {stat.name}
              </p>
              <p className="mt-2 flex items-baseline gap-x-2">
                <span className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </span>
                {stat.unit ? (
                  <span className="text-sm text-gray-400">{stat.unit}</span>
                ) : null}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

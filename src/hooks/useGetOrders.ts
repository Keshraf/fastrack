import useSWR, { useSWRConfig } from "swr";

const useGetOrders = () => {
  const fetcher = async () => {
    return fetch("https://civilian-blue.cmd.outerbase.io/get-orders").then(
      (res) => {
        return res.json();
      }
    );
  };

  const { data, error, isLoading, isValidating, mutate } = useSWR(
    "/api/get-orders",
    fetcher
  );

  return {
    data,
    isLoading,
    isError: error,
    isValidating,
  };
};

export default useGetOrders;

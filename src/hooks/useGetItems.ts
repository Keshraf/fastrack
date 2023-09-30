import useSWR, { useSWRConfig } from "swr";

const useGetItems = () => {
  const fetcher = async () => {
    return fetch("https://civilian-blue.cmd.outerbase.io/get-items").then(
      (res) => {
        return res.json();
      }
    );
  };

  const { data, error, isLoading, isValidating, mutate } = useSWR(
    "/api/get-items",
    fetcher
  );

  return {
    data,
    isLoading,
    isError: error,
    isValidating,
  };
};

export default useGetItems;

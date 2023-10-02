import useSWR, { useSWRConfig } from "swr";

const useGetCarriers = () => {
  const fetcher = async () => {
    return fetch("https://civilian-blue.cmd.outerbase.io/get-carriers").then(
      (res) => {
        return res.json();
      }
    );
  };

  const { data, error, isLoading, isValidating, mutate } = useSWR(
    "/api/get-carriers",
    fetcher
  );

  return {
    data,
    isLoading,
    isError: error,
    isValidating,
  };
};

export default useGetCarriers;

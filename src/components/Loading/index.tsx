import { Loader } from "@mantine/core";

const LoadingPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Loader color="blue" type="bars" />
    </div>
  );
};

export default LoadingPage;

import AuthForm from "@/components/Form/AuthForm";
import Image from "next/image";

const LoginPage = () => {
  return (
    <section className="bg-white w-full h-screen max-h-screen flex flex-row justify-end items-center ">
      <Image
        className="absolute left-0 bottom-0 z-10"
        src={"/bike-rider.svg"}
        width={500}
        height={500}
        alt="Bike Rider"
      />
      <Image
        className="absolute left-0 bottom-[-50px] z-0"
        src={"/wave.svg"}
        width={2400}
        height={700}
        alt="Bike Rider"
      />
      <div className="z-10 mr-32 h-3/5">
        <AuthForm />
      </div>
    </section>
  );
};

export default LoginPage;

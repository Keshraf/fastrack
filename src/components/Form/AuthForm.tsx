import { useState } from "react";

import SecondaryButton from "../Button/Secondary";
import PrimaryButton from "../Button/Primary";
import { EmailInput, PasswordInput } from "./Input";
import { Switch } from "@mantine/core";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="w-80 h-auto px-8 py-14 bg-white/80 border border-gray-300 rounded-xl flex flex-col justify-center items-center gap-2">
      <h3 className="text-black text-[40px]">Hello Again!</h3>
      {/* <Switch size="xl" onLabel="ON" offLabel="OFF" /> */}
      <EmailInput />
      <PasswordInput />
      <div className="flex flex-row justify-around w-full mt-6">
        <PrimaryButton text="Log in" />
        <SecondaryButton text="Sign Up" />
      </div>
    </section>
  );
};

export default AuthForm;

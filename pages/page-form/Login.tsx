import React from "react";
import Link from "next/link";
import Form from "./form/Form";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { useForm, FormProvider } from "react-hook-form";
import { loginState } from "../recoilstate";

export default function Login() {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const router = useRouter();
  const onSubmit = (data: any) => {
    if (!(Boolean(errors.password) || Boolean(errors.email))) {
      setIsLogin(true);
      router.push({
        pathname: "../profile/Profile",
      });
    }
  };
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-72 p-2 justify-evenly rounded-md border-2 bg-gray-100"
        >
          <Form />
          <input
            type="submit"
            value="Sign in"
            className=" border-2 border-green-500 rounded-md mx-auto mt-7 mb-3 px-10 bg-green-600 transition-all duration-200 hover:bg-green-700 text-white cursor-pointer"
          />
        </form>
      </FormProvider>
      <div className="flex justify-center items-center m-5 px-3 border-2 border-gray-300 w-72 h-14 rounded-md ">
        New to page?dsa
        <Link href="Signup">
          <button className=" border-2 border-gray-500 rounded-md mx-3 px-3 transition-all duration-200 hover:bg-stone-500 hover:text-white">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

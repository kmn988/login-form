import React from "react";
import Link from "next/link";
import Form from "./form/Form";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useForm, FormProvider } from "react-hook-form";
import { loginState, countValue } from "../recoilstate";
import db from "../firebase/clientApp";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [count, setCount] = useRecoilState(countValue);
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const router = useRouter();
  const onSubmit = async (data: any) => {
    setCount(count + 1);
    if (!(Boolean(errors.password) || Boolean(errors.email))) {
      await setDoc(doc(db, "users", "user" + count), {
        username: data.email,
        password: data.password,
      });

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
          <Form username={true} />
          <input
            type="submit"
            value="Sign up"
            className=" border-2 border-green-500 rounded-md mx-auto mt-7 mb-3 px-10 bg-green-600 transition-all duration-200 hover:bg-green-700 text-white cursor-pointer"
          />
        </form>
      </FormProvider>

      <Link href="/">
        <button className=" border-2 border-black rounded-md m-7 px-3 transition-all duration-200 hover:bg-stone-500 hover:text-white">
          Back to home page
        </button>
      </Link>
    </div>
  );
}

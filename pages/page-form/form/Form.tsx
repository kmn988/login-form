import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Error from "../error message/Error";

export default function Form({ isLogin, value, username }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    if (!(Boolean(errors.password) || Boolean(errors.email))) {

      await router.push({
        pathname: "../profile/Profile",
        query: { isLogin },
      });
    }
    // console.log( setIsLogin());
  };


  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-72 p-2 justify-evenly rounded-md border-2 bg-gray-100"
      >
        <label className="my-1 mx-2">Username or email address</label>
        <input
          placeholder="abc@gmail.com"
          {...register("email", { required: true })}
          className="border-2 border-gray-300 rounded-lg px-3 my-1 mx-2"
        />
        {errors.email && <Error />}

        <label className="my-1 mx-2">Password</label>
        <input
          {...register("password", { required: true })}
          type="password"
          className="border-2 border-gray-300 rounded-lg px-3 my-1 mx-2 "
        />
        {errors.password && <Error />}

        {/* Username for sign up */}
        {username && (
          <>
            <label className="my-1 mx-2">Username</label>
            <input
              {...register("username", { required: true })}
              type="text"
              className="border-2 border-gray-300 rounded-lg px-3 my-1 mx-2 "
            />
            {errors.username && <Error />}
          </>
        )}

        <input
          type="submit"
          value={value}
          className=" border-2 border-green-500 rounded-md mx-auto mt-7 mb-3 px-10 bg-green-600 transition-all duration-200 hover:bg-green-700 text-white cursor-pointer"
        />
      </form>
    </div>
  );
}

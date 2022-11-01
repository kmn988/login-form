import React, { useState } from "react";
import Error from "../error message/Error";
import { useFormContext } from "react-hook-form";

export default function Form({ username }: any) {
  // const [isLogin, setIsLogin] = useLocalStorage("isLogin", false);
  const methods = useFormContext();

  return (
    <div>
      <label className="my-1 mx-2">Username or email address</label>
      <input
        placeholder="abc@gmail.com"
        {...methods.register("email", {
          required: true,
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        })}
        // onChange={(e) => {
        //   methods.setError("email", {
        //     message: "This is not an email",
        //   });
        // }}
        className="border-2 border-gray-300 rounded-lg px-3 my-1 mx-2"
      />
      {methods.formState.errors.email && (
        <Error error={methods.formState.errors.email} />
      )}

      <label className="my-1 mx-2">Password</label>
      <input
        {...methods.register("password", { required: true })}
        type="password"
        className="border-2 border-gray-300 rounded-lg px-3 my-1 mx-2 "
      />
      {methods.formState.errors.password && <Error />}

      {/* Username for sign up */}
      {username && (
        <>
          <label className="my-1 mx-2">Username</label>
          <input
            {...methods.register("username", { required: true })}
            type="text"
            className="border-2 border-gray-300 rounded-lg px-3 my-1 mx-2 "
          />
          {methods.formState.errors.username && <Error />}
        </>
      )}
    </div>
  );
}


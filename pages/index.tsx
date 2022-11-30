import React, { Fragment } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Navigation from "./navigation/Navigation";
import { loginState } from "./recoilstate";

export default function App() {
  const [value, setValue] = useRecoilState(loginState);
  console.log(value);

  return (
    <div className="flex h-screen items-center justify-center ">
      {!value && (
        <>
          <Navigation href="page-form/Login">Login</Navigation>
          <Navigation href="page-form/Signup">Sign up</Navigation>
        </>
      )}
      {value && (
        <button
          onClick={() => {
            setValue(false);
          }}
          className=" border-2 border-black rounded-md m-7 px-3 transition-all duration-200 hover:bg-stone-500 hover:text-white"
        >
          Sign outas
        </button>
      )}
    </div>
  );
}

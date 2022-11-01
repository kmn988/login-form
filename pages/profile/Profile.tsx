import React from "react";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState } from "../recoilstate";


export default function Profile() {
const isLogin = useRecoilValue(loginState)

  console.log(isLogin);

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      Profile
      <Link href="/">
        <button className=" border-2 border-black rounded-md m-7 px-3 transition-all duration-200 hover:bg-stone-500 hover:text-white">
          Back to home page
        </button>
      </Link>
    </div>
  );
}
